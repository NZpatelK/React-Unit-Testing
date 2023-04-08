import React from 'react'


/**
 * 
 * This is display the output value
 * 
 * @param {input value to display the output} param0 
 * @returns rendered output to display the input value
 */
const TestComponent = ({text}) => {
  return (
    <div data-testid= "text">
        <h1>{text}</h1>
    </div>
  )
}

export default TestComponent