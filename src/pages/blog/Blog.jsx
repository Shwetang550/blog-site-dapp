import React, { useEffect } from 'react'

// style
import './Blog.css';

// custom components
import Navbar from '../../components/navbar/Navbar';
import AuthorCard from '../../components/author-card/AuthorCard';
import ShareArticle from '../../components/share-article/ShareArticle';
import RelatedBlogs from '../../components/related-blogs/RelatedBlogs';

const Blog = () => {

    useEffect(() => {
        const srollTop = () => {
            window.scrollTo(0, 0);
        };
        srollTop();
    }, []);

    return (
        <>
            <Navbar />
            
            <div className='blog'>

                <img
                    className='blog_img'
                    src='https://media.istockphoto.com/photos/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-at-picture-id1221101939?b=1&k=20&m=1221101939&s=170667a&w=0&h=2m-uIV5HQdCuIocqZlxWMij9jyfcf7BNNr7egiGPIDM='
                    alt='blog-image'
                />

                <div className='blog_content'>
                    
                    <div className='blog_date'>
                        <h3>Growth</h3>
                        <h3>December 7, 2020</h3>
                    </div>
                    
                    <h1>How to handle shipping and delivery during a world-wide pandemic ?</h1>

                    <div className='blog_para'>
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    </div>

                    <ShareArticle />
                    <AuthorCard />

                </div>

            </div>

            <RelatedBlogs />
        </>
    )
}

export default Blog
