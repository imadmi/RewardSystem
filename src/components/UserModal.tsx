import { useEffect, useState } from "react";
import { User } from "../types";
import { LoadingSkeleton } from "./CustomerList";


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
      className="h-12 min-h-12 flex items-center rounded-lg flex-row 
              bg-[#34517D] text-white font-bold uppercase "
    >
      <div className="flex-[0.2] text-center"> id</div>
      <div className="flex-[0.3] text-start">name</div>
      <div className="flex-[0.5] text-start justify-center">email</div>
    </div>
  );
  
  const UserTableRow = ({
    user,
    index,
    handleClick,
  }: {
    user: User;
    index: number;
    handleClick: (user: string, email: string) => void;
  }) => (
    <button
      onClick={() => handleClick(user.username, user.email)}
      key={user.id}
      className="bg-gray-100 h-12 min-h-12 flex items-center 
            rounded-lg flex-row hover:bg-[#8BB6A2] hover:bg-opacity-30"
    >
      <div className="flex-[0.2] text-center font-mono"> {index}</div>
      <div className="flex-[0.3] text-start">{user.username}</div>
      <div className="flex-[0.5] text-start">{user.email}</div>
    </button>
  );
  
  export const Modal = ({
    setOpen,
    setreceiver,
    setreceiverEmail,
  }: {
    setOpen: (boolean: boolean) => void;
    setreceiver: (string: string) => void;
    setreceiverEmail: (string: string) => void;
  }) => {
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
  
    const handleClick = (user: string, email: string) => {
      setOpen(false);
      setreceiver(user);
      setreceiverEmail(email);
    };
  
    return (
      <div
        className="fixed top-0 left-0 h-screen w-screen flex flex-1 z-10 
        backdrop-blur justify-center items-center bg-black bg-opacity-20"
      >
        <div
          className=" flex flex-[0.9] md:flex-[0.7] lg:flex-[0.5] 
        h-[50%] bg-white p-4 rounded-lg relative"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-5 
          rounded-full bg-gray-300 border-0 border-black size-7 text-center 
          align-middle hover:bg-red-400 hover:text-white hover:border-0"
          >
            X
          </button>
          <div className="flex flex-col w-full mt-10">
            <UserTableHeader />
            <div className="flex flex-col gap-2 h-full overflow-y-auto mt-2">
              {users.map((user, index) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  index={index}
                  handleClick={handleClick}
                />
              ))}
              <div className="flex flex-col gap-2 h-full overflow-y-auto">
                {users.length == 0 && <LoadingSkeleton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  