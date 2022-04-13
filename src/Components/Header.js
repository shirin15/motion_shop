import React from 'react';

const Header = () => {
    return (

<div >
    <nav className=" header bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  "

    >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
                         <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MOTION SHOP</span>



            <div className="flex md:order-2  ">
                <div className="hidden relative mr-3 md:mr-0 md:block px-48">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#"
                               className="block py-2 pr-4 pl-3 text-white text-2xl bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
                               aria-current="page">     О нас</a>
                        </li>

                    </ul>

                </div>
                <div className="hidden relative mr-3 md:mr-0 md:block">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#"
                               className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                               aria-current="page">     О нас</a>
                        </li>

                    </ul>

                </div>
                <button data-collapse-toggle="mobile-menu-3" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-3" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd">

                        </path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd">

                        </path>
                    </svg>
                </button>
            </div>

            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"    id="mobile-menu-3">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                    <div className="relative   overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="p-4 ">
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="relative mt-1 ">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clipRule="evenodd"> </path>
                                    </svg>
                                </div>
                                <input type="text" id="table-search"
                                       className=" input border-white-300 text-white-600 text-xl div w-full   width-300    rounded-xl focus:ring-blue-500 focus:border-blue-500 block   pl-10 p-2.5  dark:bg-white-700 dark:border-white-600 dark:placeholder:text-amber-50 placeholder:outline-teal-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Я ищу . . .  "/>
                            </div>
                        </div>

                    </div>
                </ul>
            </div>
        </div>
    </nav>

</div>
    )
};

export default Header;