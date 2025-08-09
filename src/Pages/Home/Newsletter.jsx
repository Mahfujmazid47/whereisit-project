import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Subscribed Successfully! 🎉',
      text: 'Thank you for joining our newsletter. You’ll now get the latest lost & found updates!',
      icon: 'success',
      confirmButtonColor: '#a855f7',
      confirmButtonText: 'Awesome!'
    });
  };

  return (
    <section className=" lg:py-44 md:py-28 py-14 pb- px-6 md:px-20 mt-12 rounded-2xl shadow-lg">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500">
          Stay Updated with <span className="text-gray-800">WhereIsIt</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about newly added lost & found items, 
          recovery success stories, and helpful tips to keep your belongings safe.
        </p>

        {/* Form */}
        <form 
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full md:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-6 text-sm text-gray-500">
          We care about your privacy. Unsubscribe anytime.  
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
