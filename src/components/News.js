import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    //setting state
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    //console.log("Articles", parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0ac1c06f73143708531fda393972cd7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("Articles", parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }

  // handlePrevClick = async () =>{
  //   //console.log("Previous click");
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   //console.log("Next click");
  //   this.setState({page: this.state.page + 1});
  //   this.updateNews();
  // }
  
  render() {
    //console.log("render");

    return (
      <>
        <h1 className='headline text-center my-4'> NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        
        {this.state.loading && <Spinner />}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map( (article) => {
                return article.urlToImage && <div className="col-md-4" key={article.url}>
                  <NewsItem title = {article.title ? article.title.slice(0,45) : ""} 
                            description = {article.description ? article.description.slice(0,85) : ""}
                            source = {article.source.name}
                            date = {article.publishedAt}
                            imageUrl={article.urlToImage} 
                            newsUrl={article.url} 
                  />
                  </div>
              } )}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News;
