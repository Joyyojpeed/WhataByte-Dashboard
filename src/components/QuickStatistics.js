import Image from 'next/image';

export default function QuickStatistics({ rank, percentile, score }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-4 animate-fade-in">
      {/* Title */}
      <h2 className="text-xl text-gray-800 font-bold mb-4">Quick Statistics</h2>

      {/* Columns with Icons and Vertical Separator */}
      <div className="flex flex-col md:flex-row">
        {/* Your Rank */}
        <div className="flex-1 pl-4 mb-4 md:mb-0 flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-4">
            <Image
              src="/Trophy.png" // Relative path to the image in the public folder
              width={22} // Set the width of the image
              height={22}
              alt="Your Rank Icon"                 
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-2xl text-gray-800 font-bold">{rank}</p>
            <p className="text-gray-400 text-l">Your Rank</p>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="w-full h-1 bg-gray-300 my-4 md:w-px md:h-auto md:mx-4 md:my-2"></div>

        {/* Percentile */}
        <div className="flex-1 pl-4 mb-4 md:mb-0 flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-4">
            <Image
              src="/Percentile.jpg" // Relative path to the image in the public folder
              width={36}
              height={36}
              alt="Percentile Icon"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-2xl text-gray-800 font-bold">{percentile}%</p>
            <p className="text-gray-400 text-l">Percentile</p>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="w-full h-1 bg-gray-300 my-4 md:w-px md:h-auto md:mx-4 md:my-2"></div>

        {/* Correct Answers */}
        <div className="flex-1 pl-4 flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-3">
            <Image
              src="/tickmark.png" // Relative path to the image in the public folder
              width={36}
              height={36}
              alt="Correct Answers Icon"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-2xl text-gray-800 font-bold">{score} / 15</p>
            <p className="text-gray-400 text-l">Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}