import React from 'react';
import Banner from "../Components/Layout/Banner";
import RecentBlog from './RecentBlog';
import MemberShip from './MemberShip';

const Home = () => {
 
    return (
        <div className="">
       
      <div><Banner></Banner></div>
      
      <div><RecentBlog></RecentBlog></div>
      <div><MemberShip></MemberShip></div>
      



      
        </div>
    );
};

export default Home;