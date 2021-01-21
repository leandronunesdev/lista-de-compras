import React from 'react'

function Item(props){
    console.log(props.nome)
    return(
        <p>{props.nome}</p>
    );
}

export default Item;