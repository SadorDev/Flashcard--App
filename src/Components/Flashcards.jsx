import React, { useState } from "react";
import questions from "../data";
import Flashcard from "./Flashcard";

const Flashcards = () => {
  const [selectedId, setSelectedId] = useState(null);


  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Flashcard
          key={question.id}
          selected={question.id === selectedId }
          setSelectedId={setSelectedId}
          dataQuestion={question}
        />
      ))}
    </div>
  );
};

export default Flashcards;
