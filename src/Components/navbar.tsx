/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../Utils/utils";
import { useHistory } from "react-router";

export default function Navbar() {
  const history = useHistory();
  return (
    <Disclosure as="nav" className="shadow rounded-b-xl bg-purple-300">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 max-w-full">
            <div className="relative flex justify-between h-20">
              <div className="flex-1 flex justify-center">
                <div className="border-indigo-500 inline-flex items-center px-1 pt-1  text-m font-medium text-gray-800 justify-center text-4xl">
                  {"Game of Thrones"}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
