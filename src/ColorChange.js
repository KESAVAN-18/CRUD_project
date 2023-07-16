import React from 'react'

const ColorChange = ({returnFocus,handleSubmiting,changing,setchanging}) => {
  return (
    <div className='colorchanges'>
      <section>
          <select 
                  className='optionTag'
                  value={changing}
                  onChange={(e)=>{setchanging(e.target.value)}}>      
                      <option>select text color</option>
                      <option value="white">white</option>
                      <option value="darkRed">darkRed</option>
                      <option value="Green">Green</option>
                      <option value="Red">Red</option>
                      <option value="Orange">Orange</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Lime">Lime</option>
                      <option value="Blue">Blue</option>
                      <option value="Magenta">Magenta</option>
                      <option value="Cyan">Cyan</option>
                      <option value="Pink">Pink</option>
                      <option value="Purple">Purple</option>
                      <option value="Teal">Teal</option>
                      <option value="orangered">Orange-Red</option>
                      <option value="Green">Green</option>
                      <option value = "black">black</option>
             </select>
      </section>
   <form onSubmit={handleSubmiting}>
         <button 
              className="send"
              role="submit"
              onClick={()=>returnFocus.current.focus()} 
         >submit</button>
     
        </form>
    </div>
  )
}

export default ColorChange