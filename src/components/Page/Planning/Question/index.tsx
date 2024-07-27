import questionList from '@components/Page/Planning/Question/QuestionItem';

interface QuestionProps {
  index: number;
  setIsDone: (isDone: boolean) => void;
}

const Question = ({ index, setIsDone }: QuestionProps) => {
  const QuestionItem = questionList[index];
  return <QuestionItem setIsDone={setIsDone} />;
};

export default Question;
