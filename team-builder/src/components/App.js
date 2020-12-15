import React, { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamForm from "./TeamForm";
import axios from "axios";
import "../App.css";

const initialFormValues = {
  name: "",
  email: "",
  isStudent: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const formUpdate = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
    };

    if (!newMember.name || !newMember.email) {
      return;
    }

    axios
      .get("fakeapi.com", newMember)
      .then((result) => {
        setTeamMembers([newMember, ...teamMembers]);
        setFormValues(initialFormValues);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setTeamMembers(res.data));
  }, []);

  return (
    <div>
      <h1>Track Team Form</h1>
      <TeamForm values={formValues} update={formUpdate} submit={submitForm} />

      {teamMembers.map((member) => {
        return <TeamMemberCard key={member.id} member={member} />;
      })}
    </div>
  );
}

export default App;
