import { useState } from 'react'
const Course = [
  {
    id: 1,
    name: 'HTML, Css'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]
function App() {
  const [checked, setChecked] = useState([])
  console.log(checked)
  const handlRadio = () => {

  }
  const handleChecked = (id) => {
    setChecked([...checked, id]
    )
    console.log(checked)
  }
  return (
    <div className="App" style={{ padding: '20px'}}>
      {Course.map((course) => (
        <div key={course.id}>
          <input type='checkbox' 
          onChange={() => handleChecked(course.id)} 
          checked={ checked === course.id }
          />
          <label>{course.name}</label>
        </div>
      ))}

      <button onClick={handlRadio}>Click</button>
    </div>
  );
}

export default App;
