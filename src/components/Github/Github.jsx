import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
  const data = useLoaderData()

//   useEffect(() => {
//     fetch("https://api.github.com/users/Agent-006")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <div className="w-full text-center p-4 bg-gray-600 text-white  text-3xl flex flex-col justify-center items-center">
      Github Followers: {data.followers}
      <img
        className="my-4"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Agent-006')
    return res.json()
} 