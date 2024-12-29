import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'

const Story = () => {
    const frameRef = useRef('null');
    const handleMouseLeave = ()=>{

    }

    const handleMouseMove = (e)=>{
        const {clientX, clientY} = e;
        const element = frameRef.current;
        if(!element) return;
        const rect = element.getBoundingClientRect();
        const x  = clientX - rect.left;
        const y = clientY - rect.top;
        
    }
  return (
    <section id = "story" className='min-h-dvh bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24 '>
            <p className='font-general text0sm uppercase  md:text-[10px]'>
                The Multiversal IP World
            </p>
            <div className='relative size-full '>
                <AnimatedTitle
                title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
                sectionId = '#story'
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"  />
                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img 
                            onMouseLeave={handleMouseLeave}
                            onMouseUp = {handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            ref={frameRef}
                            src ="/img/entrance.webp"  alt ="entrance" className='object-contain'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
