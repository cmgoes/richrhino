import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../aftp.json");
const contractAddress = "0x8d02dFff7E92bDb525f0D9fD9e05c48bF8B5C3cA";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(contractABI, contractAddress);  

const mintNFT = async(amount, price, state) => {  
  const {address} = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false, 
      status: "Please make sure wallet connected!",           
    }
  }  
  else {         
    const _amountOfEther = web3.utils.toWei(web3.utils.toBN(price), 'ether') * web3.utils.toBN(amount) / web3.utils.toBN(100); 
    if (state === true) {
      contract.methods.publicsaleAftp(amount).send({from: address, gas: 150000 * amount, value: _amountOfEther})
      .on("confirmation", function () {      
      })
      .on('error', async function (error, receipt) {
        console.log(error);      
      }); 
    } else {
      contract.methods.publicsaleAftp(amount).send({from: address, gas: 150000 * amount, value: _amountOfEther})
      .on("confirmation", function () {      
      })
      .on('error', async function (error, receipt) {
        console.log(error);      
      }); 
    }    

    return {
      status: "",
    }   
  }
} 

export default function Mint() {
  const [walletAddress, setWallet] = useState("");  
  const [tokenNum, setTokenNum] = useState(1);
  // const [supply, setSupply] = useState(0);
  const supply = 0;
  const [publicsaledate, setPublicsaledate] = useState(new Date("12 January 2022 16:00:00 UTC").getTime());
  const [timerInterval, setTimerInterval] = useState(null);
  const [presaleState, setPresaleState] = useState(false);

  const presalePrice = 3;
  const publicsalePrice = 6;

  const decreaseTokenNumber = () => {
    if (tokenNum === 1) {
      return;
    }
    setTokenNum(tokenNum - 1);
  }

  const handleConnect = async () => {
    const walletResponse = await connectWallet();    
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);          
        } else {
          setWallet("");          
        }
      });
    } else {
         
    }
  } 

  useEffect(() => {
    updateTime();
    setTimerInterval(setInterval(updateTime, 1000));
    return () => {
      if (timerInterval !== null) {
        clearInterval(timerInterval);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicsaledate]) 

  const updateTime = () => {
    // console.log(publicsaledate)
    let timeleft = publicsaledate - Date.now();   

    if (timeleft < 0) {
      clearInterval(timerInterval);
      if(presaleState === false) {
        setPresaleState(true);
      } else {
        setPresaleState(false);
      }
      setPublicsaledate(new Date("13 January 2022 16:00:00 UTC").getTime())
    }
  }  

  useEffect(() => {    
    async function fetchData() {
      const {address} = await getCurrentWalletConnected();   
      setWallet(address);      
      // contract.methods.totalSupply().call().then((_supply) => {        
      //   setSupply(_supply);        
      // }).catch((err) => console.log(err))
      addWalletListener();     
      // console.log(supply);  
    }
    fetchData();
  }, []);

  return (
    <div 
      className="mint-page" 
      style={{backgroundImage: "url('./images/png/banner.png')"}}
    >
      <div className="d-flex justify-content-end mint-container">
        <button className="connect" type="button" onClick={handleConnect}>
          {walletAddress.length > 0 ? (                    
            "" +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
            ) : (
              "Connect"
            )
          } 
        </button>
      </div>
      <div className="mint-assets-content mb-4">
        <img src="/images/png/gallery/1.png" width={200} height={200} alt="" />
      </div>
      <div className="mint-desc-container">
        <div className="nft-panel">
          <div className="supply">JOIN Rich Rhino Ski Club</div>
          {/* {
            presaleState? <div className="supply">Total 8420</div> : <div className="supply">{supply} / 8420</div>
          } */}
          <div className="supply">{supply} / 8888</div>
          <div className="nft-counter">            
            <div className="counter-symbol counter-minus" onClick={decreaseTokenNumber}></div>
            <div className="amount">{tokenNum}</div>
            {
              presaleState ? [tokenNum < 5 ? <div className="counter-symbol counter-plus" onClick={() => setTokenNum(tokenNum + 1)}></div> : 
              <div className="counter-symbol counter-plus" onClick={() => setTokenNum(tokenNum)}></div>] :                  
              [tokenNum < 20 ? <div className="counter-symbol counter-plus" onClick={() => setTokenNum(tokenNum + 1)}></div> : 
              <div className="counter-symbol counter-plus" onClick={() => setTokenNum(tokenNum)}></div>
            ]}            
          </div>
        </div>
        {
          presaleState ? <h4 className="mb-1">Total {presalePrice * tokenNum / 100} ETH</h4> : 
          <h4 className="mb-1">Total {publicsalePrice * tokenNum / 100} ETH</h4>
        }  
        {(publicsaledate - Date.now() > 0 && !presaleState) ? <button type="button">Mint</button> : [
        presaleState ? <button type="button" onClick={() => {mintNFT(tokenNum, presalePrice, presaleState)}}>Mint</button> : 
          <button type="button" onClick={() => {mintNFT(tokenNum, publicsalePrice, presaleState)}}>Mint</button>]
        }         
      </div>
    </div>
  )
}