const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          PHÒNG ĐÀO TẠO 
        </h2>

        <div className="space-y-1 text-sm sm:text-base">
          <p>Trung Tâm Ngoại Ngữ IDP.</p>
          <p>Khu phố 6, P.Tân Mai, Tp.Biên Hòa, Đồng Nai.</p>
          <p className="flex items-center justify-center flex-wrap gap-1">
            <span>Điện thoại: (028) 393 3939,</span>
            <span>
              Ext: <span className="text-yellow-400">113</span>(Hệ từ xa qua
              mạng), <span className="text-yellow-400">112</span>(Hệ chính quy).
            </span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:phongdaotao@IDP.edu.vn"
              className="text-blue-400 hover:underline"
            >
              phongdaotao@IDP.edu.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
