import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  console.log(location);

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-1/6 bg-blue-900 px-5 py-10">
        <h2 className="text-3xl font-black text-center text-white">CRM - US</h2>
        <nav className="mt-10">
          <Link
            className={`${
              currentURL === '/contacts' ? 'text-blue-300' : 'text-white'
            } text-white text-1xl block mt-2 hover:text-blue-300`}
            to="/contacts"
          >
            Contacts
          </Link>
          <Link
            className={`${
              currentURL === '/contacts/newContact'
                ? 'text-blue-300'
                : 'text-white'
            } text-white text-1xl block mt-2 hover:text-blue-300`}
            to="/contacts/newContact"
          >
            Create contact
          </Link>
          {/* <Link className={`${currentURL === '/clients' ? 'text-blue-300 background: bg-blue-500 block text-1xl mt-2': 'text-white text-1xl block mt-2 hover:text-blue-300 background: bg-red-500'} `} to="/contacts">Clients</Link>
                    <Link className={`${currentURL === '/clients/newClient' ? 'text-blue-300 background: bg-blue-500 block text-1xl mt-2': 'text-white text-1xl block mt-2 hover:text-blue-300 background: bg-red-500'} `} to="/clients/newClient">New Client</Link> */}
        </nav>
      </div>
      {/* Right Part */}
      <div className="basis-5/6 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
