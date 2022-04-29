import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MessageRequired from './MessageRequired';
import { useNavigate } from 'react-router-dom';

const FormContactInformation = ({ children }) => {
  let navigate = useNavigate();

  const newContactInfoSchema = Yup.object().shape({
    // Contact Info
    email: Yup.string()
      .required('The Email is required.')
      .email('The email format is invalid.'),
    telephoneNumber: Yup.number()
      .typeError('The Telephone Number format is invalid.')
      .integer('Invalid number format')
      .required('The Telephone Number is required.')
      .positive('Invalid number format'),
    address: Yup.string().required('The Address is required.'),
    state: Yup.string().required('The State is required.'),
    city: Yup.string().required('The City is required.'),
    zipCode: Yup.number()
      .typeError('The ZIP CODE format is invalid.')
      .integer('Invalid number format')
      .required('The ZIP Code is required.')
      .positive('Invalid number format'),
  });

  const concatData = (values) => {
    const jsonData = {};
    Object.assign(jsonData, children.contact, values);
    return jsonData;
  };

  const handlerSubmit = async (values) => {
    try {
      const url = 'http://localhost:4000/contacts';
      const data = await concatData(values);

      const contentResult = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
      // const result = contentResult.json();
      // console.log(result);

      // window.location.reload(false);
      navigate('/clients');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto"
      hidden={children.step}
    >
      <h1 className="text-gray-500 font-bold uppercase text-center">
        Contact Information
      </h1>
      <Formik
        initialValues={{
          // Contact Info
          email: '',
          telephoneNumber: '',
          address: '',
          state: '',
          city: '',
          zipCode: '',
          notes: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          await handlerSubmit(values);
          resetForm();
        }}
        validationSchema={newContactInfoSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-5">
              {/* EMAIL */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email:{' '}
                </label>
                <Field
                  name="email"
                  id="email"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="email"
                  placeholder="Email address"
                />
                {errors.email && touched.email ? (
                  <MessageRequired>{errors.email}</MessageRequired>
                ) : null}
              </div>
              {/* TELEPHONE NUMBER */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telephoneNumber">
                  Telephone number:{' '}
                </label>
                <Field
                  name="telephoneNumber"
                  id="telephoneNumber"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="tel"
                  placeholder="Telephone number"
                />
                {errors.telephoneNumber && touched.telephoneNumber ? (
                  <MessageRequired>{errors.telephoneNumber}</MessageRequired>
                ) : null}
              </div>
              {/* ADDRESS */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="address">
                  Address:{' '}
                </label>
                <Field
                  name="address"
                  as="textarea"
                  id="address"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="text"
                  placeholder="Address"
                />
                {errors.address && touched.address ? (
                  <MessageRequired>{errors.address}</MessageRequired>
                ) : null}
              </div>
              {/* STATE */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="state">
                  State:{' '}
                </label>
                <Field
                  name="state"
                  id="state"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="text"
                  placeholder="State"
                />
                {errors.state && touched.state ? (
                  <MessageRequired>{errors.state}</MessageRequired>
                ) : null}
              </div>
              {/* CITY */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="city">
                  City:{' '}
                </label>
                <Field
                  name="city"
                  id="city"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="text"
                  placeholder="City"
                />
                {errors.city && touched.city ? (
                  <MessageRequired>{errors.city}</MessageRequired>
                ) : null}
              </div>
              {/* ZIPCODE */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="zipCode">
                  ZIP Code:{' '}
                </label>
                <Field
                  name="zipCode"
                  id="zipCode"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
                  type="text"
                  placeholder="ZIP Code"
                />
                {errors.zipCode && touched.zipCode ? (
                  <MessageRequired>{errors.zipCode}</MessageRequired>
                ) : null}
              </div>
              {/* NOTES */}
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes:{' '}
                </label>
                <Field
                  name="notes"
                  as="textarea"
                  id="notes"
                  className="mt-2 block w-full p-3 bg-gray-100 rounded-md h-40"
                  type="text"
                  placeholder="Notes"
                />
              </div>
              <input
                type="submit"
                value={'Save'}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormContactInformation;
