import React, { useState } from 'react'
import copy from "copy-to-clipboard";  

export default function TextForm(props) {

     function upHandller(){

        const newtext=text.toLocaleUpperCase();
        setText(newtext)
        props.showAlert("UpperCase Converted","success");
     }
     function loHandller(){

        const newtext=text.toLocaleLowerCase();
        setText(newtext)
        props.showAlert("LowerCase Converted","success");
     }

     function undoHandller(){

        const newtext=text.slice(0,-1);
        setText(newtext)
        props.showAlert("Undo is Done","success")
     }

     function copyHandller(){

       copy(text);
       setText(" ");
       props.showAlert("Your Text is Copy to Clipboard","success")
   }
     
     function clearHandller(){
      setText(" ")
      props.showAlert("Clear Sucessfully","success")
        
     }
      function handletoChange(e){
        setText(e.target.value)


      }
   


    const [text,setText]=useState(" ")
  return (
    <>
    

<div className='container my-5'>
 
 <h2 style={{color: props.mode==='dark'?'white':'black'}}>Enter Your Analyse Text</h2>
     
<div className="mb-3 my-3">

<textarea className="form-control my-3" id="mybox" rows="8"   value={text}  onChange={handletoChange}  style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}}/>
<button  className='btn btn-primary mx-2' onClick={upHandller}>ClickToUpperCase</button>
<button  className='btn btn-primary mx-2' onClick={loHandller}>ClickToLowerCase</button>
<button  className='btn btn-primary mx-2' onClick={undoHandller}>CllickToBackSpace</button>
<button  className='btn btn-primary mx-2' onClick={clearHandller}>Clear Text</button>
<button  className='btn btn-primary mx-2' onClick={copyHandller}>CopyText</button>
{/* <button type="button" className="btn btn-primary my-2" onClick={toggleStyle}>{btnText}</button> */}

</div>
</div>
<div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>
    <h3 style={{color: props.mode==='dark'?'white':'black'}}> Your Text Summary</h3>
    <p><b>{text.split(" ").length-1}</b> Words, <b>{text.length}</b> Charecters</p>
    <p> {0.008 * text.split(" ").length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>

  );
}
