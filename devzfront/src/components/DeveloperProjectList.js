import React from 'react'

const DeveloperProjectList = (props) => {
  const projects = props.developerProjects.map((projects, index) => {
    return (
      <div className = "developer-project" key={index}>
              <li className="developerproject-li">
                {projects.projectName}
              </li>
            </div>
    )
  })

  return (
    <ul className="developerprojects-ul">
    {projects}
    </ul>

  )
}

export default DeveloperProjectList;
