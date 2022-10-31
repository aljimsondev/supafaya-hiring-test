import React from "react";

function VanishText() {
  const [showText, setTextDisplay] = React.useState<boolean>(true);

  const setTextVisibility = () => {
    setTextDisplay((prevState) => !prevState);
  };
  return (
    <div>
      {showText && (
        <h1 className="text-6xl text-gray-200">1. Make this vanish</h1>
      )}
      <button onClick={setTextVisibility} className="primary">
        Click me {!showText ? "to show text" : "to hide text"!}
      </button>
    </div>
  );
}

export default VanishText;
