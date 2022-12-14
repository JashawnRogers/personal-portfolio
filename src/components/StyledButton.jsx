import { Button, Colors } from '@blueprintjs/core'

const StyledButton = ({children, cname}) => {
  return (
    <Button style={{background: Colors.GREEN3}} className={`rounded-full text-black ${cname}`} >{ children }</Button>
  )
}

export default StyledButton