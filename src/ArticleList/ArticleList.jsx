import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
  let displayContent;

  if (props.articles.length) {
    displayContent = (
      <ul>
        {props.articles.map((item) => (
          <ArticleListItem article={item} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }
  return (
    <section>
      <header>
        <h2></h2>
      </header>
      {displayContent}
    </section>
  );
};

export default ArticleList;
