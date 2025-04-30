import { useState, FormEvent } from "react";
import Dropdown from "../../common/dropdown/Dropdown";
import GenderDropdown from "../../common/dropdown/GenderDropdown";
import ProgrammePreferences from "../../common/dropdown/ProgrammePreferences";
import QualificationDropdown from "../../common/dropdown/QualificationDropdown";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  agreement: boolean;
}

interface Errors {
  [key: string]: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    agreement: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    const inputValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.agreement) newErrors.agreement = "You must agree to continue.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // handle actual submission
    }
  };

  return (
    <section className="sign-in-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="sign-in-items">
              <div className="title text-center">
                <h2>Registration Form</h2>
                <p className="text-danger">
                The fee of Rs. 2000 needs to be paid to complete the registration form and proceed with your application process.
                </p>
              </div>
              <form onSubmit={handleSubmit} id="registration-form">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>First Name *</span>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                      {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Last Name *</span>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                      {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Gender Dropdown */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Gender</span>
                      <GenderDropdown />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Date of Birth</span>
                      <div className="d-flex gap-3">
                        <input type="text" placeholder="Day" />
                        <input type="text" placeholder="Month" />
                        <input type="text" placeholder="Year" />
                      </div>
                    </div>
                  </div>

                  {/* Nationality */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Nationality *</span>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Your Nationality"
                      />
                      {errors.nationality && <p className="text-danger">{errors.nationality}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Phone Number *</span>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                      {errors.phone && <p className="text-danger">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Email Address *</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                      {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="col-lg-12">
                    <h5>Educational Information</h5>
                    <div className="form-clt">
                      <span>Highest Qualification</span>
                      <QualificationDropdown />
                      <div>Other: <input type="text" placeholder="Specify" /></div>
                    </div>
                  </div>

                  {/* Program Interested */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Program Interested In</span>
                      <Dropdown />
                    </div>
                  </div>

                  {/* Uploads – Keep as is */}

                  {/* Program Preferences */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <h5>Program Preferences</h5>
                      <ProgrammePreferences />
                    </div>
                  </div>

                  {/* Source */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>How did you hear about IICS?</span>
                      {["Website", "Social Media", "Referral", "Advertisement"].map((label, index) => (
                        <div key={index} className="flex items-center gap-[10px]">
                          <input type="radio" name="source" value={label} className="!w-fit" /> {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="col-lg-12">
                    <div className="form-check d-flex gap-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                      />
                      <label htmlFor="agreement">
                        I agree to the terms and conditions...
                      </label>
                    </div>
                    {errors.agreement && <p className="text-danger">{errors.agreement}</p>}
                  </div>

                  {/* Submit */}
                  <div className="col-lg-4">
                  <button
  type="submit"
  className={`theme-btn ${
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
    !formData.phone.trim() ||
    !formData.nationality.trim() ||
    !formData.agreement
      ? "bg-gray-400 cursor-not-allowed"
      : ""
  }`}
  disabled={
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
    !formData.phone.trim() ||
    !formData.nationality.trim() ||
    !formData.agreement
  }
>
  Proceed
</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;