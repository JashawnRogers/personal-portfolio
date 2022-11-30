import portfolioData from "../data/projectInfo"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <section className='flex h-screen flex-col md:flex-row items-center justify-center lg:px-6 z-20 bg-black pb-4'>
       <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[70vw] lg:w-screen gap-4 justify-center pb-4'>
            {portfolioData.map((project) => (
                <ProjectItem
                key={project.title} 
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                github={project.github}
                liveSite={project.liveSite}
                description={project.description}
                />
            ))}
       </article>
    </section>
  )
}

export default Projects