import axios from 'axios';

import { QuestionData } from '../types/qeustionData';

export async function getQuestionData() {
  const URL = 'https://frontend-interview-api.bioz.com/question_data';

  const { data } = await axios.get<QuestionData>(URL);

  return data;
  // try {
  //   const { data } = await axios.get<QuestionData>(URL);

  //   return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
}
