import React from 'react';
import {Row, Col} from 'antd';

import GridItem from './GridItem';

function ForeCastGrid() {
    return (
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",marginTop:"50px",height:"auto"}}>
        <Col span={4}><GridItem /></Col>
        <Col span={4}><GridItem /></Col>
        <Col span={4}><GridItem /></Col>
        <Col span={4}><GridItem /></Col>
        <Col span={4}><GridItem /></Col>
        <Col span={4}><GridItem isLast={true}/></Col>
      </Row>
    )
}

export default ForeCastGrid
