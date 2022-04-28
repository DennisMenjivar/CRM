import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MessageRequired from './MessageRequired';

const FormContactInformation = ({children}) => {
    console.log('Children', children);

    const [contact, setContact] = useState(children.contact.fields);

    const newContactInfoSchema = Yup.object().shape(
        {
          // Contact Info
          email: Yup.string().required('The Email is required.'), 
          telephoneNumber: Yup.string().required('The Telephone Number is required.'),
          address: Yup.string().required('The Address is required.'),
          state: Yup.string().required('The State is required.'),
          city: Yup.string().required('The City is required.'),
          zipCode: Yup.string().required('The ZIP Code is required.')
        }
      )
  
    const handlerSubmit = (value) =>{
      
      console.log('Contact:', children.contact)
      console.log(value);
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto" hidden={children.step}>
    <h1 className="text-gray-500 font-bold uppercase text-center">Contact Information</h1>
    <Formik 
    initialValues={
          {
            // Contact Info
            email: 'dnsmenjivar@gmail.com',
            telephoneNumber: '+1 813 812-2373',
            address: '710 Tampa Florida',
            state: 'Florida',
            city: 'Tampa',
            zipCode: '33602',
            notes: 'Pendiente',
          }
    }
    onSubmit={(value)=>{
      handlerSubmit(value);
    }}

    validationSchema={newContactInfoSchema}
    >
       {({errors, touched})=>{ 
         return (
          <Form className="mt-5">
          {/* EMAIL */}
          <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">Email: </label>
              <Field name="email" id="email" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="email" placeholder="Email address"/>
              {errors.email && touched.email ? (
                <MessageRequired>{errors.email}</MessageRequired>
              ): null}
          </div>
          {/* TELEPHONE NUMBER */}
          <div className="mb-4">
              <label className="text-gray-800" htmlFor="telephoneNumber">Telephone number: </label>
              <Field name="telephoneNumber" id="telephoneNumber" className="mt-2 block w-full p-3 bg-gray-100 rounded-md" type="tel" placeholder="Telephone number"/>
              {errors.telephoneNumber && touched.telephoneNumber ? (
                <MessageRequired>{errors.telephoneNumber}</MessageRequired>
              ): null}
          </div>
          {/* NOTES */}
          <div className="mb-4">
              <label className="text-gray-800" htmlFor="notes">Notes: </label>
              <Field name="notes" as="textarea" id="notes" className="mt-2 block w-full p-3 bg-gray-100 rounded-md h-40" type="text" placeholder="Notes"/>
          </div>
          <input type="submit" value={'Save'} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
      </Form>
       )}}
    </Formik>
</div>
  )
};

export default FormContactInformation;
