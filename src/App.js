import React from 'react'
// import Medium from './Medium/Medium'
import TemplateMo from './MOZ/TemplateMo'
import FreeTemplate from './MOZ/FreeTemplate'
import HTMLTemplate from './MOZ/HTMLTemplate'
import Links from './MOZ/Links'
import Contact from './MOZ/Contact'

 import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateMo/>} />
        <Route path="/FreeTemplate" element={<FreeTemplate/>} />
        <Route path="/HTMLTemplate" element={<HTMLTemplate/>} />
        <Route path="/Links" element={<Links/>} />
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>

    

    
     
    </div>
  )
}

export default App

// import React from 'react'
// import Medium from './Medium/Medium'

// const App = () => {
//   return (
//     <div>
//       {/* <Medium/> */}
//     </div>
//   )
// }

// export default App
