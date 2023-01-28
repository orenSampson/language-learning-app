import { Fragment, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import shuffleArray from '../../utils/shuffleArray';
import { QuestionData } from '../../types/qeustionData';
import AnswerButton from '../AnswerButton/AnswerButton';

const QuestionDisplayer: React.FC<{ questionDataProps: QuestionData }> = ({
  questionDataProps,
}) => {
  const [allAnswers, setAllAnswers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const rightAnswerButton = (
      <AnswerButton
        key={crypto.randomUUID()}
        word={questionDataProps.correct_translation}
        isTrueAnswer={true}
      />
    );

    const wrongAnswersButtonsArray = questionDataProps.random_translations.map(
      (randomTranslation) => (
        <AnswerButton key={crypto.randomUUID()} word={randomTranslation} isTrueAnswer={false} />
      )
    );

    const allAnswersArray = [...wrongAnswersButtonsArray, rightAnswerButton];

    shuffleArray(allAnswersArray);

    setAllAnswers(allAnswersArray);
  }, [questionDataProps]);

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom>
        Word: {questionDataProps.german_word}
      </Typography>
      <Stack spacing={2} direction="row">
        {allAnswers}
      </Stack>
    </Fragment>
  );
};

export default QuestionDisplayer;
