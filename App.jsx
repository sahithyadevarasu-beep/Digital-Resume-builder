import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: ""
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateResume = async () => {

    setResume(formData);

    await fetch("http://localhost:5000/api/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  };

  return (
    <div className="container">

      <h1>Digital Resume Builder</h1>

      <div className="form">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
        />

        <input
          type="text"
          name="education"
          placeholder="Enter Education"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Enter Skills"
          onChange={handleChange}
        />

        <button onClick={generateResume}>
          Generate Resume
        </button>

      </div>

      {resume && (

        <div className="resume">

          <h2>{resume.name}</h2>

          <p>{resume.email}</p>
          <p>{resume.phone}</p>

          <h3>Education</h3>
          <p>{resume.education}</p>

          <h3>Skills</h3>
          <p>{resume.skills}</p>

        </div>

      )}

    </div>
  );
}

export default App;