"use client";

import { useMemo, useState } from "react";

const MultipleChoiceQuiz = ({
  question,
  options = [],
  correctIndex = 0,
  explanation,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = useMemo(() => {
    if (!submitted || selectedIndex === null) {
      return null;
    }

    return selectedIndex === correctIndex;
  }, [submitted, selectedIndex, correctIndex]);

  return (
    <section className="my-8 rounded-xl border border-dark/20 dark:border-light/20 p-5 bg-light/60 dark:bg-dark/40">
      <h4 className="m-0 text-lg font-semibold">📝 객관식 퀴즈</h4>
      <p className="mt-2 mb-4 text-base">{question}</p>

      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-start gap-2 p-2 rounded-lg border border-dark/10 dark:border-light/10 cursor-pointer"
          >
            <input
              type="radio"
              name={question}
              value={index}
              checked={selectedIndex === index}
              onChange={() => {
                setSelectedIndex(index);
                setSubmitted(false);
              }}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={selectedIndex === null}
          className="px-4 py-2 rounded-lg bg-accent text-light disabled:opacity-50"
        >
          정답 확인
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedIndex(null);
            setSubmitted(false);
          }}
          className="px-4 py-2 rounded-lg border border-dark/30 dark:border-light/30"
        >
          초기화
        </button>
      </div>

      {submitted && isCorrect !== null && (
        <div
          className={`mt-4 rounded-lg p-3 ${
            isCorrect
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isCorrect ? "정답입니다!" : "아쉽지만 오답입니다."}
          {explanation ? <p className="mt-1 mb-0">해설: {explanation}</p> : null}
        </div>
      )}
    </section>
  );
};

export default MultipleChoiceQuiz;
