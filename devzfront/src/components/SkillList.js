import React from 'react';

const SkillList = (props) => {
  
// SKILL LIST WITH DUMMY DELETE BUTTON
  // const skills = props.allSkills.map((skill,index) => {
  //   return (
  //     <div className = "skill-list" key={index}>
  //       <li className="skill-li">
  //         {skill.skill}
  //         <button className="delete-button" >Delete</button>
  //       </li>
  //     </div>
  //   )
  // })

  
// DevzContainer passes deleteSkill as the property onSkillDelete to/on SkillList
  // new function to handle button click to delete skill
  function handleSkillDelete(event) {
    const skillId = parseInt(event.target.value);
    props.onSkillDelete(skillId);
  };

  // // SKILL LIST WITH NEW DELETE BUTTON
//   // <button className="delete-button" onClick={handleSkillDelete(index)}>Delete</button>
  const skills = props.allSkills.map((skill,index) => {
    return (
      <div className = "skill-list " key={index}>
        <li className="skill-li">
          {skill.skill}
        </li>
        <button className="delete-button btn-sm btn-outline-danger" value={skill.id} onClick={handleSkillDelete}>Delete</button>
      </div>
    )
  })

  return (
    <div className="row">
      <div className="col-md-6  mb-6 skill-list">
      <ul className="skills-ul">
        {skills}
      </ul>
      </div>
    </div>

  )
};

export default SkillList;
