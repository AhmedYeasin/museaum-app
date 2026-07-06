export default function Products({ products }) {
    console.log(products)
    return <div>
        <h2>Our Products</h2>
        <div>
            {products.map(product => {
                return (
                    <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={product.image}
                                alt={product.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}