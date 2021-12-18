import React, { useEffect, useState } from 'react'

// react router
import { useParams } from 'react-router-dom';

// blockchain
import Web3 from 'web3';
import ABI from '../../abis/Blog.json';

// custom components
import Navbar from '../../components/navbar/Navbar';
import AuthorCard from '../../components/author-card/AuthorCard';
import ShareArticle from '../../components/share-article/ShareArticle';
import RelatedBlogs from '../../components/related-blogs/RelatedBlogs';

// style
import './Blog.css';
import Footer from '../../components/footer/Footer';


const Blog = () => {
    const [blog, setBlog] = useState();

    const { id } = useParams();

    useEffect(() => {
        const srollTop = async () => {
            window.scrollTo(0, 0);

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
            const blogContract = new web3.eth.Contract(ABI.abi, ABI.networks[5777].address);

            const blogDetail = await blogContract.methods.titleToData(id).call();
            setBlog(blogDetail);
        };
        srollTop();
    }, []);

    return (
        <>
            <Navbar />
            
            <div className='blog'>

                <img
                    className='blog_img'
                    src={blog?.imageUrl}
                    alt='blog-image'
                />

                <div className='blog_content'>
                    
                    <div className='blog_date'>
                        <h3>{blog?.authorName}</h3>
                    </div>
                    
                    <h1>{blog?.title}</h1>

                    <div className='blog_para'>
                        
                        <p>{blog?.body}</p>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                    
                    </div>

                    <ShareArticle />
                    <AuthorCard />

                </div>

            </div>

            <RelatedBlogs />

            <Footer />
        </>
    )
}

export default Blog
