import {useContext} from 'react';
import MainContext from '../../contexts/MainContext';
import {Card} from 'antd';
function GridItem({isLast,id,data}) {
    const {loading} = useContext(MainContext);
    const dat = new Date();
    dat.setDate(new Date().getDate()+id+1)
    return (
        <Card  loading={loading} bordered={false} style={{backgroundColor:"transparent"}} bodyStyle={{backgroundColor:"transparent",borderRight: !isLast && "1px solid white"}}>
            
                    <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>{dat.toLocaleDateString("en-EN", { weekday: 'long' })}</h2>
                    <img alt="Weather" width="100%" height="100%" src={data.icon}></img>
                    <h2 style={{color:"white",textAlign:"center", margin:"auto"}}>{data && `${data.max}°C`}</h2>
                    <h3 style={{color:"lightgrey",textAlign:"center", margin:"auto"}}>{data && `${data.min}°C`}</h3>
                    
                        
        </Card>
    )
}

export default GridItem
