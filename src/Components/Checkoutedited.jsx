import { useState } from "react";
import cartimage2 from "../assets/cartimage2.jpg";

const Checkoutedited = () => {
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [csv, setCsv] = useState("");

  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [csvError, setCsvError] = useState("");
  const [expiryError, setExpiryError] = useState(""); 

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 2) {
      const month = parseInt(value.slice(0, 2), 10);
      if (month < 1 || month > 12) {
        setExpiryError("Month must be between 01 and 12");
      } else {
        setExpiryError("");
      }
    } else {
      setExpiryError("");
    }

    if (value.length >= 3) {
      value = value.slice(0, 2) + " / " + value.slice(2, 4);
    }

    setExpiry(value);
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(val)) {
      setNameError("Only letters and spaces allowed.");
    } else if (val.length < 2 || val.length > 50) {
      setNameError("Name must be between 2 and 50 characters.");
    } else {
      setNameError("");
    }
    setName(val);
  };

  const handleCardNumberChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(val);
    if (val.length !== 16) {
      setCardError("Card number must be 16 digits.");
    } else {
      setCardError("");
    }
  };

  const handleCsvChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCsv(val);
    if (val.length < 3 || val.length > 4) {
      setCsvError("CSV must be 3 or 4 digits.");
    } else {
      setCsvError("");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-[#1E9450] mb-10">
        <h1 className="text-white text-center text-2xl font-semibold py-4">
          Checkout
        </h1>
      </div>

      <div className="max-w-6xl w-[90%] mx-auto py-6">
        <div className="flex flex-col lg:flex-row flex-wrap gap-6">
          {/* Left Section */}
          <div className="flex-1 mb-10">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Billing Address */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Billing Address
                  </label>
                  <select className="w-full border border-gray-300 text-sm rounded-md p-2 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400">
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                {/* Name and Card Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div className="my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name On Card
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={handleNameChange}
                      className={`w-full border ${
                        nameError ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 py-3 text-sm focus:outline-none focus:ring-1 ${
                        nameError ? "focus:ring-red-500" : "focus:ring-gray-400"
                      }`}
                      required
                    />
                    {nameError && (
                      <p className="text-red-500 text-sm mt-1">{nameError}</p>
                    )}
                  </div>

                  {/* Card Number */}
                  <div className="my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Card Number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className={`w-full border ${
                        cardError ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 py-3 text-sm focus:outline-none focus:ring-1 ${
                        cardError ? "focus:ring-red-500" : "focus:ring-gray-400"
                      }`}
                      maxLength={16}
                      required
                    />
                    {cardError && (
                      <p className="text-red-500 text-sm mt-1">{cardError}</p>
                    )}
                  </div>
                </div>

                {/* Expiry and CSV */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={handleChange}
                      maxLength={7}
                      className={`w-full border ${
                        expiryError ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 py-3 text-sm focus:outline-none focus:ring-1 ${
                        expiryError ? "focus:ring-red-500" : "focus:ring-gray-400"
                      }`}
                      required
                    />
                    {expiryError && (
                      <p className="text-red-500 text-sm mt-1">{expiryError}</p>
                    )}
                  </div>

                  <div className="my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CSV
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Security Code"
                      value={csv}
                      onChange={handleCsvChange}
                      className={`w-full border ${
                        csvError ? "border-red-500" : "border-gray-300"
                      } rounded-md p-2 py-3 text-sm focus:outline-none focus:ring-1 ${
                        csvError ? "focus:ring-red-500" : "focus:ring-gray-400"
                      }`}
                      maxLength={4}
                      required
                    />
                    {csvError && (
                      <p className="text-red-500 text-sm mt-1">{csvError}</p>
                    )}
                  </div>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zip / Postal Address
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="w-full border border-gray-300 rounded-md p-2 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 min-w-[300px] p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-center leading-tight mb-10">
                Summary
              </h1>
              <div className="flex justify-between mb-10">
                <p className="text-gray-500">Total:</p>
                <p className="font-bold">20k PKR</p>
              </div>
              <button className="w-full bg-[#01A62F] text-white py-3 rounded-lg hover:bg-[#01a630c6] transition cursor-pointer">
                Complete Payment
              </button>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-8">
          <h1 className="mb-6 text-gray-600">Order Details</h1>
          {[1].map((item) => (
            <div
              key={item}
              className="bg-white w-full md:w-[50%] border border-gray-300 rounded-md shadow-sm p-3 flex flex-col md:flex-row items-start gap-4"
            >
              <img
                src={cartimage2}
                alt="Course Thumbnail"
                className="w-full md:w-40 h-40 md:h-auto object-cover rounded-md"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-gray-800 font-semibold text-base">
                    Adobe Photoshop: Beginner To Advance In 1 Month
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">By Ibrahim Akram</p>
                </div>
              </div>
              <div className="text-right md:text-right mt-2 md:mt-0">
                <p className="text-pink-600 font-bold text-sm">20K PKR</p>
                <p className="text-xs text-gray-400 line-through">40K PKR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkoutedited;
