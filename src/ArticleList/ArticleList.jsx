import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  let displayContent;

  if (props.articles.length) {
    displayContent = (

      <ul className={styles.container}>
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
