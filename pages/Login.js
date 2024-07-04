import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div style={{ background: 'url(loginBack-2.png) no-repeat', backgroundSize: '105%', fontFamily: 'Asap, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <form className="login" style={{ overflow: 'hidden', backgroundColor: 'white', padding: '40px 30px 30px 30px', borderRadius: '10px', position: 'absolute', top: '39%', left: '50%', width: '400px', transform: 'translate(-50%, -50%)', transition: 'transform 300ms, box-shadow 300ms', boxShadow: '5px 10px 10px rgba(2, 128, 144, 0.2)' }}>
        <input type="text" placeholder="Username" style={{ fontFamily: 'Asap, sans-serif', display: 'block', borderRadius: '5px', fontSize: '16px', background: 'white', width: '100%', border: '0', padding: '10px 10px', margin: '15px -10px' }} />
        <input type="password" placeholder="Password" style={{ fontFamily: 'Asap, sans-serif', display: 'block', borderRadius: '5px', fontSize: '16px', background: 'white', width: '100%', border: '0', padding: '10px 10px', margin: '15px -10px' }} />
        <button type="button" style={{ fontFamily: 'Asap, sans-serif', cursor: 'pointer', color: '#fff', fontSize: '16px', textTransform: 'uppercase', width: '80px', border: '0', padding: '10px 0', marginTop: '10px', marginLeft: '-5px', borderRadius: '5px', backgroundColor: 'rgba(244, 91, 105, 1)', transition: 'background-color 300ms' }}>Login</button>
      </form>

      
    </div>
  );
};

export default Login;