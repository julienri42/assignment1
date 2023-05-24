const UserData = ({ users }) => {
    return (
        
      <>
        {users.map((curUser) => {
          const { F_TYPE, N_fullname, marketcap, N_URL } = curUser;
  
          return (
            
            <tr key={curUser.id} className="px-4 py-2 border border-gray-800">
              <td className="border border-gray-800 ">{F_TYPE}</td>
              <td className="border border-gray-800">{N_fullname}</td>
              
              <td className="border border-gray-800">{marketcap}</td>
              
              <td className="border border-gray-800">{N_URL}</td>
              
            </tr>
            
          );
        })}
      </>
    );
  };
  
  export default UserData;
  