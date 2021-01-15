import {useContext} from 'react';
import MainContext from '../../contexts/MainContext';
import {Card,Row,Col} from 'antd';
//import sunny from '../../images/sunny.png';

function TodayCard() {
    const {city,cityList,day,loading} = useContext(MainContext);

    return (
        
        <Card bordered={false} 
            style={{backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",margin:"25px",height:"100%",zIndex:-1}}
            bodyStyle={{padding:0}}
            loading={loading}
        >
            <h1 style={{color:"white",borderBottom:"none",marginBottom:10,marginTop:10}}>{city}</h1>
            <hr style={{borderTop:"1px solid white", width:"85%", margin:"auto"}}></hr>
            <Row style={{backgroundColor:"transparent",textAlign:"center", verticalAlign:"text-bottom",marginTop:"7%",height:"100%"}}>
                <Col span={14} style={{backgroundColor:"transparent"}}>
                    <Card loading={loading}  bordered={false} style={{backgroundColor:"transparent"}} bodyStyle={{backgroundColor:"transparent", padding:0,margin:"auto"}}>
                        <img alt="Weather" width="100%" height="100%" src={cityList.length !== 0 && cityList[0].icon}></img>
                        
                    </Card>

                </Col>
                <Col span={10}>
                    <Card loading={loading} bordered={false} style={{height:"100%",backgroundColor:"transparent"}}>
                        <h1 style={{color:"white",textAlign:"center", margin:"auto"}}>{day.toLocaleDateString("en-EN", { weekday: 'long' })}</h1>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>{cityList.length !== 0 && cityList[0].main}</h2>
                        <br></br>
                        <br></br>
                        <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>{cityList.length !== 0 && `${cityList[0].max}°C`}</h2>
                        <h2 style={{textAlign:"center", margin:"auto", color:"lightgrey"}}>{cityList.length !== 0 && `${cityList[0].max}°C`}</h2>
                    </Card>
                </Col>
            </Row>


            
            
        </Card>
        
    )
}

export default TodayCard
