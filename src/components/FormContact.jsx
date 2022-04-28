import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import MessageRequired from './MessageRequired';
import FormContactInformation from "./FormContactInformation";

const FormContact = () => {

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState
    (
        {
        // Contact
        name: 'Dennis Armando Menjivar Elvir', //Cheque
        birthday: '04/05/1993',
        gender: 'Man', //Cheque
        married: 'Single',
        identifier: '0501-1993-04597',
        social: 'Pendiente'
        }
    )

  const newContactSchema = Yup.object().shape(
      {
        // Contact
        name: Yup.string().required('The name is required.').min(7, '7 characters minimum.'),
        birthday: Yup.string().required('The Birthday is required.'),
        married: Yup.string().optional(),
        gender: Yup.string().required('The Gender is required.'), 
        identifier: Yup.string().required('The Identifier is required.'), 
        social:  Yup.string().optional(),
        notes: Yup.string().optional(),
      }
    )

    
  const handlerSubmit = (value) =>{
    setStep(2);
    console.log(value);
  }

  return (
    <>
      {/* <FormContactProffesionalInfo>{step === 3}</FormContactProffesionalInfo> */}
      <FormContactInformation>{{step: step === 2 ? false: true, contact: contact, hSubmit: handlerSubmit}}</FormContactInformation>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto" hidden={step === 1 ? false: true}>
        <h1 className="text-gray-500 font-bold uppercase text-center">Personal Information</h1>
        <Formik 
        initialValues={
          contact
        }
        onSubmit={(value)=>{
          handlerSubmit(value);
        }}

        validationSchema={newContactSchema}
        >
           {({errors, touched})=>{ 
             return (
              <Form className="mt-5">
              {/* NAME */}
              <div className="mb-4">
                  <label className="text-gray-800" htmlFor="name">Name: </label>
                  <Field name="name" id="name" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="Contact name"/>
                  {errors.name && touched.name ? (
                    <MessageRequired>{errors.name}</MessageRequired>
                  ): null}
              </div>
               {/* BIRTHDAY */}
               <div className="mb-4">
                  <label className="text-gray-800" htmlFor="birthday">Birthday: </label>
                  <Field name="birthday" id="birthday" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="Birthday"/>
                  {errors.birthday && touched.birthday ? (
                    <MessageRequired>{errors.birthday}</MessageRequired>
                  ): null}
              </div>
              {/* MARRIED */}
              <div className="mb-4">
                  <label className="text-gray-800" htmlFor="married">Married: </label>
                  <Field name="married" id="married" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="Single / Married"/>
                  {errors.birthday && touched.birthday ? (
                    <MessageRequired>{errors.birthday}</MessageRequired>
                  ): null}
              </div>
              {/* GENDER */}
              <div className="mb-4">
                  <label className="text-gray-800" htmlFor="gender">Gender: </label>
                  <Field name="gender" id="gender" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="Gender"/>
                  {errors.gender && touched.gender ? (
                    <MessageRequired>{errors.gender}</MessageRequired>
                  ): null}
              </div>
              {/* IDENTIFIER */}
              <div className="mb-4">
                  <label className="text-gray-800" htmlFor="identifier">ID: </label>
                  <Field name="identifier" id="identifier" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="ID"/>
                  {errors.identifier && touched.identifier ? (
                    <MessageRequired>{errors.identifier}</MessageRequired>
                  ): null}
              </div>
              {/* SOCIAL */}
              <div className="mb-4">
                  <label className="text-gray-800" htmlFor="social">Social Security: </label>
                  <Field name="social" id="social" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="text" placeholder="Social Security"/>
                  {errors.social && touched.social ? (
                    <MessageRequired>{errors.social}</MessageRequired>
                  ): null}
              </div>
              <input type="submit" value={'Save'} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
          </Form>
           )}}
        </Formik>
    </div>
    </>
  )
};

export default FormContact;
