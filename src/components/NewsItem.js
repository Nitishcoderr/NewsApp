import React from "react";
// import React, { Component } from "react";
// above used for class

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card" >
        <div className="badge-sectiion" style={{ right: "0", display: "flex", position: "absolute" }}>
          <span className="badge rounded-pill bg-danger"> {source}</span>
        </div>
        <img src={!imageUrl ? "https://i.insider.com/614c4813c2c9630018f5ec68?width=1200&format=jpeg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-danger"><small>By <b>{!author ? "Unknown" : author}</b>  At {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn btn-dark btn-sm">
            Read More
          </a>
        </div>
      </div>

    </div>
  );
}

export default NewsItem;
