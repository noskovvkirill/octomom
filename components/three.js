import React from "react";
import * as THREE from "three"
import { useRef, useState, Suspense, useEffect, useCallback } from 'react'
import { Canvas, useThree,useFrame} from "react-three-fiber"
import { OrbitControls  } from 'drei'
import { useFBX } from '@react-three/drei/useFBX'
import Layout from '../components/layout'
import { EffectComposer, DepthOfField, Bloom, Noise } from '@react-three/postprocessing'
import UseFBXScene from '../components/baby'
import Loader from '../components/loader'
import BabyFBX from '../components/babyFBX'
import {
    atom,
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';
  

export const screenshotState = atom({
    key: 'screenshotState', 
    default: [], 
  });

  export const captured = atom({
    key: 'captured', 
    default: false, 
  });

export function ThreeCore() {


const setScreenshot = useSetRecoilState(screenshotState);
const isCaptured = useRecoilValue(captured)



  return <div className="three">
   
      <Canvas camera={{
      fov: 75,
      position: [0, 10, 7]
    }} invalidateFrameloop={isCaptured}>
          <Suspense fallback={null}>
            <BabyFBX Screenshot={setScreenshot} isCaptured={isCaptured}/> 
          </Suspense>
        
        <EffectComposer>
        <DepthOfField focusDistance={1.0} focalLength={0.02} bokehScale={0.2} height={800} />
        <Bloom luminanceThreshold={2.0} luminanceSmoothing={0.5} height={800} />
        <Noise opacity={0.15} />

      </EffectComposer>
    
      </Canvas>
      


    
     </div>


      

}
  