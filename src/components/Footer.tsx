import {
  EnvelopeOpenIcon,
  MagnifyingGlassCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 my-3">
      <div className="container mx-auto flex flex-col items-center">
        {/* Contact Information */}

        {/* Email */}
        <div className="text-center animate-fadeIn delay-100">
          <EnvelopeOpenIcon className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
          <p className="text-gray-400">Email us at:</p>
          <p className="font-bold">ianodad@gmail.com</p>
        </div>

        {/* Copyright */}
        <p className="mt-2 text-gray-400 animate-fadeIn delay-400">
          © 2023 DevOps. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
