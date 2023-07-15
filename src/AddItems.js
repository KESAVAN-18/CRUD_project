
const AddItems = ({handleSubmit,additem,setAdditem,returnFocus}) => {
   
    return (
     <div>
        <form onSubmit={handleSubmit} className="inputbox">
                      <input type="text"       
                            autoFocus
                            ref={returnFocus}
                            placeholder='enter a list '
                            value = {additem}
                            onChange={(e)=>setAdditem(e.target.value)}
                        
                      />
  
                      <button 
                         role="submit"
                         onClick={()=>returnFocus.current.focus()} 
                      >✅</button>
  
            </form>
     </div>
    )
  }
  
  export default AddItems