package com.example.devz.controllers;


import com.example.devz.repositories.developerRepository.DeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class DeveloperController {


    @Autowired
    private DeveloperRepository developerRepository;

}
