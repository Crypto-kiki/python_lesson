import React from "react";

const StudentGit = ({ students = [] }) => {
  if (!students.length) return null;

  return (
    <section className="w-full max-w-7xl px-5 mt-16">
      <h2 className="inline-block font-bold capitalize text-2xl md:text-4xl mb-8">
        오늘 공부했어요
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {students.map((student) => (
          <article
            key={student.github}
            className="p-4 border border-dark/10 rounded-xl bg-light dark:bg-dark dark:border-light/10"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-lg">{student.name}</p>
              <a
                href={`https://github.com/${student.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline underline-offset-2"
              >
                @{student.github}
              </a>
            </div>

            <img
              src={`https://ghchart.rshah.org/${student.github}`}
              alt={`${student.name}의 깃허브 잔디`}
              className="w-full bg-white border rounded-md shadow-sm"
              style={{ minHeight: 56, background: "#fff" }}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default StudentGit;
