import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';
import api from '../../config/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
// If you want to use AppProvider loading, import useApp if available
// import { useApp } from '../../context/AppContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    intendedRole: 'student',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageInputType, setImageInputType] = useState('file'); // 'file' or 'url'
  const navigate = useNavigate();
  const { login } = useAuth();
  // const { setAppLoading } = useApp(); // If you want to use AppProvider loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setProfileImageUrl('');
    
    // Create preview for file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setProfileImageUrl(url);
    setProfileImage(null);
    
    // Set preview for URL
    if (url) {
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const signupMutation = useMutation({
    mutationFn: async ({ formDataToSend, token }) => {
      console.log('Sending signup data to server...');
      console.log('Form data sending to server:', formDataToSend);
      console.log('Using token:', token ? 'Token exists' : 'No token');
      
      return api.post('/users/', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          // Don't set Content-Type - let browser set it automatically for FormData
        },
      });
    },
    onSuccess: async (response, variables) => {
      console.log('Server response success:', response);
      const dbUser = response.data;
      console.log("from signup page dbUser",dbUser);
      // login(dbUser); // context-এ set করুন
      toast.success('Account created successfully!');
     

      
      // Update Firebase profile with processed image URL from server
      try {
        const { photoURL } = response.data;
        if (photoURL) {
          // Use the current user from auth context
          const currentUser = auth.currentUser;
          if (currentUser) {
            await updateProfile(currentUser, { photoURL });
            console.log('Firebase profile updated with:', photoURL);
          }
        }
      } catch (profileError) {
        console.log('Firebase profile update failed:', profileError);
        // Continue even if profile update fails
      }
      
      toast.success('Account created successfully!');
      setLoading(false);
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log('Server error details:', error);
      console.log('Error response:', error.response);
      console.log('Error message:', error.message);
      
      let errorMessage = 'Failed to create account. Please try again.';
      
      if (error.response) {
        console.log('Server error status:', error.response.status);
        console.log('Server error data:', error.response.data);
        
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 409) {
          errorMessage = 'User already exists with this email.';
        } else if (error.response.status === 400) {
          errorMessage = 'Invalid data provided. Please check your information.';
        } else if (error.response.status === 401) {
          errorMessage = 'Authentication failed. Please try again.';
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } else if (error.request) {
        console.log('No response received:', error.request);
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        console.log('Other error:', error.message);
        errorMessage = `Error: ${error.message}`;
      }
      
      toast.error(errorMessage);
      setLoading(false);
      setError(errorMessage);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log('Starting signup process...');
    console.log('Form data:', formData);
    console.log('Image input type:', imageInputType);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      toast.error('Passwords do not match');
      return;
    }

    try {
      console.log('Step 1: Creating Firebase user...');
      // 1. Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('Firebase user created:', user.uid);
      
      console.log('Step 2: Getting Firebase token...');
      const token = await user.getIdToken();
      console.log('Firebase token obtained:', token ? 'Token exists' : 'No token');
      localStorage.setItem('token', token);

      // 2. Prepare FormData for server (like ProductUploadForm)
      const formDataToSend = new FormData();
      
      // Add all text data
      formDataToSend.append('firebaseUid', user.uid);
      formDataToSend.append('name', formData.lastName ? `${formData.firstName} ${formData.lastName}`.trim() : formData.firstName.trim());
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('intendedRole', formData.intendedRole);
  
      
      // Add image data based on input type
      if (imageInputType === 'file' && profileImage) {
        console.log('Step 3a: Adding image file to FormData...');
        formDataToSend.append('profilePicture', profileImage);
      } else if (imageInputType === 'url' && profileImageUrl) {
        console.log('Step 3b: Adding image URL to FormData...');
        formDataToSend.append('profilePictureUrl', profileImageUrl);
      }

      console.log('Step 4: FormData prepared with all data');
      console.log('FormData entries:',formDataToSend);
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }

      // 3. Send all data to server in one request
      console.log('Step 5: Sending FormData to server...');
      signupMutation.mutate({ formDataToSend, token });

      // 4. Login context update (Firebase profile will be updated after server response)
      console.log('Step 6: Updating login context...');
      const userData = {
        firebaseUid: user.uid,
        name: formData.lastName ? `${formData.firstName} ${formData.lastName}`.trim() : formData.firstName.trim(),
        email: formData.email,
        phone: formData.phone,
        intendedRole: formData.intendedRole,
      };
      login(userData);
      console.log('Login context updated :', userData);
      
    } catch (err) {
      console.log('Firebase error details:', err);
      console.log('Error code:', err.code);
      console.log('Error message:', err.message);
      
      let errorMessage = 'Failed to create account. Please try again.';
      
      // Handle specific Firebase errors
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = 'An account with this email already exists.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (err.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please choose a stronger password.';
      } else if (err.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else {
        errorMessage = `Firebase error: ${err.message}`;
      }
      
      setError(errorMessage);
      setLoading(false);
      toast.error(errorMessage);
      console.log('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name (optional)
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="intendedRole" className="block text-sm font-medium text-gray-700">
                I am a
              </label>
              <select
                name="intendedRole"
                id="intendedRole"
                value={formData.intendedRole}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Profile Picture Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture (optional)
              </label>
              
              {/* Toggle between file upload and URL input */}
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="imageInputType"
                    value="file"
                    checked={imageInputType === 'file'}
                    onChange={(e) => setImageInputType(e.target.value)}
                    className="mr-2"
                  />
                  Upload Image
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="imageInputType"
                    value="url"
                    checked={imageInputType === 'url'}
                    onChange={(e) => setImageInputType(e.target.value)}
                    className="mr-2"
                  />
                  Image URL
                </label>
              </div>

              {/* File Upload Input */}
              {imageInputType === 'file' && (
                <input
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              )}

              {/* URL Input */}
              {imageInputType === 'url' && (
                <input
                  type="url"
                  name="profileImageUrl"
                  id="profileImageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={profileImageUrl}
                  onChange={handleUrlChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              )}

              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview:
                  </label>
                  <div className="flex justify-center">
                    <img
                      src={imagePreview}
                      alt="Profile preview"
                      className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        toast.error('Failed to load image preview');
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 