"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingList from '../../components/BookingList'; 
import BookingDetail from '../../components/BookingDetail';  
import NewBookingPage from './new-booking/page'; // Import the new booking page


const Page: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingList />} />
        <Route path="/booking/:id" element={<BookingDetail />} />
        <Route path="/new-booking" element={<NewBookingPage />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default Page;
