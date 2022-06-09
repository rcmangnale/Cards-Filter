import "./App.css";

function App() {
  return (
    <div className="mx-auto my-6 bg-gray-100 lg:max-w-7xl ">
      {HeaderSection()}
      {/* <main>
        <div>
          <div class="">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                  height={150}
                  width={300}
                />

              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );

  function HeaderSection() {
    return <header className="px-2 lg:px-12 ">
      <div className="px-8 lg:px-0">
      <p className="pt-6 font-mono text-3xl font-semibold ">Live Spaces</p>
      <p className=" font-segoe">
        <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>All NFTs on
        Cyber either belong to or were minted by their space creator.
      </p>
      </div>
      <div className="grid grid-cols-3 my-8 lg:grid-cols-6">
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          🔥 24h Trending
        </button>
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          {" "}
          Latest Shows
        </button>
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          {" "}
          Most Popular
        </button>
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          {" "}
          💎 In Genesis
        </button>
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          {" "}
          🛕 In Temple
        </button>
        <button
          type="button"
          class="py-2 px-8 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
        >
          🦍 #BAYC
        </button>
      </div>
    </header>;
  }
}

export default App;
