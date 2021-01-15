import React from 'react';
import {Card,Row,Col} from 'antd';
import sunny from '../../images/sunny.png';

function TodayCard() {
    return (
        
        <Card bordered={false} 
            style={{backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",margin:"25px",height:"100%",zIndex:-1}}
            bodyStyle={{padding:0}}
        >
            <h1 style={{color:"white",borderBottom:"none",marginBottom:10,marginTop:10}}>İstanbul</h1>
            <hr style={{borderTop:"1px solid white", width:"85%", margin:"auto"}}></hr>
            <Row style={{backgroundColor:"transparent",textAlign:"center", verticalAlign:"text-bottom",marginTop:"7%",height:"100%"}}>
                <Col span={14} style={{backgroundColor:"transparent"}}>
                    <Card  bordered={false} style={{backgroundColor:"transparent"}} bodyStyle={{backgroundColor:"transparent", padding:0,margin:"auto"}}>
                        <img alt="Weather" width="100%" height="100%" src={sunny}></img>
                        
                    </Card>

                </Col>
                <Col span={10}>
                    <Card bordered={false} style={{height:"100%",backgroundColor:"transparent"}}>
                        <h1 style={{color:"white",textAlign:"center", margin:"auto"}}>Sunday</h1>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>Sunny</h2>
                        <br></br>
                        <br></br>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>25° C</h2>
                        <h2 style={{textAlign:"center", margin:"auto", color:"lightgrey"}}>17° C</h2>
                    </Card>
                </Col>
            </Row>


            
            
        </Card>
        
    )
}

export default TodayCard
