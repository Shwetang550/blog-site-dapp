import React, { useEffect, useState } from 'react';
import './Home.css';

// blockchain
import Web3 from 'web3';
import ABI from '../../abis/Blog.json';

// custom components
import Navbar from '../../components/navbar/Navbar'
import GenreNav from '../../components/genre-nav/GenreNav'
import BlogCard from '../../components/blog-card/BlogCard';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [account, setAccount] = useState();
    const [homeBlog, setHomeBlog] = useState();

    useEffect(() => { 
        const fetchData = async () => { 

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

            // const balance = await web3.eth.getBalance(accounts[0], (err, bal) => console.log(web3.utils.fromWei(bal, 'ether')));

            const blogContract = new web3.eth.Contract(ABI.abi, ABI.networks[5777].address);

            const blogNumber = await blogContract.methods.blogNumber().call();

            const randomBlog = await blogContract.methods.titleToData(1).call();
            setHomeBlog(randomBlog);

            for (let i = 1; i <= blogNumber; i++) {
                const blog = await blogContract.methods.titleToData(i).call();
                setBlogs(prev => [...prev, blog]);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            
            {/* <div style={{width: '100%', marginTop: '75px'}}> */}
                <GenreNav />
            {/* </div> */}
            
            <div className='home'>
                
                <div className='home_recBlog'>

                    <div className='home_recBlog-des'>
                        <p>Written by <span>{homeBlog?.authorName}</span></p>
                    </div>
                    
                    <h2>{homeBlog?.title}</h2>
                    
                    <img
                        src={homeBlog?.imageUrl}
                        alt="blog-img"
                    />

                </div>

                <div className='home_otherContent'>
                    
                    <h2><span>Top Picks</span></h2>

                    <div className='home_topPick'>
                        
                        <div className="home_blogs">
                        
                            {
                                blogs?.map(i => (
                                    <BlogCard
                                        key={i.id}
                                        blogNumber={i.id}
                                        title={i.title}
                                        author={i.authorName}
                                        imageUrl={i.imageUrl}
                                    />
                                ))
                            }
                        
                        </div>
                        
                        <div className='home_topPick-right'>
                            <h2>Discover More</h2>

                            <div>

                                {
                                    ['Growth', 'Projects', 'productivity', 'popular', 'latest', 'financial',
                                    'self', 'javascript', 'machine learning', 'programming'].map(i => (
                                        <div
                                            key={i}
                                            className='home_topPick-right_tags'
                                        >
                                            <span>{i}</span>
                                        </div>
                                    ))
                                }
                            
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Home
