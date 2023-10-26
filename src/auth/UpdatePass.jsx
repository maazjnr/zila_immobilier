import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineKey } from 'react-icons/ai';

const UpdatePass = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [fieldName]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSavePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;

    // Check if passwords match and perform save logic
    if (newPassword === confirmPassword) {
      // Call an API or dispatch an action to save the new password
      console.log('Password saved successfully:', newPassword);
    } else {
      // Handle password mismatch error
      console.error('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="max-w-sm mx-auto my-20 p-6 bg-white rounded shadow-lg">
      <div className="mb-6 relative">
        <label htmlFor="currentPass" className="block text-sm font-medium text-gray-600">
          Current Password
        </label>
        <div className="flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            id="currentPass"
            name="currentPassword"
            onChange={(e) => handleInputChange(e, 'currentPassword')}
            className="mt-1 p-3 border rounded w-full pr-10"
            placeholder="Enter your current password"
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-400"
            />
          ) : (
            <AiOutlineEye onClick={handleTogglePasswordVisibility} className="absolute right-3 cursor-pointer text-gray-400" />
          )}
        </div>
      </div>

      <div className="mb-6 relative">
        <label htmlFor="newPass" className="block text-sm font-medium text-gray-600">
          New Password
        </label>
        <div className="flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            id="newPass"
            name="newPassword"
            onChange={(e) => handleInputChange(e, 'newPassword')}
            className="mt-1 p-3 border rounded w-full pr-10"
            placeholder="Enter your new password"
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-400"
            />
          ) : (
            <AiOutlineEye onClick={handleTogglePasswordVisibility} className="absolute right-3 cursor-pointer text-gray-400" />
          )}
        </div>
      </div>

      <div className="mb-6 relative">
        <label htmlFor="confirmPass" className="block text-sm font-medium text-gray-600">
          Confirm New Password
        </label>
        <div className="flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPass"
            name="confirmPassword"
            onChange={(e) => handleInputChange(e, 'confirmPassword')}
            className="mt-1 p-3 border rounded w-full pr-10"
            placeholder="Confirm your new password"
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-400"
            />
          ) : (
            <AiOutlineEye onClick={handleTogglePasswordVisibility} className="absolute right-3 cursor-pointer text-gray-400" />
          )}
        </div>
      </div>

      <button onClick={handleSavePassword} className="bg-primary hover:bg-blue-700 text-secondaryx font-bold py-2 px-4 rounded">
        Save Password
      </button>
    </div>
  );
};

export default UpdatePass;
