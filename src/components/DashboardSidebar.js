export default function DashboardSidebar() {
  return (
    <div className="w-26 bg-white p-4 shadow-md min-h-screen mt-4 rounded-lg animate-slide-in-left">
      {/* Dashboard Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h2>

      <ul className="space-y-4">
        {/* Skill Test Button with Icon */}
        <li>
          <button className="w-full text-gray-600 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-700 transition-all duration-200 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2" // Increased icon size
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl">Skill Test</span> {/* Increased text size */}
          </button>
        </li>

        {/* Internship Button with Icon */}
        <li>
          <button className="w-full text-gray-600 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-700 transition-all duration-200 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2" // Increased icon size
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15a24.98 24.98 0 01-8-1.308z" />
            </svg>
            <span className="text-xl">Internship</span> {/* Increased text size */}
          </button>
        </li>
      </ul>
    </div>
  );
}