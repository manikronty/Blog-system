import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/ArticleCard';
import '../index.css';

const BlogHome = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('https://dev.to/api/articles')
      .then(res => setArticles(res.data.slice(0, 100)))
      .catch(err => setError("Failed to load articles"))
      .finally(() => setLoading(false));
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <p>Loading articles...</p>}
      {error && <p className="error-msg">{error}</p>}

      {selectedArticle && (
        <div className="article-detail">
          <div className='blogart'>
            <div className='art'>
              <img className="image" src={selectedArticle.cover_image || selectedArticle.social_image} alt={selectedArticle.title} />
              <h2>{selectedArticle.title}</h2>
              <p>{selectedArticle.user.name}</p>
              <p>{selectedArticle.description}</p>
              <button onClick={() => setSelectedArticle(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div className="blog-cards">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} onReadMore={setSelectedArticle} />
        ))}
      </div>
    </div>
  );
};

export default BlogHome;