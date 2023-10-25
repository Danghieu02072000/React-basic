import { useState } from 'react'
import Content from './content.js'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App" style={{ padding: '20px'}}>
      <button onClick={() => setShow(!show)}>Togger</button>
       {show && <Content/> } 
    </div>
  );
}

export default App;
