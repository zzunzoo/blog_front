import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home - Zzunzoo";
  }, []);
  return (
    <div className="">
      <div className="h-screen bg-no-repeat bg-center bg-bg1 bg-cover opcaity-80 flex flex-col justify-center items-center">
        <span className="text-5xl text-white drop-shadow-[3px_3px_3px_#000]">
          Home
        </span>
        <span className="text-3xl text-white drop-shadow-[3px_3px_3px_#000] mt-2">
          준주의 낙서장
        </span>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) => (
          <div className="w-20 h-20 bg-blue-500 text-white" key={i}>
            {data}
          </div>
        ))}
        {/* <div className="w-20 h-20 bg-blue-500 text-white">무야호~</div> */}
      </div>
    </div>
  );
}

export default Home;
