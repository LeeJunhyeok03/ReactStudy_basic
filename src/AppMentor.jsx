import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '땡떙',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  console.log(person.mentor.name);
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={(prev) => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({...prev, mentor: {...prev.mentor, name}}));
        
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={(prev) => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({...prev, mentor: {...prev.mentor, title}}));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
