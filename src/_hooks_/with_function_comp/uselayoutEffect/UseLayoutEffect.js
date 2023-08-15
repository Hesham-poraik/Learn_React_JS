/* eslint-disable react/prop-types */
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';

const Message = ({ boxRef, children }) => {
  const msgRef = useRef(null);
  useLayoutEffect(() => { // asinc with changing state no flicking :)
    const rect = boxRef.current.getBoundingClientRect();
    setTimeout(_=> msgRef.current.style.top = `${rect.height + rect.top}px` ,500)
    
  });

  return (
    <div
      ref={msgRef}
      style={{ position: 'relative', border: '1px solid red' }}
    >
      {children}
    </div>
  );
};

export const UseLayoutEffectEx = () => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          position: 'relative',
          width: '100px',
          height: '100px',
          background: 'green',
          color: 'white',
        }}
        onClick={() => setShow((s) => !s)}
      >
        Show Message
      </div>
      {show && <Message boxRef={boxRef}>This is the floating message</Message>}
    </div>
  );
};