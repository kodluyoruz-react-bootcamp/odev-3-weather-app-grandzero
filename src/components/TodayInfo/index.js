import {useState, useEffect,useContext} from 'react';
import MainContext from '../../contexts/MainContext';
import {Card} from 'antd';
import Quote from './Quote';

//const day = day;

function TodayInfo() {
    const {day,loading} = useContext(MainContext);
    const minutes = day.getMinutes().toString().length>1 ? day.getMinutes(): `0${day.getMinutes()}`;
    const dayTime = day.getDay().toString().length>1 ?  day.getDay() : `0${day.getDay()}`;
    const monthTime = day.getMonth().toString().length>2 ?  day.getMonth() : `0${day.getMonth()+1}`;
    const hours =  day.getHours().toString().length>2 ?  day.getHours() : `0${day.getHours()+1}`;

    const [time,setTime] = useState(hours + ":" + minutes);
    
    
    useEffect(() => {

        const timer = setInterval(() => {
            var today = new Date();
            const min = today.getMinutes().toString().length>1 ? today.getMinutes(): `0${today.getMinutes()}`;
            const hour = today.getHours().toString().length>1 ? today.getHours(): `0${today.getHours()}`
            setTime(hour + ":" + min);
        },60*1000);

        return () => { clearInterval(timer)}
    },[]);
    return (
        <Card loading={loading} bordered={false} style={{height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",margin:"25px",padding:"0"}} bodyStyle={{padding :"auto",paddingBottom:0}}>
            <p style={{fontSize:"7vw", fontWeight:"bold", color:"white",margin:"auto",padding:"auto"}}>{time}</p>
            <p style={{fontSize:"24px", fontWeight:"bold", color:"white",margin:0,marginTop:-20}}>{`${dayTime}.${monthTime}.${day.getFullYear()}`}</p>
            <p style={{fontSize:"18px", fontWeight:"bold", color:"white",margin:0}}>{day.toLocaleDateString("en-EN", { weekday: 'long' })}</p>
            <Quote />
        </Card>
    )
}

export default TodayInfo
