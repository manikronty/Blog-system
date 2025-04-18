// src/components/ArticleCard.js
import React, { useState } from 'react';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import '../index.css';

const ArticleCard = ({ article, onReadMore }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="blog-card">
      <img src={article.cover_image || article.social_image} alt={article.title} className="blog-card-img" />
      <div className="blog-card-body">
        <span className="tag">Article</span>
        <h2 className="blog-card-title">{article.title}</h2>
        <p className="author-name">Author: {article.user.name}</p>

        <div className="action-buttons">
            <div>
                <button className="read-more-btn" onClick={() => onReadMore(article)}>Read More</button>
            </div>
            
            <div className='likecomment'>
            <p className="like-count"> {likes}</p>
                <button className="icon-btn like-icon" onClick={handleLike}>
                    <FaThumbsUp />
                </button>
                   
            </div>
           
          
          
        </div>

        

        <div className="comment-section">
          <div>
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <ul className="comment-list">
            {comments.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
          </div>
            <div>
                <button className="icon-btn comment-icon" onClick={handleComment}>
                    <FaCommentDots />
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
