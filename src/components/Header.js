import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
function Header() {
    return (
        <header>
            {/* top nav  */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2"> {/*  backgroundColor amazon Blue, Padding1,paddingY2 */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                    />
                </div>
                {/* SearchBAr */}
                <div className="hidden items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 sm:flex hover:bg-yellow-500">
                    <input className="h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right portion */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" >
                        <p>Hello, Prince Sharma</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Order</p>
                    </div>
                    <div className="link relative items-center flex">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                    </div>

                </div>
            </div>
            {/* bottom nav  */}
            <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                <p></p>
            </div>
        </header>
    )
}

export default Header
