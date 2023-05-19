import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';

const News = (props) => {
  
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);  // function based
    // this.setState({loading: true});   // class based
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    
    props.setProgress(100);
  }

  // useEffect is beging used instead of componentDidMount
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  // componentDidMount = async()  {
  //   this.updateNews();
  // }

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    //this.setState({page: this.state.page + 1});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("Articles", parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
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
  
    //console.log("render");

    return (
      <>
        <h1 className='headline text-center'style={{marginTop: '90px' }}>
         NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines 
        </h1>
        
        {loading && <Spinner />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map( (article) => {
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
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: '6',
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
