package com.example.devz.controllers;


import com.example.devz.repositories.skillRepository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/skills")
public class SkillController {


    @Autowired
    private SkillRepository skillRepository;

    @DeleteMapping(value = "/{id}")
    public void deleteSkillById(@PathVariable Long id) {
        skillRepository.deleteById(id);
    }

}
