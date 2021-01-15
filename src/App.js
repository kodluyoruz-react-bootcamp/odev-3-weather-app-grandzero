import './App.css';
import TodayCard from './components/TodayCard';
import TodayInfo from './components/TodayInfo';
import ForeCastGrid from './components/ForeCastGrid';
import Navbar from './components/Navbar';
import {Row,Col} from 'antd';
function App() {
  return (
    <>
    <Navbar/>
    <Row className="App" >
      {/*<Col span={5}  style={{height:"100%", backgroundColor:"red", opacity:"0.5"}}></Col>*/}
      <Col span={12} offset={6}  style={{paddingTop: 0,height:"100%"}}>

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
    </>
  );
}

export default App;
