import * as THREE from "three"
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useThree,useFrame, useLoader} from "react-three-fiber"
import { useFBX } from '@react-three/drei/useFBX'


import {
  atom,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { RecoilRoot } from "recoil"


const BabyFBX = ({Screenshot, isCaptured = false}) => {

    const ref = useRef()
    let textures = ['crocodile','dragon', 'elephant', 'flowers', 'foil', 'freckle', 'fur1', 'fur2', 'fur3', 'giraffe1', 'giraffe2', 'hairy1', 'hairy2', 'kabk', 'leather', 'lizard', 'orange', 'pattern', 'peach', 'rhino', 'skin1', 'skin2', 'snake1', 'snake2','snake3', 'sponge', 'strawberry', 'tattoo1', 'tattoo2', 'veiny']
    const [texture, setTexture] = useState(useLoader(THREE.TextureLoader, `img/${textures[Math.round(Math.random()*20)]}.jpg`))
  
    let fbx = useFBX('/baby6.fbx')
    const size = [7, (8- Math.random() * (1 -(-1)) + (-1)), 7]
    
    const { 
      invalidate            
    } = useThree()

  
  
    useFrame((canvas) => {
        // invalidate()
        if(isCaptured) { 
            invalidate()
            if(canvas.gl.domElement.toDataURL() !== null || canvas.gl.domElement.toDataURL() !== undefined){
                Screenshot(canvas.gl.domElement.toDataURL())
            }   
        } else {
                ref.current.rotation.z += 0.01
         }
    },1)
      

      return (
        <mesh ref={ref} {...fbx.children[0]} position={[0, -2.5, 0]} scale={[7,7,7]} name="Object_0" rotation={[0, 0, 0]}>
            <meshBasicMaterial  attach="material" map={texture}/>  
         </mesh>
      )
    }

  export default BabyFBX