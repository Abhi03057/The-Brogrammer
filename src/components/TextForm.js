import React,{useState} from 'react'

export default function TextForm(props) {
  
    
    //enter email address wali address
    //   <div className="mb-3">
    //     <label for="exampleFormControlInput1" className="form-label">Email address</label>
    //     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    // </div>


    const handleUpClick = () =>{
        let newTxt=text.toUpperCase();
        setText(newTxt)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = () =>{
        let newTxt=text.toLowerCase()
        setText(newTxt)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const[text,setText]=useState("")

    function countSyllables(word) {
        word = word.toLowerCase();
        if (word.length <= 3) return 1;
        return word.match(/[aeiouy]{1,2}/g)?.length || 1;
      }
      
      const totalSyllables = text
        .split(" ")
        .map(word => countSyllables(word))
        .reduce((a, b) => a + b, 0);

    return (
        <>
    <div className="mb-3"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',
            color:props.mode==='dark'?'white':'#042743'
          }}
>
        <h2 htmlFor="myBox" className="form-label">{props.heading}</h2>
         <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={handleOnChange} id="myBox" rows="8"
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
            color:props.mode==='dark'?'white':'#042743'
          }}


  
         ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>

        <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white',
            color:props.mode==='dark'?'white':'#042743'
          }} >
            <h2>Text summary</h2>
            <p><strong>{text.split(/\s+/).filter((element)=>{
              return element.length !==0
            }).length}</strong> words and <strong> {text.length}</strong> characters</p>
            <p> <strong>{0.008*text.split(" ").filter((element)=>{
              return element.length !==0
            }).length}</strong> Minutes Read</p>
            <p>Sentences:- <strong>{text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length}</strong></p>
            <p> Flesch reading score </p> <p ><strong>{(206.835 - (1.015 * (text.split(" ").length / text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length)) -
                (84.6 * (totalSyllables / text.split(" ").length))
                 ).toFixed(2)
                }</strong></p>
            
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>

    </>
  )
}
