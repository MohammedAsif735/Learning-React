import { useState } from "react";
import  "./Lottery.css";
import Ticket from "./Ticket.jsx"
import {genTicket} from "./helper";

export default function Lottery({n =3, winCondition}){
    
let [ticket, setTicket] = useState(genTicket(n));
let isWinning = winCondition(ticket)

let buyTicket = () =>{
    setTicket(genTicket(n));
};
return (
    <div className="lottery">
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>buy Ticket</button>
        <h3>{isWinning && "Cangratulations, you won !!!"}</h3>
    </div>
);
}