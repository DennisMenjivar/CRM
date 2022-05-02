import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FormContact from '../components/FormContact';

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    name,
    birthday,
    married,
    gender,
    identifier,
    social,
    notes,
    email,
    telephoneNumber,
    address,
    state,
    city,
    zipCode,
  } = contact;

  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const contentResult = await fetch(url);
        const result = await contentResult.json();
        setContact(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getContactInfo();
  }, []);

  return (
    <div>
      <h1 className="font-black text-2xl text-blue-900">Edit Contact</h1>
      <p className="mt-1">Fill out the information.</p>
      {contact.name ? (
        <FormContact pContact={contact} loading={loading} />
      ) : (
        <p className="text-center font-black uppercase text-red-500">
          Contact ID not found.
        </p>
      )}
    </div>
  );
};

export default EditContact;
