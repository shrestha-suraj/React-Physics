import React,{useState} from 'react'
import {useSpring,animated} from 'react-spring'
import {Switch} from 'antd'

const ToggleAnimcation=()=>{
    // This animation uses fadein and fadeout with toggling option
    // When you try the animation change on the browser
    // You can see a smooth transition which is handled by react-spring
    const [isToggled,setToggle]=useState(false)
    const fade=useSpring({
        // opacity:isToggled?1:0,
        color:isToggled?'green':'red',
        fontSize:isToggled?50:30
        // transform:isToggled?'translate3d(80px,0,0)':'translate3d(0,0,0)'
    })

    return(
        <React.Fragment>
            <animated.h1 style={fade}>Hello</animated.h1>
            <p>Look for the different animation used with react-springs for this toggle</p>
            <Switch checkedChildren="Large" unCheckedChildren="Small" onClick={()=>setToggle(!isToggled)}/>
        </React.Fragment>
    )
}

export default ToggleAnimcation