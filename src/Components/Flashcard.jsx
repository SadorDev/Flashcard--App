import React from "react";

const Flashcard = ({ dataQuestion, selected, setSelectedId }) => {
  const handleClick = (id) => {
    if (selected) {
      setSelectedId(null);
    }

    if (!selected) {
      setSelectedId(id);
    }
  };

  return (
    <div
      onClick={() => handleClick(dataQuestion.id)}
      className={selected ? "selected" : ""}
    >
      <p>{selected ? dataQuestion.answer : dataQuestion.question} </p>
    </div>
  );
};

export default Flashcard;
