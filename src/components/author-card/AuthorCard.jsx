import React from 'react'

// style
import './AuthorCard.css';

const AuthorCard = () => {
    return (
        <div className='authorCard'>
            
            <img
                src='https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg'
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
