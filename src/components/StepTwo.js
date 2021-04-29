const StepTwo = ({
  name,
  email,
  password,
  identicalPasswords,
  setupIdenticalPasswords,
}) => {
  return (
    <div className={identicalPasswords ? "display" : "hidden"}>
      <h1>Results</h1>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email} </p>
        <p>Password : {password}</p>
      </div>
      <button
        onClick={() => {
          setupIdenticalPasswords(false);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
