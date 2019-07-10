import React from 'react';

const SkillList = (props) => {
  //console.log(props);
  
  const skills = props.allSkills.map((skill,index) => {
    return (
      <div className = "skill-list" key={index}>
        <li className="skill-li">
          {skill.skill}
          <button className="delete-button" onClick={handleSkillDelete(index)}>Delete</button>
        </li>
      </div>
    )
  })

  return (
    <ul className="skills-ul">
    {skills}
    </ul>

  )
};

handleSkillDelete() {
  console.log();
  fetch(`http://localhost:8080/skills/${index}`,
      {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .catch(err => {
          console.error(err)
      })
};



export default SkillList;
