import {useState} from 'react';
import { Row, Col } from 'antd';
import style from './searchbar.module.css';
import { BiAdjust } from "react-icons/bi";
import {useContext} from 'react';
import MainContext from '../../contexts/MainContext';
import axios from 'axios';
import Province from './Province';

function Navbar() {
    const {setCity,city} = useContext(MainContext);
    const [data, setData] = useState([]);
    const [input,setInput] = useState([]);
    const handleChange = (e) => {setInput(e.target.value)}
    const handleProvince = (name) => {
        console.log(name);
        const names = name.split(",");
        setData([]);
        setCity(names[0].toLowerCase());
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_GEO_KEY}&q=${input}`)
        .then( res => {
            !res.data ? setCity("istanbul") : 
            setData(res.data.results.map((item) => {
                let lat = item.bounds.lat;
                
                let lon = item.bounds.long;
                
                return {
                    name: `${item.formatted}`,
                    lat: lat,
                    lon: lon
                }
            }))
        })
    }
    return ( 
        <Row style={{height:60,backgroundColor:"black"}}>
            <Col span={10} style={{backgroundColor:"transparent"}}>
            
            <form style={{zIndex: 999}} onSubmit={handleSubmit}>
                <input type="text" className={style.searchBar} onChange={handleChange}  name="search" value={input} placeholder="Search.."></input>
                <ul style={{height:"100%", backgroundColor:"white" ,marginTop:-5,marginLeft:5, padding:0,width:"100%",backgroundColor:"white", borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
                    {data && data.map((item,id) => <Province key={id} handleProvince={handleProvince} name={item.name}/>)}
                    {/*<li onClick={handleProvince} style={{paddingLeft:"6%",color:"white",fontSize:"2vw"}}>Test</li>*/}
                    

                </ul>
                
            </form>
            
            
            
            
            
            </Col>
            <Col span={6} offset={6} style={{backgroundColor:"transparent",textAlign:"right", alignItems:"right",color:"white", fontWeight:"bold"}}>
                <p style={{marginTop:"4%",padding:"auto"}}>Province : {city} </p> 
            </Col>
            <Col span={1} offset={1} style={{backgroundColor:"transparent",textAlign:"right", alignItems:"right",color:"white", fontWeight:"bold"}}>
                <p><BiAdjust style={{color:"red",fontSize:"25px",marginTop:"25%",padding:"auto",marginRight:"50%"}}/></p> 
            </Col>
        </Row>
    )
}

export default Navbar
