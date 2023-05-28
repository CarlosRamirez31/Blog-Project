
import { MyStyles } from "./Interfaces/MyStylesInterface"
import NavbarLeftSide from "./NavbarLeftSide/NabBarLeftSide"
import UserCard from "./Center/UserCard"

export const TwitterBodyComponent = () => {

    return (
    <>
            {/* <!-- component --> */}
            <div className="p-relative h-screen" style="background-color: #15202b;">
                <div className="flex justify-center">

                    <header className="text-white h-12 py-4 h-auto">
                        {/* <!-- Navbar (left side) --> */}
                        <NavbarLeftSide />
                    </header>

                    <main role="main">
                        <div className="flex" style="width: 990px;">
                            <section className="w-3/5 border border-y-0 border-gray-800" style="max-width:600px;">
                                {/* <!--Content (Center)-->
                            <!-- Nav back--> */}
                                <div>
                                    <div className="flex justify-start">
                                        <div className="px-4 py-2 mx-2">
                                            <a href="" className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <g>
                                                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="mx-2">
                                            <h2 className="mb-0 text-xl font-bold text-white">ℜ??????ℜ??????.dev</h2>
                                            <p className="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
                                        </div>
                                    </div>

                                    <hr className="border-gray-800" />
                                </div>

                                {/* <!-- User card--> */}
                                <UserCard />

                                <ul className="list-none">
                                    <li>
                                        {/* <!--second tweet--> */}
                                        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                            <div className="flex flex-shrink-0 p-4 pb-0">
                                                <a href="#" className="flex-shrink-0 group block">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-base leading-6 font-medium text-white">
                                                                Sonali Hirave
                                                                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                    @ShonaDesign  . 16 April
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="pl-16">
                                                <p className="text-base width-auto font-medium text-white flex-shrink">
                                                    Day 07 of the challenge <a href="#" className="text-blue-400">#100DaysOfCode</a>
                                                    I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
                                                    Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                    [07/100]
                                                    <a href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                                </p>

                                                <div className="md:flex-shrink pr-6 pt-3">
                                                    <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
                                                        <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="" />
                                                    </div>
                                                </div>


                                                <div className="flex items-center py-4">
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                            </g>
                                                        </svg>
                                                        12.3 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr className="border-gray-800" />
                                        </article>
                                    </li>
                                    <li>
                                        {/* <!--second tweet--> */}
                                        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                            <div className="flex flex-shrink-0 p-4 pb-0">
                                                <a href="#" className="flex-shrink-0 group block">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-base leading-6 font-medium text-white">
                                                                Sonali Hirave
                                                                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                    @ShonaDesign  . 16 April
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="pl-16">
                                                <p className="text-base width-auto font-medium text-white flex-shrink">
                                                    Day 07 of the challenge <a href="#" className="text-blue-400">#100DaysOfCode</a>
                                                    I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
                                                    Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                    [07/100]
                                                    <a href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                                </p>

                                                <div className="md:flex-shrink pr-6 pt-3">
                                                    <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
                                                        <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="" />
                                                    </div>
                                                </div>


                                                <div className="flex items-center py-4">
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                            </g>
                                                        </svg>
                                                        12.3 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr className="border-gray-800" />
                                        </article>
                                    </li>
                                    <li>
                                        {/* <!--second tweet--> */}
                                        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                            <div className="flex flex-shrink-0 p-4 pb-0">
                                                <a href="#" className="flex-shrink-0 group block">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-base leading-6 font-medium text-white">
                                                                Sonali Hirave
                                                                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                    @ShonaDesign  . 16 April
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="pl-16">
                                                <p className="text-base width-auto font-medium text-white flex-shrink">
                                                    Day 07 of the challenge <a href="#" className="text-blue-400">#100DaysOfCode</a>
                                                    I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
                                                    Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                    [07/100]
                                                    <a href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                                </p>

                                                <div className="md:flex-shrink pr-6 pt-3">
                                                    <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
                                                        <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="" />
                                                    </div>
                                                </div>


                                                <div className="flex items-center py-4">
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                            </g>
                                                        </svg>
                                                        12.3 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr className="border-gray-800" />
                                        </article>
                                    </li>
                                    <li>
                                        {/* <!--second tweet--> */}
                                        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
                                            <div className="flex flex-shrink-0 p-4 pb-0">
                                                <a href="#" className="flex-shrink-0 group block">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-base leading-6 font-medium text-white">
                                                                Sonali Hirave
                                                                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                    @ShonaDesign  . 16 April
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="pl-16">
                                                <p className="text-base width-auto font-medium text-white flex-shrink">
                                                    Day 07 of the challenge <a href="#" className="text-blue-400">#100DaysOfCode</a>
                                                    I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
                                                    Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                                                    [07/100]
                                                    <a href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
                                                </p>

                                                <div className="md:flex-shrink pr-6 pt-3">
                                                    <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style="height: 200px; background-image: url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80);">
                                                        <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" alt="" />
                                                    </div>
                                                </div>


                                                <div className="flex items-center py-4">
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                                            </g>
                                                        </svg>
                                                        12.3 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                                            </g>
                                                        </svg>
                                                        14 k
                                                    </div>
                                                    <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                                            <g>
                                                                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                                                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr className="border-gray-800" />
                                        </article>
                                    </li>
                                </ul>
                            </section>


                            <aside className="w-2/5 h-12 position-relative">
                                {/* <!--Aside menu (right side)--> */}
                                <div style="max-width:350px;">
                                    <div className="overflow-y-auto fixed  h-screen">




                                        <div className="relative text-gray-300 w-80 p-5">
                                            <button type="submit" className="absolute ml-4 mt-3 mr-4">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml: space="preserve" width="512px" height="512px">
                                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                                                </svg>
                                            </button>

                                            <input type="search" name="search" placeholder="Search Twitter" className=" bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0" />
                                        </div>
                                        {/* <!--trending tweet section--> */}
                                        <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                                            <div className="flex mb-1">
                                                {/* <!-- Image--> */}
                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full mr-1">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116865832_615803592697921_5045643941059143720_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=EQFsJZNRIPMAX-pb8EZ&amp;tp=1&amp;oh=1ffba368dc5827c172420060b811d1c4&amp;oe=60433210);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116865832_615803592697921_5045643941059143720_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=EQFsJZNRIPMAX-pb8EZ&amp;tp=1&amp;oh=1ffba368dc5827c172420060b811d1c4&amp;oe=60433210" alt="" />
                                                    </div>
                                                </a>

                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full mr-1">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/33476414_2111389325772141_4942435591556956160_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=m4fof_6edMQAX8y6Mma&amp;tp=1&amp;oh=66d43f3c9ef1e6d35aa27b5ea79fc566&amp;oe=6045E945);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/33476414_2111389325772141_4942435591556956160_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=m4fof_6edMQAX8y6Mma&amp;tp=1&amp;oh=66d43f3c9ef1e6d35aa27b5ea79fc566&amp;oe=6045E945" alt="" />
                                                    </div>
                                                </a>

                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257" alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="flex">
                                                {/* <!-- Image--> */}
                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full mr-1">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/28765942_569404996768567_810640940719931392_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=Xf0LrzDMbp8AX8S55zD&amp;tp=1&amp;oh=0cf858806b52e56cc9093211b2656831&amp;oe=6045F090);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/28765942_569404996768567_810640940719931392_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=Xf0LrzDMbp8AX8S55zD&amp;tp=1&amp;oh=0cf858806b52e56cc9093211b2656831&amp;oe=6045F090" alt="" />
                                                    </div>
                                                </a>

                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full mr-1">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/27877940_216827205533781_6550488685962330112_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=ihm93wr5mUUAX_w6e1G&amp;tp=1&amp;oh=e492418bf694b130464f681f9fedd180&amp;oe=60442B6C);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/27877940_216827205533781_6550488685962330112_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=ihm93wr5mUUAX_w6e1G&amp;tp=1&amp;oh=e492418bf694b130464f681f9fedd180&amp;oe=60442B6C" alt="" />
                                                    </div>
                                                </a>

                                                <a href="https://www.instagram.com/ricardoribeiro.rr/" target="#" className="flex-col w-full">
                                                    <div className="w-full bg-cover bg-no-repeat bg-center" style="height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/22277804_1824335967579893_4558955485163683840_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=CknMgBUYNhcAX-Jxi0P&amp;tp=1&amp;oh=631583468373481077e1834df4031435&amp;oe=6045BD08);">
                                                        <img className="opacity-0" src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/22277804_1824335967579893_4558955485163683840_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=CknMgBUYNhcAX-Jxi0P&amp;tp=1&amp;oh=631583468373481077e1834df4031435&amp;oe=6045BD08" alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!--trending tweet section--> */}
                                        <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                                            <div className="flex">
                                                <div className="flex-1 m-2">
                                                    <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Germany trends</h2>
                                                </div>
                                                <div className="flex-1 px-4 py-2 m-2">
                                                    <a href="" className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                                                        <svg className="m-2 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                                            </path>
                                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>


                                            <hr className="border-gray-800" />

                                            {/* <!--first trending tweet--> */}
                                            <div className="flex">
                                                <div className="flex-1">
                                                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">1 . Trending</p>
                                                    <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
                                                    <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,466 Tweets</p>

                                                </div>
                                                <div className="flex-1 px-4 py-2 m-2">
                                                    <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                        <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 9l-7 7-7-7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className="border-gray-800">

                                                {/* <!--second trending tweet--> */}

                                                <div className="flex">
                                                    <div className="flex-1">
                                                        <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">2 . Politics . Trending</p>
                                                        <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
                                                        <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">8,464 Tweets</p>

                                                    </div>
                                                    <div className="flex-1 px-4 py-2 m-2">
                                                        <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                            <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-gray-800">

                                                    {/* <!--third trending tweet--> */}

                                                    <div className="flex">
                                                        <div className="flex-1">
                                                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">3 . Rock . Trending</p>
                                                            <h2 className="px-4 ml-2 w-48 font-bold text-white">#Ferrari</h2>
                                                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,586 Tweets</p>

                                                        </div>
                                                        <div className="flex-1 px-4 py-2 m-2">
                                                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M19 9l-7 7-7-7"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <hr className="border-gray-800">

                                                        {/* <!--forth trending tweet--> */}

                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">4 . Auto Racing . Trending</p>
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-white">#vettel</h2>
                                                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">9,416 Tweets</p>

                                                            </div>
                                                            <div className="flex-1 px-4 py-2 m-2">
                                                                <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                                                                    <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M19 9l-7 7-7-7"></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="border-gray-800">

                                                            {/* <!--show more--> */}

                                                            <div className="flex">
                                                                <div className="flex-1 p-4">
                                                                    <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        {/* <!--people suggetion to follow section--> */}
                                                        <div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
                                                            <div className="flex">
                                                                <div className="flex-1 m-2">
                                                                    <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Who to follow</h2>
                                                                </div>
                                                            </div>


                                                            <hr className="border-gray-800">

                                                                {/* <!--first person who to follow--> */}

                                                                <div className="flex flex-shrink-0">
                                                                    <div className="flex-1 ">
                                                                        <div className="flex items-center w-48">
                                                                            <div>
                                                                                <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                                            </div>
                                                                            <div className="ml-3 mt-3">
                                                                                <p className="text-base leading-6 font-medium text-white">
                                                                                    Sonali Hirave
                                                                                </p>
                                                                                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                                    @ShonaDesign
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="flex-1 px-4 py-2 m-2">
                                                                        <a href="" className=" float-right">
                                                                            <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                                                                Follow
                                                                            </button>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                                <hr className="border-gray-800">

                                                                    {/* <!--second person who to follow--> */}

                                                                    <div className="flex flex-shrink-0">
                                                                        <div className="flex-1 ">
                                                                            <div className="flex items-center w-48">
                                                                                <div>
                                                                                    <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                                                                                </div>
                                                                                <div className="ml-3 mt-3">
                                                                                    <p className="text-base leading-6 font-medium text-white">
                                                                                        Sonali Hirave
                                                                                    </p>
                                                                                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                                                                        @ShonaDesign
                                                                                    </p>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <div className="flex-1 px-4 py-2 m-2">
                                                                            <a href="" className=" float-right">
                                                                                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                                                                    Follow
                                                                                </button>
                                                                            </a>

                                                                        </div>
                                                                    </div>

                                                                    <hr className="border-gray-800">



                                                                        {/* <!--show more--> */}

                                                                        <div className="flex">
                                                                            <div className="flex-1 p-4">
                                                                                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
                                                                            </div>
                                                                        </div>

                                                                    </div>




                                                                    <div className="flow-root m-6 inline">
                                                                        <div className="flex-1">
                                                                            <a href="#">
                                                                                <p className="text-sm leading-6 font-medium text-gray-500">Terms Privacy Policy Cookies Imprint Ads info
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                        <div className="flex-2">
                                                                            <p className="text-sm leading-6 font-medium text-gray-600"> © 2020 Twitter, Inc.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </aside>
                                                </div>
                                            </main>

                                        </div>

                                    </div>

                                </>
                                )
}