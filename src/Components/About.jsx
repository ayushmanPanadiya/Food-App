import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 px-4 bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-2xl mb-16">
        <div className="text-7xl mb-4">🍕</div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About FoodApp</h1>
        <p className="text-gray-500 text-lg">
          We're on a mission to bring the best food from your favourite restaurants
          straight to your doorstep — hot, fresh, and fast.
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-8 mb-16">
        <div className="flex flex-col items-center bg-white px-10 py-6 rounded-2xl shadow-sm">
          <h2 className="text-4xl font-extrabold text-orange-500">500+</h2>
          <p className="text-gray-500 mt-1 font-semibold">Restaurants</p>
        </div>
        <div className="flex flex-col items-center bg-white px-10 py-6 rounded-2xl shadow-sm">
          <h2 className="text-4xl font-extrabold text-orange-500">1M+</h2>
          <p className="text-gray-500 mt-1 font-semibold">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center bg-white px-10 py-6 rounded-2xl shadow-sm">
          <h2 className="text-4xl font-extrabold text-orange-500">30 min</h2>
          <p className="text-gray-500 mt-1 font-semibold">Avg Delivery</p>
        </div>
        <div className="flex flex-col items-center bg-white px-10 py-6 rounded-2xl shadow-sm">
          <h2 className="text-4xl font-extrabold text-orange-500">50+</h2>
          <p className="text-gray-500 mt-1 font-semibold">Cities</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex gap-8 max-w-4xl w-full mb-16 items-center">
        <div className="text-8xl w-1/3 text-center">👨‍🍳</div>
        <div className="w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Story</h2>
          <p className="text-gray-500 mb-3">
            FoodApp was born in 2024 out of a simple frustration — great food was
            too hard to get. We set out to change that by partnering with the best
            local restaurants and building a seamless delivery experience.
          </p>
          <p className="text-gray-500">
            Today we serve over a million customers across 50+ cities in India,
            and we're just getting started. Every order we deliver is a promise
            kept — fresh food, on time, every time.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">What We Stand For</h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm w-1/3">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2">Speed</h3>
            <p className="text-gray-500 text-sm">Lightning fast delivery so your food arrives hot and fresh.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm w-1/3">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-500 text-sm">We partner only with restaurants that meet our quality standards.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm w-1/3">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-800 mb-2">Trust</h3>
            <p className="text-gray-500 text-sm">Transparent pricing, no hidden fees, and a hassle-free refund policy.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Meet the Team</h2>
        <div className="flex gap-6 justify-center">
          {[
            { name: "Ayushman", role: "Founder & CEO", emoji: "👨‍💻" },
            { name: "Ayushman P", role: "Head of Operations", emoji: "👨‍💻" },
            { name: "Mr. Ayushman", role: "Lead Developer", emoji: "👨‍🔧" },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm w-1/3">
              <div className="text-5xl mb-3">{member.emoji}</div>
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-orange-500 text-sm font-semibold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center bg-orange-500 text-white w-full max-w-4xl rounded-2xl py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Hungry? Let's fix that.</h2>
        <p className="mb-6 text-orange-100">Order from hundreds of restaurants near you.</p>
        <Link to="/">
          <button className="bg-white text-orange-500 font-bold px-8 py-3 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors duration-200">
            Order Now 🍔
          </button>
        </Link>
      </div>

    </div>
  );
};

export default About;