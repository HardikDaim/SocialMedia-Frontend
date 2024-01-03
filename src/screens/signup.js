import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from '@mui/material';

const currentYear = new Date().getFullYear();

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupation: '',
    picture: null, // Use null instead of an empty string
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let value in credentials) {
      formData.append(value, credentials[value]);
    }
    formData.append('picturePath', credentials.picture.name);

    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success response
        navigate('/');
        alert('Yay! Your Account has been Created Successful.');
      } else if (response.status === 409) {
        alert('User already exists, Login now'); // User exists alert
      } else {
        alert('Enter correct E-mail ID or Password');
        throw new Error('Failed to create user');
      }
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const onChange = (e) => {
    if (e.target.name === 'picture') {
      // Handle file input
      setCredentials({ ...credentials, picture: e.target.files[0] });
    } else {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor='text' className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={credentials.firstName}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor='text' className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={credentials.lastName}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor='text' className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={credentials.location}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor='text' className="block text-sm font-medium leading-6 text-gray-900">
                Occupation
              </label>
              <div className="mt-2">
                <input
                  id="occupation"
                  name="occupation"
                  type="text"
                  value={credentials.occupation}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label htmlFor='file' className="block text-sm font-medium leading-6 text-gray-900">
              Profile Photo
            </label>
            <Box
              gridColumn="span 4"
              border={`1px solid`}
              borderRadius="5px"
              p="1rem"
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) => {
                  setCredentials({ ...credentials, picture: acceptedFiles[0] });
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed`}
                    p="1rem"
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    <input {...getInputProps()} />
                    {!credentials.picture ? (
                      <p>Add Profile Picture Here</p>
                    ) : (
                      <div>
                        <Typography>{credentials.picture.name}</Typography>
                        <EditOutlinedIcon />
                      </div>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={onChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Now
              </button>
              <p className='block text-sm font-medium leading-6 text-gray-900 py-2'>Already have an account?<Link to="/" className='font-semibold text-indigo-600'> Log in now</Link></p>
            </div>
          </form>
          <p className="mt-5 mb-3 text-body-secondary">© {currentYear}, All rights reserved</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
