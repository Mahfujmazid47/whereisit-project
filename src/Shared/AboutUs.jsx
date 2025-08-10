import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Fade direction="up" triggerOnce>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About <span className="text-purple-400">Us</span>
        </h1>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          This project is a <strong>Lost and Found Website</strong>, a platform
          designed to connect individuals who have lost personal belongings
          with those who may have found them. Users can report lost items,
          browse found items, and interact to recover their belongings.
        </p>
      </Fade>

      <Fade direction="up" delay={400} triggerOnce>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mt-6">
          Developing this website provides practical experience in building
          full-stack applications, implementing user authentication, handling
          file uploads, managing databases, and integrating APIs. Our goal is
          to make it easier for people to reconnect with their valuable items
          while showcasing modern web development skills.
        </p>
      </Fade>

      <Fade direction="up" delay={600} triggerOnce>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To bridge the gap between those who have lost and those who have
              found valuable items, fostering a community of trust and help.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the go-to platform for lost and found cases, reducing
              the time and stress it takes to reunite people with their
              belongings.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Trust, community, and innovation drive everything we do, ensuring
              a safe and effective space for everyone.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUs;
