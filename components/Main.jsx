import React from "react";
import Image from "next/image";
function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <div className="background-size:cover;background-position:center">
        <Image
          width={1000}
          height={1000}
          src="/nish.gif"
          alt="Gambar"
          className="h-20 w-full bg-banner object-cover"
        />
      </div>
      <div className="mx-auto -mt-12 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
        <div className="w-20 h-28 flex justify-center ">
          <Image
            width={100}
            height={100}
            src="/pp.jpeg"
            alt="Gambar"
            className="rounded-full absolute object-cover"
          />
        </div>
        <div className="relative flex flex-row items-center justify-center">
          <div className="mt-1 flex flex-row items-center justify-center">
            <span className="flex text-center  text-xl font-bold leading-tight text-zinc-300">
              Harsena Argetya
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="ml-1 h-5 w-5 text-blue-600"
            >
              <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          <a>Ingin Menjadi Programmer Handal,Namun Enggan Ngoding</a>
        </p>
        <div className="mt-3">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
            <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 border-orange-200 text-orange-200">
              <span className="w-5">💻</span>
              <span className="text-banner text-xs">Ngoding</span>
            </div>
            <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 border-orange-200 text-orange-200">
              <span className="w-5">💤</span>
              <span className="text-banner text-xs">Turu</span>
            </div>
            <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 border-orange-200 text-orange-200">
              <span className="w-5">🕹️</span>
              <span className="text-banner text-xs">Gaming</span>
            </div>
            <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 border-orange-200 text-orange-200">
              <span className="w-5">🎵</span>
              <span className="text-banner text-xs">Music</span>
            </div>
          </div>
          <div>
            <div className="mt-1 roundedpt-2">
              <div>
                <div className="flex flex-row flex-wrap items-center justify-center">
                  {/* Intagram */}
                  <a
                    className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                    href="https://www.instagram.com/argretya"
                  >
                    <svg
                      className="h-6 fill-current text-pink-400 transition-all"
                      role="image"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Intagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </a>

                  <a
                    className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                    href="https://github.com/Anezz12"
                  >
                    <svg
                      className="h-6 fill-current text-primary transition-all dark:text-gray-100"
                      role="image"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Github</title>
                      <path
                        fill="#3E75C3"
                        d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.5 5.5-4.9 5.8.4.4.7 1.1.7 2.2v3.3c0 .4.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4C24 5.4 18.6 0 12 0z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                    href="https://www.linkedin.com/in/harsena-argretya/"
                  >
                    <svg
                      className="h-6 fill-current text-blue-600"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LinkedIn</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-s mt-1 w-full space-y-2">
                <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full transition-all sm:hover:opacity-70"
                  >
                    <div>
                      <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                        <div className="flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <span>🌐</span>
                          </div>
                          <div className="mx-4 flex flex-col">
                            <span
                              title="Nothing"
                              className="text-ellipsis text-[16px] text-zinc-400"
                            >
                              Personal Website
                            </span>
                            <span
                              title="/profile"
                              className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                            >
                              About Me
                            </span>
                          </div>
                        </div>
                        <span className="absolute right-2 text-zinc-600 transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-8"
                          >
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                  <a
                    href="https://github.com/Anezz12/v1.1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full transition-all sm:hover:opacity-70"
                  >
                    <div>
                      <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                        <div className="flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <span>📱</span>
                          </div>
                          <div className="mx-4 flex flex-col">
                            <span
                              title="Nothing"
                              className="text-ellipsis text-[16px] text-zinc-400"
                            >
                              Amikom Connect
                            </span>
                            <span
                              title="/profile"
                              className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                            >
                              Full Stack Web App
                            </span>
                          </div>
                        </div>
                        <span className="absolute right-2 text-zinc-600 transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-8"
                          >
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                  <a
                    href="https://github.com/Anezz12/PsRental"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full transition-all sm:hover:opacity-70"
                  >
                    <div>
                      <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                        <div className="flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                            <span>🎮</span>
                          </div>
                          <div className="mx-4 flex flex-col">
                            <span
                              title="Nothing"
                              className="text-ellipsis text-[16px] text-zinc-400"
                            >
                              Rental Ps
                            </span>
                            <span
                              title="/profile"
                              className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                            >
                              Full Stack Desktop App
                            </span>
                          </div>
                        </div>
                        <span className="absolute right-2 text-zinc-600 transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-8"
                          >
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
          <div className="mb-7 flex justify-center"></div>
          <div className=" mb-8 flex flex-col items-center gap-2 text-center text-sm text-gray-300">
            <figure className="max-w-screen-md mx-auto text-center">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path className="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                  "The World is full of kind people...If you can't find one, be
                  one.."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                    Harsena
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    NPC
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="mb-5 flex justify-center">
        <div className=" font-serif flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
          <footer>
            <div className="container mx-auto text-center">
              <p className="text-orange-200">
                © 2024 Harsena Argretya. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Main;
