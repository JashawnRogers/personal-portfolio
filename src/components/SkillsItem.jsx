import { Card, Elevation } from "@blueprintjs/core"
import skillsArr from "../data/skillsInfo"

const SkillsItem = () => {
  return (

    <div className="text-black grid grid-cols-2 md:grid-cols-4 md:w-[70vw] lg:w-screen gap-4 justify-center pb-4" style={{fontFamily: 'Staatliches'}}>
      {skillsArr.map((skill) => (
          <Card key={skill.tooltip} interactive={true} elevation={Elevation.TWO} className="max-w-[250px] rounded-2xl">
            <skill.icon alt={skill.tooltip} elevation={Elevation.FOUR} interactive={true} className="w-full h-20 lg:h-24 cursor-pointer" />
            <h5 className="text-lg p-2 text-center">{skill.tooltip}</h5>
          </Card>
      ))}
    </div>
  )
}

export default SkillsItem