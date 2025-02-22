export default function SyllabusAnalysis() {
  // Function to determine the color based on the percentage
  const getProgressBarColor = (percentage) => {
    if (percentage < 25) return "bg-red-500"; // Red
    if (percentage < 41) return "bg-red-300"; // Lighter red
    if (percentage < 61) return "bg-orange-400"; // Orange
    if (percentage < 81) return "bg-blue-500"; // Blue
    return "bg-green-500"; // Green
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl text-gray-800 font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className="space-y-6">
        {/* HTML Tools, Forms, History */}
        <div className="p-2">
          <p className="text-gray-600 mb-2">HTML Tools, Forms, History</p>
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${getProgressBarColor(80)}`}
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="text-sm   text-gray-950 font-medium">80%</span>
          </div>
        </div>

        {/* Tags & References in HTML */}
        <div className="p-2">
          <p className="text-gray-600 mb-2">Tags & References in HTML</p>
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${getProgressBarColor(60)}`}
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="text-sm   text-gray-950 font-medium">60%</span>
          </div>
        </div>

        {/* Tables & References in HTML */}
        <div className="p-2">
          <p className="text-gray-600 mb-2">Tables & References in HTML</p>
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${getProgressBarColor(24)}`}
                style={{ width: "24%" }}
              ></div>
            </div>
            <span className="text-sm   text-gray-950 font-medium">24%</span>
          </div>
        </div>

        {/* Tables & CSS Basics */}
        <div className="p-2">
          <p className="text-gray-600 mb-2">Tables & CSS Basics</p>
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${getProgressBarColor(96)}`}
                style={{ width: "96%" }}
              ></div>
            </div>
            <span className="text-sm text-gray-950 font-medium">96%</span>
          </div>
        </div>
      </div>
    </div>
  );
}