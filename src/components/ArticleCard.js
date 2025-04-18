import React from 'react';
import '../index.css';

const ArticleCard = ({ article, onReadMore }) => (
  <div className="blog-card">
    <img src={article.cover_image || article.social_image} alt={article.title} className="blog-card-img" />
    <div className="blog-card-body">
      <span className="tag">Article</span>
      <h2 className="blog-card-title">{article.title}</h2>
      <p className="author-name">{article.user.name}</p>
      <button className="read-more-btn" onClick={() => onReadMore(article)}>
        Read more
      </button>
    </div>
  </div>
);

export default ArticleCard;