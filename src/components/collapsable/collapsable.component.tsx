import React from "react";
import arrowDown from "../../assets/chevron-down.svg";

const CollapsableComponent = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <div className="w-full h-fit rounded-lg border border-black">
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="collapsable-header h-32 flex w-full items-center"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h4>Action</h4>
            <h5>Add New Member</h5>
          </div>
          <div className="w-full bg- rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
              style={{width: "45%"}}
            ></div>
          </div>
          <button className="button"></button>
        </div>

        <img
          src={arrowDown}
          className={`w-8 h-8 ${isCollapsed ? "" : "rotate-180"}`}
          alt="arrow"
        />
      </div>
      {isCollapsed && (
        <div className={`flex h-full collapsable-body border-t border-red-500`}>
          <div className="flex p-8">CollapsableBody</div>
        </div>
      )}
    </div>
  );
};

export default CollapsableComponent;
