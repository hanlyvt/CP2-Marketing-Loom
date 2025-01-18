import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";

const SearchBlock = ({ blok, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Voor het bijhouden van de ingevoerde zoekterm

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); // Roep de zoekfunctie aan
    }
  };

  return (
    <div className="mt-14 flex justify-end sm:flex hidden">
      <div className="w-1/4 flex justify-between border-red border-2 h-12 items-center overflow-hidden">
        {/* Zoekveld */}
        <input
          type="text"
          className="ml-6 flex-grow sm:text-label-desktop text-h1-mobile font-semibold focus:outline-none placeholder-black"
          placeholder="Zoek..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Houdt de waarde bij
        />

        {/* Zoekknop */}
        <button
          className="mr-6 flex items-center justify-center focus:outline-none"
          onClick={handleSearch}
        >
          <img
            src={blok.search.filename}
            alt={blok.search.alt || "search"}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

const Artikel_Hero = ({ blok }) => (
  <div className="z-2 sm:mx-24 mx-4" {...storyblokEditable(blok)}>
    {/* Titel */}
    <div className="font-sans sm:h1-desktop text-h1-mobile font-semibold text-center pt-6">
      {blok.titel}
    </div>

    {/* Inleiding */}
    <div className="sm:text-p-large-desktop p-large-mobile text-center mt-8">
      {blok.inleiding}
    </div>

    {/* Zoekblok */}
    <SearchBlock
      blok={blok}
      onSearch={(term) => console.log(`Zoeken naar: ${term}`)}
    />

    {/* Artikel Content */}
    <div className="flex sm:flex-row flex-col mt-6">
      <div>
        <img
          className=""
          src={blok.artikel_afbeelding.filename}
          alt={blok.artikel_afbeelding.alt || "Speaker"}
        />
      </div>

      <div className="sm:ml-8 ml-0 mt-4 sm:mt-0">
        <div className="w-fit text-label-desktop font-regular text-white bg-red px-4 py-1 ">
          {blok.categorie}
        </div>
        <div className="text-h3-desktop font-semibold mt-4">{blok.kopje}</div>
        <div className="text-label-desktop text-label-mobile text-regular sm:mt-2 mt-0 text-silver">
          {blok.kopje_inleiding}
        </div>
        <div className="text-paragraph font-serif mt-6">{blok.tekst}</div>

        <div className="flex justify-between text-red width-2 mt-6 pb-6">
          <div className="sm:text-label-desktop text-info-mobile font-regular">
            {blok.datum}
          </div>
          <div className="sm:text-label-desktop text-info-mobile font-regular">
            {blok.leestijd}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Artikel_Hero;
