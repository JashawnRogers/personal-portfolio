import Typed from 'react-typed'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Hero = ({memoji}) => {
  const words = [' Jashawn', ' Resourceful' , ' Hardworking', ' a Front-End Developer', ' a Music Enthusiast']

  const {ref, inView} = useInView({
    threshold: 0.3
  });
  const animation = useAnimation()
  const animation2 = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
      animation2.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    } else {
      animation.start({x: '-100vw'})
      animation2.start({x: '100vw'})

    }
  }, [inView])
  
  return (
    <header ref={ref} className='bg-black h-screen grid md:grid-cols-2 ' style={{fontFamily: 'Staatliches'}}>
        <motion.div className="flex justify-center items-center"
          animate={animation}
        >
          <motion.img src={memoji} alt="memoji" className='h-96 md:max-w-full' 
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>  
        <motion.div className="text-3xl flex flex-col justify-center px-8"
          
        >
            <h1 className="md:text-5xl text-center font-bold overflow-hidden">
              <span>Hi, I'm </span> 
              <span>
                <Typed 
                  strings={words}
                  typeSpeed={85}
                  backSpeed={100}
                  loop
                />
              </span>
            </h1> 
            <p className='text-2xl pt-10 text-center leading-16'>
              As a front-end developer, I love providing solutions to problems that reuqire thinking outside of the box. In my spare time, I enjoy blasting music and watching motorcycle videos on YouTube until I get my own!
            </p> 
        </motion.div>
    </header>
  )
}

export default Hero