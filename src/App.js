import './App.css';
import logo from './assets/Group 2985.svg';
import portal_svg from './assets/Group 3091.svg';
import ethereum from './assets/icons/1200px-ethereum-icon-purple-1@2x.png';
import terra from './assets/icons/t-copy@2x.png';
import solana from './assets/icons/s@2x.png';
import binance from './assets/icons/binance-coin-bnb-logo-1@2x.png';
import cosmos from './assets/icons/cosmos-logo-white-copy-1@2x.png';
import live_text from './assets/live-text.png';
import circle_png from './assets/circle/Mesa de trabajo 6@150x 2.png';
import middle_grid from './assets/circle/Group 3085.png'; 
import node_station from './assets/products/node_station.png';
import stake_stack from './assets/products/stake_stack.png';
import staking_defi from './assets/products/staking_defi.png';
function App() {
  return (
    <div className="App">
      <div className="header header-margin">
        <div className="container">
          <img alt="no image1" src={logo}></img>
        </div>
      </div>
      <div className="description">
        <div className="container flex">
          <div>
          <h1 className="main-description">
          Fullfill all your staking <br />needs with StaDer Labs
          </h1>
          <h2 className="side-description">
          Stake with multiple chains, multiple top quality <br />
      validators, get access to suite of staking derivatives <br />
      all on one decentralized platform
          </h2>
          <div className="flex">
          <button className="btn enter-app-btn">Enter App</button>
          <button className="btn btn-outline">Learn More</button>
          </div>
          </div>
          <img alt="no image2" src={portal_svg}></img>
        </div>

      </div>
      <div className="networks header-margin">
        <div className="container grid grid-5 text-center">
          <div className="network-card">
            <img src={terra}></img>
            <p className="text">Terra</p>
          </div>

          <div className="network-card">
            <img src={binance}></img>
            <p className="text">Binance</p>
          </div>

          <div className="network-card">
            <img src={cosmos}></img>
            <p className="text">Cosmos</p>
          </div>

          <div className="network-card">
            <img src={solana}></img>
            <p className="text">Solana</p>
          </div>

          <div className="network-card">
            <img src={ethereum}></img>
            <p className="text">Ethereum</p>
          </div>

        </div>
        <div className="container grid grid-5 text-center">
          <div className="live-text-container">
          <img src={live_text}></img>  
          </div>
       </div>
        
      </div>


      <div className="description">
        <div className="container flex">
          <img className="circle-png" src={circle_png}></img>
          <div>
          <h1 className="main-description-2">
          Our solutions will massively <br />
      simplify staking for delegators <br />
      and DAO’s.
          </h1>
          <h2 className="side-description">
          Innovative derivates will unleash new world on <br />
      staking DeFi products
          </h2>

          </div>

        </div>
      </div>

       <div className="main-description-2 container flex  text-center header-margin">
         <h2>
           Our Products
         </h2>
       </div> 


       <div className="networks header-margin">
        <div className="products container text-center">
          <img src={node_station}></img>
          <img src={stake_stack}></img>
          <img src={staking_defi}></img>
        </div>
      </div>

          

    </div>
  );
}

export default App;
