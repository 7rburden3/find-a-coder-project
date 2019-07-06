package com.example.devz;

import com.example.devz.repositories.developerRepository.DeveloperRepository;
import com.example.devz.repositories.projectRepository.ProjectRepository;
import com.example.devz.repositories.skillRepository.SkillRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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


}
