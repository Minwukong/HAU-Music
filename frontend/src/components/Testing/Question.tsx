// 하나의 질문을 담당하는 컴포넌트

const Question = ({ children }: any) => {
	return <div> {children} </div>;
};

interface ILabel {
	text?: string;
}
Question.Label = ({ text = '' }: ILabel) => {
	return <div>{text}</div>;
};

export default Question;
