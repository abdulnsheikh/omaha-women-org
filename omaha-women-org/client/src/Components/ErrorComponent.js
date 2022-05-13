import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div className="h-100 row align-items-center">
      <div className="col" style={{color:"red"}}>
        {error}
      </div>
    </div>
  );
}
