import React from 'react'
import BabyFBX from '../components/babyFBX'


  
  const UseFBXScene = ({Screenshot}) => {

    return (
        <BabyFBX Screenshot={Screenshot}/>
    )
  }

  export default React.memo(UseFBXScene)