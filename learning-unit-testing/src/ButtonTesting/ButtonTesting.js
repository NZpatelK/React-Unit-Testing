import React from 'react'

function ButtonTesting(prop) {
  return (
    <div>
        <button disabled = {prop.disabled} data-testid="buttonValue"/>
    </div>
  )
}

export default ButtonTesting