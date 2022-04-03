import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const image_urls = [
    "https://images.unsplash.com/photo-1648913163154-581667722585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1648904803235-e0db84e93298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1648737851304-4ab65e688032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
    "https://images.unsplash.com/photo-1648903512801-bd08c0a9efbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    "https://images.unsplash.com/photo-1648887934508-9f68b6fcbb91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1648895711288-565a56e5aa7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    "https://images.unsplash.com/photo-1648907833502-b649e03ad2ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
    "https://images.unsplash.com/photo-1648818167614-bf83d0761c7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ]

  const [modalShown, setModalShown] = useState(true);

  return (
    <div className="App">
      <nav className="bg-slate-500 flex flex-row h-14 items-center justify-between px-4">
        <h1 className="text-white text-2xl font-bold">
          Photo Gallery
        </h1>
        <a href="#" className="bg-slate-300 p-2 rounded-lg" onClick={() => setModalShown(true)}>Login</a>
      </nav>
      <div className="container mx-auto">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center pt-8">
          {image_urls.map(src => (
            <img className="aspect-square object-cover h-full w-full" src={src} />
          ))}

        </div>
      </div>
      <div className={`fixed inset-0 overflow-auto bg-black/75 w-full h-full ${modalShown ? "block" : "hidden"} `} onClick={() => setModalShown(false)}>
        <div className="p-8 bg-white mx-auto mt-96 w-1/3">
          Hello
        </div>
      </div>
    </div >
  )
}

export default App
