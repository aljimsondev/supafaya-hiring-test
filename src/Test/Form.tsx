import React from "react";

function Form() {
  const [formdata, setFormdata] = React.useState<{
    username: string;
    fullName: string;
    age: number | null;
  }>({
    username: "",
    fullName: "",
    age: null,
  });
  const [displayProperties, setDisplayProperties] = React.useState(false);

  const onChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    //hides the input fields
    if (displayProperties) {
      setDisplayProperties(false);
    }
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayProperties(true);
  };

  return (
    <div className="form-base">
      <h1>4. Submit a form</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-1 inline">
          <div className="flex-1">
            <label
              htmlFor="userName"
              className="text-lg font-semibold text-white mr-2"
            >
              Username:
            </label>
          </div>
          <div className="flex-1">
            <input
              name="username"
              value={formdata.username}
              onChange={onChangeFormData}
              required
            />
          </div>
        </div>
        <br />
        <div className="flex flex-1 inline">
          <div className="flex-1">
            <label
              htmlFor="fullName"
              className="text-lg font-semibold text-white mr-2"
            >
              FullName:
            </label>
          </div>
          <div className="flex-1">
            <input
              value={formdata.fullName}
              required
              name="fullName"
              onChange={onChangeFormData}
            />
          </div>
        </div>
        <br />
        <div className="flex flex-1 inline">
          <div className="flex-1">
            <label
              htmlFor="age"
              className="text-lg font-semibold text-white mr-2"
            >
              Age:
            </label>
          </div>
          <div className="flex-1">
            <input
              value={formdata.age ? formdata.age : ""}
              type="number"
              name="age"
              required
              onChange={onChangeFormData}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="primary">
          Submit
        </button>

        {displayProperties && (
          <React.Fragment>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>
                <h4>UserName: {formdata.username.toUpperCase()}</h4>
              </li>
              <li>
                <h4>FullName: {formdata.fullName.toUpperCase()}</h4>
              </li>
              <li>
                <h4>Age: {formdata.age ? formdata.age : ""}</h4>
              </li>
            </ul>
          </React.Fragment>
        )}
      </form>
    </div>
  );
}

export default Form;
