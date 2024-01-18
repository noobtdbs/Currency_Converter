import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'




function App() {
 
  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])

  }

  let imageUrl = 'https://imgs.search.brave.com/kY_5tOafNGh_uLD3x_yBt5QXDn9AdWfiHXsPmlOMLOQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/bG93aW5nLWJsdWUt/cHVsc2UtdHJhY2Ut/Y29tcHV0ZXItbW9u/aXRvci1zeW1ib2xp/emVzLWhlYWx0aHkt/aGVhcnRiZWF0LWdl/bmVyYXRlZC1ieS1h/aV8xODg1NDQtNTYy/MDAuanBnP3NpemU9/NjI2JmV4dD1qcGc'
  return (
    <>
    
    
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center  bg-cover bg-no-repeat text-black"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 text-black">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1 text-orange-500">
                            <InputBox className='text-black'
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                OnAmountChange={(amount)=>setAmount(amount)}
                                

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-black">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDiasble

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default App
