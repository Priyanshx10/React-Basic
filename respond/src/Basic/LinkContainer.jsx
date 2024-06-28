import React from 'react'
import ProfileImg from '../assets/Main.jpg'

function LinkContainer() {
    const LinkedinLink = "https://www.linkedin.com/in/priyansh10/";
    const GitHubLink = "https://github.com/Priyanshx10";
    const PortFolioLink = "https://priyansh-port-folio.vercel.app/";

  return (
    <div>
        <img src={ProfileImg} alt='Profile_Pic' height={200} width={200} />
        <button>
            <a href={LinkedinLink}>LinkedIn</a>
        </button>
        <button>
            <a href={GitHubLink}>GitHub</a>
        </button>
        <button>
            <a href={PortFolioLink}>PortFolio</a>
        </button>
    </div>
  )
}

export default LinkContainer 
