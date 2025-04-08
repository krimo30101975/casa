import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from '../pages/HomePage';
import LogementPage from '../pages/LogementPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

function MyRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logement/:id" element={<LogementPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default MyRouter;