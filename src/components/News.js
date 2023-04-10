import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  constructor() {
    super();
    //setting state
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    //console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0ac1c06f73143708531fda393972cd7&page=1&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: 
      parsedData.articles,
      totalResults: parsedData.totalResults
    });
    
    //console.log(parsedData);
  }

  handlePrevClick = async () =>{
    //console.log("Previous click");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page - 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: 
      parsedData.articles,
      page: this.state.page-1
    });

  }

  handleNextClick = async () => {
    //console.log("Next click");

    if(this.state.page+1 > (Math.ceil(this.state.totalResults/9))){
      // do nothing
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:  parsedData.articles,
        page: this.state.page + 1,
      });
    }
  }
  
  render() {
    //console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map( (article) => {
            return article.urlToImage && <div className="col-md-4" key={article.url}>
              <NewsItem title = {article.title ? article.title.slice(0,45) : ""} 
                        description = {article.description ? article.description.slice(0,85) : ""} 
                        imageUrl={article.urlToImage} 
                        newsUrl={article.url} 
              />
              </div>
          } )}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page > this.state.totalResults/9} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
