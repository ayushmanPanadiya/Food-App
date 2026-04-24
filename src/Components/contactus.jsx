import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 px-4">

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">We'd love to hear from you!</p>

      <div className="flex w-full max-w-4xl gap-8">

        {/* Left — Info */}
        <div className="flex flex-col gap-6 w-1/2 bg-orange-500 text-white p-8 rounded-2xl">
          <h2 className="text-xl font-bold">Get in Touch with Our Team</h2>
          <div>
            <p className="font-semibold"> Address :</p>
            <p className="text-sm mt-1">123 Food Street, Delhi, India</p>
          </div>
          <div>
            <p className="font-semibold"> Phone :</p>
            <p className="text-sm mt-1">+91 99999 99999</p>
          </div>
          <div>
            <p className="font-semibold"> Email :</p>
            <p className="text-sm mt-1">support@foodapp.com</p>
          </div>
          <div>
            <p className="font-semibold">Hours :</p>
            <p className="text-sm mt-1">Mon - Sun: 9am to 11pm</p>
          </div>
        </div>

        {/* Right — FAQ */}
        <div className="flex flex-col w-1/2 bg-white p-8 rounded-2xl shadow-md gap-4">
          <h2 className="text-xl font-bold text-gray-800">FAQs</h2>
          <div>
            <p className="font-semibold text-gray-700"> How long does delivery take?</p>
            <p className="text-sm text-gray-500 mt-1">Usually 30-45 minutes depending on your location.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">What payment methods do you accept?</p>
            <p className="text-sm text-gray-500 mt-1">UPI, credit/debit cards, net banking and cash on delivery.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700"> How do I cancel my order?</p>
            <p className="text-sm text-gray-500 mt-1">You can cancel within 2 minutes of placing the order.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700"> What is your refund policy?</p>
            <p className="text-sm text-gray-500 mt-1">Refunds are processed within 5-7 business days.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;