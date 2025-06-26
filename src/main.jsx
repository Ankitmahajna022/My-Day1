import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
 <div style={{ width: '100%', height: '750px',backgroundColor: ' #59a130'}}>
  <div style={{ width: '70%', height: '500px',backgroundColor: '#fff',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
    <Header/>
    <hr />
   <Content/>
   <hr />
  <Footer/>
  </div>
 </div>
)
