const data = [
    {
        brand: 'Samsung',
        model: 'S24',
        price: 550,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Samsung',
        model: 'S26 Ultra',
        price: 1890,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'iPhone',
        model: '13 Pro',
        price: 700,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'iPhone',
        model: 'SE',
        price: 380,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'iPhone',
        model: '12',
        price: 380,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'iPhone',
        model: '14',
        price: 380,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Samsung',
        model: 'S26 Ultra',
        price: 1890,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Samsung',
        model: 'S22 Ultra',
        price: 1890,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Redmi',
        model: 'Not 13',
        price: 300,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Redmi',
        model: 'Not 14 pro',
        price: 300,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
    {
        brand: 'Redmi',
        model: 'Not 10c',
        price: 200,
        image: "https://macbro.uz/cdn/shop/files/9_21fc35b8-3291-4317-bdf5-19bce1ae9f2a.png?v=1747881900"
    },
]

function Shop () {
    return (
        <>
<div className="container">
    <h1 className="text-danger">Shop</h1>
    <div className="card-container d-flex gap-3">
        {
            data.map( ({ brand, model, price, image }) => {
                return (
                    <>
                        <div class="card" style={{ width: "20rem" }}>
                        <img src={image} class="card-img-top" alt="rasm" />
                        <div class="card-body">
                            <h5 class="card-title"> {brand} </h5>
                            <p class="card-text"> {model} </p>
                            <p class="card-text"> ${price} </p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                        </div>
                    </>
                )
            } )
        }
    </div>
</div>


            {/* <ul>

                {
                    data.map( ({brand, model, price}) => {
                       
                        return (
                            <>
                                <li> {brand} {model}: {price}$ </li>
                            </>
                        )
                    } )
                }
            </ul> */}
        </>
    )
}

export default Shop;