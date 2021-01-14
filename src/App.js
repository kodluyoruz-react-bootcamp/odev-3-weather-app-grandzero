import './App.css';
import TodayCard from './components/TodayCard';
import {Row,Col} from 'antd';
function App() {
  return (
    <div className="App">
      <Col span={12} offset={6}>

      <Row>
        <Col span={12}>
        <TodayCard />
        </Col>
        
        <Col span={12}>
        <TodayCard />
        </Col>
        
      </Row>
      <Row>
        
      </Row>

      </Col>
    </div>
  );
}

export default App;
