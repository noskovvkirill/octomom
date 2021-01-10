import { ThreeCore } from './../components/three';
import * as THREE from "three"
import { useRef, useState, Suspense, useEffect, useCallback } from 'react'
import { Canvas, useThree,useFrame} from "react-three-fiber"
import { OrbitControls  } from 'drei'
import { useFBX } from '@react-three/drei/useFBX'
import Layout from '../components/layout'
import { EffectComposer, DepthOfField, Bloom, Noise } from '@react-three/postprocessing'
import UseFBXScene from '../components/baby'
import Loader from '../components/loader'
import React from 'react'
import {captured, screenshotState} from '../components/three'


import {
  atom,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



  
function Bg() {
  const { viewport } = useThree()
  const max = Math.max(viewport.width, viewport.height)
  const ref = useRef()
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[max, max, 1]}>
      <planeBufferGeometry />
      <colorShiftMaterial ref={ref} />
    </mesh>
  )
}




const Index = () => {


  const [isCaptured, setIsCaptured] = useRecoilState(captured)
  const [isStore, setIsStore] = useState(false)
  const screenshot = useRecoilValue(screenshotState);

  const [image, setImage] = useState(null)
  
  const [isSnap, setIsSnap] = useState(false)
  const [random, setRandom] = useState(1)

 
 

  return (
   <Layout>
     
  
    {!isStore 
    ? <ThreeCore isSnap={isSnap} image={image}  />
    : <div style={{backgroundColor:'black', width:'100vw', height:'100vh', position:'fixed'}}>
          <img src={screenshot} width="100%" height="100%"/> 
      </div>
    } 

       {!isCaptured
       ?  <button className="snapshot" style={{zIndex:'100'}} onClick={(e) => {
        e.preventDefault();
        setIsCaptured(!isCaptured);
        console.log('screenshot', screenshot)
        setTimeout(()=>{
          setIsStore(true)
        },[2000]) }}>Snap!</button> 
        :  <>
        {!isStore && ( 
            <div style={{backgroundColor:'black', width:'100vw', height:'100vh', position:'fixed', display:'flex', alignItems:'center', justifyContent:'center'}}> 
            LOADING ... 
            </div>
        )}
            </>
        }
   
       
    </Layout>
  )
}

export default React.memo(Index)

  