import React from 'react';
import './BlogCard.css';

// react-router
import { useHistory } from 'react-router-dom';

const BlogCard = ({ title, blogNumber, author, imageUrl }) => {
    const history = useHistory();

    return (
        <div className='home_topPick-left'>
                
            <img
                src={imageUrl}
                alt="blog-img"
            />

            <div className="home_newsContent">
                <h3 onClick={() => history.push(`/blog/${blogNumber}`)}>{title}</h3>
                    
                <p>
                    <span>{author}</span>
                </p>
            </div>

        </div>
    )
}

export default BlogCard
