"use client";

import React, { useState } from 'react';

const NewBookingPage: React.FC = () => {
  const [service, setService] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const booking = {
      service,
      doctor_name: doctorName,
      start_time: startTime,
      end_time: endTime,
      date
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Clear the form
        setService('');
        setDoctorName('');
        setStartTime('');
        setEndTime('');
        setDate('');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('An error occurred while creating the booking.');
    }
  };

  return (
    <div>
      <h1>New Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Service:
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Doctor Name:
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Start Time:
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            End Time:
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
};

export default NewBookingPage;
