import Typed from 'react-typed'

const Hero = ({memoji}) => {
  const words = [' Jashawn', ' Resourceful' , ' Hardworking', ' a Front-End Developer', ' a Music Enthusiast']
  
  return (
    <header className='bg-black h-screen grid md:grid-cols-2 z-10' style={{fontFamily: 'Staatliches'}}>
        <div className="flex justify-center items-center">
          <img src={memoji} alt="memoji" className='h-96 md:max-w-full z-10' />
        </div>  
        <div className="text-3xl flex flex-col justify-center px-8">
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
        </div>
    </header>
  )
}

export default Hero