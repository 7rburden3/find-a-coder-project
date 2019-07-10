import React from 'react';

const AddSkillList = (props) => {
  
// SKILLS LIST WITH DUMMY DELETE BUTTON
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
  function handleSkillAdd(event) {
    const skillId = parseInt(event.target.value);
    console.log("Skill ID", skillId);
    props.onSkillAdd(skillId, props.id);
      
  };

  // // SKILLS LIST WITH NEW DELETE BUTTON
//   // <button className="delete-button" onClick={handleSkillDelete(index)}>Delete</button>


  const skills = props.allSkills.map((skill,index) => {
    return (
      <div className = "skill-list" key={index}>
        <li className="skill-li">
          {skill.skill}
          <button className="add-button" value={skill.id} onClick={handleSkillAdd}>Add</button>
        </li>
      </div>
    )
  })

  return (
    <ul className="skills-ul">
      {skills}
    </ul>

  )
};

export default AddSkillList;
