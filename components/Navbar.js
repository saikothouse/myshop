import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My E-Commerce Shop</Link>
        <div className="flex space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/cart" className="flex items-center">
            <FaShoppingCart className="mr-1" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
