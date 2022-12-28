import React from 'react'

const SnapshotTesting = ({text}) => {
  return (
    <div data-testid= "text">
        <h1>{text}</h1>
    </div>
  )
}

export default SnapshotTesting