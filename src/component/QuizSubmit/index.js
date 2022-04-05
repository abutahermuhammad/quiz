/** @format */

import LoadingButton from "@mui/lab/LoadingButton";
// import "./style.module.scss";

const QuizSubmit = ({ onSubmit, loading, full }) => {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      className={full ? "btn btn-default btn-full" : "btn btn-default"}
      onClick={() => onSubmit()}
    >
      Submit
    </LoadingButton>
  );
};

export default QuizSubmit;
