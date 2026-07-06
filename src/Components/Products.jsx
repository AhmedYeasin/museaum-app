export default function Products({ products }) {
    console.log(products)
    return <div className="font-roboto">
        <h2>Our Products</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {products.map(product => {
                return (
                    <div key={product.id} className="card bg-base-white w-96 shadow-sm outline outline-1 outline-primary-content flex">
                        <figure>
                            <img
                                src={product.image}
                                alt={product.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.short_details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}