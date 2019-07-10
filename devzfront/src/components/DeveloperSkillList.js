import React, {Fragment} from 'react'

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
    <Fragment>
    {skills}
    </Fragment>
    

  )
}

export default DeveloperSkillList;
