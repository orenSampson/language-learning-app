import { useState, Fragment } from 'react';
import Button from '@mui/material/Button';

const AnswerButton: React.FC<{ word: string; isTrueAnswer: boolean }> = ({
  word,
  isTrueAnswer,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  let returnButton;

  if (isClicked) {
    if (isTrueAnswer) {
      returnButton = (
        <Button
          key={crypto.randomUUID()}
          variant="contained"
          color="success"
          onClick={correctAnswerDisplayer}
        >
          {word}
        </Button>
      );
    } else {
      returnButton = (
        <Button
          key={crypto.randomUUID()}
          variant="contained"
          color="error"
          onClick={correctAnswerDisplayer}
        >
          {word}
        </Button>
      );
    }
  } else {
    returnButton = (
      <Button key={crypto.randomUUID()} variant="contained" onClick={correctAnswerDisplayer}>
        {word}
      </Button>
    );
  }

  function correctAnswerDisplayer() {
    setIsClicked(true);
    console.log('correct answer');
  }

  return <Fragment>{returnButton}</Fragment>;
};

export default AnswerButton;
