import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsItem = (item) => {
  return (
    <div className="my-3">
      <Card>
        <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
        <span className="badge rounded-pill bg-danger">{item.source}</span>
        </div>
        
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item?.title?.slice(0, 45)}...</Card.Title>
          <Card.Text>{item?.description?.slice(0, 88)}...</Card.Text>
          <Card.Text>
            By {item.author ? item.author : "Unknown"} on{" "}
            {new Date(item.date).toGMTString()}
          </Card.Text>
          <a href={item.newsUrl}>
            <Button variant="btn btn-sm btn-dark">Read More</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsItem;
