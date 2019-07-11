import React from 'react';

const ProjectList = (props) => {

// PROJECT LIST WITH DUMMY DELETE BUTTON
//     const projects = props.allProjects.map((project, index) =>{
//    return (
//        <div className="project-list-item" key={index}>
//             <li>
//                <p>{project.projectName}
//                    <button id="delete-project">Delete</button>
//                 </p>
//             </li>
//         </div>
//     )
//     })

// DevzContainer passes deleteProject as the property onProjectDelete to/on ProjectList
  // new function to handle button click to delete project
  function handleProjectDelete(event) {
    const projectId = parseInt(event.target.value);
    props.onProjectDelete(projectId);
  };

// PROJECT LIST WITH NEW DELETE BUTTON
//   // <button className="delete-button" onClick={handleProjectDelete(index)}>Delete</button>
    const projects = props.allProjects.map((project, index) =>{
   return (
       <div className="project-list-item" key={index}>
            <li>
               <p>{project.projectName}
               <button className="delete-button" value={project.id} onClick={handleProjectDelete}>Delete</button>
                </p>
            </li>
        </div>
    )
    })


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6  mb-6 skill-list">
                        <ul className="projects-list">
                            {projects}
                        </ul>
                     </div>
                </div>
            </div>
        )
    }


export default ProjectList;