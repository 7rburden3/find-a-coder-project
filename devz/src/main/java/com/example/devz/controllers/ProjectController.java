package com.example.devz.controllers;

import com.example.devz.repositories.projectRepository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @DeleteMapping(value = "/{id}")
    public void deleteProjectById(@PathVariable Long id) {
        projectRepository.deleteById(id);
    }


}
