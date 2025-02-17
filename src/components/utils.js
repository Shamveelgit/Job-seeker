export const storeUser = (id,name,email,role) => {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("role",role);
}
export const userInCookie = () => {
    return {
        id: localStorage.getItem("id"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        role: localStorage.getItem("role"),
    }
}
export const signOut = (callback) => {
    localStorage.clear();
    callback()
}
export const input = (evt,setEmail,setPassword,setName) => {    
    if(evt.target.name === "email") {
      setEmail(evt.target.value)
    }
    else if(evt.target.name === "password") {
      setPassword(evt.target.value)
    }
    else if(evt.target.name === "name") {
      setName(evt.target.value)
    }
  }