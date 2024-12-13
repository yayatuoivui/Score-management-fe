const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          PHÒNG ĐÀO TẠO ĐẠI HỌC
        </h2>

        <div className="space-y-1 text-sm sm:text-base">
          <p>Phòng A120, Trường Đại học Công nghệ Thông tin.</p>
          <p>Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</p>
          <p className="flex items-center justify-center flex-wrap gap-1">
            <span>Điện thoại: (028) 372 51993,</span>
            <span>
              Ext: <span className="text-yellow-400">113</span>(Hệ từ xa qua
              mạng), <span className="text-yellow-400">112</span>(Hệ chính quy).
            </span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:phongdaotaodh@uit.edu.vn"
              className="text-blue-400 hover:underline"
            >
              phongdaotaodh@uit.edu.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
