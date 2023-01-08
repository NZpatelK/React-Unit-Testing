import React from 'react'
/*
ButtonTesting is to test the button to check if the button is disbaled or not.
prop variable has one prop is disabled value. Disabled value is boolean value 
and that value is to set button to be disabled or not. 
*/
function ButtonTesting(prop) {
  return (
    <div>
        <button disabled = {prop.disabled} data-testid="buttonValue"/>
    </div>
  )
}

export default ButtonTesting