import {useState} from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // Clear form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };
  return (
    <>
      <div className="min-h-screen w-full bg-white mb-4">
        {/* Heading */}
        <h1 className="text-center max-w-4xl mx-auto text-sm md:text-xl lg:text-2xl text-[#F5BB07] font-bold pt-10 pb-6 md:pb-10 px-4">
          Send Message
        </h1>

        {/* Form Container */}
        <div className="w-[90%] mx-auto shadow-sm p-6 bg-white rounded-xl">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-base md:text-lg text-black font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-none rounded-xl outline-none bg-[#F4F4F3] px-4 py-4 text-sm md:text-base"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label className="block text-base md:text-lg text-black font-bold mb-2">
                Your Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-none rounded-xl outline-none bg-[#F4F4F3] px-4 py-4 text-sm md:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-base md:text-lg text-black font-bold mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Enter your message"
                rows="6"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border-none rounded-xl outline-none bg-[#F4F4F3] px-4 py-4 text-sm md:text-base resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center items-center text-white">
              <button
                type="submit"
                className="bg-[#F5BB07] px-6 py-3 rounded cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
