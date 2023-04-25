import portfolioData from "../data/projectInfo"
import ProjectItem from "./ProjectItem"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Projects = () => {

  const {ref, inView} = useInView({
    threshold: 0.3
  });
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        y: '-100vh',
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    } else {
      animation.start({y: '100vh'})
    }
  }, [inView])

  return (
    <section ref={ref} className='flex flex-col md:flex-row items-center justify-center lg:px-6 bg-black pb-4' id="Projects">
       <motion.article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[70vw] lg:w-screen gap-4 justify-center pb-4'
        // animate={animation}
       >
            {portfolioData.map((project) => (
                <ProjectItem
                key={project.title}
                vidUrl={project.vidUrl}
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                github={project.github}
                liveSite={project.liveSite}
                description={project.description}
                />
            ))}
       </motion.article>
    </section>
  )
}

export default Projects