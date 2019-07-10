import React from 'react';

const AddProjectList = (props) => {

  function handleProjectAdd(event) {
    const projectId = parseInt(event.target.value);
    console.log("Project ID", projectId);
    props.onProjectAdd(projectId, props.id);
      
  };

  const projects = props.allProjects.map((project,index) => {
    return (
      <div className = "project-list" key={index}>
        <li className="project-li">
          {project.projectName}
          <button className="add-button" value={project.id} onClick={handleProjectAdd}>Add</button>
        </li>
      </div>
    )
  })

  return (
    <ul className="projects-ul">
      {projects}
    </ul>

  )
};

export default AddProjectList;
