import React from 'react';
import './App.css';
import NewsItem from './components/NewsItem.js';
import data from './dataset-fake.json';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          data.map((item, index) => {
            return (
              <NewsItem
                key={index}
                tag={item.tag}
                title={item.title}
                author={item.author}
                timer={item.timer}
                image={item.image}
                content={item.content} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
