import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav>
            <h2>Ecommerce</h2>
            <div><button>Celulares</button>
            <button>Tablets</button>
            <button>Laptops</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;