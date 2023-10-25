import { useEffect, useState } from "react";
const tabs = ['posts', 'comments', 'albums']
function Content() {
  const [scroll, setScroll] = useState(false)
  const [type, setType] = useState('posts')
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [type])
  useEffect(() => {

    const handleScroll = () => {
        setScroll(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
  },[])
  console.log('render')

    return (
      <div>
      {tabs.map( tab => (
      <button 
        key={tab} 
        onClick={() => setType(tab)}
      >{tab}
      </button>
      ))}

      <input value={title} onChange={(e) => {
        setTitle(e.target.value)
      }}/>
      
      <ul>
        { posts.map( post => (
            <li key={post.id}>{post.title ?? post.name}</li>
        ))}
      </ul>
      { scroll && <button style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px'
      }}>Scroll</button>}

      </div>

    )
}

export default Content