import React from 'react';
import './NewsItem.css';
import { Row, Col } from 'antd';

class NewsItem extends React.Component {
  render() {
    return (
      <div className="NewsItem">
        <Row gutter={10}>
          <Col span={18} xs={16}>
            <p className="p_tag">{this.props.tag}</p>
            <h1 className="p_title">{this.props.title}</h1>

            <Row gutter={10}> 
              <Col span={4} xs={8} lg={4}>
                <p className="p_author">{this.props.author}</p>
              </Col>
              <Col span={20} xs={16} lg={20}>             
                <p className="p_timer">{this.props.timer}</p>
              </Col>
            </Row>

            <span className="sp_content">{this.props.content}</span>
          </Col>
          <Col span={6} xs={8}>
            <img
              className="thump"
              src={this.props.image} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewsItem;
