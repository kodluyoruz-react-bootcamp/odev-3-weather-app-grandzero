import React from 'react';
import {Card} from 'antd';

function TodayInfo() {
    return (
        <Card bordered={false} style={{height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",margin:"25px",padding:0}} bodyStyle={{padding :"auto",paddingBottom:0}}>
            <p style={{fontSize:"104px", fontWeight:"bold", color:"white",margin:0}}>09:21</p>
            <p style={{fontSize:"24px", fontWeight:"bold", color:"white",margin:0,marginTop:-20}}>14.01.2021</p>
            <p style={{fontSize:"18px", fontWeight:"bold", color:"white",margin:0}}>Thursday</p>
            <p style={{fontStyle:"italic",fontSize:"14px", fontWeight:"bold", color:"white",margin:0,marginTop:"5%"}}>"If you haven't forgiven yourself something, how can you forgive others?"</p>
        </Card>
    )
}

export default TodayInfo
