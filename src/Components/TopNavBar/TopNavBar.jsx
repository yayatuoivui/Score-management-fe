import banner from "../../assets/banner.png";
const TopNavBar = () => {
  return (
    <div className="w-full bg-white">
      <img
        src={banner}
        alt="UIT Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default TopNavBar;
