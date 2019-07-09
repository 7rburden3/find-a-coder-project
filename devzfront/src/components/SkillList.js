import React from 'react'

const SkillList = (props) => {
  //console.log(props);
  const skills = props.allSkills.map((skill,index) => {
    return (
      <div className = "skill-list" key={index}>
        <li className="skill-li">
          {skill.skill}
          <button>delete</button>
        </li>
      </div>
    )
  })

  return (
    <ul className="skills-ul">
    {skills}
    </ul>

  )
}

export default SkillList
