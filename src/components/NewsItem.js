import React from 'react';
import './NewsItem.css';


class NewsItem extends React.Component {
  render() {
    const p_tag = {
      color: "green",
      fontSize: "13px"
    };

    const p_author = {
      color: "grey",
      fontSize: "13px"
    };
    const p_content = {
      fontSize: "18px"
    };

    return (
      <div className="NewsItem">
        <p style={p_tag}>{this.props.tag}</p>
        <h1>{this.props.title}</h1>
        <p style={p_author}>{this.props.author}</p>
        <p style={p_content}>{this.props.content}</p>
        <img
          src={this.props.image}
          width="250" />
      </div>
    );
  }
}

export default NewsItem;
