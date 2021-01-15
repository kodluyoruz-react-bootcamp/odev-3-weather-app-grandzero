import React from 'react';
import {Row, Col} from 'antd';
import {useContext} from 'react';
import MainContext from '../../contexts/MainContext';

import GridItem from './GridItem';

function ForeCastGrid() {
  const {city,cityList,day,loading} = useContext(MainContext);
  const newList = cityList.length !== 0 ? cityList.slice(2,cityList.length) : [];
    return (
        <Row style={{backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px",marginTop:"50px",height:"auto"}}>
        {newList.map( (item, id) => {
          return <Col key={id} span={4}><GridItem id={id} data={item} isLast={id+1 === 6}/></Col>
        })}

      </Row>
    )
}

export default ForeCastGrid
