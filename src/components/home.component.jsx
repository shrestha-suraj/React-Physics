import React from 'react'
import {Typography} from 'antd'

const {Title,Paragraph} =Typography

const Home=()=>{
    return(
        <Typography style={{width:"50%"}}>
            <Title>
                Welcome to React Physics
            </Title>
            <Paragraph style={{textAlign:"justify"}}>
            Hello everyone, this is a web application that would allow us to demonstrate
            different types of animation libarary available for React.js. The one that we 
            would start with is react-spring. As the webapp progresses, we will be adding 
            additional libraries as discovered. Enjoy the demos.
            </Paragraph>
        </Typography>
    )
}

export default Home