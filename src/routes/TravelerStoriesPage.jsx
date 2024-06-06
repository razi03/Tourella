import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TravelerStoriesImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import TravelerStoriesForm from "../components/TravelerStoriesForm"; // Ensure correct import

function TravelerStoriesPage() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={TravelerStoriesImg}
        title="TravelerStories"
        url="/"
        btnClass="hide"
      />
      <TravelerStoriesForm />
      <Footer />
    </>
  );
}

export default TravelerStoriesPage;
