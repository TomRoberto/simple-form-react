import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import { useState } from "react";

function App() {
  const [name, setupName] = useState("");
  const [email, setupEmail] = useState("");
  const [password, setupPassword] = useState("");
  const [confirmPassword, setupConfirmPassword] = useState("");
  const [identicalPasswords, setupIdenticalPasswords] = useState(false);

  return (
    <div className="app">
      <Form
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setupName={setupName}
        setupEmail={setupEmail}
        setupPassword={setupPassword}
        setupConfirmPassword={setupConfirmPassword}
        identicalPasswords={identicalPasswords}
        setupIdenticalPasswords={setupIdenticalPasswords}
      />
      <StepTwo
        name={name}
        email={email}
        password={password}
        identicalPasswords={identicalPasswords}
        setupIdenticalPasswords={setupIdenticalPasswords}
      />
    </div>
  );
}

export default App;
