import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
 <div style={{ width: '100%', height: '750px',backgroundColor: ' #59a130'}}>
  <div style={{ width: '60%', height: '450px',backgroundColor: '#fff',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
    <a href="/" style={{marginLeft: '10px',fontFamily: 'cursive',hover: ' #59a130',textDecoration: 'none', color:'black',fontSize: '20px',fontWeight:'medium'}}>Back</a>
    <hr />
   <table>
    <tr>
      <td  style={{height: '400px', width: '50%',borderRight: '1px solid black'}} >
        <img src="https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_1280.jpg" alt=""style={{height:'350px',width:'95%'}}/>
      </td>
      <td style={{height: '400px', width: '50%',paddingLeft: '10px'}}>
        <p style={{fontSize: '20px',fontFamily:'cursive', textAlign:'justify'}}>Number series, also known as sequences, are numbers arranged in a specific order or pattern. Each number in the series is derived based on a rule or pattern, which may involve arithmetic operations, geometric progression, or other mathematical relationships.</p>
        <button style={{width: '100px',height: '40px',backgroundColor: ' #59a130',border: 'none',borderRadius: '5px',color: 'white',marginLeft:'30%'}}>Read More</button>
      </td>
    </tr>
   </table>

  </div>
 </div>
)
