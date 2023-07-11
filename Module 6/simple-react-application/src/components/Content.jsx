import React, { useRef, useState } from "react";

export default function Content(){
    const textareaRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");


    const handleClick = () =>{
       // get the value from the textarea 
       const textareaValue = textareaRef.current.value;

       if(textareaValue.trim() === ""){
            setErrorMessage("Error: Please enter a message");
            setDisplayMessage("");
       } else{
            setErrorMessage("");
            setDisplayMessage(textareaValue);
            textareaRef.current.value = "";
       }
    }

    return(
        <div className="container-fluid">
            <div className="container mx-auto">
                <section className="flex flex-col items-center mt-20">
                    <textarea ref={textareaRef} name="message" id="message" className="w-full border p-1 outline-none resize-none focus:border-black" placeholder="Write your short message"></textarea>
                    <small className="text-red-700">{errorMessage}</small>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleClick}>Show Text</button>
                    {displayMessage && <p className="mt-3">{displayMessage}</p>}
                </section>
            </div>
        </div>
    )
}