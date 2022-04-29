import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const InfoContact = () => {
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
        const url = `http://localhost:4000/contacts/${id}`;
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

  return loading ? (
    <Spinner />
  ) : Object.keys(contact).length === 0 ? (
    <p className="text-center font-black uppercase text-red-500">
      Data not found.
    </p>
  ) : (
    <div>
      <h1 className="font-black text-2xl text-blue-900">Contact Information</h1>
      <p className="mt-1 pb-10">Info about: {name}</p>

      <div className="shadow-xl rounded-lg">
        {/* ID */}
        <p className="text-blue-100 bg-blue-600 pt-1 pb-1 pl-3 text-xl rounded-t-lg">
          <span className="font-bold text-white">Name: </span>
          {id}
        </p>
        {/* NAME */}
        <p className="text-blue-100 bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Name: </span>
          {name}
        </p>
        {/* BIRTHDAY */}
        <p className="text-blue-200 bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Birthday: </span>
          {birthday}
        </p>
        {/* MARRIED */}
        <p className="text-blue-200 bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Married: </span>
          {married}
        </p>
        {/* GENDER */}
        <p className="text-white bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Gender: </span>
          {gender}
        </p>
        {/* IDENTIFIER */}
        <p className="text-white bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">ID: </span>
          {identifier}
        </p>
        {/* SOCIAL NUMBER */}
        <p className="text-white bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Social Number: </span>
          {social}
        </p>
        {/* EMAIL */}
        <p className="text-white bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Email: </span>
          {email}
        </p>
        {/* TELEPHONE NUMBER */}
        <p className="text-white bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Telephone: </span>
          {telephoneNumber}
        </p>
        {/* ADDRESS */}
        <p className="text-white bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">Address: </span>
          {address}
        </p>
        {/* STATE */}
        <p className="text-white bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">State: </span>
          {state}
        </p>
        {/* CITY */}
        <p className="text-white bg-blue-500 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">City: </span>
          {city}
        </p>
        {/* ZIP Code */}
        <p className="text-white bg-blue-600 pt-1 pb-1 pl-3 text-xl">
          <span className="font-bold text-white">ZIP Code: </span>
          {zipCode}
        </p>
        {/* NOTES */}
        <p className="text-white bg-blue-500 pt-1 pb-1 pl-3 text-xl rounded-b-lg">
          <span className="font-bold text-white">Notes: </span>
          {notes}
        </p>
      </div>
    </div>
  );
};

export default InfoContact;
