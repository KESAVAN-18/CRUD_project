import AddItems from './AddItems';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import apiRequest from './apiRequest';
import ColorChange from './ColorChange';


function App() {
  const [input,setinput] = useState([])
  const [additem,setAdditem] = useState('')
  const[changing,setchanging]= useState('')
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

     // onsubmit code for color changing

const handleSubmiting = (e)=>{
     e.preventDefault()
     setchanging('')
   }

  return (
        <div>

        <Header />

        <AddItems 
              handleSubmit={handleSubmit}
              additem={additem}
              setAdditem={setAdditem}
              returnFocus= {returnFocus}
             
          /> 

   <main>
      {isLoading && <i><p  className='loading'> loading items...</p></i> }
      {fetchError && <i><p  className='loading'>{`ERROR : ${fetchError}`}</p></i> }
         { !fetchError && !isLoading &&<Content  
              input = {input}
              handleChange= {handleChange}
              handleDelete={handleDelete}
              changing = {changing}
          />}
   </main>     
 
       <Footer 
          length={input.length}
       />
       
       <ColorChange
          changing = {changing}
          setchanging = {setchanging}
          returnFocus= {returnFocus}
          handleSubmiting={handleSubmiting}
       />
        
        </div>
  );
}

export default App;
