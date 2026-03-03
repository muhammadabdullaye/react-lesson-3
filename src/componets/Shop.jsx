const data = [
    {
        brand: 'Samsung',
        model: 'S24',
        price: 550,

        image: "https://rostov.store123.ru/upload/iblock/d51/d55xbv1albqlloxklw1offd57mmqyr3g.jpeg"
    },
    {
        brand: 'Samsung',
        model: 'S26 Ultra',
        price: 1890,

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hld58fRJ-cfFVYj3zgsKmK0mLRs2vt8mLZuZGZPzVjOJLFQqghoGJTPzPY9eut1FeU4&usqp=CAU"
    },
    {
        brand: 'iPhone',
        model: '13 Pro',
        price: 700,
    
        image: "https://olcha.uz/image/700x700/products/2021-10-16/apple-iphone-13-256gb-25904-2.jpeg"
    },
    {
        brand: 'iPhone',
        model: 'SE',
        price: 1,
   
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1l9OF0mqLf4Pv8FaNpuIJd21mX9v38Od0Q&s"
    },
    {
        brand: 'iPhone',
        model: '12',
        price: 380,
   
        image: "https://olcha.uz/image/700x700/products/2020-10-24/apple-iphone-12-128gb-18427-0.jpeg"
    },
    {
        brand: 'iPhone',
        model: '14',
        price: 380,
 
        image: "https://tezz.uz/uploads/images/product/594/thumbs/215657-10501050.jpg"
    },
    {
        brand: 'Samsung',
        model: 'S26 Ultra',
        price: 1890,
    
        image: "https://radius.uz/_next/image?url=https%3A%2F%2Fnew.api.radius.uz%2Fmedia%2Fthumbnails%2Fproducts%2Fsm-s948_galaxys26ultra_front_black_251120_1_1ad869ac_thumbnail_2048.webp&w=1024&q=75"
    },
    {
        brand: 'Samsung',
        model: 'S22 Ultra',
        price: 1890,
       
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJiN3eVqB0UUpHrLB3MnH_HmgQB_eSsllig&s"
    },
    {
        brand: 'Redmi',
        model: 'Not 13',
        price: 300,
      
        image: "https://cdn.webshopapp.com/shops/256009/files/447245727/xiaomi-xiaomi-redmi-note-13-4g-6gb-128gb.jpg"
    },
    {
        brand: 'Redmi',
        model: 'Not 14 pro',
        price: 300,
        
        image: "https://minapi.beemarket.uz/prod-media/productImages/1737020296srnYI9gjoC1m.webp"
    },
    {
        brand: 'Redmi',
        model: ' 10c',
        price: 200,
        
        image: "https://tezz.uz/uploads/images/product/594/thumbs/215680_1-10501050.jpg "
    },
]

function Shop () {
    return (
        <>
<div className="container">
    <h1 className="text-danger">Shop</h1>
    <div className="card-container d-flex gap-3">
        {
            data.map( ({ brand, model, price, image  }) => {
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