/** @format */
import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import useSpreadsheet from "../../useSpreadsheet";
import Question from "../Question";
import QuizSubmit from "../QuizSubmit";

let questionList = [
  [
    "Is Google Sheets API free?",
    "All use of the Sheets API is free of charge. Exceeding the quota request limits doesn't incur extra charges and your account is not billed.",
    5,
    2
  ],
  [
    "Can you use API in Google Sheets?",
    "API Connector is a powerful, easy-to-use extension that pulls data from any API into Google Sheets. Start quickly with a library of connectors, or create your own custom connections to the data sources you choose.",
    8,
    1
  ]
];

const Questions = ({ formState, setFormState }) => {
  // Question Result onChange Handler
  const onChangeHandler = useCallback(
    (qID, result) => {
      console.log("Q RESPONSE: ", qID, result);
      setFormState({ ...formState, [qID]: result });
    },
    [formState]
  );

  // Testing purpose log
  console.log("FORM STATE: ", formState);

  return (
    <>
      {questionList.length > 0 &&
        questionList.map((question, index) => (
          <Question
            key={index}
            id={`qst-${index + 1}`}
            className={`question-${index}`}
            heading={question[0]}
            brief={question[1]}
            yesValue={question[2]}
            noValue={question[3]}
            onChange={onChangeHandler}
          />
        ))}
    </>
  );
};

export default Questions;
