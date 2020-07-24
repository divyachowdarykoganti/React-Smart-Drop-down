import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Row, Col } from 'antd';
import Dropdown from './SmartDropDown/Dropdown';

function App() {
  return (
    <div className="App">
     <Row>
      <Col span={24}>
    
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
           
            <Route path="/">
              <Dropdown />
            </Route>
          </Switch>
        </div>
      </Router>
      </Col>
</Row>
    </div>
  );
}

export default App;
