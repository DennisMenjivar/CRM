import { useEffect, useState } from 'react';

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
  return <div>Contacts</div>;
};

export default Contacts;
