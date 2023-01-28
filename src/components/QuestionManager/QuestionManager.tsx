import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
      //TODO: add toastify message to the user that something went wrong
    }
  }

  return (
    <div className="App">
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={getQuestionDataHandler}>
          Get A New Word
        </Button>
      </Stack>
      <QuestionDisplayer questionDataProps={questionData} />
    </div>
  );
};

export default QuestionManager;
