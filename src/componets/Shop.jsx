const data = [{brand: 'Samsung', model: 'S24', price: 550,},{ brand: 'Samsung',model: 'S26 Ultra',price: 1890,},
    {brand: 'Samsung', model: 'S15', price: 550,},{ brand: 'Samsung',model: 'S20 Ultra',price: 1890,},
    {brand: 'Samsung', model: 'S16', price: 550,},{ brand: 'Samsung',model: 'S21 Ultra',price: 1890,},
    {brand: 'Samsung', model: 'S17', price: 550,},{ brand: 'Samsung',model: 'S22 Ultra',price: 1890,},
    {brand: 'Samsung', model: 'S18', price: 550,},{ brand: 'Samsung',model: 'S23 Ultra',price: 1890,}
]


function Shop() {
    return (
       <>
       <h1>Shop</h1>
       <ul>
        {
            data.map( ({brand, model, price}) => {
                       
            return (
        <>
        <li> {brand} {model}: {price}$ </li>
        </>
        )
        } )
        }
        </ul>
        </>
    )
}

export default Shop;