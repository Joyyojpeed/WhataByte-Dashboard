"use client"; // Mark this as a Client Component

import { useState } from 'react';
import Navbar from '../components/Navbar';
import DashboardSidebar from '../components/DashboardSidebar';
import QuickStatistics from '../components/QuickStatistics';
import ComparisonGraph from '../components/ComparisonGraph';
import SyllabusAnalysis from '../components/SyllabusAnalysis';
import QuestionAnalysis from '../components/QuestionAnalysis';
import SubjectInfo from '@/components/SubjectInfo';
import UpdateModal from '@/components/UpdateModal';

export default function Home() {
  const [rank, setRank] = useState('1'); // Default rank
  const [percentile, setPercentile] = useState('30'); // Default percentile
  const [score, setScore] = useState('12'); // Default score
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (data) => {
    // Update Quick Statistics state
    setRank(data.rank);
    setPercentile(data.percentile);
    setScore(data.score);

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row animate-fade-in">
        {/* Left Side: Dashboard Sidebar */}
        <div className="w-full md:w-1/5 p-2 animate-slide-in-left">
          <DashboardSidebar />
        </div>

        {/* Middle Section: Quick Statistics and Comparison Graph */}
        <div className="w-full md:w-3/5 p-6 animate-slide-in-up">
          {/* Subject Info with Update Button */}
          <SubjectInfo onUpdateClick={() => setIsModalOpen(true)} />

          {/* Quick Statistics */}
          <QuickStatistics rank={rank} percentile={percentile} score={score} />

          {/* Comparison Graph */}
          <ComparisonGraph percentile={parseInt(percentile)} />
        </div>

        {/* Right Side: Syllabus Wise Analysis and Question Analysis */}
        <div className="w-full md:w-2/5 p-6 animate-slide-in-right">
          <SyllabusAnalysis />
          {/* Pass the score as a prop to QuestionAnalysis */}
          <QuestionAnalysis score={Number(score) || 0} />
        </div>
      </div>

      {/* Update Modal */}
      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialRank={rank}
        initialPercentile={percentile}
        initialScore={score}
      />
    </>
  );
}