import React from "react";

function DennySmiling(props) {
    return (
      <button {...props}>
          <img 
            src="../../assets/images/denny-smiling.png" 
            alt="denny-smiling"
            height="380"
            width="380"
            style={{
            position: "fixed",
            bottom: 44,
            left: 15,
            zIndex: 2,
            transform: "rotate(7deg)"
            }}></img>
      </button>
    );
  }
  
  export default DennySmiling;