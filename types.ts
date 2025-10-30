export interface Review {
  author: string;
  rating: number; // out of 5
  comment: string;
}

export interface Movie {
  id: string;
  title: string;
  type: 'Bollywood' | 'Hollywood';
  cast: string[];
  genre: string[];
  languages: string[];
  subtitles: string[];
  posterURL: string;
  synopsis: string;
  runtime: number; // in minutes
  rating: number;
  reviews?: Review[];
}

export interface Trailer {
    id: string;
    title: string;
    thumbnailUrl: string;
}

export interface Theatre {
  id: string;
  city: string;
  name: string;
  screens: { screenNo: number; type: '2D' | '3D' }[];
}

export interface Showtime {
  id: string;
  movieId: string;
  theatreId: string;
  screenNo: number;
  startTime: string; // ISO string
  pricePerSeat: number;
  language: string;
  subtitles: boolean;
  movie?: Movie;
  theatre?: Theatre;
}

export enum SeatStatus {
  Available = 'available',
  Held = 'held',
  Booked = 'booked',
  Selected = 'selected',
}

export enum SeatType {
  Regular = 'regular',
  VIP = 'vip',
  Aisle = 'aisle',
  Unavailable = 'unavailable',
}

export interface Seat {
  id: string;
  label: string;
  row: string;
  col: number;
  type: SeatType;
  status: SeatStatus;
  priceMultiplier: number;
}

export interface SeatLayout {
  rows: string[];
  cols: number;
  seats: Seat[];
}

export interface SeatHold {
  id: string;
  showtimeId: string;
  seatIds: string[];
  holdExpiresAt: string; // ISO string
}

export interface Booking {
  id: string;
  showtimeId: string;
  userId: string;
  seats: Seat[];
  totalAmount: number;
  paymentStatus: 'SUCCESS' | 'PENDING' | 'FAILED';
  qrCode: string; // URL or data for QR code
  createdAt: string; // ISO string
  movie: Movie;
  theatre: Theatre;
  showtime: Showtime;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  isGuest: boolean;
}