/**
 *
 * Create a PhoneNumberInput component that handles user input
 *
 * Numerical Input Only:
 * Automatic Formatting
 *
 * Add parentheses around the first three digits
 * Insert a dash after the sixth digit
 *
 * Use a standard html tex input without any additional styles
 */

import { useState } from "react";
import { formatPhoneNumber } from "../utils";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    const number = formatPhoneNumber(phoneNumber);
    setPhoneNumber(number);
  };
  console.log(phoneNumber);
  return (
    <div>
      <input
        type="text"
        onChange={handlePhoneNumberChange}
        placeholder="Enter Your Phone Number"
        value={phoneNumber}
      />
    </div>
  );
};

export default PhoneNumberInput;
