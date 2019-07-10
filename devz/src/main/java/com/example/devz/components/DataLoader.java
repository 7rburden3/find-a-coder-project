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

        Developer budgie = new Developer("James", "Budge", "Edinburgh", "JamesDBudge", "thebudgie@gmail.com", "Junior Developer", 500, "https://source.unsplash.com/ZI6p3i9SbVU/500x350");
        Developer ralph = new Developer("Ralph", "Burden", "Dalkeith", "7rburden3", "ralph@codeclan.org", "Senior Developer", 800, "https://source.unsplash.com/sNut2MqSmds/500x350");
        Developer kenny = new Developer("Kenneth", "Stewart", "Edinburgh", "yossha", "kenny@omgtheykilledhim.com", "Coding Guru", 1000, "https://source.unsplash.com/TMgQMXoglsM/500x350");
        Developer malky = new Developer("Malky", "Burns", "Edinburgh", "malkyx", "malky@groovy.com", "Graduate", 250, "https://source.unsplash.com/9UVmlIb0wJU/500x350");
        Developer tam = new Developer("Tam", "O'Donnell", "Muscleburgh", "ThomasHAOD", "tam@hoad.com", "Zen Coder", 3000, "https://images.unsplash.com/photo-1515518354921-44069ca6532e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500");
        Developer swatton = new Developer("James", "Swatton", "Downsouth", "JamesSwatton", "swat@hoddee.com", "Master", 2000, "https://images.unsplash.com/photo-1544703251-1bfaf9e57d3c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500");
        Developer baz = new Developer("Alex", "Bazlinton", "Cornwall", "abazlinton", "abazlinton@thebaz.com", "Super Sayan", 10000, "https://images.unsplash.com/photo-1470253267745-0160f3678150?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500");
        Developer mike = new Developer("Michael", "Forbes", "Dalkeith", "mikeyfbz", "abazlinton", "Zen Coder", 4000, "https://images.unsplash.com/photo-1553976468-dcd9082bcd28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500");


        Skill java = new Skill("Java");
        Skill ruby = new Skill("Ruby");
        Skill javascript = new Skill("Javascript");
        Skill sql = new Skill("SQL");
        Skill spring = new Skill("Spring");
        Skill cSharp = new Skill("C#");
        Skill cPlusPlus = new Skill("C++");
        Skill php = new Skill("Php");
        Skill pascal = new Skill("Pascal");
        Skill c = new Skill("C");
        Skill cypher = new Skill("Cypher");
        Skill fortran = new Skill("Fortran");
        Skill groovy = new Skill("Groovy");
        Skill perl = new Skill("Perl");
        Skill python = new Skill("Python");
        Skill swift = new Skill("Swift");
        Skill rails = new Skill("Rails");
        Skill cult = new Skill("Leading Cults");

        Project devz = new Project("Devz");
        Project stockTracker = new Project("Stock Tracker");
        Project dinosaurs = new Project("Dinosaurs");

        skillRepository.save(java);
        skillRepository.save(javascript);
        skillRepository.save(ruby);
        skillRepository.save(spring);
        skillRepository.save(sql);
        skillRepository.save(cypher);
        skillRepository.save(cSharp);
        skillRepository.save(cPlusPlus);
        skillRepository.save(php);
        skillRepository.save(pascal);
        skillRepository.save(c);
        skillRepository.save(fortran);
        skillRepository.save(groovy);
        skillRepository.save(perl);
        skillRepository.save(python);
        skillRepository.save(swift);
        skillRepository.save(rails);
        skillRepository.save(cult);

        projectRepository.save(devz);
        projectRepository.save(stockTracker);
        projectRepository.save(dinosaurs);


        budgie.addSkill(sql);
        budgie.addSkill(ruby);
        budgie.addSkill(fortran);
        budgie.addSkill(c);
        budgie.addSkill(rails);
        budgie.addSkill(swift);
        budgie.addProject(devz);
        budgie.addProject(stockTracker);
        developerRepository.save(budgie);


        ralph.addSkill(sql);
        ralph.addSkill(ruby);
        ralph.addSkill(java);
        ralph.addSkill(c);
        ralph.addSkill(cPlusPlus);
        ralph.addSkill(cSharp);
        ralph.addSkill(cypher);
        ralph.addSkill(python);
        ralph.addProject(devz);
        developerRepository.save(ralph);

        kenny.addSkill(sql);
        kenny.addSkill(ruby);
        kenny.addSkill(php);
        kenny.addSkill(perl);
        kenny.addSkill(c);
        kenny.addSkill(php);
        kenny.addProject(devz);
        kenny.addProject(dinosaurs);
        developerRepository.save(kenny);
        
        malky.addSkill(sql);
        malky.addSkill(ruby);
        malky.addSkill(java);
        malky.addSkill(javascript);
        malky.addSkill(cPlusPlus);
        malky.addSkill(cSharp);
        malky.addProject(devz);
        developerRepository.save(malky);

        baz.addSkill(cult);
        baz.addSkill(sql);
        baz.addSkill(ruby);
        baz.addSkill(java);
        baz.addSkill(javascript);
        baz.addSkill(cPlusPlus);
        baz.addSkill(cSharp);
        baz.addProject(devz);
        developerRepository.save(baz);

        developerRepository.save(tam);
        developerRepository.save(swatton);
        developerRepository.save(mike);

    }

}
