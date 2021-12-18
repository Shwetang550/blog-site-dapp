import React, { useEffect, useState } from 'react';

// blockchain
import Web3 from 'web3';
import ABI from '../../abis/Blog.json';

// style
import './RelatedBlogs.css';

const RelatedBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => { 
        const fetchData = async () => { 

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
            const accounts = await web3.eth.getAccounts();

            const blogContract = new web3.eth.Contract(ABI.abi, ABI.networks[5777].address);

            const blogNumber = await blogContract.methods.blogNumber().call();

            for (let i = 1; i <= blogNumber; i++) {
                const blog = await blogContract.methods.titleToData(i).call();
                setBlogs(prev => [...prev, blog]);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='relatedBlogs'>
            
            <h2>Related Articles</h2>

            <div className='relatedBlogs-container'>
                {
                    blogs?.map(i => (
                        <div key={i} className='relatedBlog-card'>
                    
                            <img
                                src={i?.imageUrl}
                                alt='blog-img'
                            />

                            <div className='relatedBlog-cardContent'>
                                
                                <p>{i?.authorName}</p>

                                <h2>{i?.title}</h2>

                                <a href={`/blog/${i?.id}`}>Read article</a>
                                
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default RelatedBlogs
