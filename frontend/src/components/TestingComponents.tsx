import { useState } from 'react';

const TestingList = [
	{
		question: '지금 기분이 어떠신가요?',
		selectOptions: ['우울해요', '즐거워요', '슬퍼요', '화가나요'],
	},
];

const TestingComponents = () => {
	const [question, setQuestion] = useState();
	const [selectOptions, setSelectOptions] = useState();

	return <div></div>;
};

export default TestingComponents;
