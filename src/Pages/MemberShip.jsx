import React from "react";
import { Card } from "flowbite-react";
import { motion } from 'framer-motion';
const MemberShip = () => {
  return (
    <div className="my-10 mx-5">
      <h1 className="text-4xl font-bold text-center text-cyan-700 my-5">Paid Membership </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} 
      whileTap={{ scale: 0.1, transition: { duration: 0.3 } }} 
      transition={{ duration: 1 }}
      className="w-full overflow-auto shadow-2xl">
        <a>
          <h1
          
          className="text-2xl bg-cyan-900 p-2  font-bold tracking-tight text-white text-center rounded-t-lg dark:text-white">
            Elite Membership
          </h1>
        </a>
        <div className="mb-1 mt-2 p-3 ">
          <h1
          
          className="font-sm">
            Get Yearly Membership. Payment options. Choose your preferred
            EliteClub membership subscription! You can pay monthly or annually
            for your VIP membership!
          </h1>

          <div className="space-y-3 text-center mt-3 ">
            <span className="text-2xl font-bold bg-cyan-900 text-white px-2 rounded-md">
              Offers
            </span>
            <p className="font-sm underline font-semibold">
              Members-Only Forum
            </p>
            <p className=" font-sm font-semibold underline">
              Webinars and Workshops
            </p>

            <p className="font-sm font-semibold underline">Tech Challenges</p>
            <p className="font-sm font-semibold underline">Insider Reports</p>
          </div>
        </div>
        <div className="bg-cyan-900 flex p-3 items-center justify-between">
          <span className="text-3xl font-bold text-white">$ 90 / Year</span>
          <a className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            Purse now
          </a>
        </div>
      </motion.div>
      <motion.div
      
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} 
          whileTap={{ scale: 0.1, transition: { duration: 0.3 } }} 
          transition={{ duration: 1 }}className="w-full overflow-auto shadow-2xl">
        <a>
          <h5 className="text-2xl bg-cyan-700 p-2  font-bold tracking-tight text-white text-center rounded-t-lg dark:text-white">
            Pro Membership
          </h5>
        </a>
        <div className="mb-1 mt-2 p-3 ">
          <h3 className="font-sm">
            Get Yearly Membership. Payment options. Choose your preferred
            EliteClub membership subscription! You can pay monthly or annually
            for your VIP membership!
          </h3>

          <div className="space-y-3 text-center mt-3 ">
            <span className="text-2xl font-bold bg-cyan-700 text-white px-2 rounded-md">
              Offers
            </span>
            <p className="font-sm underline font-semibold">
              Members-Only Forum
            </p>
            <p className=" font-sm font-semibold underline">
              Webinars and Workshops
            </p>

            <p className="font-sm font-semibold underline">Tech Challenges</p>
            <p className="font-sm font-semibold underline">Insider Reports</p>
          </div>
        </div>
        <div className="bg-cyan-700 flex p-3 items-center justify-between">
          <span className="text-3xl font-bold text-white">$ 100 / Year</span>
          <a className="rounded-lg bg-cyan-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-700 dark:focus:ring-cyan-700">
            Purse now
          </a>
        </div>
      </motion.div>
      <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} 
      whileTap={{ scale: 0.1, transition: { duration: 0.3 } }} 
      transition={{ duration: 1 }}
      className="w-full overflow-auto shadow-2xl">
        <a>
          <h5 className="text-2xl bg-cyan-500 p-2  font-bold tracking-tight text-white text-center rounded-t-lg dark:text-white">
            Free Membership
          </h5>
        </a>
        <div className="mb-1 mt-2 p-3 ">
          <h3 className="font-sm">
            Get Yearly Membership. Payment options. Choose your preferred
            EliteClub membership subscription! You can pay monthly or annually
            for your VIP membership!
          </h3>

          <div className="space-y-3 text-center mt-3 ">
            <span className="text-2xl font-bold bg-cyan-500 text-white px-2 rounded-md">
              Offers
            </span>
            <p className="font-sm underline font-semibold">
              Members-Only Forum
            </p>
            <p className=" font-sm font-semibold underline">
              Webinars and Workshops
            </p>

            <p className="font-sm font-semibold underline">Tech Challenges</p>
            <p className="font-sm font-semibold underline">Insider Reports</p>
          </div>
        </div>
        <div className="bg-cyan-500 flex p-3 items-center justify-between">
          <span className="text-3xl font-bold text-white"> $ Free / Year </span>
          <a className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            Purse now
          </a>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default MemberShip;
