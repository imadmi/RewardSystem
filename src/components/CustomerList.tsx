import { useEffect, useState } from "react";
import { User } from "../types";
import { Skeleton } from "@mui/material";

const fetchUsers = async (): Promise<User[]> => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
  const response = await fetch(url, { method: "GET", headers });
  if (response.ok) {
    return response.json();
  }
  return [];
};

const UserTableHeader = () => (
  <div
    className="h-12 min-h-12 flex items-center rounded-lg 
  flex-row bg-[#34517D] text-white font-bold uppercase justify-between"
  >
    <div className="flex flex-[0.2] font-mono justify-center">id</div>
    <div className="flex flex-[0.2] justify-start items-start">name</div>
    <div className="flex-[0.3] justify-start hidden sm:flex md:hidden lg:flex">
      email
    </div>
    <div className="flex flex-[0.4] justify-center">Points earned today</div>
  </div>
);

const UserTableRow = ({ user, index }: { user: User; index: number }) => (
  <div
    className={`${
      index % 2 === 0 ? "bg-[#8BB6A2] bg-opacity-10" : "bg-gray-100"
    } h-12 min-h-12 flex items-center rounded-lg flex-row justify-between`}
  >
    <div className="flex flex-[0.2] font-mono justify-center">{index}</div>
    <div className="flex flex-[0.2] justify-start items-start">
      {user.username}
    </div>
    <div className="flex-[0.3] justify-start hidden sm:flex md:hidden lg:flex">
      {user.email}
    </div>
    <div className="flex flex-[0.4] justify-center font-mono">
      {user.address.number}
    </div>
  </div>
);

export const LoadingSkeleton = () => (
  <>
    <Skeleton variant="rectangular" className="h-12 min-h-12 rounded-md" />
    <Skeleton variant="rectangular" className="h-12 min-h-12 rounded-md" />
    <Skeleton variant="rectangular" className="h-12 min-h-12 rounded-md" />
    <Skeleton variant="rectangular" className="h-12 min-h-12 rounded-md" />
  </>
);

const CustomerList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadUsers();
  }, []);

  return (
    <div
      className="flex flex-1 p-4 md:p-8 lg:p-20 flex-col 
    overflow-y-auto h-full font-sans"
    >
      <h1
        data-cy="title"
        className="font-sans text-5xl font-bold text-gray-800"
      >
        Customers
      </h1>
      <div className="flex items-center flex-col rounded-3xl h-full">
        <div
          className="flex flex-col w-full mt-[10%] h-[70%] 
        gap-4 bg-white rounded-3xl p-4 shadow"
        >
          <UserTableHeader />
          <div className="flex flex-col gap-2 h-full overflow-y-auto">
            {users.length == 0 ? (
              <LoadingSkeleton />
            ) : (
              users.map((user, index) => (
                <UserTableRow key={user.id} user={user} index={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
