package com.example.devz.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "projectName")
    private String projectName;

//    @JsonIgnore
//    @OneToMany(mappedBy = "project")
//    private List<Developer> developers;

    @JsonIgnore
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "developers_projects",
            joinColumns = { @JoinColumn(
                    name= "project_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "developer_id",
                    nullable = false,
                    updatable = false)
            })
    private List<Developer> developers;

    public Project() {

    }

    public Project(String projectName) {
        this.projectName = projectName;
        this.developers = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public List<Developer> getDevelopers() {
        return developers;
    }

    public void setDevelopers(List<Developer> developers) {
        this.developers = developers;
    }

    public void addDeveloper(Developer developer) {
        this.developers.add(developer);
    }
}
