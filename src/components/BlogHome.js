
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';



const BlogHome = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedArticle, setSelectedArticle] = useState(null);

  

  useEffect(() => {
    axios.get('https://dev.to/api/articles')
      .then(res => setArticles(res.data.slice(0, 100)))
      .catch(err => console.error(err));
  }, []);

  

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <>
    
    <div className="blog-container">
      
      <nav className="navbar">
        <div className="navbar-brand">MyBlog</div>
        <ul className="navbar-links">
          <li>Articles</li>
          <li>About</li>
          <li>Resources</li>
          <li>Categories</li>
        </ul>
        <div className="navbar-actions">
          <button className="login-btn">Log In</button>
          <button className="trial-btn">Add article</button>
        </div>
      </nav>

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

     
      <div className="blog-cards">
      {selectedArticle && (
  <div className="article-detail">
    <div className='blogart'>
        <div className='art'>
        <h2>{selectedArticle.title}</h2>
            <img className="image" src={selectedArticle.cover_image || selectedArticle.social_image} alt={selectedArticle.title} />
            <div className="setauthname">
                <p>Author : {selectedArticle.user.name}</p>
                <p>Tags : {selectedArticle.tags}</p>
                
                <p>Description : {selectedArticle.description}</p>
            </div>
            
            <button onClick={() => setSelectedArticle(null)}>Close</button>
        </div>
    </div>
  </div>
)}
        {filteredArticles.map(article => (
          <div key={article.id} className="blog-card">
            <img src={article.cover_image || article.social_image} alt={article.title} className="blog-card-img" />
            <div className="blog-card-body">
              <span className="tag">Article</span>
              <h2 className="blog-card-title">{article.title}</h2>
              <p className="author-name">{article.user.name}</p>
              <button  className="read-more-btn" onClick={() => setSelectedArticle(article)} >Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogHome;
