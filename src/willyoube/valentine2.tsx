import React from "react";
import animation from "../assets/please-please-please.gif";
import acceptedAnimation from "../assets/thank.gif";
import bubuangry from "../assets/bubu-angry.gif";
import Typewriter from "./typewriter";

const Valentine2 = () => {
  const [accepted, setAccepted] = React.useState(false);
  const [noSelected, setNoSelected] = React.useState(false);

  return (
    <>
      {accepted ? (
        <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
          <h2 className="text-[48px] text-center text-red-400 font-cute">
            Yaayy !!
          </h2>
          <h1 className="text-[48px] text-center font-cute">
            I know you would say yes. Hehe.
          </h1>

          <img src={acceptedAnimation} className="w-[400px]" alt="anif" />
        </div>
      ) : (
        <div className="bg-[#FAFBF8] w-screen h-screen flex flex-col justify-center gap-8 items-center">
          <h2 className="text-[48px] text-center font-cute">
            Hi, Will you be my valentine?
          </h2>
          {noSelected && (
            <Typewriter
              text="Andi mandi falam ko dandi, jasle yes click gardaina ... Xito gara na , gaali garnu mann xaina k "
              delay={150}
            />
          )}
          <img src={noSelected ?bubuangry :animation} className="w-[400px]" alt="ani" />
          <div className="flex gap-4">
            <button
              onClick={() => setAccepted(true)}
              className={`text-[24px] font-medium bg-green-500 text-white px-8 py-4 font-cute rounded-lg`}
            >
              Yes
            </button>
            {!noSelected && (
              <button
                onClick={() => {
                  setNoSelected(true);
                }}
                className=" text-[24px] h-fit font-medium bg-red-500 text-white px-8 py-4 font-cute rounded-lg"
              >
                <p>No</p>
              </button>
            )}
            {/* <MoveAwayButton /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Valentine2;
