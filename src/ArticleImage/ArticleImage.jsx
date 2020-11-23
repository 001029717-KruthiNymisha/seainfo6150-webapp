import React from "react";
import PropTypes from "prop-types";
import styles from './ArticleImage.module.css';

const ArticleImage = (prop) => {
  return (
    <div>
    <img className={styles.image} src = {prop.url}></img>
    <h1 className={styles.title} src={prop.title}></h1>
    </div>
  );
};

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ArticleImage;