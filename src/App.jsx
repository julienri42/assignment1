import { useEffect, useState } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import UserData from './components/UserData';
import 'tailwindcss/tailwind.css';

const API = 'https://stockradars.co/assignment/data.php';

const App = () => {
  const [users, setUsers] = useState([]);
  

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>

    <div className="flex justify-center items-center h-screen">
      <table className="table border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold text-gray-100 bg-black border border-gray-800">TYPE</th>
            <th className="px-4 py-2 font-semibold text-gray-100 bg-black border border-gray-800">COMPANY</th>
            <th className="px-4 py-2 font-semibold text-gray-100 bg-black border border-gray-800">MARKETCAP</th>
            <th className="px-4 py-2 font-semibold text-gray-100 bg-black border border-gray-800">URL</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </div>
    </>
    
  );
  
};

export default App;
