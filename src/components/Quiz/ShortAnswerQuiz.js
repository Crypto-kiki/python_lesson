"use client";

import { useMemo, useState } from "react";

const normalize = (value) => value.trim().toLowerCase();

const ShortAnswerQuiz = ({
  question,
  answers = [],
  placeholder = "정답을 입력하세요.",
  explanation,
}) => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = useMemo(() => {
    if (!submitted) {
      return null;
    }

    const normalized = normalize(value);
    return answers.some((answer) => normalize(answer) === normalized);
  }, [answers, submitted, value]);

  return (
    <section className="my-8 rounded-xl border border-dark/20 dark:border-light/20 p-5 bg-light/60 dark:bg-dark/40">
      <h4 className="m-0 text-lg font-semibold">✍️ 주관식 퀴즈</h4>
      <p className="mt-2 mb-4 text-base">{question}</p>

      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setSubmitted(false);
        }}
        placeholder={placeholder}
        className="w-full rounded-lg border border-dark/25 dark:border-light/30 bg-transparent px-3 py-2"
      />

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={!value.trim()}
          className="px-4 py-2 rounded-lg bg-accent text-light disabled:opacity-50"
        >
          채점하기
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("");
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
          {isCorrect ? "정답입니다!" : "정답이 아닙니다."}
          {explanation ? <p className="mt-1 mb-0">해설: {explanation}</p> : null}
        </div>
      )}
    </section>
  );
};

export default ShortAnswerQuiz;
