package com.example.devz.components;

import com.example.devz.models.Developer;
import com.example.devz.models.Skill;
import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.skillRepository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DeveloperRepository developerRepository;

    @Autowired
    SkillRepository skillRepository;


    public void run(ApplicationArguments args) {

        Developer budgie = new Developer("James", "Budge", "Edinburgh", "JamesDBudge", "thebudgie@gmail.com");
        Developer ralph = new Developer("Ralph", "Burden", "Edinburgh", "7rburden3", "ralph@codeclan.org");
        Developer kenny = new Developer("Kenneth", "Stewart", "Edinburgh", "yossha", "kenny@omgtheykilledhim.com");
        Developer malky = new Developer("Malky", "Burns", "Edinburgh", "malkyx", "malky@groovy.com");
        Skill java = new Skill("Java");
        Skill ruby = new Skill("Ruby");
        Skill javascript = new Skill("Javascript");
        Skill sql = new Skill("SQL");
        Skill spring = new Skill("Spring");

        developerRepository.save(budgie);
        developerRepository.save(ralph);
        developerRepository.save(kenny);
        developerRepository.save(malky);

        skillRepository.save(java);
        skillRepository.save(javascript);
        skillRepository.save(ruby);
        skillRepository.save(spring);
        skillRepository.save(sql);

        sql.addDeveloper(budgie);
        skillRepository.save(sql);
        
        budgie.addSkill(ruby);
        developerRepository.save(budgie);

    }

}
