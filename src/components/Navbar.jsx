import { UserCheckIcon } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-neutral-800/50 to-neutral-800/50 backdrop-blur-lg flex justify-between items-center px-28 py-4">
            {/* Logo & Title */}
			<NavLink to="/">
				<div className="flex items-center gap-x-3 sm:gap-x-4">
					<img
						src="https://i.ibb.co.com/MDyNGSKL/logo.png"
						alt="Logo"
						className="size-12"
					/>
					<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider bg-gradient-to-r bg-clip-text text-transparent from-primary to-amber-400">
						EventFlame
					</h3>
				</div>
			</NavLink>
            {/* Links */}
			<div className="max-sm:hidden flex items-center gap-x-16 text-xl lg:text-2xl">
				<NavLink
					to="/"
					className="hover:text-primary transition-colors duration-100"
				>
					Home
				</NavLink>
                <NavLink
                    to="/signup"
                    className="hover:text-primary transition-colors duration-100"
                >
                    Sign Up
                </NavLink>
                <NavLink
                    to="/profile"
                    target="_blank"
                    className="hover:text-primary transition-colors duration-100"
                >
                    My Profile
                </NavLink>
			</div>
            {/* Call To Action */}
            <div className="flex items-center gap-x-8">
                <NavLink to="/login">
                    <button
                        type="button"
                        className="px-4 py-3 bg-primary rounded-lg sm:rounded-xl font-bold sm:text-xl lg:text-2xl cursor-pointer drop-shadow-[0_0_0.5rem_#d3600b] hover:drop-shadow-[0_0_0.65rem_#d3600b] active:scale-95 transition-[filter_transform] flex items-center gap-x-3"
                    >
                        <UserCheckIcon size={28} />
                        Login
                    </button>
                </NavLink>
            </div>
		</nav>
    );
};

export default Navbar;