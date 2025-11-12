import { useState , useCallback , useE, useEffect , useRef} from 'react'


function App() {
const [length,setLength]=useState(8);
const [numberAllowed,setNumberAllowed]=useState(false);
const [characterAllowed, setCharacterAllowed]=useState(false);
const [password,setPassword]=useState("");
const passwordRef = useRef(null);

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numberAllowed){
    str+="0123456789";
  }
  if(characterAllowed){
    str+="!@#$%^&*()_+";
  }
  for(let i=1;i<=length;i++){
    let charIndex=Math.floor(Math.random()*str.length);
    pass+=str.charAt(charIndex);
  }
  setPassword(pass);
},[length,numberAllowed,characterAllowed,setPassword]);




useEffect(()=>{
  passwordGenerator();
},[numberAllowed,characterAllowed,length,passwordGenerator]);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password]);

  return (
    <>
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Password Generator</h1>
      <label>
        Password Length:
        <input type="number" value={length} onChange={(e)=>setLength(e.target.value)} min="4" max="20" />
      </label>
      <br />
      <label>
        Include Numbers:
        <input type="checkbox" checked={numberAllowed} onChange={(e)=>setNumberAllowed(e.target.checked)} />
      </label>
      <br />
      <label>
        Include Special Characters:
        <input type="checkbox" checked={characterAllowed} onChange={(e)=>setCharacterAllowed(e.target.checked)} />
      </label>
      <br />
      <button onClick={passwordGenerator}>Generate Password</button>
      <h2>Your Generated Password:</h2>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        <input 
          type="text" 
          value={password} 
          ref={passwordRef}
          readOnly 
          style={{fontWeight:"bold",fontSize:"18px", padding:"10px", width:"300px"}}
        />
        <button onClick={copyPasswordToClipboard} style={{padding:"10px 20px", cursor:"pointer"}}>
          Copy
        </button>
      </div>
    </div>
    </>
  )
}

export default App
