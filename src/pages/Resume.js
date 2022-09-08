import React, { useState } from 'react';

import resume from '../assets/resume.pdf'


const Resume = () =>{
  

  return (
    <main>
      <embed id="pdf" src={resume} width="1000" height="700"/>
    </main>
  )
}



export default Resume;