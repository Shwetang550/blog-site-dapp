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
    const [contract, setContract] = useState();
    const [numberOfBlogs, setNumberOfBlogs] = useState();

    useEffect(() => { 
        const fetchData = async () => { 

            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

            const balance = await web3.eth.getBalance(accounts[0], (err, bal) => console.log(web3.utils.fromWei(bal, 'ether')));

            const blogContract = new web3.eth.Contract(ABI.abi, ABI.networks[5777].address);
            setContract(blogContract);

            const blogNumber = await blogContract.methods.blogNumber().call();

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
                        <p>Growth - December 7, 2020</p>
                        <p>Written by Shwetang Singh</p>
                    </div>
                    
                    <h2>How to handle shipping and delivery during a world-wide pandemic</h2>

                    <img
                        src="https://media.istockphoto.com/photos/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-at-picture-id1221101939?b=1&k=20&m=1221101939&s=170667a&w=0&h=2m-uIV5HQdCuIocqZlxWMij9jyfcf7BNNr7egiGPIDM="
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
