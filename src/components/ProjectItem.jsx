import { Card, Elevation, Colors } from "@blueprintjs/core"

const ProjectItem = ({ title, imgUrl, stack, github, liveSite, description }) => {
  return (
    <Card elevation={Elevation.TWO} className="text-black rounded-2xl flex flex-col flex-grow-1 gap-2" style={{fontFamily: 'Staatliches'}}>
        <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-full md:h-48 object-contain cursor-pointer"
            />
        <h5 className="text-3xl md:pb-3"><span>{title}</span></h5>
        <p className="py-3 text-xl text-center">
            <span>
                Stack:  
            </span>
            {stack.map((item) => (
                <span key={item}>
                    {item}
                </span>
            ))}
        </p>
        <p className="indent-3 pb-3 text-lg h-36">{description}</p>
        <footer className="flex justify-center place-items-baseline pt-3 gap-x-6 ">
            <a style={{background: Colors.GREEN3}} href={github} target="_blank" rel='noreferrer' className=" p-3 mt-3 rounded-full focus:decoration-black" >View code</a>
            <a style={{background: Colors.GREEN3}} href={liveSite} target="_blank" rel='noreferrer' className="p-3 mt-3 rounded-full focus:decoration-black">View live site</a>
        </footer>
    </Card>
  )
}

export default ProjectItem