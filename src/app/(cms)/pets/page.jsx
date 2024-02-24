// 'use client'

// import React, { useState, useEffect } from 'react';
// import Pets from './pets'

// function page() {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://sannavet-api.onrender.com/pets/');
//       const data = await response.json();
      
//       setData(data);
//       console.log(data);
//     };
//     fetchData();

    
//   }, []);

//   return (
//     <div>
//       <ul>
//         <Pets data={data.results}/>
//       </ul>
//     </div>
//   );
// }

// export default page;
'use client'
import React, { useState, useEffect } from 'react';
import Pets from './pets';

function Page() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sannavet-api.onrender.com/pets/', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4ODEzMTgxLCJpYXQiOjE3MDg4MTEzODEsImp0aSI6ImZlMjk2MDVkNmE2ZjRmZTA4NmFlMDlkNzI2NmZmYzJjIiwidXNlcl9pZCI6NH0.YYSkO5lMQCvTshsQQ0F8Aqvn9dQsBf-F6H0QDZKgQMA',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <Pets data={data.results}/>
      </ul>
    </div>
  );
}

export default Page;
