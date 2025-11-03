import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './styles/global.scss';

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main">
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}
