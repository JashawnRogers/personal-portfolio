import { Card, Elevation } from "@blueprintjs/core"
import skillsArr from "../data/skillsInfo"

const SkillsItem = () => {
  return (

    <div className="">
      <div className="text-black grid grid-cols-2 md:grid-cols-4 lg:w-full gap-y-8 gap-x-16 pb-4" style={{fontFamily: 'Staatliches'}}>
        {skillsArr.map((skill) => (
            <Card key={skill.tooltip} elevation={Elevation.TWO} className="md:min-w-[250px] rounded-2xl">
              <skill.icon alt={skill.tooltip} elevation={Elevation.FOUR} className="w-full h-20 lg:h-24 cursor-pointer grow" />
              <h5 className="text-lg p-2 text-center">{skill.tooltip}</h5>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default SkillsItem