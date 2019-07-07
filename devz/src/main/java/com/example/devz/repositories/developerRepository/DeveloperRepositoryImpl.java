package com.example.devz.repositories.developerRepository;

import com.example.devz.models.Developer;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class DeveloperRepositoryImpl implements DeveloperRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Developer> findDevelopersBySkill(String skill){
        List<Developer> result = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Developer.class);
            cr.createAlias("skills", "skillAlias");
            cr.add(Restrictions.eq("skillAlias.skill", skill).ignoreCase());
            result = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return result;
    }

    @Override
    @Transactional
    public List<Developer> findDevelopersBySkillByLocation(String skill, String location) {
        List<Developer> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Developer.class);
            cr.createAlias("skills", "skillAlias");
            cr.add(Restrictions.eq("skillAlias.skill", skill).ignoreCase());
            cr.add(Restrictions.eq("location", location).ignoreCase());
            results = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        }

        return results;
    }


}
