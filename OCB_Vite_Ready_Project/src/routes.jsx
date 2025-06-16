import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";

import CoursesPage from "./pages/CoursesPage";
import PGsPage from "./pages/PGsPage";
import GroceryPage from "./pages/GroceryPage";
import HangoutPage from "./pages/HangoutPage";
import SalonPage from "./pages/SalonPage";
import RentalPage from "./pages/RentalPage";
import TravelCommutePage from "./pages/TravelCommutePage";
import CoachingPage from "./pages/CoachingPage";
import ComparePage from "./pages/ComparePage";

export default function AppRoutes() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/courses-colleges" element={<CoursesPage />} />
          <Route path="/pgs-hostels" element={<PGsPage />} />
          <Route path="/grocery-essentials" element={<GroceryPage />} />
          <Route path="/hangout-leisure" element={<HangoutPage />} />
          <Route path="/salon-grooming" element={<SalonPage />} />
          <Route path="/rental-services" element={<RentalPage />} />
          <Route path="/travel-commute" element={<TravelCommutePage />} />
          <Route path="/coaching-institutes" element={<CoachingPage />} />
          <Route path="/compare-colleges" element={<ComparePage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
