const apiRequest = async(url='', optionalObj = null , errMsg = null)=>{
    try {
      const responce = await fetch (url,optionalObj)
        if(!responce.ok) throw Error ('PLSE RELOAD THE APP')
    } catch (err) {
      errMsg =  err.message
    }finally{
      return errMsg;
    }
}

export default apiRequest