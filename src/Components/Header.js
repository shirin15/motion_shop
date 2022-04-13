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
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.6621 17.4794H6.49003C6.14578 17.4794 5.81563 17.3479 5.5722 17.1138C5.32878 16.8796 5.19202 16.562 5.19202 16.2309C5.19202 15.8998 5.32878 15.5822 5.5722 15.3481C5.81563 15.1139 6.14578 14.9824 6.49003 14.9824H20.0412C20.9091 14.9824 21.7522 14.7036 22.4365 14.1901C23.1208 13.6766 23.6072 12.958 23.8184 12.1482L25.9601 4.04524C26.0087 3.86097 26.013 3.66845 25.9725 3.48237C25.932 3.29629 25.8478 3.12156 25.7265 2.9715C25.6002 2.8176 25.4381 2.69445 25.2532 2.61203C25.0683 2.5296 24.8658 2.49022 24.6621 2.49706H6.17851C5.91071 1.76848 5.41519 1.13741 4.75987 0.690361C4.10456 0.243312 3.32153 0.00217183 2.51813 0H1.29801C0.953754 0 0.623601 0.131541 0.380177 0.365686C0.136754 0.599831 0 0.9174 0 1.24853C0 1.57966 0.136754 1.89723 0.380177 2.13138C0.623601 2.36552 0.953754 2.49706 1.29801 2.49706H2.51813C2.81464 2.48875 3.10516 2.57838 3.34133 2.75103C3.5775 2.92368 3.74507 3.16893 3.81614 3.44595L3.89402 4.04524L6.13957 12.4853C5.10681 12.53 4.13481 12.9675 3.43741 13.7016C2.74 14.4356 2.37431 15.4061 2.42078 16.3995C2.46726 17.3929 2.92209 18.3278 3.68522 18.9986C4.44835 19.6695 5.45727 20.0212 6.49003 19.9765H6.72367C6.5102 20.5423 6.4416 21.1492 6.52369 21.7458C6.60578 22.3425 6.83614 22.9113 7.19526 23.4042C7.55438 23.897 8.03169 24.2994 8.58677 24.5772C9.14184 24.855 9.75834 25 10.384 25C11.0098 25 11.6263 24.855 12.1813 24.5772C12.7364 24.2994 13.2137 23.897 13.5728 23.4042C13.932 22.9113 14.1623 22.3425 14.2444 21.7458C14.3265 21.1492 14.2579 20.5423 14.0444 19.9765H17.1077C16.8942 20.5423 16.8256 21.1492 16.9077 21.7458C16.9898 22.3425 17.2202 22.9113 17.5793 23.4042C17.9384 23.897 18.4157 24.2994 18.9708 24.5772C19.5259 24.855 20.1424 25 20.7681 25C21.3938 25 22.0103 24.855 22.5654 24.5772C23.1205 24.2994 23.5978 23.897 23.9569 23.4042C24.316 22.9113 24.5464 22.3425 24.6285 21.7458C24.7106 21.1492 24.642 20.5423 24.4285 19.9765H24.6621C25.0064 19.9765 25.3365 19.845 25.5799 19.6108C25.8234 19.3767 25.9601 19.0591 25.9601 18.728C25.9601 18.3968 25.8234 18.0793 25.5799 17.8451C25.3365 17.611 25.0064 17.4794 24.6621 17.4794ZM23.0007 4.99413L21.3003 11.5364C21.2292 11.8134 21.0616 12.0587 20.8255 12.2313C20.5893 12.404 20.2988 12.4936 20.0023 12.4853H8.80048L6.85347 4.99413H23.0007ZM10.384 22.4736C10.1273 22.4736 9.87637 22.4003 9.66292 22.2632C9.44946 22.126 9.28309 21.931 9.18485 21.7028C9.08661 21.4747 9.0609 21.2236 9.11098 20.9815C9.16107 20.7393 9.28469 20.5168 9.46622 20.3422C9.64775 20.1676 9.87903 20.0487 10.1308 20.0005C10.3826 19.9523 10.6436 19.977 10.8808 20.0715C11.118 20.166 11.3207 20.3261 11.4633 20.5314C11.6059 20.7367 11.6821 20.9781 11.6821 21.225C11.6821 21.5562 11.5453 21.8737 11.3019 22.1079C11.0585 22.342 10.7283 22.4736 10.384 22.4736ZM20.7681 22.4736C20.5114 22.4736 20.2604 22.4003 20.047 22.2632C19.8335 22.126 19.6671 21.931 19.5689 21.7028C19.4707 21.4747 19.445 21.2236 19.495 20.9815C19.5451 20.7393 19.6687 20.5168 19.8503 20.3422C20.0318 20.1676 20.2631 20.0487 20.5149 20.0005C20.7667 19.9523 21.0276 19.977 21.2648 20.0715C21.502 20.166 21.7047 20.3261 21.8474 20.5314C21.99 20.7367 22.0661 20.9781 22.0661 21.225C22.0661 21.5562 21.9294 21.8737 21.6859 22.1079C21.4425 22.342 21.1124 22.4736 20.7681 22.4736Z" fill="white"/>
                            </svg>

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