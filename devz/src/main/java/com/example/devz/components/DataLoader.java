package com.example.devz.components;

import com.example.devz.models.Developer;
import com.example.devz.models.Project;
import com.example.devz.models.Skill;
import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.projectRepository.ProjectRepository;
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

    @Autowired
    ProjectRepository projectRepository;


    public void run(ApplicationArguments args) {

        Project devz = new Project("Devz");
        projectRepository.save(devz);

        Developer budgie = new Developer("James", "Budge", "Edinburgh", "JamesDBudge", "thebudgie@gmail.com", devz);
        Developer ralph = new Developer("Ralph", "Burden", "Edinburgh", "7rburden3", "ralph@codeclan.org", devz);
        Developer kenny = new Developer("Kenneth", "Stewart", "Edinburgh", "yossha", "kenny@omgtheykilledhim.com", devz);
        Developer malky = new Developer("Malky", "Burns", "Edinburgh", "malkyx", "malky@groovy.com", devz);

        Skill java = new Skill("Java");
        Skill ruby = new Skill("Ruby");
        Skill javascript = new Skill("Javascript");
        Skill sql = new Skill("SQL");
        Skill spring = new Skill("Spring");




//        developerRepository.save(budgie);
//        developerRepository.save(ralph);
//        developerRepository.save(kenny);
//        developerRepository.save(malky);

        skillRepository.save(java);
        skillRepository.save(javascript);
        skillRepository.save(ruby);
        skillRepository.save(spring);
        skillRepository.save(sql);

        budgie.addSkill(sql);
        developerRepository.save(budgie);

        budgie.addSkill(ruby);
        developerRepository.save(budgie);

        ralph.addSkill(sql);
        developerRepository.save(ralph);

        ralph.addSkill(ruby);
        developerRepository.save(ralph);

        kenny.addSkill(sql);
        developerRepository.save(kenny);

        kenny.addSkill(ruby);
        developerRepository.save(kenny);

        malky.addSkill(sql);
        developerRepository.save(malky);

        malky.addSkill(ruby);
        developerRepository.save(malky);

//        devz.addDeveloper(budgie);
//        projectRepository.save(devz);

    }

}
