import React,{ useState, useEffect }  from 'react'
import '../CSS/Unanswered.css';
import AnsweringCard from './AnsweringCard';
import { Link } from 'react-router-dom';
export const Unanswered = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  const fetchPosts = async () => {
    try {
      // Make an HTTP request to fetch posts from your backend API
      const response = await fetch('/api/posts'); // Modify the URL according to your backend API route
      const data = await response.json();
      setPosts(data); // Set the fetched posts to the state
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };  
  return (
    <div className="app-container">
    {/* Navbar */}
    <nav class="navbar navbar-expand-lg ">
    <img class = "logo" src="images/logo.png" alt="Logo" />
      <a class="navbar-brand" href="#">Tranquil Minds</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <a class="nav-link" href="#"> <Link to="/" style={linkStyle}>Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><b>View Posts</b></a>
          </li>
          
        
        </ul>

      </div>
    </nav>
    <div className='Main-content1'>
    <div className="vertical-column1">
    <img className="moving-img" src="images/unanswered3.png" alt="Moving Img" />
    </div>
    <div className='unanswered-ques'>
    {posts.map(post => (
            <AnsweringCard question={post.description} username={post.PostedBy} datetime={post.upload_datetime} />
    ))}
    </div>
    </div>


  </div>
)
};
