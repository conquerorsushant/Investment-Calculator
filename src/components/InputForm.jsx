import React from "react";
import { useState } from "react";

const InputForm = ({onSelect,userDetail}) => {



    return (
        < div id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input value={userDetail.initialInvestment} type="number" required onChange={(event)=>onSelect("initialInvestment",event.target.value)}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input value={userDetail.annualInvestment} type="number"  required onChange={(event)=>onSelect("annualInvestment",event.target.value)}/>
                </p>

            </div>


            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input value={userDetail.expectedReturn} type="number" required onChange={(event)=>onSelect("expectedReturn",event.target.value)} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input value={userDetail.duration} type="number" required onChange={(event)=>onSelect("duration",event.target.value)} />
                </p>
            </div>

        </div>

    )

}

export default InputForm;