import questionList from '@components/Page/Planning/Question/QuestionItem';

interface QuestionProps {
  index: number;
}

const Question = ({ index }: QuestionProps) => {
  const QuestionItem = questionList[index];
  return <QuestionItem />;
};

export default Question;
