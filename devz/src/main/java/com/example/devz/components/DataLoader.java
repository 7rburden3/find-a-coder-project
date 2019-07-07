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

        Developer budgie = new Developer("James", "Budge", "Edinburgh", "JamesDBudge", "thebudgie@gmail.com");
        Developer ralph = new Developer("Ralph", "Burden", "Edinburgh", "7rburden3", "ralph@codeclan.org");
        Developer kenny = new Developer("Kenneth", "Stewart", "Edinburgh", "yossha", "kenny@omgtheykilledhim.com");
        Developer malky = new Developer("Malky", "Burns", "Edinburgh", "malkyx", "malky@groovy.com");

        Skill java = new Skill("Java");
        Skill ruby = new Skill("Ruby");
        Skill javascript = new Skill("Javascript");
        Skill sql = new Skill("SQL");
        Skill spring = new Skill("Spring");

        Project devz = new Project("Devz");
        Project stockTracker = new Project("Stock Tracker");
        Project dinosaurs = new Project("Dinosaurs");

        skillRepository.save(java);
        skillRepository.save(javascript);
        skillRepository.save(ruby);
        skillRepository.save(spring);
        skillRepository.save(sql);

        projectRepository.save(devz);
        projectRepository.save(stockTracker);
        projectRepository.save(dinosaurs);


        budgie.addSkill(sql);
        budgie.addSkill(ruby);
        budgie.addProject(devz);
        budgie.addProject(stockTracker);
        developerRepository.save(budgie);


        ralph.addSkill(sql);
        ralph.addSkill(ruby);
        ralph.addSkill(java);
        ralph.addProject(devz);
        developerRepository.save(ralph);

        kenny.addSkill(sql);
        kenny.addSkill(ruby);
        kenny.addProject(devz);
        kenny.addProject(dinosaurs);
        developerRepository.save(kenny);
        
        malky.addSkill(sql);
        malky.addSkill(ruby);
        malky.addProject(devz);
        developerRepository.save(malky);

    }

}
