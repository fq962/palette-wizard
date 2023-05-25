import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./colorCard.css";

export default function ColorCard() {
  const [copied, setCopy] = useState(false);
  const textToCopy = "#TEST_COPY_ON_CLIPBOARD";

  navigator.clipboard.writeText(textToCopy);
  const copyToClipboard = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div className="cardsita">
      <h1 className="hex">#ffff</h1>
      {copied ? (
        <p className="copy">COPIED!</p>
      ) : (
        <FontAwesomeIcon
          className="copy"
          icon={faCopy}
          onClick={copyToClipboard}
        />
      )}
    </div>
  );
}
