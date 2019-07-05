package com.example.devz.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "skill")
    private String skill;

//    @JsonIgnore
//    @ManyToOne
//    @JoinColumn(name = "developer_id", nullable = false)
//    private Developer developer;

    @JsonIgnore
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "developers_skills",
            joinColumns = { @JoinColumn(
                    name = "skill_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "developer_id",
                    nullable = false,
                    updatable = false)
            })
    private List<Developer> developers;

    public Skill() {

    }


    public Skill(String skill) {
        this.skill = skill;
        this.developers = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public List<Developer> getDevelopers() {
        return developers;
    }

    public void setDevelopers(List<Developer> developers) {
        this.developers = developers;
    }

    public void addDeveloper(Developer developer){
        this.developers.add(developer);
    }
}
