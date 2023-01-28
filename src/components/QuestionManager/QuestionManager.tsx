import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import classes from './QuestionManager.module.css';
import { QuestionData } from '../../types/qeustionData';
import { getQuestionData } from '../../api/questionData';
import QuestionDisplayer from '../QuestionDisplayer/QuestionDisplayer';

const QuestionManager: React.FC = () => {
  const [questionData, setQuestionData] = useState<QuestionData>({
    correct_translation: '',
    german_word: '',
    random_translations: [],
  });

  useEffect(() => {
    getQuestionDataHandler();
  }, []);

  async function getQuestionDataHandler() {
    try {
      const data = await getQuestionData();

      setQuestionData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Container maxWidth="md">
        <Typography className={classes.center} variant="h3" gutterBottom>
          German Learning Quiz App
        </Typography>
        <div className={classes.center}>
          <Button variant="contained" onClick={getQuestionDataHandler}>
            Get A New Word
          </Button>
        </div>
        <Stack spacing={2} direction="row"></Stack>
        <QuestionDisplayer questionDataProps={questionData} />
      </Container>
    </div>
  );
};

export default QuestionManager;
