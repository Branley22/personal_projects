import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllMemorables = (props) => {

  const [memorableList, setMemorableList] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8000/api/memorables')
    .then((res)=> {
      console.log(res.data);
      setMemorableList(res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  },[])


  return (
    <div>
      <h1>Memorables</h1>
      <div>
        {
          memorableList.map((memorable, index)=> (
            <div key={index}>
              <p>{memorable.title}</p>
              <img src={memorable.image} alt= "memorable img"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AllMemorables;