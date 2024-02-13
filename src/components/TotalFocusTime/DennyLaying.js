import React from "react";

function DennyLaying(props) {
    return (
        <button {...props}>
            <img
                src="../../assets/images/denny-laying.png"
                alt="denny-laying"
                height="380"
                width="380"
                style={{
                position: "fixed",
                bottom: 44,
                right: 15,
                zIndex: 2,
                transform: "rotate(7deg)"
                }}
            />
        </button>
      );
    }
    
    export default DennyLaying;