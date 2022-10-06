import './App.css';
import GitHubCard from './GitHubCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootsrap/Row'

function App() {
  return (
    <div className="App pt-5" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  )
}

export default App;
