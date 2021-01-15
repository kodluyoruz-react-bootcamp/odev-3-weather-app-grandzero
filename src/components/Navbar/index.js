import {useState} from 'react';
import { Row, Col } from 'antd';
import style from './searchbar.module.css';
import { BiAdjust } from "react-icons/bi";

function Navbar() {
    const [data, setData] = useState([]);
    const [input,setInput] = useState([]);
    const handleChange = (e) => {setInput(e.target.value)}
    const handleProvince = (e) => {

    }
    return ( 
        <Row style={{height:60,backgroundColor:"black"}}>
            <Col span={10} style={{backgroundColor:"transparent"}}>
            
            <form style={{zIndex: 999}}>
                <input type="text" className={style.searchBar} onChange={handleChange} onSubmit={(e) => e.preventDefault()} name="search" value={input} placeholder="Search.."></input>
                <ul style={{height:"100%", backgroundColor:"white" ,marginTop:-5,marginLeft:5, padding:0,width:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)", borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
                    {/*<li onClick={handleProvince} style={{paddingLeft:"6%",color:"white",fontSize:"2vw"}}>Test</li>*/}
                    

                </ul>
                
            </form>
            
            
            
            
            
            </Col>
            <Col span={6} offset={6} style={{backgroundColor:"transparent",textAlign:"right", alignItems:"right",color:"white", fontWeight:"bold"}}>
                <p style={{marginTop:"4%",padding:"auto"}}>Province : {input} </p> 
            </Col>
            <Col span={1} offset={1} style={{backgroundColor:"transparent",textAlign:"right", alignItems:"right",color:"white", fontWeight:"bold"}}>
                <p><BiAdjust style={{color:"red",fontSize:"25px",marginTop:"25%",padding:"auto",marginRight:"50%"}}/></p> 
            </Col>
        </Row>
    )
}

export default Navbar
