import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  "Courses & Colleges",
  "PGs & Hostels",
  "Grocery & Essentials",
  "Hangout & Leisure",
  "Salon & Grooming",
  "Rental Services",
  "Travel & Commute",
  "Coaching Institutes",
  "Compare Colleges"
];

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-indigo-600">Off Campus Buddy</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {navLinks.map((label, i) => (
              <Link key={i} to={`/${label.toLowerCase().replace(/ & |\s+/g, "-")}`} className="hover:text-indigo-600">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">{children}</main>
      <footer className="bg-white text-center text-sm text-gray-500 py-4">
        © 2025 Off Campus Buddy. Made for students, by students.
      </footer>
    </div>
  );
}
