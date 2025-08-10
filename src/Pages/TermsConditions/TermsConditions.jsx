import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TermsConditions = () => {
    return (
         <div className="max-w-5xl mx-auto py-16 px-4">
            
                <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10">
                    Terms & <span className="text-black">Conditions</span>
               
            </h1>

           
                <div data-aos="fade-up" data-aos-delay="300" className="space-y-5 text-lg leading-8">
                    <p><span className="font-semibold">1. User Responsibility:</span> Users must provide accurate information when submitting lost or found items.</p>
                    <p><span className="font-semibold">2. Data Privacy:</span> We respect your privacy. Your personal information will not be shared publicly without consent.</p>
                    <p><span className="font-semibold">3. Misuse:</span> Any misuse of this platform (e.g., posting false items) may result in account suspension.</p>
                    <p><span className="font-semibold">4. Liability:</span> WhereIsIt is not responsible for unsuccessful recoveries or fraudulent interactions between users.</p>
                    <p><span className="font-semibold">5. Updates:</span> These terms may change at any time. Continued use of the platform means you agree to the new terms.</p>
                </div>
            
        </div>
    );
};

export default TermsConditions;