import React from 'react';
import '../styles/Pages.css'

export default function Resume() {
  return (
    <div className='containers mb-4'>
      <h2 className='align-text-start'>Resume</h2>
      <div className='align-text-center'>
      <ul>
        <h3>Front-End</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
      </ul>
      <ul>
          <h3>Back-End</h3>
            <li>Node</li>
            <li>Express</li>
            <li>Javascript</li>
            <li>APIs</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
      </ul>
      </div>
    </div>
  );
}
