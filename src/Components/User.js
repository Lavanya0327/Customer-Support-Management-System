import React,{useState,useEffect} from 'react'
import axios from 'axios'
const CustomerSupport = () => {
    const[post,setPost]=useState([])
  const [id, setId] = useState(0);
  const [issue, setIssue] = useState('');
  useEffect(()=>{
    axios.get(`http://localhost:3001/tickets`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  return (
    <div>
      <h2  class="no-underline">Customer Tickets</h2>
      <div className='container'>
      <div className='user-container'>
        {
          post.map(x=>(
            <div className='grid-container'>
                  <h2 class="no-underline">{x.subject}</h2>
                  <h2 class="no-underline">{x.description}</h2>
                   <h2>{x.issue}</h2>
          <br></br>
              </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default CustomerSupport;