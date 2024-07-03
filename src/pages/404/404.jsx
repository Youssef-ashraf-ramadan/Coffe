import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "800px" }}
        src={process.env.PUBLIC_URL + "/assets/404.png"}
        alt=""
      />
    </div>
  );
};

export default NotFound;
