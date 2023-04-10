import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    // object destructuring
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn bt-sm btn-dark" rel="noreferrer">Read</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
