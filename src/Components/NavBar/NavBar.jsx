import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Dropdown } from "antd";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Updated items array with onClick handler for Tra cứu
  const items = [
    {
      key: "1",
      label: "Bảng điều khiển",
    },
    {
      key: "2",
      label: "Lý Lịch - Sức khỏe - Hồ sơ SV",
    },
    {
      key: "3",
      label: <span onClick={() => navigate("/ket-qua-hoc-tap")}>Tra cứu</span>,
    },
    {
      key: "4",
      label: <span onClick={() => navigate("/nhap-diem")}>Nhập điểm</span>,
    },
    { 
      key: "5",
      label: "Đăng ký dịch vụ",
    },
    {
      key: "6",
      label: "Khảo sát môn lớp",
    },
    {
      key: "7",
      label: "Nộp KLTN",
    },
  ];

  const handleMobileTraCuuClick = () => {
    navigate("/ket-qua-hoc-tap");
    setIsMobileMenuOpen(false);
  };

  const handleMobileNhapDiemClick = () => {
    navigate("/nhap-diem");
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#2C5282] text-white">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center w-full">
          <Link to="/" className="p-2 hover:bg-blue-700">
            <FaHome className="text-2xl" />
          </Link>

          <div className="flex items-center flex-1">
            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Giới thiệu <MdKeyboardArrowDown />
              </button>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Thông báo <MdKeyboardArrowDown />
              </button>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Quy định - Hướng dẫn <MdKeyboardArrowDown />
              </button>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Kế hoạch năm
              </button>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Chương trình đào tạo <MdKeyboardArrowDown />
              </button>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700 flex items-center">
                Lịch <MdKeyboardArrowDown />
              </button>
            </div>

            <div className="group relative">
              <Dropdown
                menu={{ items }}
                placement="bottomLeft"
                trigger={["hover"]}
                overlayClassName="custom-dropdown"
              >
                <button className="p-2 hover:bg-blue-700 flex items-center">
                  Sinh viên <MdKeyboardArrowDown />
                </button>
              </Dropdown>
            </div>

            <div className="group relative">
              <button className="p-2 hover:bg-blue-700">Liên hệ - Góp ý</button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-4 text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <RiMenu3Line className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2C5282]">
          <Link to="/" className="block p-4 hover:bg-blue-700">
            <FaHome className="text-xl" />
          </Link>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Giới thiệu
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Thông báo
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Quy định - Hướng dẫn
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Kế hoạch năm
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Chương trình đào tạo
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Lịch
          </button>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button className="w-full text-left p-4 hover:bg-blue-700">
              Sinh viên
            </button>
          </Dropdown>
          <button
            onClick={handleMobileTraCuuClick}
            className="w-full text-left p-4 hover:bg-blue-700"
          >
            Tra cứu
          </button>
          <button
            onClick={handleMobileNhapDiemClick}
            className="w-full text-left p-4 hover:bg-blue-700"
          >
            Nhập điểm
          </button>
          <button className="w-full text-left p-4 hover:bg-blue-700">
            Liên hệ - Góp ý
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
