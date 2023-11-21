import React from 'react';

function App() {

  const [user, setUser] = React.useState(null)

  React.useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(user);

  return (

    // website has been made responsive
    <div className='flex justify-center pt-36 bg-gray-100 h-screen w-screen'>
        {user && user.results && user.results.length > 0 && (
        
        <div className='bg-white flex flex-col sm:flex-row gap-5 p-6 rounded-3xl shadow-xl h-fit'>
          <div>
            <img src={user.results[0].picture.large} alt='user' className='rounded-2xl h-44'/>
          </div>
          <div className=' flex flex-col justify-evenly text font-mono font-semibold text-xl'>
            <div className='flex gap-4'><span>{user.results[0].name.first}</span> <span>{user.results[0].name.last}</span></div>
            <p>{user.results[0].gender}</p>
            <p>{user.results[0].phone}</p>
          </div>
        </div>
        )}
  </div>
  );
}

export default App;
