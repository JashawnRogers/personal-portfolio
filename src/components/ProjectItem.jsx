import { Card, Elevation, Button, Colors } from "@blueprintjs/core"

const ProjectItem = ({ title, imgUrl, stack, github, liveSite, description }) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO} className="text-black" style={{fontFamily: 'Staatliches'}}>
        <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
        <h5 className="text-3xl md:pb-3"><span>{title}</span></h5>
        <p className="pb-3 text-xl">
            <span>
                Stack:  
            </span>
            {stack.map((item) => (
                <span key={item}>
                    {item}
                </span>
            ))}
        </p>
        <p className="leading-6 pb-3 text-lg">{description}</p>
        <div className="flex justify-center pt-3 gap-6 ">
            <Button style={{background: Colors.GREEN3}} href={github}>View code</Button>
            <Button style={{background: Colors.GREEN3}} href={liveSite}>View live site</Button>
        </div>
    </Card>
  )
}

export default ProjectItem