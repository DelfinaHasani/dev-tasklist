"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Ensure you have 'next' installed and configured

type Booking = {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
};

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Booking[] = await response.json();
        setBookings(data);
      } catch (error) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <Link href={`/booking/${booking.id}`}>
              A Booking on {new Date(booking.date).toLocaleDateString()} starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
