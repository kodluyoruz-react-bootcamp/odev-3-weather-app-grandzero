import * as quotes from './quotes.json';
import {memo} from 'react';
const mem = memo;
const index = parseInt(Math.floor(Math.random()*325));
function Quote() {
    return (
        <p style={{fontStyle:"italic",fontSize:"14px", fontWeight:"bold", color:"white",margin:0,marginTop:"5%"}}>{quotes.list[index].text}</p>
    )
}

export default Quote
