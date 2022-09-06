import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resume from '../assets/resume.pdf'


const Resume = () =>{
  const [numPages, setNumPages] = useState(2);
  // const [pageNumber, setPageNumber] = useState(1);

  const centerStyle = {
    display: 'flex'
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <main>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} style={{display:'flex'}}/>
        <Page pageNumber={2}/>
      </Document>
    </main>
  )
}



export default Resume;