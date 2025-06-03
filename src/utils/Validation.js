export function validateCheckoutForm(form) {
  const errors = {};
  const isEmpty = (val) => !val?.trim();

  const validators = {
    fullName: () => isEmpty(form.fullName) && "Full Name is required",
    email: () =>
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && "Invalid email",
    phone: () =>
      !/^\d{10}$/.test(form.phone?.replace(/\D/g, "")) && "Invalid phone number",
    address: () => isEmpty(form.address) && "Address is required",
    city: () => isEmpty(form.city) && "City is required",
    state: () => isEmpty(form.state) && "State is required",
    zipCode: () => isEmpty(form.zipCode) && "Zip Code is required",
    cardNumber: () =>
      !/^\d{16}$/.test(form.cardNumber?.replace(/\s+/g, "")) &&
      "Card number must be 16 digits",
    expiryDate: () => {
      const match = /^\d{2}\/\d{2}$/.test(form.expiryDate);
      if (!match) return "Expiry date must be MM/YY";
      const [m, y] = form.expiryDate.split("/").map(Number);
      const exp = new Date(2000 + y, m - 1);
      return m < 1 || m > 12 || exp <= new Date()
        ? "Expiry date invalid or past"
        : false;
    },
    cvv: () => !/^\d{3}$/.test(form.cvv) && "CVV must be 3 digits",
  };

  for (const field in validators) {
    const error = validators[field]();
    if (error) errors[field] = error;
  }

  return errors;
}
