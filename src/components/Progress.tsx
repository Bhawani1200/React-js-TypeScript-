import { FaBook, FaCalendar, FaEye, FaUser } from "react-icons/fa";

const Progress = () => {
  return (
    <div className=" bg-blue-500">
      <div className="container">
        <div className="text-white flex justify-around items-center py-12">
          <div className="flex flex-col items-center">
            <FaUser className="text-5xl" />
            <span className="mt-5">10,000+ Users</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBook className="text-5xl" />
            <span className="mt-5">250+ Courses</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCalendar className="text-5xl" />
            <span className="mt-5">5+ Years</span>
          </div>
          <div className="flex flex-col items-center">
            <FaEye className="text-5xl" />
            <span className="mt-5">10M+ Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
