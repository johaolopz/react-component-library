import { Box, Button } from "@chakra-ui/react"
import logo from '../assets/images/logo.svg'

export interface ButtonProps {
    label: string;
}

export const MyButton = (props: ButtonProps) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
        <Button onClick={()=>alert(props.label)}>
            {props.label}
        </Button>
        <img src={logo} alt='my logo' className='myImg' />
    </Box>
  )
}