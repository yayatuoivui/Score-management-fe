import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: "Thông báo lịch thi cuối kỳ học kỳ 1 năm học 2024-2025",
      date: "14/11/2024 - 15:38",
      isNew: true,
    },
    {
      id: 2,
      title: "Thông báo Quyết định công nhận Tốt nghiệp đợt 4 năm 2024",
      date: "13/11/2024 - 14:55",
      isNew: true,
    },
    {
      id: 3,
      title:
        "[UIT-TALENTBRIDGE] Tham gia khảo sát CTĐT nhân lực ưu tú hướng doanh nghiệp",
      date: "12/11/2024 - 09:26",
      isNew: true,
    },
    {
      id: 4,
      title: "Thông báo Danh sách sinh viên dự kiến TN đợt 4 năm 2024",
      date: "07/11/2024 - 08:35",
      isNew: true,
    },
    {
      id: 5,
      title:
        "Thông báo lịch thi tập trung Giữa kỳ Đợt 2 học kỳ 1 năm học 2024-2025 (dành cho khóa tuyển sinh năm 2024)",
      date: "29/10/2024 - 15:18",
      isNew: false,
    },
  ];

  const announcements2 = [
    {
      id: 1,
      title:
        "Buổi tư vấn tuyển sinh Chương trình đào tạo trình độ Thạc sĩ đợt 3/2024",
      date: "30/09/2024 - 10:18",
      isNew: false,
    },
    {
      id: 2,
      title:
        "Thông báo quy định mức thu học phí trình độ ĐTĐH năm học 2024-2025",
      date: "07/08/2024 - 16:34",
      isNew: false,
    },
    {
      id: 3,
      title:
        "Thông báo Thời khóa biểu học kỳ 1 năm học 2024-2025 các lớp VB2 (đợt 2)",
      date: "07/11/2024 - 10:42",
      isNew: true,
    },
  ];

  const handleTraCuuClick = () => {
    navigate("/ket-qua-hoc-tap");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          {/* Search Box */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
              TÌM KIẾM
            </h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search this site..."
              className="w-full p-2 border rounded text-sm sm:text-base"
            />
          </div>

          {/* Account Info */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
              THÔNG TIN TÀI KHOẢN
            </h2>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Bảng điều khiển
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Đăng ký Xét Tốt nghiệp
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                ĐK Học bổng KKHT
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                ĐK Học bổng NNS
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Lịch Coi Thi - ĐK Coi thi
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Đăng ký bảng điểm
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Thông tin tài khoản
              </li>
              <li
                onClick={handleTraCuuClick}
                className="hover:text-blue-600 cursor-pointer transition-colors duration-200"
              >
                Tra cứu
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Đăng ký SHCD
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          {/* General Announcements */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-4">
              THÔNG BÁO CHUNG
            </h2>
            <ul className="space-y-2 sm:space-y-4">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="flex flex-col">
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-start text-sm sm:text-base"
                  >
                    <span className="mr-2 flex-shrink-0">→</span>
                    <span className="flex-grow">{announcement.title}</span>
                    {announcement.isNew && (
                      <span className="ml-2 text-red-500 text-xs sm:text-sm flex-shrink-0">
                        mới
                      </span>
                    )}
                  </a>
                  <span className="text-gray-500 text-xs sm:text-sm ml-6">
                    {announcement.date}
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-3 sm:mt-4">
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm sm:text-base"
              >
                Xem thêm »
              </a>
            </div>
          </div>

          {/* Secondary Announcements */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <h2 className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-4">
              THÔNG BÁO VĂN BẰNG 2
            </h2>
            <ul className="space-y-2 sm:space-y-4">
              {announcements2.map((announcement) => (
                <li key={announcement.id} className="flex flex-col">
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-start text-sm sm:text-base"
                  >
                    <span className="mr-2 flex-shrink-0">→</span>
                    <span className="flex-grow">{announcement.title}</span>
                    {announcement.isNew && (
                      <span className="ml-2 text-red-500 text-xs sm:text-sm flex-shrink-0">
                        mới
                      </span>
                    )}
                  </a>
                  <span className="text-gray-500 text-xs sm:text-sm ml-6">
                    {announcement.date}
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-3 sm:mt-4">
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm sm:text-base"
              >
                Xem thêm »
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
