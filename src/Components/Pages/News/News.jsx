import React from 'react'
import './News.css'
import newsData from '../NewsData/NewsData';

const News = () => {
    return (
      <div className='news'>
        <h2 className='news-h2'>Linkedin News</h2>
        {newsData.map((news, index) => (
          <div className="news-li" key={index}>
            <li className='heading'>{news.heading}</li>
            <div className="news-time">
              <span>{news.timeAgo}</span>
              <span>{news.readers}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default News;