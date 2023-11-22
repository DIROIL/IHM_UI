import React from 'react';
import Header from './Header';
import Menu from './Menu';

const stylePage = {
  backgroundColor: '#E0F8FF', // Couleur de fond gris
  minHeight: '100vh', // Ajustez la hauteur de l'élément pour occuper au moins la hauteur de la vue
  padding: '20px' // Ajoutez un espacement intérieur si nécessaire
};

const App = () => {
  return (
    <div style = {stylePage} >
      <Header/>
      <Menu />      
    </div>
  );
}

export default App;