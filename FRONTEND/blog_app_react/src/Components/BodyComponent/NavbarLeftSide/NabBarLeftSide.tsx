const NavbarLeftSide = () => {
  const style1 = {
    margin: "width: 275px;",
  };

  const style2 = {
    margin: "bottom: 2rem;",
  };
  return (
    <>
      <div style={style1}>
        <div className="overflow-y-auto align-middle fixed h-screen pr-3 " style={style1}>
          {/* <!--Logo--> */}
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white ml-3"
            fill="currentColor"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>

          {/* <!-- Nav--> */}
          <nav className="mt-5 px-2">
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                ></path>
              </svg>
              Home
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
              </svg>
              Explore
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              Notifications
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Messages
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
              Bookmarks
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              Lists
            </a>
            <a
              href="#"
              className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Profile
            </a>
            <a
              href="#"
              className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
            >
              <svg
                className="mr-4 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              More
            </a>

            <button className="bg-blue-400 hover:bg-blue-500 w-full mt-5 text-white font-bold py-2 px-4 rounded-full">
              Tweet
            </button>
          </nav>

          {/* <!-- User Menu --> */}
          <div className="absolute" style={style2}>
            <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-4 py-3 mt-12 mr-2">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base leading-6 font-medium text-white">
                      ℜ??????ℜ??????.dev
                    </p>
                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @Ricardo_oRibeir
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLeftSide;
