import React from "react"
const HelloW = ()=>{
function Hello(){
    console.log("Hello World")

}

return(
<div>
     <button type='button' onClick={Hello}><h1>HelloWorld</h1></button>

</div>
)
}
export default HelloW