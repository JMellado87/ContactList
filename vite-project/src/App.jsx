import { useEffect,useState } from 'react'
import SingleContact from './singlecontact'
import './App.css'

function App() {
  const [contactInfo, setContactInfo] = useState([])
  const [selectedContactInfo, setSelectedContactInfo]=useState(window.location.hash.slice(1)*1)
  
  useEffect(() =>{
    const fetchlist = async()=> {
    const getList = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
    const getData = await getList.json()  
    setContactInfo(getData);
    }
    fetchlist();    
  },[])

  useEffect(() => {
window.addEventListener("hashchange", ()=> {
    setSelectedContactInfo(window.location.hash.slice(1)*1);
  })
},[])

const contacts = contactInfo.find((contact)=> {
  return selectedContactInfo === contact.id
})

  return (
      <div>
      <h1>Address Book({contacts.id})</h1>
      <div className="containerflex">
        
        <div className="contactsINFO">
        
          {contactInfo.map((contacts)=> {
            return  <ul>
                    <li key={contacts.id} className={selectedContactInfo === contacts.id ? "contactsSELECTED" : ""}>
                    <a className="links" href= {`#` + contacts.id}>
                    {contacts.name}</a>
                    </li>
                    </ul>
          })}
        
        </div>
        <SingleContact contacts={contacts} />
      </div>
    </div>
  )
}

export default App
