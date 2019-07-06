package com.example.devz.controllers;

import com.example.devz.repositories.projectRepository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;
}
