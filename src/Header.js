import React from 'react';



const Header = () => {
    const listSpace = {marginRight: '8%' };

  return (
    <header >

        <section >
            <nav style={{ backgroundColor:'white' ,display: 'flex', justifyContent: 'center' }} >
            <div>
              <img src='logo2.png' alt="Logo" style={{ width: '80%', height: '100%' }} />
            </div>


            <ul style={{ listStyleType: 'none', padding: 0, width: '50%' , display: 'flex', justifyContent: 'flex-end' }}>
                <li style={listSpace}>About Us</li>
                <li style={listSpace}>Courses</li>
                <li style={listSpace}>Ressources</li>
                <li style={listSpace}>Online Learning</li>                  
            </ul>
       
            <button style={{backgroundColor: '#20B2AA', borderRadius: '8px',
            padding: '1% 2%', color: '#fff', border: 'none', cursor: 'pointer', width: '10%', height: '10%', marginRight: '0.5%' }}>Log in</button>
            <button style={{backgroundColor: 'grey', borderRadius: '8px',
            padding: '1% 2%', color: '#fff', border: 'none', cursor: 'pointer', width: '10%', height: '10%'}}>Sign in</button>
                  
            </nav>     
        </section>
      
    </header>
  );
}

export default Header; 






        