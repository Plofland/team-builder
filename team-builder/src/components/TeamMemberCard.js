import React from "react";

export default function TeamMemberCard({ member }) {
  return (
    <div>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
      <p>
        Is{" "}
        {member.lambdaStudent
          ? "a student at Lambda School."
          : "not a student."}
      </p>
    </div>
  );
}
