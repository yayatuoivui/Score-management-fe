import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../../redux/action/userAction";
import { fetchSubjects } from "../../../redux/action/subjectAction";
import { createScore } from "../../../redux/action/scoreAction";

const InputScore = () => {
  const dispatch = useDispatch();
  const [idNumber, setIdNumber] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [process, setProcess] = useState(0);
  const [midterm, setMidterm] = useState(0);
  const [final, setFinal] = useState(0);
  const [date, setDate] = useState("");
  const subjects = useSelector((state) => state.subjects.subjects);

  useEffect(() => {
    const loadSubjects = async () => {
      await dispatch(fetchSubjects());
    };
    loadSubjects();
  }, [dispatch]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const userData = await dispatch(searchUsers(idNumber));
      console.log("Fetched User Data:", userData);
      setStudentInfo(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    const scoreData = {
      user_id: studentInfo.user_id,
      subject_id: selectedSubject,
      process,
      midterm,
      final,
      date,
    };

    try {
      await dispatch(createScore(scoreData));
    } catch (error) {
      console.error("Error creating score:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center"
      >
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          placeholder="Enter ID number"
          required
          className="border border-gray-300 rounded-md p-2 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>

      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 font-semibold">
          Select Subject:
        </label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject.subject_id} value={subject.subject_id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {studentInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex justify-between">
            <span className="font-semibold">Họ và tên:</span>
            <span>{studentInfo.fullname}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Ngày sinh:</span>
            <span>{formatDate(studentInfo.date_of_birth)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Giới tính:</span>
            <span>{studentInfo.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Mã SV:</span>
            <span>{studentInfo.ID_number}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Khoa:</span>
            <span>{studentInfo.department}</span>
          </div>
        </div>
      )}

      {studentInfo && (
        <form onSubmit={handleScoreSubmit} className="mt-6">
          <h3 className="font-semibold mb-2">Add Score:</h3>
          <div className="mb-4">
            <label className="block mb-1">Process:</label>
            <input
              type="number"
              value={process}
              onChange={(e) => setProcess(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Midterm:</label>
            <input
              type="number"
              value={midterm}
              onChange={(e) => setMidterm(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Final:</label>
            <input
              type="number"
              value={final}
              onChange={(e) => setFinal(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
          >
            Submit Score
          </button>
        </form>
      )}
    </div>
  );
};

export default InputScore;
