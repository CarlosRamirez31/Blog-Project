import PeopleSuggetion from "../SuggetionPage";

const NavbarRightSideComponent = () => {
  const style1 = {
    margin: "max-width:350px;",
  };

  const style2 = {
    margin: "enable-background:new 0 0 56.966 56.966;",
  };

  const style3 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116865832_615803592697921_5045643941059143720_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=EQFsJZNRIPMAX-pb8EZ&amp;tp=1&amp;oh=1ffba368dc5827c172420060b811d1c4&amp;oe=60433210);",
  };

  const style4 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/33476414_2111389325772141_4942435591556956160_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=m4fof_6edMQAX8y6Mma&amp;tp=1&amp;oh=66d43f3c9ef1e6d35aa27b5ea79fc566&amp;oe=6045E945);",
  };
  const style5 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257);",
  };
  const style6 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/28765942_569404996768567_810640940719931392_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=Xf0LrzDMbp8AX8S55zD&amp;tp=1&amp;oh=0cf858806b52e56cc9093211b2656831&amp;oe=6045F090);",
  };
  const style7 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/27877940_216827205533781_6550488685962330112_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=ihm93wr5mUUAX_w6e1G&amp;tp=1&amp;oh=e492418bf694b130464f681f9fedd180&amp;oe=60442B6C);",
  };
  const style8 = {
    margin:
      "height:100px; background-image: url(https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/22277804_1824335967579893_4558955485163683840_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=CknMgBUYNhcAX-Jxi0P&amp;tp=1&amp;oh=631583468373481077e1834df4031435&amp;oe=6045BD08);",
  };

  return (
    <>
      <div style={style1}>
        <div className="overflow-y-auto fixed  h-screen">
          <div className="relative text-gray-300 w-80 p-5">
            <button type="submit" className="absolute ml-4 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={style2}
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
              </svg>
            </button>

            <input
              type="search"
              name="search"
              placeholder="Search on Blog App"
              className=" bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"
            />
          </div>
          {/* <!--trending tweet section--> */}
          <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
            <div className="flex mb-1">
              {/* <!-- Image--> */}
              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full mr-1"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style3}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116865832_615803592697921_5045643941059143720_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=EQFsJZNRIPMAX-pb8EZ&amp;tp=1&amp;oh=1ffba368dc5827c172420060b811d1c4&amp;oe=60433210"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full mr-1"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style4}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/33476414_2111389325772141_4942435591556956160_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=m4fof_6edMQAX8y6Mma&amp;tp=1&amp;oh=66d43f3c9ef1e6d35aa27b5ea79fc566&amp;oe=6045E945"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style5}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="flex">
              {/* <!-- Image--> */}
              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full mr-1"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style6}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/28765942_569404996768567_810640940719931392_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=Xf0LrzDMbp8AX8S55zD&amp;tp=1&amp;oh=0cf858806b52e56cc9093211b2656831&amp;oe=6045F090"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full mr-1"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style7}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/27877940_216827205533781_6550488685962330112_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=ihm93wr5mUUAX_w6e1G&amp;tp=1&amp;oh=e492418bf694b130464f681f9fedd180&amp;oe=60442B6C"
                    alt=""
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ricardoribeiro.rr/"
                target="#"
                className="flex-col w-full"
              >
                <div
                  className="w-full bg-cover bg-no-repeat bg-center"
                  style={style8}
                >
                  <img
                    className="opacity-0"
                    src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/e35/22277804_1824335967579893_4558955485163683840_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=CknMgBUYNhcAX-Jxi0P&amp;tp=1&amp;oh=631583468373481077e1834df4031435&amp;oe=6045BD08"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
          {/* <!--trending tweet section--> */}
          <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
            <div className="flex">
              <div className="flex-1 m-2">
                <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                  Germany trends
                </h2>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <hr className="border-gray-800" />

            {/* <!--first trending tweet--> */}
            <div className="flex">
              <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                  1 . Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                  #Microsoft363
                </h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                  5,466 Tweets
                </p>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-gray-800" />

            {/* <!--second trending tweet--> */}

            <div className="flex">
              <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                  2 . Politics . Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                  #HI-Fashion
                </h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                  8,464 Tweets
                </p>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-gray-800" />

            {/* <!--third trending tweet--> */}

            <div className="flex">
              <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                  3 . Rock . Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                  #Ferrari
                </h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                  5,586 Tweets
                </p>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-gray-800" />

            {/* <!--forth trending tweet--> */}

            <div className="flex">
              <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                  4 . Auto Racing . Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-white">#vettel</h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                  9,416 Tweets
                </p>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-gray-800" />

            {/* <!--show more--> */}

            <div className="flex">
              <div className="flex-1 p-4">
                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                  Show more
                </h2>
              </div>
            </div>

            {/* <!--people suggetion to follow section--> */}
              <PeopleSuggetion />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarRightSideComponent