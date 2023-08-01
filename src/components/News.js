import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [loadingState, setLoadingState] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  document.title=capitalizeFirstLetter(`${props.category} - NewsBuzz`)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  useEffect(() => {
    async function fetchAPI() {
      updateNews();
    }
    fetchAPI();
  }, []);

  async function updateNews() {
    props.setProgress(10);
    setLoadingState(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    props.setProgress(60);
    settotalResults(parsedData.totalResults);
    setLoadingState(false);
    props.setProgress(100);
  }

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  // const handleNextClick = async () => {
  //   setLoadingState(true);

  //   if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
  //     console.log("nothing");
  //   } else {
  //     setPage(page + 1);
  //     updateNews();px
  //   }
  // };

  const fetchMoreData = async () => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // setArticles(parsedData.articles);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  }

  return (
    <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
          NewsBuzz - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>

        {loadingState ? (
          <Spinner />
        ) : (
          
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <>
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2023-07/54njtejg_aeolus-satelite_625x300_29_July_23.jpg"}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  </>
                );
              })}
            </div>
            </div>
            </InfiniteScroll>
            
        )}
      
    </>
  );
};

export default News;

{/* <div className="container d-flex justify-content-between">
              <Button
                disabled={page <= 1}
                variant="dark"
                onClick={handlePrevClick}
              >
                &larr; Previous{" "}
              </Button>
              <Button
                disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                variant="dark"
                onClick={handleNextClick}
              >
                Next &rarr;
              </Button>
            </div> */}