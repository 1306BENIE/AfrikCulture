const App = () => {
    return (
      <div class="w-64 h-96 bg-neutral-800 rounded-lg flex items-center flex-col hover:bg-neutral-600 hover:scale-[1.1] transition-all duration-500">
        <img
          src="https://source.unsplash.com/xfngap_DToE"
          class="w-48 h-48 rounded-md mt-8"
        />
        <span class="text-white text-3xl mt-4">Mountains</span>
        <span class="text-neutral-400">Image from Unsplash</span>
        <div class="flex gap-x-6 mt-4 flex-wrap justify-center">
          <span class="font-bold text-neutral-500">#mountain</span>
          <span class="font-bold text-neutral-500">#sky</span>
          <span class="font-bold text-neutral-500">#snow</span>
          <span class="font-bold text-neutral-500">#mountain-top</span>
        </div>
      </div>
    );
  };
  ReactDOM.render(<App />, document.querySelector("#app"));