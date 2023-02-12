import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article key={producto.id}>
            <Link to={"/item/" + producto.id}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            {producto.title}
                        </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$ {producto.price}</p>
                </div>
            </Link>

        </article>
    )
}

export default Item;