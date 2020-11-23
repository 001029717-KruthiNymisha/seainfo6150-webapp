import React, { useState } from 'react';
import HTMLText from "../HTMLText/HTMLText";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";

import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (prop) => {
 let buttonText = 'Show more';
    const [toggleData, setToggleText] = useState(false);
  return (
          <li  className={styles.container}>
          <article className={styles.article}>
           <ArticleImage url = {prop.article.image._url} title={prop.article.title}></ArticleImage>
            <h1 className={styles.title}>{prop.article.title}</h1>
{toggleData &&
                      <div>

                        <p className={styles.shortText}>{prop.article.shortText} </p>
                        <time className={styles.displyDate} datetime={prop.article.displyDate}>{prop.article.displayDate} </time>
                        <br/><br/>
                      </div>
                    }
           <ArticleTextToggleButton
                     buttonText = {toggleData?'Show less':'Show more'}
                     onClick={()=>{
                       if(toggleData){
                         setToggleText(false);
                       }else{
                         setToggleText(true);
                       }
                   }}>
           </ArticleTextToggleButton>
           </article>
          </li>

  );
};

export default ArticleListItem;
