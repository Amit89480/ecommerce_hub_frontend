import React from "react";

const useServices = () => {
  function validateCheckoutForm(form) {
    const errors = {};

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone) =>
      /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(phone);

    const validateCardNumber = (num) =>
      /^\d{16}$/.test(num.replace(/\s+/g, ""));

    const validateExpiryDate = (date) => {
      if (!/^\d{2}\/\d{2}$/.test(date)) return false;
      const [month, year] = date.split("/").map(Number);
      if (month < 1 || month > 12) return false;
      const fullYear = 2000 + year;
      const expiry = new Date(fullYear, month - 1, 1);
      const now = new Date();
      return expiry > now;
    };

    const validateCVV = (cvv) => /^\d{3}$/.test(cvv);

    // Validations
    if (!form.fullName?.trim()) errors.fullName = "Full Name is required";

    if (!validateEmail(form.email)) errors.email = "Invalid email";

    if (!validatePhone(form.phone)) errors.phone = "Invalid phone number";

    if (!form.address?.trim()) errors.address = "Address is required";

    if (!form.city?.trim()) errors.city = "City is required";

    if (!form.state?.trim()) errors.state = "State is required";

    if (!form.zipCode?.trim()) errors.zipCode = "Zip Code is required";

    if (!validateCardNumber(form.cardNumber))
      errors.cardNumber = "Card number must be 16 digits";

    if (!validateExpiryDate(form.expiryDate))
      errors.expiryDate = "Expiry date invalid or not in future (MM/YY)";

    if (!validateCVV(form.cvv)) errors.cvv = "CVV must be 3 digits";

    return errors;
  }

  return { validateCheckoutForm };
};

export default useServices;
