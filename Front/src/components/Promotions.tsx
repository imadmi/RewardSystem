import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

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

function Promotions() {
  const [open, setOpen] = React.useState(false);
  const [receiver, setreceiver] = React.useState("Click to select a user");
  const [receiverEmail, setreceiverEmail] = React.useState(
    "example@example.com"
  );

  return (
    <div className="flex flex-1 p-4 md:p-20  flex-col overflow-y-auto h-full">
      <div className="font-sans text-5xl font-bold text-gray-800">
        Promotions
      </div>
      <div className="flex items-center flex-col rounded-3xl h-full">
        <div
          className="flex flex-col w-full mt-[8%] h-[80%] bg-white 
        shadow-md text-black rounded-3xl py-4  px-[4%] overflow-y-auto"
        >
          <div className="flex flex-col  font-semibold">
            <div className="text-[#64CCC4] mt-3">User name</div>
            <button
              onClick={() => setOpen(true)}
              className={`border-b-2 border-[#64CCC4] text-gray-300 w-full 
                text-start font-normal mt-2 p-2 ${
                  receiver !== "Click to select a user" ? "text-gray-900" : ""
                }`}
            >
              {receiver}
            </button>
            <div className="text-[#64CCC4] mt-5">User email</div>
            <div
              className={`border-b-2 border-[#64CCC4] text-gray-300 w-full 
                text-start font-normal mt-2 p-2 ${
                  receiver !== "Click to select a user" ? "text-gray-900" : ""
                }`}
            >
              {receiverEmail}
            </div>
          </div>
          <div className="flex flex-col mt-9 h-[40%]">
            <div className="flex-[0.07] text-[#64CCC4] font-semibold">
              Your message:
            </div>
            <textarea
              className=" border-gray-200 bg-gray-50 bg-opacity-10 h-full 
              mt-4 rounded-lg placeholder-gray-800 appearance-none border 
              flex-1 py-2 px-3 text-start text-black leading-tight focus:outline-none
              focus:border-2 focus:border-[#64CCC4] focus:bg-gray-50"
              rows={10}
            ></textarea>
          </div>
          <div className="mt-[4%] w-full flex items-end justify-end">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{ backgroundColor: "#6b7280" }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <Modal
          setOpen={setOpen}
          setreceiver={setreceiver}
          setreceiverEmail={setreceiverEmail}
        />
      )}
    </div>
  );
}

export default Promotions;

const Modal = ({
  setOpen,
  setreceiver,
  setreceiverEmail,
}: {
  setOpen: (boolean: boolean) => void;
  setreceiver: (string: string) => void;
  setreceiverEmail: (string: string) => void;
}) => {
  const handleClick = (user: string, email: string) => {
    console.log("The link was clicked");
    setOpen(false);
    setreceiver(user);
    setreceiverEmail(email);
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex flex-1 z-10 backdrop-blur 
    justify-center items-center bg-black bg-opacity-20"
    >
      <div className=" flex flex-[0.5] h-[50%] bg-white p-4 rounded-lg relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 
        rounded-full bg-gray-300 border-0 border-black size-7 text-center align-middle
        hover:bg-red-400 hover:text-white hover:border-0"
        >
          X
        </button>
        <div className="flex flex-col w-full mt-10">
          <div
            className="h-12 min-h-12 flex items-center rounded-lg flex-row bg-[#34517D]
           text-white font-bold uppercase "
          >
            <div className="flex-[0.1] text-center"> id</div>
            <div className="sm:flex-[0.2] flex-[0.4] text-center">name</div>
            <div className="flex-[0.7] text-center hidden sm:flex justify-center">email</div>
          </div>
          <div className="flex flex-col gap-2 h-full overflow-y-auto mt-2">
            {users.map((user, index) => (
              <button
                onClick={() => handleClick(user.name, user.email)}
                key={user.id}
                className="bg-gray-100 h-12 min-h-12 flex items-center 
                rounded-lg flex-row hover:bg-[#8BB6A2] hover:bg-opacity-30"
              >
                <div className="flex-[0.1] text-center font-mono"> {index}</div>
                <div className="flex-[0.2] text-center">{user.name}</div>
                <div className="flex-[0.7] text-center">{user.email}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
