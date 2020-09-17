import React, { Component } from 'react';

import Link from 'next/link';
import content from '../content/home.md';
import SkillsSection from '../components/skills-section';

export default class Home extends Component {
  render() {
    const { attributes, html } = content;
    return (
      <React.Fragment>
        <h1>{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <SkillsSection></SkillsSection>
        <style jsx>{`
          h1,
          div {
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
