import AddItems from './AddItems';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import apiRequest from './apiRequest';

function App() {
  const [input,setinput] = useState([])
  const [additem,setAdditem] = useState('')

   //fetch item from outer made by me

  const API_URL = "http://localhost:3500/items"
    const  [isLoading,setIsloading] = useState(true)
    const [fetchError , setFetchError] = useState(null)

    // use effect

     useEffect(()=>{
        const fetchItem = async()=>{
          try {
            const responce = await fetch(API_URL)
               if(!responce.ok) throw Error ('data not fetching')
            const changingJson = await responce.json()
            setinput(changingJson)
            setFetchError(null)

          } catch (err) {
              setFetchError(err.message)
          } finally{
              setIsloading(false)
          }
        }

    // set the time loader by manual for practice 
         setTimeout(() => {
              (async()=> fetchItem())()   
         }, 3000);
     },[])

   // handle change

  const handleChange =  async (id)=>{
    const listed  = input.map((item)=>{
        return  item.id === id ? {...item ,checked:!item.checked} :item
     })
     setinput(listed)

  const addMyDb = listed.filter((item) => item.id === id)

    const updateItem = {
            method : 'PATCH',
            headers : {
            "content-type":'application/json'
            },
            body : JSON.stringify({checked : addMyDb[0].checked})
          }

    const refurl = `${API_URL}/${id}`
    const result = await apiRequest(refurl,updateItem)
      if(result) setFetchError(result) 
    }
  
     // handle delete

  const handleDelete = async(id)=>{
     const listed =  input.filter((item)=>{
        return item.id !== id 
     })
     setinput(listed)
      
     // code for handle delete in DB 

  const deleteItem = {
       method : 'DELETE'
     }
       const refUrl = `${API_URL}/${id}`
       const result = await apiRequest(refUrl,deleteItem)
       if(result) setFetchError(result)
    }

       // add item code

   const adding = async(term)=>{
      const id = input.length ? input[input.length - 1 ].id +1 : null
           const format = {id , checked : false , productName:term}
      const listed = [...input,format]
      setinput(listed)

      // code for adding item in DB

    const postItem = {
         method : 'POST',
         headers : {
          "content-type":'application/json'
         },
         body : JSON.stringify(format)
      }
    const result = await apiRequest(API_URL,postItem)
      if(result) setFetchError(result) 
}

      // onsunbmit code

 const handleSubmit = (e)=>{ 
       e.preventDefault()
        adding(additem)
        setAdditem('')
        console.log('hi')
 } 

      // use ref 

 const returnFocus = useRef()

  return (
        <div>

        <Header />

        <AddItems 
              handleSubmit={handleSubmit}
              additem={additem}
              setAdditem={setAdditem}
              returnFocus= {returnFocus}
             
          /> 

   <main className='inputbox'>
      {isLoading &&  <p> loading items...</p> }
      {fetchError && <p>{`ERROR : ${fetchError}`}</p> }
         { !fetchError && !isLoading &&<Content  
              input = {input}
              handleChange= {handleChange}
              handleDelete={handleDelete}
          />}
   </main>     
 
       <Footer 
            length={input.length}
       />
        
        </div>
  );
}

export default App;
