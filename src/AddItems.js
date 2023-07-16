
const AddItems = ({handleSubmit,additem,setAdditem,returnFocus}) => {
   
    return (
     <div className="additems">
        <form onSubmit={handleSubmit}>
                      <input type="text"       
                              autoFocus
                              ref={returnFocus}
                              placeholder='enter a list '
                              value = {additem}
                              onChange={(e)=>setAdditem(e.target.value)}
                        
                      />
  
                      <button 
                         className="send"
                         role="submit"
                         onClick={()=>returnFocus.current.focus()} 
                      >submit</button>


            </form>
    
     </div>
    )
  }
  
  export default AddItems