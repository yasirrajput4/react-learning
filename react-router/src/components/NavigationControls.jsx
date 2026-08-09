import { useNavigate } from "react-router-dom";

const NavigationControls = () => {
  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center space-x-3">
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          onClick={() => navigate(1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
export default NavigationControls;
