import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from '../../Image/logo3.png';

const Navber = () => {
  return (
    <div>
      <div className="min-h-full">
        <Disclosure as="nav" className="w-[100%] fixed">
          {({ open }) => (
            <div className="">
              <div className="flex items-center max-w-7xl h-16 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center w-[100%] justify-between">
                  <Link to={"/"} className="flex-shrink-0 flex items-center">
                    <img
                        className="cursor-pointer h-8 w-8"
                        src={logo}
                        alt="Eduford"
                      />
                    <p className="cursor-pointer pl-[5px] font-[600] text-[15px]">
                      Eduford
                    </p>
                  </Link>
                  <div className="hidden md:flex">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link
                        to={"/"}
                        className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                      <Link
                        to={"/about"}
                        className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        ABOUT
                      </Link>
                      <Link
                        to={"/course"}
                        className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        COURSE
                      </Link>
                      <Link
                        to={"/blog"}
                        className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        BLOG
                      </Link>
                      <Link
                        to={"/contact"}
                        className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        CONTACT
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition-all">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden flex justify-end">
                <div className="px-[1.8rem] pt-2 pb-3 mr-[15px] rounded-[5px] text-right w-[11rem] space-y-1 sm:px-[3]">
                  <Link
                        to={"/"}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                      <Link
                        to={"/about"}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        ABOUT
                      </Link>
                      <Link
                        to={"/course"}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        COURSE
                      </Link>
                      <Link
                        to={"/blog"}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        BLOG
                      </Link>
                      <Link
                        to={"/contact"}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        CONTACT
                      </Link>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Navber;
