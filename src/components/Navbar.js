import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center animate-fade-in">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Company Logo" width={300} height={300} />
      </div>
        

      {/* Right Side: User Profile */}
      <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-all duration-200">
        <span className="text-gray-700">Username</span>
        
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
}