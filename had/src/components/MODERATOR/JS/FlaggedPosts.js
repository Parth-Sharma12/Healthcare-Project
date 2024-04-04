import React,{useEffect} from 'react'
import '../CSS/FlaggedPosts.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PostCard from './PostCard';
export const FlaggedPosts = () => {
    const [flaggedPosts, setFlaggedPosts] = useState([]);
    const numberOfFlaggedPosts = 10;
    const fetchFlaggedPosts = async () => {
        try {
            // Perform fetch request to your backend API to fetch flagged posts data
            const response = await fetch('your-backend-api-url');
            const data = await response.json();
            setFlaggedPosts(data); // Set the fetched data to state
        } catch (error) {
            console.error('Error fetching flagged posts:', error);
        }
    };

    useEffect(() => {
        // Fetch flagged posts data when the component mounts
        fetchFlaggedPosts();
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };
  const disablePost = async (index) => {
    try {
        const updatedPosts = [...flaggedPosts];
        updatedPosts[index].IsDisable = 1; // Set IsDisable to 1
        setFlaggedPosts(updatedPosts); // Update state optimistically

        // Send the updated post data to the backend
        await fetch('your-backend-disable-post-api-url', {
            method: 'PUT', // Assuming you're using PUT method to update the post
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPosts[index]),
        });

        // If you need to refetch the data after disabling the post, uncomment the line below
        // fetchFlaggedPosts();
    } catch (error) {
        console.error('Error disabling post:', error);
    }
};
    return (
        <div className="app-container">
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg ">
                <img class="logo" src="images/logo.png" alt="Logo" />
                <a class="navbar-brand" href="#">Tranquil Minds</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                            
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <Link to="/QnA" style={linkStyle}>QnA's</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/Profile" style={linkStyle}>Profile</Link></a>
                        </li>

                    </ul>

                </div>
            </nav>
            <div className='main-content1'>
                <div className="img_moderator1">
                    <img className = "flag-img" src="images/flag3.png" alt="Column 1 Image" />
                </div>
                <div className='Posts'>
                {flaggedPosts.map((post, index) => (
                    <div className="column" key={index}>
                        <PostCard
                            key={index} // Make sure to use a unique key for each post
                            title={post.title}
                            description={post.description}
                            imageSrc={post.image}
                            userName={post.PostedBy}
                            postTime={post.upload_datetime}
                            onDisable={() =>disablePost(index)} // Add your disable post function
                            onUnflag={() => console.log(`Unflag post ${index}`)} // Add your unflag post function
                        />
                        </div>
                    ))} 
                </div>
                <div className='box'>
          <h3>Number of Flagged Posts</h3>
          <div className='circle'>{numberOfFlaggedPosts}</div>
        </div>

            </div>
        </div>

    );
}
