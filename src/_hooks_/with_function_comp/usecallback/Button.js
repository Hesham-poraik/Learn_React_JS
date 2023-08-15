import React, { useRef } from 'react'

const Button = ({fun, cont, n, color}) => {
  const btnStyle = {
    margin: '10px',
    backgroundColor: color,
    padding: '10px',
    color: '#fff',
    border: 'none',
    borderRadius: '10px'
  }

  const renderRef = useRef(0);
  console.log(renderRef.current++);

  return (
    <div>
      <button style={btnStyle} onClick={() => fun(n)}>{cont}</button>
    </div>
  )
}

export default Button
