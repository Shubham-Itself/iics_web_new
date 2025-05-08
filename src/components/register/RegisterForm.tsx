import { useState, FormEvent } from "react";
import Dropdown from "../../common/dropdown/Dropdown";
import GenderDropdown from "../../common/dropdown/GenderDropdown";
import ProgrammePreferences from "../../common/dropdown/ProgrammePreferences";
import QualificationDropdown from "../../common/dropdown/QualificationDropdown";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

interface FormData {
  name: string;

  email: string;
  phone: string;

  agreement: boolean;

  dob: { day: string; month: string; year: string };

  program: string;
  locationPreferences: string;
  source: string;
}

interface Errors {
  [key: string]: string;
}

const RegisterForm = ({ setActiveScreen }: any) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",

    agreement: false,

    dob: { day: "", month: "", year: "" },

    program: "",
    locationPreferences: "",
    source: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

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

  const handleDOBChange = (date: Date | null) => {
    if (date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());

      setFormData((prev) => ({
        ...prev,
        dob: { day, month, year },
      }));
    }
  };

  const getSelectedDate = () => {
    const { day, month, year } = formData.dob;
    if (day && month && year) {
      return new Date(`${year}-${month}-${day}`);
    }
    return null;
  };

  const apiUrl = import.meta.env.VITE_APP_ODDO_BACKEND_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      const name = `${formData.name}`;

      const collectedData = {
        name,
        phone: formData.phone,
        email: formData.email,

        program: formData.program,
        locationPreferences: formData.locationPreferences,
        source: formData.source,

        dateOfBirth: `${formData.dob.day}-${formData.dob.month}-${formData.dob.year}`,
      };

      try {
        await axios.post<{ id: number }>(`${apiUrl}/register`, collectedData);
        toast.success("Registration Form Submitted Successfully");
        setFormData({
          name: "",

          email: "",
          phone: "",

          agreement: false,

          dob: { day: "", month: "", year: "" },

          program: "",
          locationPreferences: "",
          source: "",
        });
        setActiveScreen(2);
        setLoading(false);
      } catch (err: any) {
        const errorMsg = err.response?.data?.error || err.message;
        toast.error(errorMsg);
      }

      console.log("Collected Data:", collectedData);
      // handle actual submission here
    }
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.agreement)
      newErrors.agreement = "You must agree to continue.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDropdownChangeCourse = (value: string) => {
    setFormData((prev) => ({ ...prev, program: value }));
  };

  // const handleDropdownChangeGender = (value: string) => {
  //   setFormData((prev) => ({ ...prev, gender: value }));
  // };
  // const handleDropdownChangeQualification = (value: string) => {
  //   setFormData((prev) => ({ ...prev, qualification: value }));
  // };
  const handleDropdownChangeLocation = (value: string) => {
    setFormData((prev) => ({ ...prev, locationPreferences: value }));
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
                  The fee of Rs. 2000 needs to be paid to complete the
                  registration form and proceed with your application process.
                </p>
              </div>
              <form onSubmit={handleSubmit} id="registration-form">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Full Name *</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Last Name *</span>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                      {errors.lastName && (
                        <p className="text-danger">{errors.lastName}</p>
                      )}
                    </div>
                  </div> */}

                  {/* Gender Dropdown */}
                  {/* <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Gender</span>
                      <GenderDropdown
                        value={formData.gender}
                        onChange={handleDropdownChangeGender}
                      />
                    </div>
                  </div> */}

                  {/* Date of Birth */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Date of Birth</span>
                      <div className="d-flex gap-3 relative w-full">
                        <DatePicker
                          selected={getSelectedDate()}
                          onChange={handleDOBChange}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Date of Birth"
                          className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select" // for dropdown instead of scroll
                          maxDate={new Date()} // optional: disables future dates
                        />
                        {/* <i
                          className="fa fa-calendar text-[#de4141] absolute right-[12px] top-[50%] -translate-y-1/2 cursor-pointer"
                          aria-hidden="true"
                        ></i> */}
                        {/* <input
                          type="text"
                          placeholder="Month"
                          value={formData.dob.month}
                          onChange={(e) =>
                            handleDOBChange("month", e.target.value)
                          }
                        /> */}
                        {/* <input
                          type="text"
                          placeholder="Year"
                          value={formData.dob.year}
                          onChange={(e) =>
                            handleDOBChange("year", e.target.value)
                          }
                        /> */}
                      </div>
                    </div>
                  </div>

                  {/* Nationality */}
                  {/* <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Nationality *</span>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Nationality"
                      />
                      {errors.nationality && (
                        <p className="text-danger">{errors.nationality}</p>
                      )}
                    </div>
                  </div> */}

                  {/* Phone */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Phone Number *</span>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      {errors.phone && (
                        <p className="text-danger">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Email Address *</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Qualification */}
                  {/* <div className="col-lg-12">
                    <h5>Educational Information</h5>
                    <div className="form-clt">
                      <span>Highest Qualification</span>
                      <QualificationDropdown
                        value={formData.qualification}
                        onChange={handleDropdownChangeQualification}
                      />
                      {formData.qualification === "Other" && (
                        <input
                          type="text"
                          name="otherQualification"
                          placeholder="Specify"
                          value={formData.otherQualification}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  </div> */}

                  {/* Program Interested */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Program Interested In</span>
                      <Dropdown
                        value={formData.program}
                        onChange={handleDropdownChangeCourse}
                      />
                    </div>
                  </div>

                  {/* Uploads – Keep as is */}

                  {/* Program Preferences */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Location Preferences</span>
                      <ProgrammePreferences
                        value={formData.locationPreferences}
                        onChange={handleDropdownChangeLocation}
                      />
                    </div>
                  </div>

                  {/* Source */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>How did you hear about IICS?</span>
                      {[
                        "Website",
                        "Social Media",
                        "Referral",
                        "Advertisement",
                      ].map((label, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[10px]"
                        >
                          <input
                            type="radio"
                            name="source"
                            value={label}
                            checked={formData.source === label}
                            onChange={handleChange}
                            className="!w-fit"
                          />{" "}
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="col-lg-12">
                    <div className="form-check d-flex gap-2 !pl-0">
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                      />
                      <label htmlFor="agreement">
                        I agree to the terms and conditions...
                      </label>
                    </div>
                    {errors.agreement && (
                      <p className="text-danger">{errors.agreement}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="col-lg-4">
                    <button
                      type="submit"
                      className={`theme-btn ${
                        !formData.name.trim() ||
                        !formData.email.trim() ||
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
                        !formData.phone.trim() ||
                        !formData.agreement
                          ? "bg-gray-400 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={
                        !formData.name.trim() ||
                        !formData.email.trim() ||
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
                        !formData.phone.trim() ||
                        !formData.agreement
                      }
                    >
                      {loading ? "Sending..." : "Proceed"}
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
