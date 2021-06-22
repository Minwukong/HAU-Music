import { useState } from 'react';
import Question from '../components/Testing/Question';
import Answers from '../components/Testing/Answers';
import questionList from '../data/questionList';

const TestingContainers = () => {
	const [question, setQuestion] = useState();
	const [selectOptions, setSelectOptions] = useState();

	return (
		<>
			<Question>
				<Question.Label text="" />
			</Question>

			<Answers />
		</>
	);
};

export default TestingContainers;
