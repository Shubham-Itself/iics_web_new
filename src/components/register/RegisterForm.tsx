import { useState, FormEvent } from "react";
import Dropdown from "../../common/dropdown/Dropdown";
import GenderDropdown from "../../common/dropdown/GenderDropdown";
import ProgrammePreferences from "../../common/dropdown/ProgrammePreferences";
import QualificationDropdown from "../../common/dropdown/QualificationDropdown";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  agreement: boolean;
  gender: string;
  dob: { day: string; month: string; year: string };
  qualification: string;
  otherQualification: string;
  program: string;
  locationPreferences: string;
  source: string;
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
    gender: "",
    dob: { day: "", month: "", year: "" },
    qualification: "",
    otherQualification: "",
    program: "",
    locationPreferences: "",
    source: "",
  });

  const [activeScreen, setActiveScreen] = useState(1);

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

  const handleDOBChange = (field: keyof FormData["dob"], value: string) => {
    setFormData((prev) => ({
      ...prev,
      dob: { ...prev.dob, [field]: value },
    }));
  };

  const apiUrl = import.meta.env.VITE_APP_ODDO_BACKEND_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      const name = `${formData.firstName} ${formData.lastName}`;
      const finalQualification =
        formData.qualification === "Other"
          ? formData.otherQualification
          : formData.qualification;

      const collectedData = {
        name,
        phone: formData.phone,
        email: formData.email,
        highestQualification: finalQualification,
        program: formData.program,
        locationPreferences: formData.locationPreferences,
        source: formData.source,
        nationality: formData.nationality,
        dateOfBirth: `${formData.dob.day}-${formData.dob.month}-${formData.dob.year}`,
        gender: formData.gender,
      };

      try {
        await axios.post<{ id: number }>(`${apiUrl}/register`, collectedData);
        toast.success("Registration Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nationality: "",
          agreement: false,
          gender: "",
          dob: { day: "", month: "", year: "" },
          qualification: "",
          otherQualification: "",
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

      // console.log("Collected Data:", collectedData);
      // handle actual submission here
    }
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.nationality.trim())
      newErrors.nationality = "Nationality is required.";
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

  const handleDropdownChangeGender = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };
  const handleDropdownChangeQualification = (value: string) => {
    setFormData((prev) => ({ ...prev, qualification: value }));
  };
  const handleDropdownChangeLocation = (value: string) => {
    setFormData((prev) => ({ ...prev, locationPreferences: value }));
  };

  return (
    <section className="sign-in-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          {activeScreen === 1 && (
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
                        <span>First Name *</span>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                        />
                        {errors.firstName && (
                          <p className="text-danger">{errors.firstName}</p>
                        )}
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
                        {errors.lastName && (
                          <p className="text-danger">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Gender Dropdown */}
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Gender</span>
                        <GenderDropdown
                          value={formData.gender}
                          onChange={handleDropdownChangeGender}
                        />
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Date of Birth</span>
                        <div className="d-flex gap-3">
                          <input
                            type="text"
                            placeholder="Day"
                            value={formData.dob.day}
                            onChange={(e) =>
                              handleDOBChange("day", e.target.value)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Month"
                            value={formData.dob.month}
                            onChange={(e) =>
                              handleDOBChange("month", e.target.value)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Year"
                            value={formData.dob.year}
                            onChange={(e) =>
                              handleDOBChange("year", e.target.value)
                            }
                          />
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
                          placeholder="Nationality"
                        />
                        {errors.nationality && (
                          <p className="text-danger">{errors.nationality}</p>
                        )}
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
                          placeholder="Phone"
                        />
                        {errors.phone && (
                          <p className="text-danger">{errors.phone}</p>
                        )}
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
                          placeholder="Email"
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Qualification */}
                    <div className="col-lg-12">
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
                    </div>

                    {/* Program Interested */}
                    <div className="col-lg-12">
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
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <h5>Location Preferences</h5>
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
                      >
                        {loading ? "Sending..." : "Proceed"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
          {activeScreen === 2 && (
            <div className="flex flex-col items-center">
              <p className="text-[24px] mb-[20px]">
                Please scan & pay 2000 registration fees
              </p>
              <img
                src="/assets/iics_image/paymentQr.png"
                className="w-[500px] "
                alt="payment qr"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
