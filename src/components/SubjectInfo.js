"use client"; // Mark this as a Client Component
import Image from "next/image";

export default function SubjectInfo({ onUpdateClick }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-2">
      {/* Flex container for image, text, and button */}
      <div className="flex items-center">
        {/* Icon/Image on the Leftmost Side */}
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/htmllogo.webp" // Relative path to the image in the public folder
            width={72} // Set the width of the image
            height={72} // Set the height of the image
            alt="HTML Logo"
            className="object-cover" // Ensures the image fits well
          />
        </div>

        {/* Subject Name and Exam Details */}
        <div className="flex-1 min-w-0 ml-1"> {/* Reduced margin-left */}
          <p className="text-xl font-bold text-gray-800">Hyper Text Markup Language</p>
          <p className="text-sm text-gray-500 mt-2">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>

        {/* Update Button */}
        <button
          onClick={onUpdateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 mr-4 flex-shrink-0"
        >
          Update
        </button>
      </div>
    </div>
  );
}