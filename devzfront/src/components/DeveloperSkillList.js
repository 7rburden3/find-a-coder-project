import React, {Fragment} from 'react'

const DeveloperSkillList = (props) => {
  console.log(props);

  const unique = [...new Set(props.developerSkills.map(item => item.skill))]
  console.log("Unique?",unique);

  const skills = unique.map((skill, index) => {
    return (
      <div className = "developer-skill" key={index}>
              <li className="developerskill-li">
                <h4>
                - {skill}
                </h4> 
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
