import React from "react";
import { students } from "@/src/utils/students_git_address";

const StudentGit = ({ students }) => {
  return (

        <img
            src={`https://ghchart.rshah.org/${students.github}`}
            alt={`${students.name}의 깃허브 잔디`}
            className="w-full max-w-xs bg-white border rounded-md shadow-sm"
            style={{ minHeight: 56, background: "#fff" }}
            loading="lazy"
        />
);  };

export default StudentGit;  