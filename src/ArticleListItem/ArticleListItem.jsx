import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (prop) => {
  return (
        <article>
          <li>
            <h1>{prop.article.title}</h1>
            <time date={`${prop.article.displayDate}`}>{prop.article.displayDate}</time>
            <br/><br/>
            <HTMLText text={prop.article.shortText} />
          </li>
        </article>
  );
};

export default ArticleListItem;
