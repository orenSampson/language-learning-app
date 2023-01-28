import { useState, useEffect } from 'react';

import { QuestionData } from './types/qeustionData';
import { getQuestionData } from './api/questionData';

const App: React.FC = () => {
  const [questionData, setQuestionData] = useState<QuestionData>({
    correct_translation: '',
    german_word: '',
    random_translations: [],
  });

  useEffect(() => {
    getQuestionDataFunc();
  }, []);

  async function getQuestionDataFunc() {
    try {
      const data = await getQuestionData();
      console.log('🚀 ~ file: App.tsx:18 ~ getQuestionDataFunc ~ data', data);

      setQuestionData(data);
    } catch (error) {
      console.log(error);
      //TODO: add toastify message to the user that something went wrong
    }
  }

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
