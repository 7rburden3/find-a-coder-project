package com.example.devz.models;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="developers")
public class Developer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "location")
    private String location;

    @Column(name = "github")
    private String github;

    @Column(name = "email")
    private String email;

//    @OneToMany(mappedBy = "id", fetch=FetchType.LAZY)
//    private List<Skill> skills;



    public Developer() {

    }

    public Developer(String firstName, String lastName, String location, String github, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.github = github;
        this.email = email;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
