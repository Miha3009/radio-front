import './navbar.css';

const Navbar = ({className, links}) => {
    return (
        <nav className={className}>
            {links.map(link =>
                <a href={link.url} key={link.name}>{link.name}</a>
            )}
        </nav>
    );
}

export default Navbar;
