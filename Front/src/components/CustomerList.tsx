const users = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    pointsearned: 0,
    pointsredeemed: 0,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    pointsearned: 1,
    pointsredeemed: 1,
  },
  {
    id: 3,
    name: "imade Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
  {
    id: 4,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
  {
    id: 6,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
  {
    id: 7,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
  {
    id: 8,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    pointsearned: 2,
    pointsredeemed: 2,
  },
];

function CustomarList() {
  return (
    <div className="flex flex-1 p-4 md:p-20 flex-col overflow-y-auto h-full font-sans">
      <h1 data-cy='title' className="font-sans text-5xl font-bold text-gray-800">
        Customers
      </h1>
      <div className="flex items-center flex-col rounded-3xl h-full">
        <div className="flex flex-col w-full mt-[10%] h-[70%] gap-4 bg-white rounded-3xl p-4 shadow">
          <div className="h-12 min-h-12 flex items-center rounded-lg flex-row bg-[#34517D] text-white font-bold uppercase">
            <div className="flex flex-[0.1] text-center justify-center"> id</div>
            <div className="flex sm:flex-[0.2] flex-[0.4] md:flex-[0.5] text-center">name</div>
            <div className=" flex-[0.4] text-center hidden sm:flex md:hidden lg:flex">email</div>
            <div className="flex sm:flex-[0.3] flex-[0.5] text-center justify-center">pointsearned</div>
          </div>
          <div className="flex flex-col gap-2 h-full overflow-y-auto">
            {users.map((user, index) => (
              <div
                key={user.id}
                className={`${
                  user.id % 2 == 0
                    ? "bg-[#8BB6A2] bg-opacity-30"
                    : "bg-gray-100"
                } h-12 min-h-12 flex items-center rounded-lg flex-row`}
              >
                <div className="flex flex-[0.1] text-center font-mono justify-center"> {index}</div>
                <div className="flex sm:flex-[0.2] flex-[0.4]  md:flex-[0.5]  text-center">{user.name}</div>
                <div className="flex-[0.4] text-center hidden sm:flex md:hidden lg:flex">{user.email}</div>
                <div className="flex sm:flex-[0.3] flex-[0.5] text-center font-mono justify-center">
                  {user.pointsearned}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomarList;
