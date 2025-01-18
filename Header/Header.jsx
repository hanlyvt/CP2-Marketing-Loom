"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";
import "./HoverEffect.css";

const Header = ({ blok }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isNewsMenuVisible, setIsNewsMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };

  const toggleNewsMenu = () => {
    setIsNewsMenuVisible((prev) => !prev);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      {...storyblokEditable(blok)}
    >
      {/* nav bar */}
      <nav className="flex justify-between items-center py-4 px-4 sm:px-24">
        <div className="w-3/12">
          <a href="/" className="hover:text-red">
            <img src="/Logo_Loom.svg" alt="Logo" className="sm:w-3/12 W-100%" />
          </a>
        </div>
        <ul className="hidden md:flex w-6/12 justify-between text-black text-p-large-desktop">
          <li>
            <div className="hover-container">
              <a href="/" className="hover:text-red">
                Home
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li>
            <button
              className="hover:text-red flex items-center"
              onClick={toggleNewsMenu}
            >
              Nieuws
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 ml-1 transform transition-transform duration-300 ${
                  isNewsMenuVisible ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 16.5a.75.75 0 01-.53-.22l-6-6a.75.75 0 111.06-1.06L12 14.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-.53.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <div className="hover-container">
              <a href="/interviews" className="hover:text-red">
                Interviews
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li>
            <div className="hover-container">
              <a href="/artikelen" className="hover:text-red">
                Artikelen
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li>
            <div className="hover-container">
              <a href="/evenementen" className="hover:text-red">
                Evenementen
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
        </ul>

        {/* Zoek afbeelding en knoppen */}
        <div className="flex items-center">
          <img src="/Zoek.svg" alt="Zoek" className="hidden sm:block" />
          <a
            href="/account"
            className="hidden sm:block text-white bg-red px-4 py-1 ml-6 text-label-desktop font-semibold"
          >
            Aboneer
          </a>
          <img src="/Modus.svg" alt="Modus" className="hidden sm:block ml-6" />
          <img
            src="/Hamburger menu.svg"
            alt="Hamburger Menu"
            className="block sm:hidden ml-6 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuVisible && (
        <div className="sm:hidden bg-black text-white p-4">
          <ul className="flex flex-col">
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <button
                className="flex justify-between items-center"
                onClick={toggleNewsMenu}
              >
                Nieuws
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isNewsMenuVisible ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 16.5a.75.75 0 01-.53-.22l-6-6a.75.75 0 111.06-1.06L12 14.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-.53.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>

            {/* Uitklapmenu nieuws */}
            {isNewsMenuVisible && ( //wordt getoont als isMenuVisible true is
              <div className="sm:h-72 bg-black">
                <div className="sm:mx-24 mx-4 flex flex-col sm:flex-row justify-between z-3">
                  {/* Innovaties list */}
                  <ul className="font-sans text-info-mobile ">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a className="text-red ">Innovaties</a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a className="text-white hover:text-red">AI</a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">AR & VR</a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">
                        Tech Doorbraken
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">
                        Mobiele Innovaties
                      </a>
                    </li>
                  </ul>

                  {/* Social Media */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a className="text-red">Social Media</a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Content Creatie
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Platform Updates
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Influencer Marketing
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Social Advertising
                      </a>
                    </li>
                  </ul>

                  {/* Content & strategie*/}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          SEO
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Content Marketing
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Storytelling
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Copywriting
                      </a>
                    </li>
                  </ul>

                  {/* Data & Analytics */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          Big data
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Web Analystics
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Performance Metrics
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Klantinzichten
                      </a>
                    </li>
                  </ul>

                  {/* Campagnes & Reclame */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          Creative Concepten
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Succesverhalen
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Video & TV
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Buitenreclame
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <li className="py-2 font-sans ">
              <a href="/interviews">Interviews</a>
            </li>
            <li className="py-2 font-sans ">
              <a href="/artikelen">Artikelen</a>
            </li>
            <li className="py-2 font-sans ">
              <a href="/evenementen">Evenementen</a>
            </li>
            <li className="py-2 font-sans">
              <a href="/account">Tip de redactie</a>
            </li>

            {/* Aboneer knop */}
            <div className="flex flex-row justify-between">
              <a
                href="/account"
                className=" w-32 text-white bg-red px-2 py-1 font-semibold z-3"
              >
                Aboneer
              </a>

              {/* Kleurmodus knop */}
              <img className="" src="/Modus.svg" />
            </div>
          </ul>
        </div>
      )}
      {/* Uitklapmenu nieuws */}
      {isNewsMenuVisible && ( //wordt getoont als isMenuVisible true is
        <div className="hidden  sm:block sm:h-72 bg-black">
          <div className="sm:mx-24 mx-4 flex flex-col sm:flex-row justify-between z-3">
            {/* Innovaties list */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-red">Innovaties</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-white hover:text-red">AI</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">AR & VR</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">Tech Doorbraken</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">Mobiele Innovaties</a>
              </li>
            </ul>

            {/* Social Media */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-red">Social Media</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Content Creatie
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Platform Updates
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Influencer Marketing
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Social Advertising
                </a>
              </li>
            </ul>

            {/* Content & strategie*/}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    SEO
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Content Marketing
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Storytelling
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Copywriting
                </a>
              </li>
            </ul>

            {/* Data & Analytics */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    Big data
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Web Analystics
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Performance Metrics
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Klantinzichten
                </a>
              </li>
            </ul>

            {/* Campagnes & Reclame */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    Creative Concepten
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Succesverhalen
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Video & TV
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Buitenreclame
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
