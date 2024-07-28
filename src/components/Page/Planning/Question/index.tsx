import questionList from '@components/Page/Planning/Question/QuestionItem';

interface QuestionProps {
  index: number;
  setIsDone: (param: { isDone: boolean; isVisible?: boolean }) => void;
}

const Question = ({ index, setIsDone }: QuestionProps) => {
  const QuestionItem = questionList[index];
  return <QuestionItem setIsDone={setIsDone} />;
};

export default Question;
