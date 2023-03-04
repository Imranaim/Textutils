import { useState, useEffect } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text is Cleared", "success")
    }
    const handleExtraClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed", "success")
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied", "success")
    }
    const handleCapClick = ()=>{
        const text1 = text.toLowerCase()
        const arr = text1.split(" ");
        for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText)
        props.showAlert("Converted to Capitalize", "success")
    }
    // const handleEmailClick = ()=>{
    //     let newText = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    //     setText(newText)
    // }
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    useEffect(() => {
        // array of words
        const words = text.split(' ');
    
        // update word count
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount);
      },[text]);
    // setText("This is again Imran")
    return(
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode === 'dark' ? 'grey':'white', color:props.mode === 'dark' ? 'white':'black' }}
        id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>Convert to Capitalize Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleEmailClick}>Extract Any Email</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your text Summary</h2>
        <p className='word-count'>Word Count: {wordCount}</p><p> Characters {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes Consume To Read These Words</p>
        <h2>Preview </h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
    }
