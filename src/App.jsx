import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const image_urls = [
    "https://via.placeholder.com/540/FF0000",
    "https://via.placeholder.com/360/00FF00",
    "https://via.placeholder.com/360/0000FF",
    "https://via.placeholder.com/360/F0F0F0",
    "https://via.placeholder.com/360/0F0F0F",
    "https://via.placeholder.com/360/FF00FF",
    "https://via.placeholder.com/360/00FFFF",
    "https://via.placeholder.com/360/FFFF00",
  ]

  const [modalShown, setModalShown] = useState(true);

  return (
    <div className="App">
      <nav className="bg-slate-500 flex flex-row h-14 items-center justify-between px-4">
        <h1 className="text-white text-2xl font-bold">
          Photo Gallery
        </h1>
        <a href="#" className="bg-slate-300 p-2 rounded-lg">Login</a>
      </nav>
      <div className="container mx-auto">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center pt-8">
          {image_urls.map(src => (<img src={src} key={src} />))}

        </div>
      </div>
      <div className={`fixed inset-0 overflow-auto bg-black/75 w-full h-full ${modalShown ? "block" : "hidden"} `}>
        <div className="p-8 bg-white mx-auto mt-96 w-1/3">
          Hello
        </div>
      </div>
    </div >
  )
}

export default App
