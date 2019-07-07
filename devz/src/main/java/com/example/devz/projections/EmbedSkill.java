package com.example.devz.projections;


import com.example.devz.models.Developer;
import com.example.devz.models.Skill;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedSkill", types = Developer.class)
public interface EmbedSkill {
    String getFirstName();
    String getLastName();
    String getLocation();
    String getGithub();
    String getEmail();
    List<Skill> getSkills();
}
