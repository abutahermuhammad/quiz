/** @format */

import { Container } from "@mui/material";
import { useState } from "react";
import Questions from "../../component/Questions";
import QuizSubmit from "../../component/QuizSubmit";
import useSpreadsheet from "../../hooks/useSpreadsheet";

const Quiz = () => {
  const [loading, setLoading] = useState(false); // Submit button state
  const [formState, setFormState] = useState({});
  const { appendToSpreadsheet } = useSpreadsheet();

  // Quiz Submit Handler
  const onSubmitHandler = async (row) => {
    await setLoading(true);
    await appendToSpreadsheet(row);
    await setLoading(false);
  };
  return (
    <Container>
      <h1>Quiz</h1>

      {/* Questions */}
      <Questions formState={formState} setFormState={setFormState} />

      {/* Submit Button */}
      <QuizSubmit
        onSubmit={(e) => onSubmitHandler(formState)}
        loading={loading}
      />
    </Container>
  );
};

export default Quiz;
