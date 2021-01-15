import React from 'react';
import {Card} from 'antd';
import sunny from '../../images/sunny.png';
function GridItem({isLast}) {
    return (
        <Card  bordered={false} style={{backgroundColor:"transparent"}} bodyStyle={{backgroundColor:"transparent",borderRight: !isLast && "1px solid white"}}>
            
                    <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>Monday</h2>
                    <img alt="Weather" width="100%" height="100%" src={sunny}></img>
                    <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>25 C</h2>
                    <h3 style={{color:"lightgrey",textAlign:"center", margin:"auto"}}>25 C</h3>
                        
        </Card>
    )
}

export default GridItem
