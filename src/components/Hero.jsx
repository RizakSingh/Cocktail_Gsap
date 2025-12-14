import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
const Hero = () => {
useGSAP(()=>{
  const heroSplit = new SplitText('.title',{type:'chars,words'});
  const paraSplit = new SplitText('.subtitle',{type:'lines'});
  heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))
  gsap.from(heroSplit.chars,{
    yPercent: 100,
    duration:1.8,
    ease: 'expo.out',
    stagger:0.06

  })
  gsap.from(paraSplit.lines,{
    opacity:0,
    yPercent: 100,
    duration:1.8,
    ease: 'expo.out',
    stagger:0.06,
    delay:1,

  })
  const leaf = gsap.timeline({
scrollTrigger:{
  trigger:'#hero',
  start:'top top',
  end:'bottom top', 
  scrub:true,
}
  })
  leaf.to('.right-leaf',{y:200},0)
  leaf.to('.left-leaf',{y:-200},0)
},[])
  return (
  <>
  <section id='hero' className='noisy'>
    <h1 className='title'>DRINKS</h1>
    <img src="/images/hero-left-leaf.png" alt="left-leaf"  className='left-leaf'/>
     <img src="/images/hero-right-leaf.png" alt="right-leaf"  className='right-leaf'/>
     <div className='body'>
      <div className="content">
        <div className='space-y-5 hidden md:block'>
          <p>Cool.Crisp.Classic</p>

        <p className='subtitle'>Sip the Spirit <br /> Of Summmer</p>
        </div>
        <div className='view-coktails'>
          <p className='subtitle'>Every cocktail on our menu is a <br /> blend of premium ingredients, <br /> creative flair and timeless recipes <br /> designed to delight your senses</p><br />
          <a href="#cocktails ">View Cocktails</a>
        </div>
        </div>
        </div>
   </section>
   </>
  )
}

export default Hero
