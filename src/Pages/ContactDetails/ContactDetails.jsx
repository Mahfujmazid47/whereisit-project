import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ContactDetails = () => {
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            
                <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10">
                    Contact <span className="text-black">Details</span>
                </h1>
            

            
                <div data-aos="fade-up" data-aos-delay="300" className="space-y-5 text-lg leading-8">
                    <p><span className="font-semibold text-purple-400">Address:</span> 123 Lost & Found Lane, Dhaka, Bangladesh</p>
                    <p><span className="font-semibold text-purple-400">Phone:</span> +880-1234-567890</p>
                    <p><span className="font-semibold text-purple-400">Email:</span> <a href="mailto:support@whereisit.com" className="text-purple-400 underline">support@whereisit.com</a></p>
                    <p><span className="font-semibold text-purple-400">Support Hours:</span> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                </div>
            
        </div>
    );
};

export default ContactDetails;