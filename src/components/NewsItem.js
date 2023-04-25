import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    // object destructuring
    let { title, description, date, source, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display: 'flex', justifyCcontent: 'center', position: 'absolute', right: '0'}}>
          <span className = "badge rounded-pill bg-danger">{source} </span>
        </div>
          <img src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className='text-muted'>
                <b> {new Date(date).toGMTString()} </b>
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn bt-sm btn-dark" rel="noreferrer">Read</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
