import React from "react";
import {calculateInvestmentResults,formatter} from "../util/investment"


const Table=({user})=>{
const result=calculateInvestmentResults(user);
const initialInvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment
console.log(result)
    return(
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investement Value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map((yearData)=>{
                const totalInterest=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment
                const totalAmountInvested=yearData.valueEndOfYear-totalInterest
                return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                 <td>{formatter.format(yearData.valueEndOfYear)}</td>
                 <td>{formatter.format(yearData.interest)}</td>
                 
                 <td>{formatter.format(totalInterest)}</td>
                 <td>{formatter.format(totalAmountInvested)}</td>


                </tr>
                )
            })}
        </tbody>
        </table>
    
    )
}


export default Table;