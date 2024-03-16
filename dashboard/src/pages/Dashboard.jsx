import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import SearchBar from '../components/forms/SearchBar';

// import "../styles/app.scss"
const Dashboard = () => {
  return (
    <div className='adminContainer '>

      {/* sidebar */}
     <AdminSidebar />
 
      {/* main */}
      <main> 
      Dashboard


      <SearchBar/>
      </main>
    </div>
  );
};


export default Dashboard;