import Dropdown from "../../common/dropdown/Dropdown";
import GenderDropdown from "../../common/dropdown/GenderDropdown";
import ProgrammePreferences from "../../common/dropdown/ProgrammePreferences";
import QualificationDropdown from "../../common/dropdown/QualificationDropdown";


const RegisterForm = () => {
  return (
    <>
       <section className="sign-in-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="sign-in-items">
              <div className="title text-center">
                <h2>Register</h2>
              </div>
              <form onSubmit={(e) => e.preventDefault()} id="registration-form">
                <div className="row g-4">

                  {/* Full Name */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>First Name *</span>
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <span>Last Name *</span>
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Gender</span>
                     <GenderDropdown/>
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
                      <span>Nationality</span>
                      <input type="text" placeholder="Your Nationality" />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Phone Number</span>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Email Address</span>
                      <input type="text" placeholder="Email Address" />
                    </div>
                  </div>

                  {/* Educational Info */}
                  <div className="col-lg-12">
                    <h5>Educational Information</h5>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Highest Qualification</span>
                    <QualificationDropdown/>
                      <div>
                       
                        Other: <input type="text" placeholder="Specify" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Name of the Board/University</span>
                      <input type="text" placeholder="Board/University Name" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Year of Completion</span>
                      <input type="text" placeholder="Year" />
                    </div>
                  </div>

                  {/* Program Interested In */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Program Interested In</span>
                     <Dropdown/>
                      <div>
                        {/* <input type="radio" name="program" value="Other" /> */}
                        Other: <input type="text" placeholder="Specify" />
                      </div>
                    </div>
                  </div>

                  {/* Upload Documents */}
                  <div className="col-lg-12">
                    <h5>Upload Documents</h5>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Upload a Government ID (Aadhaar/Passport)</span>
                      <input type="file" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Upload 10th & 12th Marksheets/Certificates</span>
                      <input type="file" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Upload Portfolio (If applicable)</span>
                      <input type="file" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <span>Upload Passport Size Photo</span>
                      <input type="file" />
                    </div>
                  </div>

                  {/* Program Preferences */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                    <h5>Program Preferences</h5>
                    <ProgrammePreferences/>
                    <div>
                      {/* <input type="radio" name="campus" value="Other" /> */}
                      Other: <input type="text" placeholder="Specify" />  
                    </div>
                    </div>
                   
                  </div>

                  {/* Additional Information */}
                  <div className="col-lg-12">
                    <h5>Additional Information</h5>
                    <div className="form-clt">
                      <span>Why do you want to join this course?</span>
                      <textarea rows={3} placeholder="Your answer..." />
                    </div>
                    <div className="form-clt">
                      <span>How did you hear about IICS?</span>
                      {["Website", "Social Media", "Referral", "Advertisement"].map((label, index) => (
                        <div key={index} className="flex items-center gap-[10px]">
                          <input type="radio" name="source" value={label} className="!w-fit" /> 
                          {label}
                        </div>
                      ))}
                      <div>
                        {/* <input type="radio" name="source" value="Other" /> */}
                        Other: <input type="text" placeholder="Specify" />
                      </div>
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="col-lg-12">
                    <div className="form-check d-flex gap-2">
                      <input className="form-check-input" type="checkbox" id="agreement" />
                      <label htmlFor="agreement">
                        I agree to the terms and conditions. I authorize IICS to process my data as per the privacy policy.
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-lg-4">
                    <button type="submit" className="theme-btn">
                      Submit
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default RegisterForm;