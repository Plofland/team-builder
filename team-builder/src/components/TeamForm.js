import React from "react";

export default function TeamForm({ values, update, submit }) {
  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="inputs">
        <h2>Add a new team member here:</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={update}
            maxLength="30"
          ></input>
        </label>
        <br></br>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={submit}
          ></input>
        </label>
        <br></br>
        <label>
          Student Status
          <select name="isStudent" value={values.isStudent} onChange={onChange}>
            <option value="">---Are you a lambdaStudent?---</option>
            <option value="student">Yes</option>
            <option value="notStudent">No</option>
          </select>
        </label>
        <br></br>
        <label>
          Are they human? <input type="checkbox"></input>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
