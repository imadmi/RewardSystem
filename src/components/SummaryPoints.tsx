function SummaryPoints() {
  return (
    <div className="flex flex-1 p-20 flex-col overflow-y-auto h-full">
      <div className="font-sans text-5xl font-bold text-gray-800">
        Points Summary
      </div>
      <div className="flex items-center flex-col rounded-3xl h-full text-gray-700">
        <div
          className="flex flex-col lg:flex-row w-full mt-[17%] 
        h-full gap-4 pb-10 md:pb-0"
        >
          <div
            className="bg-white rounded-3xl w-full flex p-4 
          flex-col h-56 shadow-md"
          >
            <div className="text-center text-[#34517D] font-mono text-xl">TODAY</div>
            <div className="text-4xl mt-12 lg:mt-16 text-center font-mono  ">
              09
            </div>
          </div>
          <div
            className="bg-white rounded-3xl w-full flex p-4 
          flex-col h-56 shadow-md"
          >
            <div className="text-center text-[#34517D] font-mono text-xl">
              LAST 7 DAYS
            </div>
            <div className="text-4xl mt-12 lg:mt-16 text-center font-mono ">
              21
            </div>
          </div>
          <div
            className="bg-white rounded-3xl w-full flex p-4 
          flex-col h-56 shadow-md"
          >
            <div className="text-center text-[#34517D] font-mono text-xl">
            LAST 30 DAYS
            </div>
            <div className="text-4xl mt-12 lg:mt-16 text-center font-mono ">
              54
            </div>
          </div>
          <div
            className="bg-white rounded-3xl w-full flex p-4 
          flex-col h-56 shadow-md"
          >
            <div className="text-center text-[#34517D] font-mono text-xl">
              POINTS REDEEMED
            </div>
            <div className="text-4xl mt-12 lg:mt-16 text-center font-mono ">
              435
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPoints;
