import Header from "./components/Header"
import InputForm from "./components/InputForm"
import { useState } from "react"
import Table from "./components/Table"

function App() {
  const[userInput,setUserInput]=useState({
    initialInvestment:12000,
    annualInvestment:1000,
    expectedReturn:6,
    duration:10,
})

const handleEvent=(heading,value)=>{
    setUserInput((prev)=>{
        return{
            ...prev,
            [heading]:+value,
        }
    })

}

const inputValid=userInput.duration>0;

  return (
    <>

    <Header/>
    <InputForm onSelect={handleEvent} userDetail={userInput}/>
   {inputValid && <Table  user={userInput} />}
   {!inputValid && <p className="center">Please Enter the valid Duration i.e.  greater that 0</p>}
    
    </>
  )
}

export default App
