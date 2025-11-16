import React from "react";

const CyberLines = () => {
  return (
    <>
      {/* Left Line */}
      <div className="fixed top-0 bottom-0 left-20 w-[1px] bg-[#ff5e00] z-50">
        <div className="absolute -left-[9px] top-20 w-5 h-5 bg-[#ff5e00] rounded-full"></div>
        <div className="absolute -left-[9px] bottom-20 w-5 h-5 bg-[#ff5e00] rounded-full"></div>
      </div>

      {/* Right Line */}
      <div className="fixed top-0 bottom-0 right-20 w-[1px] bg-[#ff5e00] z-50">
        <div className="absolute -left-[9px] top-20 w-5 h-5 bg-[#ff5e00] rounded-full"></div>
        <div className="absolute -left-[9px] bottom-20 w-5 h-5 bg-[#ff5e00] rounded-full"></div>
      </div>
    </>
  );
};

export default CyberLines;
