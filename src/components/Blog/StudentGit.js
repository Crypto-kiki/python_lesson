import React from "react";

const StudentGit = ({ students = [] }) => {
  if (!students.length) return null;

  return (
    <section className="w-full max-w-7xl px-5 mt-10">
      <h2 className="inline-block font-bold capitalize text-xl md:text-2xl mb-4">
        오늘 공부했어요
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {students.map((student) => (
          <article
            key={student.github}
            className="p-2 border border-dark/10 rounded-lg bg-light dark:bg-dark dark:border-light/10"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-sm truncate">{student.name}</p>
              <a
                href={`https://github.com/${student.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-primary underline underline-offset-2 truncate ml-2"
                title={`@${student.github}`}
              >
                @{student.github}
              </a>
            </div>

            <img
              src={`https://ghchart.rshah.org/${student.github}`}
              alt={`${student.name}의 깃허브 잔디`}
              className="w-full bg-white border rounded"
              style={{ minHeight: 40, background: "#fff" }}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default StudentGit;
