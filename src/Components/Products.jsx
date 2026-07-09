import { Link } from "react-router"

export default function Products({ products }) {
    console.log(products)
    return <div className="font-roboto">
        <h2 className="text-3xl font-semibold text-center m-8 bg-secondary text-white p-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 ">
            {products.map(product => {
                return (
                    <div key={product.id} className="card shadow-sm hover:shadow-lg transition-shadow duration-400 outline outline-1 outline-primary-content flex">
                        <figure className="h-80">
                            <img className="size-full object-cover h-full w-full"
                                src={product.image}
                                alt={product.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.short_details}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/idea/${product.id}`} className="btn btn-block btn-accent hover:bg-accent-focus">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}