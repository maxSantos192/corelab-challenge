import searchIcon from "../assets/icons/search.svg";

function Header() {
  return (
    <header className="items-center bg-white px-9 py-3 shadow-sm">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="CoreNotes" className="h-9 w-9" />
        <h1 className="text-sm text-gray-700">CoreNotes</h1>

        <form
          onSubmit={() => {}}
          className="mx-2.5 max-w-lg flex-1 shadow-md/10"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar notas"
              className="w-full rounded-sm border border-gray-200 bg-gray-50 px-4 py-2 text-xs"
            />

            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
            >
              <img src={searchIcon} alt="Pesquisar" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
