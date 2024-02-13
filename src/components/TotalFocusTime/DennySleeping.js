import React from "react";

function DennySleeping(props) {
    return (
        <button {...props}>
            <img
                src="../../assets/images/denny-sleeping.png"
                alt="denny-sleeping"
                height="250"
                width="250"
                style={{
                position: "fixed",
                bottom: 68,
                right: 80,
                zIndex: 2,
                transform: "rotate(-4deg)"
                }}
            />
        </button>
      );
    }
    
    export default DennySleeping;