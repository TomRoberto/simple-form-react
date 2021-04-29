import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setupName,
  setupEmail,
  setupPassword,
  setupConfirmPassword,
  identicalPasswords,
  setupIdenticalPasswords,
  samePasswords,
  setupSamePasswords,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setupIdenticalPasswords(true);
    }
  };

  if (password === confirmPassword) {
    setupSamePasswords(true);
  } else {
    setupSamePasswords(false);
  }

  const [seePassword, setupSeePassword] = useState(false);
  const [seeConfirmPassword, setupSeeConfirmPassword] = useState(false);

  return (
    <form
      className={identicalPasswords ? "hidden" : "display"}
      onSubmit={handleSubmit}
    >
      <h1>Create account</h1>
      <p>Name</p>
      <input
        value={name}
        type="text"
        placeholder="Jean Dupont"
        onChange={(event) => {
          setupName(event.target.value);
        }}
      />
      <p>Email</p>
      <input
        value={email}
        type="email"
        placeholder="jeandupont@lereacteur.io"
        onChange={(event) => {
          setupEmail(event.target.value);
        }}
      />
      <p>Password </p>
      <div>
        <input
          autoComplete="false"
          className={!samePasswords && "red"}
          value={password}
          type={seePassword ? "text" : "password"}
          placeholder="AzErTy123"
          onChange={(event) => {
            setupPassword(event.target.value);
          }}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (seePassword === true) {
              setupSeePassword(false);
            } else {
              setupSeePassword(true);
            }
          }}
        />
      </div>

      <p>Comfirm your password</p>
      <div>
        <input
          className={!samePasswords && "red"}
          value={confirmPassword}
          type={seeConfirmPassword ? "text" : "password"}
          placeholder="AzErTy123"
          onChange={(event) => {
            setupConfirmPassword(event.target.value);
          }}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (seeConfirmPassword === true) {
              setupSeeConfirmPassword(false);
            } else {
              setupSeeConfirmPassword(true);
            }
          }}
        />
      </div>

      <br />
      <input className="register" type="submit" value="Register" />
    </form>
  );
};

export default Form;
