package com.example.devz.controllers;


import com.example.devz.models.Developer;
import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.skillRepository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/developers")
public class DeveloperController {


    @Autowired
    private DeveloperRepository developerRepository;

    @Autowired
    private SkillRepository skillRepository;


    @GetMapping(value = "/location/{location}")
    public List<Developer> findDeveloperByLocation(@PathVariable String location){
    return developerRepository.findDevelopersByLocationIgnoreCase(location);
    }

    @GetMapping(value= "/skills/skill/{skill}")
    public List<Developer> findDeveloperBySkill(@PathVariable String skill){
        return developerRepository.findDevelopersBySkill(skill);
    }

    @GetMapping(value = "/{skill}/{location}")
    public List<Developer> findDevelopersBySkillByLocation(@PathVariable String skill, @PathVariable String location){      return developerRepository.findDevelopersBySkillByLocation(skill, location);
    }

}
