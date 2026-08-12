import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 px-4 py-16">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <svg
            className="h-10 w-10 text-orange-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
          User Profile
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 wrap-break-word">
          {userid}
        </h1>
      </div>
    </div>
  );
}

export default User;
