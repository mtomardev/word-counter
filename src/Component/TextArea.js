import React,{useState} from "react";

const TextArea = (props) =>{
    let[text, setText] = useState("")
    let [updatedtext, setUpdatedtext] = useState ("")

    let uppercase = () =>{
        let newtext = text.toUpperCase()
        setUpdatedtext(newtext)
    }
    let LowerCase = () =>{
        let newtext = text.toLowerCase()
        
        setUpdatedtext(newtext)
    }

    

        let Fcapital = () =>{

            const words = text.split(" ");

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            let string = words.join(" ");
        
            setUpdatedtext(string)
    }

    let ExtraSpace = () =>{
        let newtext = text.split(/[ ]+/).join(" ") ;
        setUpdatedtext(newtext)
    }

let Copy = () =>{
    navigator.clipboard.writeText(updatedtext)
}

    let Reset = () =>{
        setText("")
        setUpdatedtext("")
    }

    return(
        <div>
      
<div class="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} id="mybox" rows="6" onChange={(e)=>setText(e.target.value)}></textarea>
</div>

<button className="btn btn-primary " onClick={uppercase}>Convert To Upper Case</button>
<button className="btn btn-primary mx-2 " onClick={LowerCase}>Convert To Lower Case</button>
<button className="btn btn-primary" onClick={Fcapital}>First character Capital</button>
<button className="btn btn-primary mx-2 " onClick={ExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-primary  " onClick={Copy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-3" onClick={Reset}>Reset</button>
<div className="output ">
<h6>Total: Words : {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} & Characters length with space :  {text.trim().length}</h6>        
<textarea className="form-control" rows="6" value={updatedtext}></textarea>
</div>

        </div>
    )
}

export default TextArea