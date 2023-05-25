import React,{useState} from "react";
import Cube from "./cube";

const Board= ()=>{
    const [Val,setVal]=useState(Array(9).fill(null));
    const [count, setcount]=useState(0);
    console.log(count);
    const [is_X,setis_X]=useState(true);
    function handleClick(index){
        // console.log("Clicked on",index);
        // const copyVal={...Val};
        // copyVal[index]=is_X? "X" : "O";
        // setVal(copyVal);
        if(Val[index]===null){setcount(count+1);}
        //Val[index]=Val[index]===null? (is_X? "X": "O") : Val[index];
        if(Val[index]===null){
            if(is_X){
                Val[index]="X";
            }
            else{
                Val[index]="O";
            }
        } 

        //setVal(Val);
        setis_X(!is_X);

        
    
    }
    const checkwin = ()=>{
        const winnerLogic =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let z of winnerLogic){
            const[a,b,c]=z;
            if(Val[a]!==null && Val[a]===Val[b] && Val[a]===Val[c]){
                return Val[a];
            }
        }
        return false;
    };
     const iswinner = checkwin();
     const handlereset=()=>{
        setVal(Array(9).fill(null));
        setcount(0);
     };
    function draw(){
        if(count===9){return true;}
        return false;
    }
    const is_draw= draw();
    return(
        <div className="board-box"  >

            { iswinner? (<><b>{iswinner}</b>  won the game! <button onClick={handlereset}>Play Again!</button></>): (is_draw ? (<>It is a <b>Draw</b> <button onClick={handlereset}>Play Again!</button></>) : (<> <h4>Now its, Player {is_X?"X":"O"} Turn</h4> <div className="row-box">
            <Cube onClick={()=>{handleClick(0); } } value={Val[0]}/>
            <Cube onClick={()=>{handleClick(1);}} value={Val[1]}/>
            <Cube onClick={()=>{handleClick(2);}} value={Val[2]}/>
            </div>
            
            <div className="row-box">
            <Cube onClick={()=>{handleClick(3);}} value={Val[3]}/>
            <Cube onClick={()=>{handleClick(4);}} value={Val[4]}/>
            <Cube onClick={()=>{handleClick(5);}} value={Val[5]}/>
            </div>
            <div className="row-box">
            <Cube onClick={()=>{handleClick(6);}} value={Val[6]}/>
            <Cube onClick={()=>{handleClick(7);}} value={Val[7]}/>
            <Cube onClick={()=>{handleClick(8);}} value={Val[8]}/>
            </div></>))}

            
        </div>
    );
};

export default Board;