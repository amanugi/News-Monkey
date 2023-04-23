import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    // object destructuring
    let { title, description, date, source, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
        <div className="card">
        <span className = "position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
          {source}
        </span>
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
