import { useNavigate } from 'react-router-dom';
import { FaInfo, FaPen, FaTrash } from 'react-icons/fa';

const Contact = ({ contact, handlerDeleteContact }) => {
  const navigate = useNavigate();
  const { id, name, telephoneNumber, email, gender, city } = contact;

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="text-center p-1 text-sm">{id}</td>
      <td className="text-left p-1 text-sm">{name}</td>
      <td className="text-left p-1 text-sm">
        <p>
          <span className="text-gray-800 text-sm pb-0">{email}</span>
        </p>
        <p>
          <span className="text-gray-800 font-bold text-sm pt-0">
            {telephoneNumber}
          </span>
        </p>
      </td>
      <td className="text-center p-1 text-sm">{gender}</td>
      <td className="text-center p-1 text-sm">{city}</td>
      <td className="flex justify-center p-1 mt-1 place-content-end gap-4">
        <div>
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 m-1 font-bold text-xs rounded-full"
            onClick={() => {
              navigate(`/contacts/${id}`);
            }}
          >
            <FaInfo />
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 m-1 font-bold text-xs rounded-full"
            onClick={() => {
              navigate(`/contacts/editContact/${id}`);
            }}
          >
            <FaPen />
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white p-3 m-1 font-bold text-xs rounded-full"
            onClick={() => {
              handlerDeleteContact(id);
            }}
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Contact;
