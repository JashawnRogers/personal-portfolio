import SkillsItem from "./SkillsItem"

const Skills = () => {
  return (
    <section className="sm:mt-48 md:mt-14 lg:mt-2 flex flex-col h-screen items-center justify-center bg-black" id="Skills">
      <h2 className="text-center text-4xl ml-6 mb-6" style={{fontFamily: 'Staatliches'}}>Skills</h2>
        <SkillsItem/>
    </section>
  )
}

export default Skills 