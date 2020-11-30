import React, { useState, useRef, useEffect } from 'react'
import './Accordion.css';


function Accordion(props) {
    const [active, setActive] = useState(props.active);
    const contentRef = useRef(null);


    useEffect(() => {
      contentRef.current.style.maxHeight = active ? `100%` : '0px';
    }, [contentRef, active]);

    const toggleActive = () => {
      setActive(!active);
    };

    const titleStyle = {
      fontWeight: 600,
      fontSize: '18px',
    };

    return (
      <div className="accordion-section">
        <button className="accordion-title" onClick={toggleActive}>
          <p style={titleStyle}>{props.title}</p>
          <span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>

          </span>
        </button>

        <div
          ref={contentRef}
          className="accordion-content"
        >
          {props.children}
        </div>
      </div>
    );
  }

export default Accordion