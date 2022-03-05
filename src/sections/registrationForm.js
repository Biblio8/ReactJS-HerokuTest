import React, { useMemo, useState } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";

function RegistrationForm() {
  const api = axios.create({
    baseURL: "http://localhost:5000",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [proposition, setProposition] = useState("");
  const [company, setCompany] = useState("");
  const [program, setProgram] = useState("");
  const [country, setCountry] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  const actions = [
    { label: "Ungergraduate", value: 1 },
    { label: "Master", value: 2 },
    { label: "PhD", value: 3 },
    { label: "Other", value: 4 }
  ];

  const programChangeHandler = (program) => {
    setProgram(program);
  }

  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = (country) => {
    setCountry(country);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const guest = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      CNIC: CNIC,
      contactNo: contactNo,
      proposition: proposition,
      company: company,
      program: program,
      country: country,
      fieldOfStudy: fieldOfStudy,
    };

    console.log(guest);

    api
      .post("/seminar/registration", guest)
      .then((res) => {
        alert(`${res.data}`);
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setCNIC("");
    setContactNo("");
    setProposition("");
    setCompany("");
    setProgram("");
    setCountry("");
    setFieldOfStudy("");
  };

  return (
    <>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Seminar Registration</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">Get Registered for up comming saminar!</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* <!-- First Name --> */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" value={firstName} placeholder="Enter First Name" type="text" data-sb-validations="required" onChange={(e) => { setFirstName(e.target.value) }} />
                  <label for="name">First Name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                {/* Last Name */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" value={lastName} placeholder="Enter Last Name" type="text" data-sb-validations="required" onChange={(e) => { setLastName(e.target.value) }} />
                  <label for="name">Last Name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" value={email} placeholder="Enter Email Address" type="email" data-sb-validations="required,email" onChange={(e) => { setEmail(e.target.value) }} />
                  <label for="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                {/* <!-- CNIC input--> */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="CNIC" value={CNIC} data-inputmask="'mask': '99999-9999999-9'" placeholder="XXXXX-XXXXXXX-X" type="text" data-sb-validations="required" onChange={(e) => { setCNIC(e.target.value) }} />
                  <label for="CNIC">ID Card No.</label>
                  <div className="invalid-feedback" data-sb-feedback="CNIC:required">ID Card is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="CNIC:CNIC">ID Card is not valid.</div>
                </div>
                {/* <!-- Phone Number input--> */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="contact" value={contactNo} placeholder="Enter Contact No." type="text" data-sb-validations="required" maxLength={15} onChange={(e) => { setContactNo(e.target.value) }} />
                  <label for="contact">Contact No.</label>
                  <div className="invalid-feedback" data-sb-feedback="contact:required">Contact Number is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="contact:contact">Contact Number is not valid.</div>
                </div>
                {/* <!-- Profession input--> */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="profession" value={proposition} placeholder="Enter Profession" type="tel" onChange={(e) => { setProposition(e.target.value) }} />
                  <label for="profession">Profession</label>
                </div>
                {/* Company or Organization */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="organization" value={company} placeholder="Enter Company or Organization" type="tel" onChange={(e) => { setCompany(e.target.value) }} />
                  <label for="organization">Company/Organization</label>
                </div>
                {/* Program Dropdown */}
                <div className="form-floating mb-3">
                  <Select className="form-control" id="program" options={actions} value={program} placeholder="Select Program" onChange={programChangeHandler} />
                  <label for="program">Program</label>
                </div>
                {/* Country Dropdown */}
                <div className="form-floating mb-3">
                  <Select className="form-control" id="country" options={options} value={country} placeholder="Select Country" onChange={changeHandler} />
                  <label for="country">Country</label>
                </div>
                {/* Field of Study Input */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="fieldOfStudy" value={fieldOfStudy} placeholder="Field of Study" type="text" onChange={(e) => { setFieldOfStudy(e.target.value) }} />
                  <label for="fieldOfStudy">Field of Study</label>
                </div>
                {/* <!-- Message input--> */}
                {/* <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                  <label for="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div> */}
                {/* <!-- Submit Button--> */}
                <div onClick={submitHandler} className="d-grid"><button className="btn btn-primary btn-xl" type="submit">Register Me</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationForm;
