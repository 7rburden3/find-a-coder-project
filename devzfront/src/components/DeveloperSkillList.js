import React from 'react'

const DeveloperSkillList = (props) => {
  console.log(props);
  const skills = props.developerSkills.map((skills, index) => {
    return (
      <div className = "developer-skill" key={index}>
              <li className="developerskill-li">
                {skills.skill}
              </li>
            </div>
    )
  })

  return (
    <ul className="developerskills-ul">
    {skills}
    </ul>

  )
}

export default DeveloperSkillList;
