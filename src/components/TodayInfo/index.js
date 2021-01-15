import {useState, useEffect} from 'react';
import {Card} from 'antd';
import * as quotes from './quotes.json';
const day = new Date();
const minutes = day.getMinutes().toString()>1 ? day.getMinutes(): `0${day.getMinutes()}`;
const dayTime = day.getDay().toString().length>2 ?  day.getDay() : `0${day.getDay()}`;
const monthTime = day.getMonth().toString().length>2 ?  day.getMonth() : `0${day.getMonth()+1}`
function TodayInfo() {
    
    const [time,setTime] = useState(day.getHours() + ":" + minutes);
    const index = parseInt(Math.floor(Math.random()*325));
    
    useEffect(() => {

        const timer = setInterval(() => {
            var today = new Date();
            const min = today.getMinutes().toString()>1 ? today.getMinutes(): `0${today.getMinutes()}`;
            setTime(today.getHours() + ":" + min);
        },60*1000);

        return () => { clearInterval(timer)}
    },[]);
    return (
        <Card bordered={false} style={{height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",margin:"25px",padding:"0"}} bodyStyle={{padding :"auto",paddingBottom:0}}>
            <p style={{fontSize:"7vw", fontWeight:"bold", color:"white",margin:"auto",padding:"auto"}}>{time}</p>
            <p style={{fontSize:"24px", fontWeight:"bold", color:"white",margin:0,marginTop:-20}}>{`${dayTime}.${monthTime}.${day.getFullYear()}`}</p>
            <p style={{fontSize:"18px", fontWeight:"bold", color:"white",margin:0}}>{day.toLocaleDateString("en-EN", { weekday: 'long' })}</p>
            <p style={{fontStyle:"italic",fontSize:"14px", fontWeight:"bold", color:"white",margin:0,marginTop:"5%"}}>{quotes.list[index].text}</p>
        </Card>
    )
}

export default TodayInfo
