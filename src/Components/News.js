import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const capatilize = (str) => {
  let lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${capatilize(this.props.category)} - NewsMoneky`;
  }

  /*
        async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b00c6e91c3c4f76ad829c9d4b9de4cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
            let parseData= await data.json();
            // console.log(parseData);
            this.setState({articles: parseData.articles,
                totalResults:parseData.totalResults,
                loading:false
            })
    }
    */

  //   handlePrevClick = async () => {
  //     console.log("prev");
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=9b00c6e91c3c4f76ad829c9d4b9de4cc&page=${
  //       this.state.page - 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     console.log(parseData);
  //     this.setState({
  //       articles: parseData.articles,
  //       page: this.state.page - 1,
  //       loading: false,
  //
  //     });
  //   };
  //   handleNextClick = async () => {
  //     console.log("next", this.state.page);
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=9b00c6e91c3c4f76ad829c9d4b9de4cc&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     console.log(parseData);
  //     this.setState({
  //       articles: parseData.articles,
  //       page: this.state.page + 1,
  //       loading: false,
  //     });
  //   };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b00c6e91c3c4f76ad829c9d4b9de4cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    //   loading: false,
    });
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b00c6e91c3c4f76ad829c9d4b9de4cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  render() {
    return (
      <>
        <h1 style={{ margin: "80px 0px 20px" }} className="text-center my-2000">
          iNews - Top {capatilize(this.props.category)} Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
            <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description != null
                        ? element.description.length > 90
                          ? element.description.slice(0, 90)
                          : ""
                        : element.description
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize) ||
                this.state.page >= 100 / this.props.pageSize
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;{" "}
            </button>
          </div> */}
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
