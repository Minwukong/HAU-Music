const questionList = {
	// 첫번째 질문 및 답변
	first: {
		q: '지금 기분이 어떠신가요?',
		a: ['우울해요', '화가나요', '슬퍼요', '즐거워요'],
		select: ['depressed', 'angry', 'sad', 'fun'],
	},
	// 우울해요 선택시 질문 및 답변
	depressed: {
		q: '우울한 기분이시군요.. 어떤 선택을 원하시나요?',
		a: [
			'오늘은 우울의 늪에 빠지고 싶어..',
			'우울함에서 벗어나고 싶어요!',
			'공감 받고 싶어요',
		],
	},
	// 화가나요 선택시 질문 및 답변
	angry: {
		q: '화가났군요.. 어떤 선택을 원하시나요?',
		a: ['다 부시고싶어!!', '진정시켜줬으면 좋겠어'],
	},
	// 슬퍼요 선택시 질문 및 답변
	sad: {
		q: '슬픈 상태이시군요.. 어떤 선택을 원하시나요?',
		a: [
			'내 마음 누가 위로해줄까?!',
			'오늘은 눈물바다 흑흑..',
			'이럴때가 아니야 정신차리자!',
		],
	},
	// 즐거워요 선택시 질문 및 답변
	fun: {
		q: '즐거워요? 어떤 선택을 원하시나요?',
		a: [
			'오늘 미쳐볼까?!',
			'워워 ~ 차분해질래!',
			'이 행복을 만끽하고 싶어~!',
		],
	},
};

export default questionList;
