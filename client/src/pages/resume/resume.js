import React, { useState } from "react";
import './resume.css'
import { Document, Page, pdfjs  } from "react-pdf";
import file from '../../APResume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = _ => {

  const [resumeState, setresumeState] = useState({
    numPages: null,
    pageNumber: 1
  })

  resumeState.onDocumentLoadSuccess = ({ numPages }) => {
    setresumeState({ ...resumeState, numPages})
  };

    return (
      <div id="resume">
        <div className="container" id="resumecontainer">
          <h2 className="subtitle">Resume</h2>
          <a href={file} target = "_blank">Download Pdf</a>
                    {/* <Document
            file={file}
            onLoadSuccess={resumeState.onDocumentLoadSuccess}
          >
            <Page pageNumber={resumeState.pageNumber} width={600} />
          </Document> */}
        </div>
      </div>
    );

}

export default Resume

    

