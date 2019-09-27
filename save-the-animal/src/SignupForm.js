import React from 'react'
import axios from 'axios'
import SignUp from './SignUp'


export default function Logs() {
    const [users, setUsers]= useState([])
useEffect(() => {
    
    axios.
    get('https://savetheanimals-be.herokuapp.com/api/users/',  {
  headers: {
      Authorization: localStorage.getItem('token')
  }

})
.then(res => {
   console.log(res.data.listAllUsers)
   setUsers(res.data.listAllUsers)
   
})

.catch(err => {
    console.log(err.response)
})
},[])

return (
<section>
{users.map(person =>	(
<h2><SignUp key={person.id} username={person.username} password={person.password} /> </h2>	
))}
</section>
);
}