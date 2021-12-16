import React from 'react';
import './Home.css';

// custom components
import Navbar from '../../components/navbar/Navbar'
import GenreNav from '../../components/genre-nav/GenreNav'
import BlogCard from '../../components/blog-card/BlogCard';

const Home = () => {
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
                                [1, 2, 3, 4, 5].map(i => (
                                    <BlogCard
                                        key={i}
                                        title="How to handle shipping and delivery during a world-wide pandemic"
                                        date="December 7, 2020"
                                        author="Shwetang550"
                                        imageUrl="https://media.istockphoto.com/photos/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-at-picture-id1221101939?b=1&k=20&m=1221101939&s=170667a&w=0&h=2m-uIV5HQdCuIocqZlxWMij9jyfcf7BNNr7egiGPIDM="
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
        </>
    )
}

export default Home
