import React from "react";
import animation from "../assets/please-please-please.gif";
import acceptedAnimation from "../assets/thank.gif";

const Valentine = () => {
  const [accepted, setAccepted] = React.useState(false);
  const [yesPadding, setYesPadding] = React.useState(3);
  const [noArray, setNoArray] = React.useState(false);

  const NoArray = [
    "Please?",
    "Dont be like that",
    "Are you sure?",
    "I will be sad",
    "I am not giving up",
    "Again Please?",
    "Why so cold hearted?",
    "I will keep asking",
    "I will buy you gifts",
    "I will take you out",
    "Change of Mind?",
  ];
  return (
    <>
      {accepted ? (
        <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
          <h2 className="text-[48px] text-center text-red-400 font-cute">
            Yaayy !!
          </h2>
          <h1 className="text-[48px] text-center font-cute">
          I Love you , hehe.
          </h1>
          <img src={acceptedAnimation} className="w-[400px]" alt="anif" />
        </div>
      ) : (
        <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
          <h2 className="text-[48px] text-center text-red-400 font-cute">
            Hi, Will you be my valentine?
          </h2>
          <img src={animation} className="w-[400px]" alt="ani" />
          <div className="flex gap-4">
            <button
              onClick={() => setAccepted(true)}
              style={{
                padding: `${yesPadding*4}px ${yesPadding * 8}px`,
                fontSize: `${yesPadding*1.5 + 24}px`,
              }}
              className={`text-[24px] font-medium bg-green-500 text-white  font-cute rounded-lg`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setYesPadding(yesPadding + 1);
                setNoArray(true);
              }}
              className=" text-[24px] h-fit font-medium bg-red-500 text-white px-8 py-4 font-cute rounded-lg"
            >
              <p>No</p>
              {noArray && (
                <p className="text-[13px]">
                  {NoArray[yesPadding % NoArray.length]}
                </p>
              )}
            </button>
            {/* <MoveAwayButton /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Valentine;
