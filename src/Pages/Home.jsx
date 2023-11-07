import React from 'react';
import Banner from "../Components/Layout/Banner";
import RecentBlog from './RecentBlog';

const Home = () => {
 
    return (
        <div>
      <h2>Home section</h2>   
      <div><Banner></Banner></div>
      <h2>Recent Post</h2> 
      <div><RecentBlog>hello</RecentBlog></div>



      
        </div>
    );
};

export default Home;Home