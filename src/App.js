import React from 'react';
import './App.css';
import NewsItem from './components/NewsItem.js';
import data from './dataset-fake.json';
import { Row, Col } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <div>col-6</div>
          </Col>
          <Col  span={6}>
            <div>col-6</div>
          </Col>
          <Col span={6}>
            <div>col-6</div>
          </Col>
          <Col span={6}>
            <div>col-6</div>
          </Col>
        </Row>
        {/* {
          data.map((item, index) => {
            return (
              <Row>
                <Col span={12}>
                  <NewsItem
                    key={index}
                    tag={item.tag}
                    title={item.title}
                    author={item.author}
                    content={item.content} />
                </Col>
                <Col span={12}>
                  <NewsItem
                    key={index}
                    image={item.image} />
                </Col>
              </Row>
            )
          })
        } */}
      </div>
    );
  }
}

export default App;
