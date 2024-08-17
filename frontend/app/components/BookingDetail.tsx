"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example booking data (replace this with real data or API calls)
const bookings = [
  { id: 1, date: '2024-08-16', start_time: '10:00', doctor_name: 'Dr. Smith', service: 'Consultation', end_time: '11:00' },
  { id: 2, date: '2024-08-17', start_time: '14:00', doctor_name: 'Dr. Jones', service: 'Check-up', end_time: '15:00' },
];

const BookingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const booking = bookings.find((b) => b.id === parseInt(id!));

  if (!booking) {
    return <div>Booking not found</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <p>
        This Booking is with {booking.doctor_name} for {booking.service} and it ends on {booking.end_time}.
      </p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default BookingDetail;
