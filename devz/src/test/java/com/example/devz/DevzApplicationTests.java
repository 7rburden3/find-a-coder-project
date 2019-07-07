package com.example.devz;

import com.example.devz.models.Developer;
import com.example.devz.models.Project;
import com.example.devz.models.Skill;
import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.projectRepository.ProjectRepository;
import com.example.devz.repositories.skillRepository.SkillRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DevzApplicationTests {

	@Autowired
	DeveloperRepository developerRepository;

	@Autowired
	SkillRepository skillRepository;

	@Autowired
	ProjectRepository projectRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void yo() {

	}

	@Test
	public void canFindAllDevs() {
		List<Developer> countOfDevelopers = developerRepository.findAll();
		assertEquals(4, countOfDevelopers.size());
	}

	@Test
	public void canFindAllSkills() {
		List<Skill> countOfSkills = skillRepository.findAll();
		assertEquals(5, countOfSkills.size());
	}

	@Test
	public void canFindAllProjects() {
		List<Project> countOfProjects = projectRepository.findAll();
		assertEquals(3, countOfProjects.size());
	}

	@Test
	public void canFindAllDevelopersByLocationEdinburgh() {
		List<Developer> countOfDevelopers = developerRepository.findDevelopersByLocation("Edinburgh");
		assertEquals(4, countOfDevelopers.size());
	}

	@Test
	public void canCountAllDevelopersBySkillRuby() {
//		int countOfDevelopers = developerRepository.countDevelopersBySkill(3L);
//		assertEquals(4, countOfDevelopers);
	}
}
