// -- App Root: App shells the context/providers, header, and routing. 
// Slightly cleaned up for readability and human touch. Classic preamble below:
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
// Context providers
import { AuthProvider } from './context/AuthContext';
import { LocationProvider } from './context/LocationContext';
import { WishlistProvider } from './context/WishlistContext';
// Core UI
import Header from './components/Header';
// Pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import NotFoundPage from './pages/NotFoundPage';
import LocationSelectionPage from './pages/LocationSelectionPage';
import LocationRequired from './components/LocationRequired';
import BookingHistoryPage from './pages/BookingHistoryPage';
import WishlistPage from './pages/WishlistPage';

// Global react-query client
const queryClient = new QueryClient();

// Handles route transitions with animation
const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Show location select at root only */}
                <Route path="/" element={<LocationSelectionPage />} />
                {/* Everything below requires city selection */}
                <Route path="/now-showing" element={<LocationRequired><HomePage /></LocationRequired>} />
                {/* Shortcut route for movie detail modal */}
                <Route path="/movie/:id" element={<LocationRequired><HomePage /></LocationRequired>} />
                <Route path="/book/:showtimeId" element={<LocationRequired><BookingPage /></LocationRequired>} />
                <Route path="/confirmation/:bookingId" element={<LocationRequired><ConfirmationPage /></LocationRequired>} />
                <Route path="/history" element={<LocationRequired><BookingHistoryPage /></LocationRequired>} />
                <Route path="/wishlist" element={<LocationRequired><WishlistPage /></LocationRequired>} />
                {/* Whoops page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    );
};

// Container for blob background and header, wraps all page transitions
const AppContent: React.FC = () => {
  return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated blobs for a fun vibe (could theme later) */}
        <div className="animated-blob-1"></div>
        <div className="animated-blob-2"></div>
        <div className="relative z-10 min-h-screen">
          <div className="min-h-screen bg-black/20 backdrop-blur-lg">
              {/* Top nav/header bar */}
              <Header />
              <main className="pt-20">
                  <AnimatedRoutes />
              </main>
          </div>
        </div>
      </div>
  );
};

// TODO: If perf ever is an issue, try breaking up providers
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LocationProvider>
          <WishlistProvider>
            <HashRouter>
              <AppContent />
            </HashRouter>
          </WishlistProvider>
        </LocationProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;