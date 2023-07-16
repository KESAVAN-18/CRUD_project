const Content = ({input,handleChange,handleDelete,changing}) => {

    return (
     
        <>
             {input.length?(
            <ul className="ul" style={{boxShadow:`1px 1px 100px ${changing}` }}>
                {input.map((item)=>{
                  return  <li key={item.id}  className="list">
                             <input type="checkbox" 
                                    checked =  {item.checked}
                                    className="checkbox"
                                    onChange={()=>handleChange(item.id)}                         
                          />
                             <label onClick={()=>handleChange(item.id)} 
                                    className="inputText"> 
                                 {item.productName}</label>
                         
                          <button 
                              role='button'
                              onClick={()=>handleDelete(item.id)}
                              className="button"
                          >🅾</button>
                    </li>
                })}
              </ul> ): <p style={{fontFamily:"monospace",opacity :"50%",textAlign:"center",padding :"50px" }}>your list are empty</p> }
        </>
   
    )
  }
  
  export default Content