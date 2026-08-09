import { useParams } from "react-router-dom";

const CourseDetail = () => {
  let params = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-md w-full">
        <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
          Course Info
        </span>
        <p className="mt-2 text-2xl font-bold text-gray-900 capitalize">
          {params.courseid} Course Detail
        </p>
      </div>
    </div>
  );
};
export default CourseDetail;
