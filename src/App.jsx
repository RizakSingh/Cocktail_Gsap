
import React from 'react'
import {ScrollTrigger,SplitText}from "gsap/all";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div>
    <h1 className="text3xl text-indigo flex-center h-[100vh]" >hello sap </h1>
    </div>
  )
}

export default App

