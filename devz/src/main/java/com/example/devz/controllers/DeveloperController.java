package com.example.devz.controllers;


import com.example.devz.models.Developer;
//import com.example.devz.projections.EmbedSkill;
import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.skillRepository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = "/developers")
public class DeveloperController {


    @Autowired
    private DeveloperRepository developerRepository;

    @Autowired
    private SkillRepository skillRepository;

//    @GetMapping(value = "")
//    public List<Developer> findEverthingOrNothing(@RequestParam(required = false) String skill, @RequestParam(required = false) String location) {
//        if (skill != null && location != null) {
//            return developerRepository.findDevelopersBySkillByLocation(skill, location);
//        } else if (skill != null && location == null) {
//            return developerRepository.findDevelopersBySkill(skill);
//        } else if (skill == null && location != null) {
//            return developerRepository.findDevelopersByLocationIgnoreCase(location);
//        } else {
//            return developerRepository.findAll();
//        }
//    }

//    @GetMapping
//    public List<Developer> getAllDevelopers() {
//        return developerRepository.findAll();
//    }
//
//    @GetMapping(value="/id/{id}")
//    public Optional<Developer> findDeveloperById(@PathVariable Long id){
//        return developerRepository.findDeveloperById(id);
//    }

//    @PutMapping(value = "/id")
//    public void updateDeveloperById(@PathVariable Long id) {
//        developerRepository.findById(id).save();
//    }
//
//    @DeleteMapping(value = "/{id}")
//    public void deleteDeveloperById(@PathVariable Long id) {
//        developerRepository.deleteById(id);
//    }

    @GetMapping(value = "/search/{location}")
    public List<Developer> findDeveloperByLocation(@PathVariable String location){
    return developerRepository.findDevelopersByLocationIgnoreCase(location);
    }

    @GetMapping(value= "/search/skill/{skill}")
    public List<Developer> findDeveloperBySkill(@PathVariable String skill){
        return developerRepository.findDevelopersBySkill(skill);
    }

    @GetMapping(value = "/search/{skill}/{location}")
    public List<Developer> findDevelopersBySkillByLocation(@PathVariable String skill, @PathVariable String location){      return developerRepository.findDevelopersBySkillByLocation(skill, location);
    }

    @GetMapping(value = "/daily-rate/{dailyRate}")
    public List<Developer> findDevelopersByDailyRate(@PathVariable int dailyRate){
        return developerRepository.findDevelopersByDailyRate(dailyRate);
    }

    @GetMapping(value = "/daily-rate-over/{dailyRate}")
    public List<Developer> findDevelopersByDailyRateOver(@PathVariable int dailyRate){
        return developerRepository.findDevelopersByDailyRateGreaterThan(dailyRate);
    }

}
