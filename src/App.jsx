import { useState } from 'react'
import './App.css'
import Yugioh from './Yu-Gi-OhLogo.webp'
import Mago_negro from './magiciandark.jpg'
import Maga from './magiciangrill.jpg'
import Bskull from './b.skull.jpg'
import Estrela from './icons8-estrela-48.png'



function Header(){
  return(
    <>
    <header>
      <img className='Yugioh_effect' src={Yugioh} alt="Yu-Gi-Oh Logo" />
      <p style={{textAlign:"center", fontSize:"50px", marginBottom:"", fontWeight:"500",fontFamily:"Germania One, system-ui", marginTop:"1rem", color:"#ffff", letterSpacing:"0.50rem"}}>É hora do duelo!</p>
      <button className='Btn_cards'><a href="#">Iniciar</a></button>
    </header>
    </>
  )
}
function Card({Image,Name,Level,Type,Card,Atk,Def}){
return(
<>
<div className="cards">
<div className='Name_card'>
<p>{Name}</p>
</div>
<div className="Level_card">
<>
{[...Array(Level)].map((_, index) => (
        <div className='Circle'>
          <img 
            key={index} 
            src={Estrela} 
            className='Card_estrela' 
            alt="estrela" 
          />
          </div>
        ))}
</>
</div>
{/* Aqui usamos a prop Image no src da tag img */}
<div className="card-image">
  <img src={Image} alt={Name} style={{ width: '280px', height:'280px', borderRadius:"5px" }} />
</div>
<p>{Card}</p>
<p>{Type}</p>
<p>{Atk}</p>
<p>{Def}</p>
</div>
</>
)


}


function App() {
  const [posts, setPosts ] = useState([
    {
      id: 1,
     Image: Bskull,
     Name: 'B. Skull Dragon',
     Level: 9,
     Type: 'Dragon',
     Card: 'Tipo: Fusion Monster',
     Atk: 'Atk: 3200',
     Def: 'Def: 2500'
    },
      {
      id: 2,
     Image: Mago_negro,   
     Name: 'Dark Magician Girl',
     Level: 'Nível: 7',
      Type: 'Spellcaster',
     Card: 'Tipo: Effect Monster',
     Atk: 'Atk: 2000',
     Def: 'Def: 1700'
    },
      {
      id: 3,
     Image: Maga,
     Name: 'Dark Magician',
     Level: 'Nível: 7',
      Type: 'Spellcaster',
     Card: 'tipo: normal Monster',
     Atk: 'Atk: 2500',
     Def: 'Def: 2100'
    }
  ])
 
  return (
    <>
      <Header/>
      <main>
        <h1 style={{textAlign:"center"}}>Testando</h1>
      <div className="Mycards">
        {posts.map((item) => (
            <Card
            key={item.id}
            Image={item.Image}
            Name= {item.Name}
            Level = {item.Level}
            Type = {item.Type}
            Card = {item.Card}
            Atk = {item.Atk}
            Def = {item.Def}
           
            />
          ))}
      </div>
      </main>
    </>
    
  )
}

export default App