import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData(); 
  }, []);
  // useEffect ka kaam hai kisi function ko baar-baar chalana

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setData(response.data);
    console.log(data);
  };

  return (
    <div className="p-10">
      <div className=" p-5 mt-5  bg-gray-950">
        {data.map(function (elem, index) {
          return (
            <div
              key={index}
              className="bg-gray-50 text-black flex items-center justify-between w-full p-6 mb-3 rounded"
            >
              <img className="h-60 rounded" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
