import React from 'react';
import './App.css';
import NewsItem from './components/NewsItem.js';
import data from './dataset-fake.json';
import { Layout, Breadcrumb } from 'antd';


class App extends React.Component {
  render() {
    return (
      <Layout style={{padding:'0 50px'}}>
        <div className="site-layout-content">
          <div className="App">
            <h1 className='head'>Latest News</h1>
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
        </div>

      </Layout>

    );
  }
}

export default App;
