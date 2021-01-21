import Item from './Item'

function ListaDeCompras(){
    return(
        <div className="ListaDeCompras">
            <Item nome="Arroz" />
            <Item nome="Feijão" />
            <Item nome="Batata" />
            <Item nome="Cenoura" />
            <Item nome="Carne" />
        </div>
    )
}

export default ListaDeCompras;