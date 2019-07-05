package com.example.devz.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "skill")
    private String skill;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "developer_id", nullable = false)
    private Developer developer;

    public Skill() {

    }


    public Skill(String skill, Developer developer) {
        this.skill = skill;
        this.developer = developer;
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
}
