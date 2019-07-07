package com.example.devz.repositories.skillRepository;

import com.example.devz.models.Developer;
import com.example.devz.models.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
