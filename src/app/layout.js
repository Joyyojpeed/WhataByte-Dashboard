import '../styles/globals.css';

export const metadata = {
  title: 'WhatBytes Dashboard',
  description: 'Dashboard for WhatBytes Internship',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}