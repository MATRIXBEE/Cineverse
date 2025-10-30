Cineverse - Movie Ticket Booking Website

Cineverse is a modern web application designed for seamless movie ticket booking across multiple cities. It provides a smooth and engaging experience with options for selecting showtimes, seats, and cities, along with booking management and wishlisting. The interface is simple, responsive, and mobile-friendly.

Overview
Cineverse allows users to browse movies, check details, view trailers, and book tickets quickly. The system supports guest login, QR-based ticketing, and secure simulated payments, making the entire booking process efficient and enjoyable.

Features

1. Browse movies by city with posters and complete details.
2. Watch trailers, read reviews, and explore movie cast, genre, and ratings.
3. Choose showtimes and seats with real-time seat availability for regular and VIP options.
4. Book tickets as a guest without signing up.
5. Make payments using simulated UPI QR codes with confirmation feedback.
6. View booking history with QR codes for ticket verification.
7. Save movies in a wishlist for future reference.
8. Select locations easily from popular or searchable cities in India, the USA, and the UK.
9. Enjoy a responsive design that adapts perfectly to desktops and mobiles.
10. Experience smooth animations and transitions with Framer Motion.

Tech Stack and Dependencies
Frontend: React 19, TypeScript
UI and Animations: Framer Motion, Lucide React Icons
Routing: React Router DOM
State and Data Management: React Context, TanStack React Query (for fetching and mocking data)
QR Code Generation: qrcode.react
Build Tool: Vite

Major Packages
react
react-dom
react-router-dom (v7+)
@tanstack/react-query
framer-motion
lucide-react
qrcode.react
typescript
vite

Getting Started

Prerequisites
Install Node.js version 18 or newer.

Installation and Local Setup

1. Clone the repository
   git clone [https://github.com/MATRIXBEE/Cineverse]
   cd cineverse_-movie-ticket-booking

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

4. Open your browser and go to [http://localhost:5173]

Project Structure
pages - Main application pages like Home, Booking, Confirmation, History, and Wishlist.
components - Reusable parts such as modals, cards, and forms.
services - Handles API and data abstraction.
context - Manages global state for authentication, location, and wishlist.
assets - Contains static images and resources.

Notes
Authentication is not currently integrated; users can book tickets as guests.
All movie, booking, and city data is mocked for demo purposes but can easily be linked to a backend API.
Ensure that Node.js is updated and port 5173 is free before starting the app.

Enjoy a complete movie booking experience with Cineverse.
