import React from 'react';

const Menu = () => {

  return (
    <menu style={{ height: '100%', margin: '5%'}}>
       
        <section style={{ display:'flex', height: '100%'}}> 
            <aside class="leftside" style={{flex: '1', padding: '1%', marginLeft:'2%', marginRight:'10%'}}>                   
                <p style={{color: 'green', fontSize: '100%'}}>Grow yourself with us</p>
                <h1 style={{fontSize: '250%' }} >Grow your skill & get world class job's</h1>
                <p>Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement</p>
            </aside>
            <aside class="rightside" style={{flex: '1', marginLeft:'2%', marginRight:'0%'}}>
                <img src={process.env.PUBLIC_URL + '/boy.png'} alt="Garçon" style={{}}></img>
               

            
            </aside>



        </section>
        <section>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
          <input type="text" placeholder="Exemple: Why join Skillhub?" style={{ padding: '1.5%', width: '20%' }} />
          <button style={{ marginLeft: '1%', backgroundColor: '#20B2AA', borderRadius: '8px',
            padding: '1% 2%', color: '#fff', border: 'none',  }}>Search</button>
        </div>
      </section>
    
      
    </menu>
  );
}

export default Menu;