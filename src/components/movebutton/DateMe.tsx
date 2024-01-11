import React from "react";
import animation from "../../assets/please-please-please.gif";
import acceptedAnimation from "../../assets/thank.gif";
import MoveAwayButton from ".";

const DateMe = () => {
  const [accepted, setAccepted] = React.useState(false);
  return (
    <>
      {accepted ? (
         <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
         <h2 className="text-[48px] text-center text-red-400 font-cute">
           Yaayy !!
         </h2>
         <h1 className="text-[48px] text-center font-cute">
           Let set the date. Hehe !
         </h1>
         <img src={acceptedAnimation} className="w-[400px]" alt="anif" />
       </div>
      ) : (
        <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
          <h2 className="text-[48px] text-center text-red-400 font-cute">
            Hi baby,
          </h2>
          <h1 className="text-[48px] text-center font-cute">
            Will you go out on a date with me?
          </h1>
          <img src={animation} className="w-[400px]" alt="ani" />
          <div className="flex gap-4">
            <button onClick={()=>setAccepted(true)} className=" border-2 text-[24px] font-medium border-black bg-[#FAFBF8] px-8 py-4 font-cute rounded-lg">
              Yes
            </button>
            <MoveAwayButton />
          </div>
        </div>
      )}
    </>
  );
};

export default DateMe;
