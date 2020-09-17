import React from 'react';
import { Paper, Chip } from '@material-ui/core';
import * as skillsObj from '../../content/skills.json';

function SkillsSection() {
  const skills = skillsObj.skills;
  return (
    <Paper>
      {skills.map((skill) => (
        <Chip color="primary" key={skill.name} label={skill.name}></Chip>
      ))}
    </Paper>
  );
}

export default SkillsSection;
