import "./App.css";

function App() {
  return (
    <div className="mx-auto my-6 bg-gray-100 lg:max-w-7xl ">
      {HeaderSection()}
      {Card()}
    </div>
  );

  function Card() {
    return <main>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="text-2xl">
                  <a class="no-underline hover:underline " href="#title">
                    Meta Trap House
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @freezecorle...
                  0x890aac...
                </button>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="lg:text-2xl text-xl">
                  <a class="no-underline hover:underline " href="#title">
                    The Vincent Van Dough gallery
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @OxOfeae
                  0xOfDear...
                </button>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="text-2xl">
                  <a class="no-underline hover:underline " href="#title">
                    Teufzer
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @teufeurs
                  0xdec76...
                </button>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="text-2xl">
                  <a class="no-underline hover:underline " href="#title">
                    6529 AB + 1
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @6529.
                  0xfd2200...
                </button>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="text-2xl">
                  <a class="no-underline hover:underline " href="#title">
                    #9049
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @rskagy
                  0x83fcf5...
                </button>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-xl">
              <a href="#picture">
                <img
                  alt="Placeholder"
                  class="block h-40 w-full"
                  src="https://picsum.photos/600/400/?random" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                <h1 class="text-2xl">
                  <a class="no-underline hover:underline " href="#title">
                    6529 Photo A
                  </a>
                </h1>
              </header>

              <footer class=" leading-none p-2 md:p-4 bg-black text-white gap-3 flex ">
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @6529...
                  0xfd2200..
                </button>
                <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                  @mintface
                  0xdd6b80..
                </button>
              </footer>
            </article>
          </div>

        </div>
      </div>
    </main>;
  }

  function HeaderSection() {
    return (
      <header className="px-2 lg:px-12 ">
        <div className="px-8 lg:px-0">
          <p className="pt-6 font-mono text-3xl font-semibold ">Live Spaces</p>
          <p className=" font-segoe">
            <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>All NFTs
            on Cyber either belong to or were minted by their space creator.
          </p>
        </div>
        <div className="grid grid-cols-3 my-8 lg:grid-cols-7">
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            🔥 24h Trending
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            Latest Shows
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            Most Popular
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            💎 In Genesis
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            🛕 In Temple
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            🌪 In Void
          </button>
          <button
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            🦍 #BAYC
          </button>
        </div>
      </header>
    );
  }
}

export default App;
