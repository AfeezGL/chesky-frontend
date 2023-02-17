import Accordion from './Accordion';

export default function FAQSection() {
  const questions = [
    {
      id: 1,
      question: 'HOW OLD DO I NEED TO BE TO RENT A CAR?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.',
    },
    {
      id: 2,
      question: 'HOW MUCH DO I NEED TO RENT RENT A CAR?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.',
    },
    {
      id: 3,
      question: 'HOW OLD DO I NEED TO BE TO RENT A CAR?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.',
    },
  ];
  return (
    <div className='mt-28' id='faq'>
      <div className='text-center text-blue capitalize font-extrabold text-4xl pb-16'>
        Frequently Asked Questions
      </div>
      <div className='flex flex-col gap-4 faq-container'>
        {questions.map((item) => (
          <Accordion
            question={item.question}
            answer={item.answer}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
