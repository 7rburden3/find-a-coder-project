package com.example.devz.repositories.developerRepository;

import com.example.devz.models.Developer;

import java.util.List;

public interface DeveloperRepositoryCustom {

    List<Developer> findDevelopersBySkill(String skill);


}
