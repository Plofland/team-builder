import React from "react";

export default function TeamMemberCard({ member }) {
  console.log(member);
  return (
    <div>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
      <p>
        {member.name} is
        {member.lambdaStudent
          ? " a student at Lambda School."
          : " not a student."}
      </p>
    </div>
  );
}
