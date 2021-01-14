import React from 'react';
import {Card,Row,Col} from 'antd';
import sunny from '../../images/sunny.png';

function TodayCard() {
    return (
        
        <Card bordered={false} 
            style={{backgroundColor:"rgba(255, 255, 255, 0.5)", borderRadius:"15px",margin:"25px"}}
            bodyStyle={{padding:0}}
        >
            <h1 style={{color:"white",borderBottom:"none",marginBottom:0}}>İstanbul</h1>
            <Row style={{backgroundColor:"transparent"}}>
                <Col span={14}  style={{backgroundColor:"transparent"}}>
                    <Card bordered={false} style={{backgroundColor:"transparent"}} bodyStyle={{backgroundColor:"transparent", padding:0}}>
                        <img alt="Weather" width="100%" height="100%" src={sunny}></img>
                        <p style={{color:"white"}}>Some Info</p>
                    </Card>

                </Col>
                <Col span={10}>
                    <Card bordered={false} style={{height:"100%",backgroundColor:"transparent"}}>
                        <h1 style={{color:"white",textAlign:"center", margin:"auto"}}>Sunday</h1>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>Sunny</h2>
                        <br></br>
                        <br></br>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>25°</h2>
                        <h2 style={{textAlign:"center", margin:"auto", color:"lightgrey"}}>17°</h2>
                    </Card>
                </Col>
            </Row>


            
            
        </Card>
        
    )
}

export default TodayCard
