import './App.css';
import TodayCard from './components/TodayCard';
import TodayInfo from './components/TodayInfo';
import ForeCastGrid from './components/ForeCastGrid';
import {Row,Col} from 'antd';
function App() {
  return (
    <Row className="App" style={{height:"100vh"}}>
      {/*<Col span={5}  style={{height:"100%", backgroundColor:"red", opacity:"0.5"}}></Col>*/}
      <Col span={12} offset={6}  style={{paddingTop: 100,height:"100%"}}>

      <Row>
        <Col span={12}>
        <TodayCard />
        </Col>
        
        <Col span={12}>
        <TodayInfo />
        </Col>
        
      </Row>
      <ForeCastGrid />

      </Col>
    </Row>
  );
}

export default App;
