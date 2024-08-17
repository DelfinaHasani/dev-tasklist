import { NextResponse } from 'next/server';

type Booking = {
  date: string;
  start_time: string;
  end_time: string;
  doctor_name: string;
  service: string;
};

export async function POST(request: Request) {
  try {
    const booking: Booking = await request.json();

    // Basic validation
    if (!booking.date || !booking.start_time || !booking.end_time || !booking.doctor_name || !booking.service) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Here, you would typically save the booking to a database.
    // For now, we’re just sending the data back as a response.
    return NextResponse.json({ message: 'Booking created successfully!', booking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
