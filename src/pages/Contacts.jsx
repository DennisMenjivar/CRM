import { useEffect, useState } from 'react';
import Contact from '../components/Contact';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContactsAPI = async () => {
      try {
        const url = 'http://localhost:4000/contacts';
        const contentResult = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await contentResult.json();
        setContacts(result);
      } catch (error) {
        console.log(error);
      }
    };

    getContactsAPI();
  }, []);
  return (
    <div>
      <h1 className="font-black text-2xl text-blue-900">Contacts</h1>
      <p className="mt-1">Manage the Contacts.</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Gender</th>
            <th className="p-2">City</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((con) => (
            <Contact key={con.id} contact={con} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
