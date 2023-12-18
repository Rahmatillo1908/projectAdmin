import React from 'react'
import animation from "./animation.json"
import Lottie from 'lottie-react'
const Little = () => {
  return (
    <div>
        <div className="w-25" style={{width:500}} >
        <Lottie loop={true} animationData={animation} />
        </div>
    </div>
  )
}

export default Little