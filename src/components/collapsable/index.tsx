import React from "react";
import CollapsableComponent from "./collapsable.component";

const Collapsable = () => {
  return (
    <CollapsableComponent
      CollapsableHeader={
        <div className="flex justify-between p-4 w-full">
          <div className="flex flex-col gap-1">
            <h1 className="text-md">Title</h1>
            <h2 className="text-lg">Subtitle</h2>
          </div>
          <button className="px-4 py-2 border border-black rounded-md h-fit">
            Accept
          </button>
        </div>
      }
      CollapsableBody={
        <div className="flex p-8">
          this is the container for details in collapsable
        </div>
      }
    />
      
  );
};

export default Collapsable;
