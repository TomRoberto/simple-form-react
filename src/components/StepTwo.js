const StepTwo = ({
  name,
  email,
  password,
  identicalPasswords,
  setupIdenticalPasswords,
}) => {
  return (
    <div className={identicalPasswords ? "display" : "hidden"}>
      <div className="step-two">
        <h1>Results</h1>
        <div className="rectangle">
          <p>Name : {name}</p>
          <p>Email : {email} </p>
          <p>Password : {password}</p>
        </div>
        <button
          className="edit"
          onClick={() => {
            setupIdenticalPasswords(false);
          }}
        >
          Edit your informations
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
