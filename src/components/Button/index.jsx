

import {Button} from './style'

function DefaultButton({children, theme, ...props }){
//TypeScript -> Javascript com tipagem
    console.log(props)

    
    return (
        <Button{...props} theme={theme}>{children }</Button>
    )
}


export default DefaultButton