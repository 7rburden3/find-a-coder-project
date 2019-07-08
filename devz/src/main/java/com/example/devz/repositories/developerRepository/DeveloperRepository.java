package com.example.devz.repositories.developerRepository;

import com.example.devz.models.Developer;
//import com.example.devz.projections.EmbedSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@RepositoryRestResource(excerptProjection = EmbedSkill.class)
@RestResource
public interface DeveloperRepository extends JpaRepository<Developer, Long> {
      
    List<Developer> findDevelopersByLocationIgnoreCase(String location);
    List<Developer> findDevelopersBySkill(String skill);
    List<Developer> findDevelopersBySkillByLocation(String skill, String location);
    List<Developer> findDevelopersByDailyRate(int dailyRate);
    List<Developer> findDevelopersByDailyRateGreaterThan(int dailyRate);
//    Optional<Developer> findDeveloperById(Long id);


//    int countDevelopersBySkill(long skill_id);
}
