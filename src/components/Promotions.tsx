import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Modal } from "./UserModal";
import { useState } from "react";

const Promotions = () => {
  const [open, setOpen] = useState(false);
  const [receiver, setreceiver] = useState("Click to select a user");
  const [receiverEmail, setreceiverEmail] = useState("example@example.com");

  return (
    <div className="flex flex-1 p-4 md:p-8 lg:p-20  flex-col overflow-y-auto h-full">
      <div className="font-sans text-5xl font-bold text-gray-800">
        Promotions
      </div>
      <div className="flex items-center flex-col rounded-3xl h-full">
        <div
          className="flex flex-col w-full mt-[8%] h-[80%] bg-white 
        shadow-md text-black rounded-3xl py-4  px-[4%] overflow-y-auto"
        >
          <div className="flex flex-col  font-semibold">
            <div className="text-[#34517D] mt-3">User name</div>
            <button
              onClick={() => setOpen(true)}
              className={`border-b-2 border-[#34517D] text-gray-300 w-full 
                text-start font-normal mt-2 p-2 ${
                  receiver !== "Click to select a user" ? "text-gray-900" : ""
                }`}
            >
              {receiver}
            </button>
            <div className="text-[#34517D] mt-5">User email</div>
            <div
              className={`border-b-2 border-[#34517D] text-gray-300 w-full 
                text-start font-normal mt-2 p-2 ${
                  receiver !== "Click to select a user" ? "text-gray-900" : ""
                }`}
            >
              {receiverEmail}
            </div>
          </div>
          <div className="flex flex-col mt-9 h-[40%]">
            <div className="flex-[0.07] text-[#34517D] font-semibold">
              Your message:
            </div>
            <textarea
              className=" border-gray-200 bg-gray-50 bg-opacity-10 h-full 
              mt-4 rounded-lg placeholder-gray-800 appearance-none border 
              flex-1 py-2 px-3 text-start text-black leading-tight focus:outline-none
              focus:border-2 focus:border-[#34517D] focus:bg-gray-50"
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
};
export default Promotions;
