import { FormEvent, useState } from "react";
import Dropdown from "../../common/dropdown/Dropdown";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  address: string;
  message: string;
};

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (value: string) => {
    setForm((prev) => ({ ...prev, course: value }));
  };

  const apiUrl = import.meta.env.REACT_APP_ODDO_BACKEND_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post<{ id: number }>(`${apiUrl}/query-form`, form);
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        address: "",
        message: "",
      });
      toast.success("Form Submitted Successfully");
      setSubmitted(true);
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.message;
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name && form.email && form.phone && form.course && form.address;
  return (
    <section className="contact-section-2 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="contact-form-items !mt-0">
              <div className="title text-center">
                <h2 className="wow fadeInUp">Send Us Message</h2>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="form-clt">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 wow fadeInUp !lowercase"
                    data-wow-delay=".2s"
                  >
                    <div className="form-clt !lowercase">
                      <input
                        type="email"
                        name="email"
                        id="email3"
                        placeholder="Email Address"
                        className="!lowercase"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                    <Dropdown
                      value={form.course}
                      onChange={handleDropdownChange}
                    />
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                    <div className="form-clt">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Write message"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                    {submitted ? (
                      <div className="text-green-600 font-semibold text-center">
                        ✅ Your message has been sent successfully!
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="theme-btn flex items-center justify-center gap-2"
                        disabled={loading || !isFormValid}
                      >
                        {loading ? (
                          <>
                            <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Enquire Now"
                        )}
                      </button>
                    )}
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

export default ContactForm;
