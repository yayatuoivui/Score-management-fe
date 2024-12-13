import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../../redux/action/userAction";
import { fetchSubjects } from "../../../redux/action/subjectAction";
import { fetchScore } from "../../../redux/action/scoreAction";

const ScoreResult = () => {
  const dispatch = useDispatch();
  const [idNumber, setIdNumber] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);
  const [scores, setScores] = useState([]);
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

      const fetchedScores = await dispatch(fetchScore(userData.user_id));
      setScores(fetchedScores);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };

  const combinedData = subjects.map((subject) => {
    const score = scores.find((s) => s.subject_id === subject.subject_id);
    return {
      ...subject,
      process: score ? score.process : null,
      midterm: score ? score.midterm : null,
      final: score ? score.final : null,
      date: score ? score.date : null,
    };
  });

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
            <span className="font-semibold">Vai trò:</span>
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

      {combinedData.length > 0 && (
        <div className="mt-6">
          <h2 className="font-bold mb-4">Scores</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">STT</th>
                <th className="border border-gray-300 p-2">Tên môn học</th>
                <th className="border border-gray-300 p-2">Điểm QT</th>
                <th className="border border-gray-300 p-2">Điểm GK</th>
                <th className="border border-gray-300 p-2">Điểm CK</th>
                <th className="border border-gray-300 p-2">Ngày</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.map((data, idx) => (
                <tr key={data.id}>
                  <td className="border border-gray-300 p-2 text-center">
                    {idx + 1}
                  </td>
                  <td className="border border-gray-300 p-2">{data.name}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {data.process || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {data.midterm || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {data.final || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {data.date ? formatDate(data.date) : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScoreResult;
