import React from 'react';

const ProjectList = (props) => {
    const projects = props.allProjects.map((project, index) =>{
   return (
       <div className="project-list-item" key={index}>
            <li>
               <p>{project.projectName}
                   <button id="delete-project">Delete</button>
                </p>
            </li>
        </div>
    )
    })

        return (
            <div className="container">
                <div className="row">
                    <ul className="projects-list">
                        {projects}
                    </ul>
                </div>
            </div>
        )
    }


export default ProjectList;