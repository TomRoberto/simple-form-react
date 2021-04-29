const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setupName,
  setupEmail,
  setupPassword,
  setupConfirmPassword,
  identicalPassWords,
  setupIdenticalPasswords,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setupIdenticalPasswords(true);
    }
  };

  return (
    <form
      className={identicalPassWords ? "hidden" : "display"}
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
      <p>Password</p>
      <input
        value={password}
        type="password"
        placeholder="AzErTy123"
        onChange={(event) => {
          setupPassword(event.target.value);
        }}
      />
      <p>Comfirm your password</p>
      <input
        value={confirmPassword}
        type="password"
        placeholder="AzErTy123"
        onChange={(event) => {
          setupConfirmPassword(event.target.value);
        }}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
