import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0ac1c06f73143708531fda393972cd7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: 
      parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    
    //console.log(parsedData);
  }

  handlePrevClick = async () =>{
    //console.log("Previous click");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: 
      parsedData.articles,
      page: this.state.page-1,
      loading: false
    });

  }

  handleNextClick = async () => {
    //console.log("Next click");

    if(!(this.state.page+1 > (Math.ceil(this.state.totalResults/this.props.pageSize)))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:  parsedData.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  }
  
  render() {
    //console.log("render");
    return (
      <div className='container my-3'>
        <h1 className='text-center my-4'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map( (article) => {
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
          <button disabled={this.state.page > this.state.totalResults/this.props.pageSize} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
