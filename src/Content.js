const Content = ({input,handleChange,handleDelete}) => {

    return (
     
        <>
             {input.length?(
              <ul className="ul">
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
                          >🅾</button>
                    </li>
                })}
              </ul> ): <p style={{fontFamily:"monospace",opacity :"50%"}}>your list are empty</p> }
        </>
   
    )
  }
  
  export default Content