import {
  EnvelopeOpenIcon,
  MagnifyingGlassCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Phone */}
          <div className="text-center animate-fadeIn">
            <PhoneIcon className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-gray-400">Call us at:</p>
            <p className="font-bold">847-708-1261</p>
          </div>

          {/* Email */}
          <div className="text-center animate-fadeIn delay-100">
            <EnvelopeOpenIcon className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-gray-400">Email us at:</p>
            <p className="font-bold">Shrey.sadhukhan21@gmail.com</p>
          </div>

          {/* Address */}
          <div className="text-center animate-fadeIn delay-200">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-gray-400">Visit us at:</p>
            <address className="not-italic">
              2nd Street Friends Colony
              <br />
              Muradnagar, Ghaziabad 201206
              <br />
              India
            </address>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 animate-fadeIn delay-300 hover:text-gray-500">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-meta"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
              <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
            </svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500 hover:text-blue-400"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-gray-400 animate-fadeIn delay-400">
          © 2023 DevOps. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
