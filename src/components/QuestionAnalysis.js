export default function QuestionAnalysis({ score }) {
  // Ensure score is a valid number
  const validScore = Number(score) || 0;

  // Calculate the percentage of correct answers
  const totalQuestions = 15;
  const percentage = Math.round((validScore / totalQuestions) * 100);

  // Function to determine the gradient colors based on the percentage
  const getGradientColors = (percentage) => {
    if (percentage < 20) return { start: "#EF4444", end: "#DC2626" }; // Red
    if (percentage < 40) return { start: "#F97316", end: "#EA580C" }; // Orange
    if (percentage < 60) return { start: "#F59E0B", end: "#D97706" }; // Yellow
    if (percentage < 80) return { start: "#3B82F6", end: "#2563EB" }; // Blue
    return { start: "#10B981", end: "#059669" }; // Green
  };

  // Get gradient colors
  const { start, end } = getGradientColors(percentage);

  // Function to get a custom remark based on the score
  const getRemark = (score) => {
    if (score <= 3) return "You need more practice.";
    if (score <= 6) return "You can do better.";
    if (score <= 9) return "Good effort!";
    if (score <= 12) return "Almost there!";
    return "Excellent work!";
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Question Analysis</h2>
      <div className="flex flex-col items-center">
        {/* Ring Progress Bar with 3D Effect */}
        <div className="relative w-40 h-40" style={{ perspective: "1000px" }}>
          <div
            className="relative w-full h-full"
            style={{
              transform: "rotateX(60deg) rotateZ(45deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Outer Ring (3D Shadow) */}
            <div
              className="absolute w-full h-full rounded-full"
              style={{
                border: "8px solid rgba(0, 0, 0, 0.1)",
                boxShadow: `
                  0 8px 16px rgba(0, 0, 0, 0.15), /* Soft shadow for depth */
                  0 0 0 1px rgba(0, 0, 0, 0.05)   /* Subtle outline */
                `,
                transform: "translateZ(-10px)",
              }}
            ></div>

            {/* Progress Ring */}
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 36 36"
              style={{
                transform: "translateZ(10px)",
              }}
            >
              {/* Background Circle */}
              <path
                className="text-gray-200"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              {/* Progress Circle with Gradient */}
              <path
                className="text-transparent"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${percentage}, 100`}
                style={{
                  stroke: `url(#ring-gradient)`,
                }}
              />
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={start} />
                  <stop offset="100%" stopColor={end} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">{percentage}%</span>
          </div>
        </div>

        {/* Correct Answers and Remark */}
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-600">
            You scored <strong className="text-gray-800">{validScore}</strong> out of <strong className="text-gray-800">{totalQuestions}</strong>.
          </p>
          <p className="text-sm text-gray-600">{getRemark(validScore)}</p>
        </div>
      </div>
    </div>
  );
}