package com.example.devz.repositories.developerRepository;

import com.example.devz.models.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeveloperRepository extends JpaRepository<Developer, Long> {

    List<Developer> findDevelopersByLocation(String location);


//    int countDevelopersBySkill(long skill_id);
}
