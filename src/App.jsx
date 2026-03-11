import { useState } from 'react'
import './App.css'
import Yugioh from './Yu-Gi-OhLogo.webp'
import Mago_negro from './magiciandark.jpg'
import Maga from './magiciangrill.jpg'
import Bskull from './b.skull.jpg'
import Estrela from './icons8-estrela-48.png'
import Solomon from './SolomonMutoMD.webp'
import Joey from './joey-l.png'


function Header() {
  return (
    <>
      <header>
        <img className='Yugioh_effect' src={Yugioh} alt="Yu-Gi-Oh Logo" />
        <p style={{ textAlign: "center", fontSize: "50px", fontWeight: "500", fontFamily: "Germania One, system-ui", marginTop: "1rem", color: "#ffff", letterSpacing: "0.50rem" }}>É hora do duelo!</p>
        <button className='Btn_cards'><a href="#character">Iniciar</a></button>
      </header>
    </>
  )
}
function Character(){
 
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

 return(
    <>
      <section id='character' className='Character_1'>
        <img src={Solomon} alt="Personagem Solomon Muto" />
        <div className="Phrase">
        <button className='Btn_cards' onClick={toggleVisibility}>
          {isVisible ? 'Solomon Muto' : 'Solomon Muto'}
        </button>
        {isVisible && <p className='phrase'>Não importa quão poderosa seja a sua mão, a vitória sempre dependerá da fé que você tem no seu deck e no coração das cartas.</p>}
        </div>
      </section>
    </>
  )

}
function Character_2(){
 
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

 return(
    <>
      <section className='Character_2'>
        <img src={Joey} alt="Personagem Joey Wheeler" />
        <div className="Phrase">
        <button className='Btn_cards' onClick={toggleVisibility}>
          {isVisible ? 'Joey Wheeler' : 'Joey Wheeler'}
        </button>
        {isVisible && <p className='phrase'>Mesmo que as probabilidades estejam contra mim, eu nunca vou desistir.<br/> Essa é a minha forma de duelar!</p>}
        </div>
      </section>
    </>
  )

}
function Card({ Image, Name, Level, Mesage, Type, Atk, Def }) {
  return (
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

        <div className="card-image">
          <img src={Image} alt={Name} style={{ width: '280px', height: '280px', borderRadius: "5px" }} />
        </div>
        <div className='Attributes'>
          <p>{Type}</p>
          <p>{Mesage}</p>
          <div>
            <span></span>
            <div className="Power">
              <p>{Atk}</p>
              <p>{Def}</p>
            </div>
          </div>
        </div>
      </div> 
    </>
  )


}
function Footer() {
  return(
  <>
    <footer>
      <p>&copy; 2026 Cards Yugioh - Desenvolvedor Pers@na</p>
    </footer>
  </>
  )
}



function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      Image: Bskull,
      Name: 'B. Skull Dragon',
      Level: 9,
      Type: '[Dragon]',
      Mesage: '"Caveira Invocada". "Dragão negro de olhos vermelhos".',
      Atk: 'ATK/3200',
      Def: 'DEF/2500'
    },
    {
      id: 2,
      Image: Mago_negro,
      Name: 'Dark Magician',
      Level: 7,
      Type: '[Spellcaster]',
      Mesage: 'O mago definitivo em termos de ataque e defasa.',
      Atk: 'ATK/2500',
      Def: 'DEF/2100'
    },
    {
      id: 3,
      Image: Maga,
      Name: 'Dark Magician Girl',
      Level: 7,
      Type: '[Spellcaster]',
      Mesage: 'Ganha 300 de ATK para cada Mago Negro ou Mago do Caos das Trevas no Cemitério ',
      Atk: 'ATK/2000 ',
      Def: 'DEF/1700'
    }
  ])

  return (
    <>
      <Header />
      <section className='bottom'>
        <Character/>
        <Character_2/>
      </section>
       <section className='cards_monster'>
         <h1 style={{ textAlign: "center", fontSize: "35px", fontWeight: "500", fontFamily: "Germania One, system-ui", color: "#ffff", letterSpacing: "0.50rem", paddingTop:"1rem"} } >Eu acredito no coração das cartas</h1>
        <div className="Mycards">
          {posts.map((item) => (
            <Card
              key={item.id}
              Image={item.Image}
              Name={item.Name}
              Level={item.Level}
              Type={item.Type}
              Mesage={item.Mesage}
              Card={item.Card}
              Atk={item.Atk}
              Def={item.Def}

            />
          ))}
        </div>
        <Footer/>
       </section>
    </>

  )
}

export default App