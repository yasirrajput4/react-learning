export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          This is the about page of our React application.
        </p>
      </div>
    </div>
  );
}
