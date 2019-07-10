import React, {Fragment} from 'react'

const DeveloperProjectList = (props) => {
  const projects = props.developerProjects.map((projects, index) => {
    return (
        <div class="col-md-4 mb-3 developer-project" key={index}>
          <div class="card border-0 shadow">
          <img src="https://images.unsplash.com/photo-1517423738875-5ce310acd3da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500" class="card-img-top" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title mb-0"> {projects.projectName}</h5>
              <div class="card-text text-black-50">enim ad minim veniam</div>
              </div>
            </div>
          </div>
    )
  })

  return (
    <Fragment>
    {projects}
    </Fragment>
  

  )
}

export default DeveloperProjectList;
