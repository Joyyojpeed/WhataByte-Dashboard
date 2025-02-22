import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import Image from "next/image";

export default function ComparisonGraph({ percentile }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance if it exists
    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    // Custom student distribution data
    const customDistribution = [
      { x: 0, y: 5 },   // 5 students at 0th percentile
      { x: 10, y: 10 }, // 10 students at 10th percentile
      { x: 20, y: 15 }, // 15 students at 20th percentile
      { x: 30, y: 20 }, // 20 students at 30th percentile
      { x: 40, y: 25 }, // 25 students at 40th percentile
      { x: 50, y: 20 }, // 20 students at 50th percentile
      { x: 60, y: 15 }, // 15 students at 60th percentile
      { x: 70, y: 30 }, // 30 students at 70th percentile
      { x: 80, y: 10 }, // 10 students at 80th percentile
      { x: 90, y: 5 },  // 5 students at 90th percentile
      { x: 100, y: 2 }, // 2 students at 100th percentile
    ];

    // Function to interpolate y-value for any given percentile
    const interpolateYValue = (x) => {
      // Find the two nearest points in the distribution
      let lowerPoint = customDistribution[0];
      let upperPoint = customDistribution[customDistribution.length - 1];

      for (let i = 0; i < customDistribution.length - 1; i++) {
        if (customDistribution[i].x <= x && customDistribution[i + 1].x >= x) {
          lowerPoint = customDistribution[i];
          upperPoint = customDistribution[i + 1];
          break;
        }
      }

      // Linear interpolation formula: y = y1 + ((x - x1) * (y2 - y1)) / (x2 - x1)
      const y =
        lowerPoint.y +
        ((x - lowerPoint.x) * (upperPoint.y - lowerPoint.y)) / (upperPoint.x - lowerPoint.x);

      return y;
    };

    // Get the interpolated y-value for the user's percentile
    const userYValue = interpolateYValue(percentile);

    // Create new chart instance
    chartRef.current.chartInstance = new Chart(ctx, {
      type: "scatter", // Use scatter plot for precise points
      data: {
        datasets: [
          {
            label: "Student Distribution",
            data: customDistribution, // Custom student distribution
            borderColor: "black", // Line color
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Fill color
            borderWidth: 1, // Thinner line
            showLine: true, // Connect points with a line
            tension: 0.4, // Smooth curve
            pointRadius: 0, // Hide default points
          },
          {
            label: "Points",
            data: customDistribution.filter((point) => point.x % 20 === 0), // Only round numbers (0, 20, 40, 60, 80, 100)
            borderColor: "black", // Border color for points
            backgroundColor: "black", // Solid black fill for points
            borderWidth: 2,
            pointRadius: 6, // Size of the points
            pointStyle: "circle", // Shape of the points
          },
          {
            label: "Your Percentile",
            data: [{ x: percentile, y: userYValue }], // Red mark at user's percentile on the line
            borderColor: "rgba(255, 99, 132, 1)", // Red color
            backgroundColor: "rgba(255, 99, 132, 0.6)", // Red fill
            borderWidth: 2,
            pointRadius: 6, // Marker size
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "linear",
            min: -5, // Extend the X-axis slightly to the left
            max: 105, // Extend the X-axis slightly to the right
            ticks: {
              stepSize: 20, // X-axis labels: 0, 20, 40, 60, 80, 100
              callback: (value) => (value % 20 === 0 ? value : ""), // Show only required labels
              color: "black", // Color of the X-axis labels
              font: {
                size: 12, // Font size of the X-axis labels
              },
              tickLength: 10, // Adjust tick length
            },
            grid: {
              display: false, // Hide grid lines for X-axis
            },
            border: {
              display: true, // Show the X-axis line
            },
            title: {
              display: true,
              text: "Percentile", // X-axis label
              color: "black", // Color of the X-axis title
              font: {
                size: 14, // Font size of the X-axis title
                weight: "bold", // Bold font for the X-axis title
              },
            },
          },
          y: {
            display: false, // Hide Y-axis
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
        layout: {
          padding: {
            right: 80, // Add padding to the right to ensure the `100` label is visible
          },
        },
      },
    });
  }, [percentile]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 animate-fade-in">
      {/* Title */}
      <div className="flex"  >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Comparison Graph</h2>
      <div className="ml-2">
          <Image
            src="/Graph.png" // Replace with your image path
            width={36} // Adjust size as needed
            height={36}
            alt="Info Icon"
            className="opacity-80 mb-3 ml-11 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
        </div>

      {/* Description with Icon */}
      <div className="flex items-center mb-6">
        <p className="text-l text-gray-600">
          As you scored <strong>{percentile}%</strong> percentile, which is{" "}
          {percentile < 72 ? "lower" : "higher"} than the average percentile of{" "}
          <strong>72%</strong> of all the engineers who took this assessment.
        </p>
        {/* Small Image */}
       
      </div>

      {/* Graph Container */}
      <div className="relative w-full h-[400px]">
        <canvas ref={chartRef} className="animate-scale-in" />
      </div>
    </div>
  );
}