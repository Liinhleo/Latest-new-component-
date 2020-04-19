import React from 'react';
import './NewsItem.css';

class NewsItem extends React.Component {
  render() {
    return (
      <div className="NewsItem">
        <h2>{this.props.title}</h2>
        <p>{this.props.author}</p>
        <p>{this.props.content}</p>
        <img 
        src={this.props.image} 
        width = "200"/>
      </div>
    );
  }
}

export default NewsItem;
