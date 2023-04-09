import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  articles = [
    {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "Dave Skretta",
      "title": "Masters resumes 2nd round after storms fell trees at Augusta - The Associated Press",
      "description": "AUGUSTA, Ga. (AP) — The second round of the Masters resumed at Augusta National on Saturday , and there was little evidence that three towering pine trees had fallen near patrons a day earlier during storms that resulted in the suspension of play.",
      "url": "https://apnews.com/article/masters-augusta-national-trees-weather-7ca1dadd1fefcc846e71b3600ff5e2f2",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/e3c3502730b44f87a4c0953714b07786/3000.webp",
      "publishedAt": "2023-04-08T14:25:38Z",
      "content": "AUGUSTA, Ga. (AP) The second round of the Masters resumed at Augusta National on Saturday, and there was little evidence that three towering pine trees had fallen near patrons a day earlier during st… [+3712 chars]"
      },
      {
      "source": {
      "id": "polygon",
      "name": "Polygon"
      },
      "author": "Michael McWhertor",
      "title": "Super Mario Bros. Movie includes a Nintendo-approved extended family - Polygon",
      "description": "Who are all those Mario relatives in the new Mario movie? The directors gave us a rundown — and told us Mario’s mom and dad in The Super Mario Bros. Movie were designed by Nintendo itself.",
      "url": "https://www.polygon.com/23673074/mario-movie-family-members-dad-mom-uncles-aunt",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/u0JiFeG3ZpY5MlxAO-3N96Plmgw=/0x0:2787x1459/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24567156/mario_bros_plumbing.jpg",
      "publishedAt": "2023-04-08T14:01:00Z",
      "content": "The Super Mario Bros. Movie makes a small but necessary update to the larger Super Mario lore, showing Mario and Luigis immediate and extended family for the first time. Weve seen unofficial glimpses… [+2298 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "",
      "title": "Watch Kamala Harris' fiery speech after Tennessee lawmakers ousted - CNN",
      "description": "During a speech at Fisk University in Nashville, Vice President Kamala Harris shared her support for the state representatives expelled from the Tennessee House of Representatives after they protested with a bullhorn on the general assembly floor.",
      "url": "https://www.cnn.com/videos/politics/2023/04/08/kamala-harris-tennessee-three-vpx.cnn",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230408075234-kamala-harris-fisk-university.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-04-08T13:03:08Z",
      "content": null
      },
      {
      "source": {
      "id": "politico",
      "name": "Politico"
      },
      "author": null,
      "title": "7 questions from the Texas ruling on abortion pills - POLITICO",
      "description": "A Texas judge's preliminary ruling invalidating the FDA's approval of the abortion pill could make it harder for patients to get abortions even in states where it remains legal.",
      "url": "https://www.politico.com/news/2023/04/08/7-questions-from-the-texas-ruling-on-abortion-pills-00091101",
      "urlToImage": "https://static.politico.com/77/e3/2676779d47c7b2e8451378a7aa26/abortion-pill-75242.jpg",
      "publishedAt": "2023-04-08T12:42:18Z",
      "content": "What are abortion pills and why are they important? The FDA first approved Mifeprex in 2000 and mifepristone, a generic version, in 2019. The drug, which blocks a hormone called progesterone needed… [+4253 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Ryan Young",
      "title": "Masters 2023: Tiger Woods wraps up second round after weather delay - Yahoo Sports",
      "description": "Tiger Woods was right on the cutline when play was suspended on Friday night due to weather.",
      "url": "https://sports.yahoo.com/masters-2023-tiger-woods-wraps-up-second-round-after-weather-delay-114540733.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/5NVsyTnbI7w0VQnZGq8fHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/febb7b60-d590-11ed-a7fb-16cf40616372",
      "publishedAt": "2023-04-08T12:25:52Z",
      "content": "Tiger Woods was right on the cutline when play was suspended on Friday night due to weather. (AP/Jae C. Hong) Tiger Woods has six holes to make the cut. Woods will resume his second round on Saturd… [+594 chars]"
      },
      {
      "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
      },
      "author": "Vildana Hajric, Michael P. Regan",
      "title": "Stock Market Analysis of Bulls and Rally, Man Group's Mark Jones - Bloomberg",
      "description": "It’s not just the prospect of deteriorating fundamentals that has Man Group Plc’s Mark Jones skeptical about stocks these days. It’s also the risk of money flowing into fixed-income investments now that they sport attractive yields.",
      "url": "https://www.bloomberg.com/news/articles/2023-04-08/flows-and-fundamentals-make-man-group-suspicious-of-stock-rally",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i5s7bnyYqz.A/v0/1200x799.jpg",
      "publishedAt": "2023-04-08T12:18:52Z",
      "content": "It’s not just the prospect of deteriorating fundamentals that has Man Group Plc’s Mark Jones skeptical about stocks these days. It’s also the risk of money flowing into fixed-income investments now t… [+262 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": null,
      "title": "6 wounded in shooting on South Carolina beach, police say - CBS News",
      "description": "Hundreds of people — including high schoolers taking an unofficial day off — were on the beach at the time, according to police.",
      "url": "https://www.cbsnews.com/news/6-wounded-in-shooting-on-south-carolina-beach/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/06/a09f8bcb-d20a-499d-a9af-2964d8e61b7e/thumbnail/1200x630/1dcc39dda2aae5466113bfc51d7eacff/gettyimages-1291135315.jpg",
      "publishedAt": "2023-04-08T12:04:43Z",
      "content": "Gunfire erupted on a South Carolina beach during a senior skip day event involving numerous teenagers Friday, wounding six people, police in South Carolina said. The shooting took place around 5:2… [+773 chars]"
      },
      {
      "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
      },
      "author": "Miles Kruppa",
      "title": "Google CEO on AI, the Future of Search, Efficiency and Battling Microsoft - WSJ - The Wall Street Journal",
      "description": "Sundar Pichai talks to The Wall Street Journal at a pivotal time for the tech company",
      "url": "https://www.wsj.com/articles/google-ceo-sundar-pichai-interview-ai-search-8ed7d2b4",
      "urlToImage": "https://images.wsj.net/im-759432/social",
      "publishedAt": "2023-04-08T12:00:00Z",
      "content": null
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Sara Smart",
      "title": "Jeremy Renner doctor says snowplow came within millimeters of vital organ, major nerve - CNN",
      "description": "One of the doctor's treating Jeremy Renner following his snowplow incident says the actor has come a long way incredibly quickly.",
      "url": "https://www.cnn.com/2023/04/08/entertainment/jeremy-renner-snow-plow-doctor-trnd/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230315165352-jeremy-renner-london.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-04-08T11:51:00Z",
      "content": "One of the doctors treating Jeremy Renner following his snowplow incident says the actor has come a long way incredibly quickly. Dr. Christopher Vincent, a chiropractic sports physician, spoke to CN… [+791 chars]"
      }
  ]

  constructor() {
    super();
    //setting state
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0ac1c06f73143708531fda393972cd7";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    
    console.log(parsedData);
  }
  
  render() {
    console.log("render");
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
      </div>
    )
  }
}

export default News;
