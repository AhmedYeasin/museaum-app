import { Link } from "react-router"

export default function Navbar() {

    const links = (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/collection"}>Collection</Link>
            <Link to={"/submit"}>Submit</Link>
        </>
    )

    return (
        <nav className="navbar shadow-sm p-6">
            <Link to={"/"} className="text-xl font-bold font-news navbar-start">Fusion Museum</Link>

            <ul className="navbar-center gap-4 text-lg font-semibold uppercase [&>*]:hover:text-primary [&_a]:hover:underline transition-all">
                {links}
            </ul>

            <div className="dropdown dropdown-end navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}