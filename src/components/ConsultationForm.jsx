import React, { useState } from "react";

const ConsultationForm = ({ onSubmit, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) newErrors.name = "Name is required";

    if (!formData.phoneNumber?.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.placeOfBirth?.trim()) newErrors.placeOfBirth = "Place of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    if (!formData.preferredDateTime) {
      newErrors.preferredDateTime = "Preferred date and time is required";
    } else {
      const selectedDateTime = new Date(formData.preferredDateTime);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const selectedDate = new Date(
        selectedDateTime.getFullYear(),
        selectedDateTime.getMonth(),
        selectedDateTime.getDate()
      );
      const minAllowedDate = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);

      if (selectedDate < minAllowedDate) {
        newErrors.preferredDateTime =
          "Please select a date from " + minAllowedDate.toLocaleDateString() + " onwards";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  // ✅ INPUTS LOOK WHITE IN YOUR UI → TEXT MUST BE DARK
  const baseField =
    "w-full px-4 py-3 bg-white/95 border rounded-xl " +
    "text-[#0b1220] caret-[#0b1220] placeholder-[#6b7280] " +
    "focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-400 " +
    "transition-all duration-300 shadow-lg";

  return (
    <div className="relative group mt-6">
      {/* ✅ iOS autofill / mobile typed text visibility fix */}
      <style>{`
        input, select, textarea {
          -webkit-text-fill-color: #0b1220;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          -webkit-text-fill-color: #0b1220 !important;
          caret-color: #0b1220 !important;
          transition: background-color 9999s ease-in-out 0s;
          box-shadow: 0 0 0px 1000px rgba(255,255,255,0.95) inset !important;
        }

        /* Make dropdown options readable */
        select option {
          color: #0b1220;
          background: #ffffff;
        }
      `}</style>

      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>

      <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white font-medium text-sm mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${baseField} ${errors.name ? "border-red-400" : "border-white/20"}`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-white font-medium text-sm mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`${baseField} ${errors.phoneNumber ? "border-red-400" : "border-white/20"}`}
              placeholder="Enter your 10-digit phone number"
            />
            {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white font-medium text-sm mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${baseField} ${errors.email ? "border-red-400" : "border-white/20"}`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-white font-medium text-sm mb-2">
              Date of Birth *
            </label>
            <div className="relative">
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`${baseField} ${errors.dateOfBirth ? "border-red-400" : "border-white/20"}`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            {errors.dateOfBirth && <p className="text-red-400 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>

          {/* Place of Birth */}
          <div>
            <label htmlFor="placeOfBirth" className="block text-white font-medium text-sm mb-2">
              Place of Birth *
            </label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className={`${baseField} ${errors.placeOfBirth ? "border-red-400" : "border-white/20"}`}
              placeholder="City, State, Country"
            />
            {errors.placeOfBirth && <p className="text-red-400 text-xs mt-1">{errors.placeOfBirth}</p>}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-white font-medium text-sm mb-2">
              Gender *
            </label>
            <div className="relative">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${baseField} appearance-none ${
                  errors.gender ? "border-red-400" : "border-white/20"
                }`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
          </div>

          {/* Preferred Date and Time */}
          <div>
            <label htmlFor="preferredDateTime" className="block text-white font-medium text-sm mb-2">
              Preferred Date and Time of Consultation *
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                id="preferredDateTime"
                name="preferredDateTime"
                value={formData.preferredDateTime}
                onChange={handleChange}
                min={(() => {
                  const now = new Date();
                  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                  const minAllowedDate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
                  return minAllowedDate.toISOString().slice(0, 16);
                })()}
                className={`${baseField} ${errors.preferredDateTime ? "border-red-400" : "border-white/20"}`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            {errors.preferredDateTime && (
              <p className="text-red-400 text-xs mt-1">{errors.preferredDateTime}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
