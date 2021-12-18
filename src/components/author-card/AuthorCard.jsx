import React from 'react'

// style
import './AuthorCard.css';

const AuthorCard = () => {
    return (
        <div className='authorCard'>
            
            <img
                src='https://cdn.iconscout.com/icon/free/png-256/person-2653741-2202553.png'
                alt='author-img'
            />

            <div className='author_details'>
                
                <p>Written by</p>

                <h3>Abc123</h3>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
            
            </div>
            
        </div>
    )
}

export default AuthorCard
