import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

function Dropdown() {
  const activeCategory = window.location.href;
  const category = activeCategory.split("/")[3];
  return (
    <div className="border-t-2 border-pink-700 z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:text-violet-500 transition duration-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {category === "" ? "Home" : category}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-[-15.55rem] z-50 w-96 origin-bottom-right  rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a href="/fundamentals">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-neutral-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Fundamentals
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="/street-fighter">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-neutral-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Street Fighter
                    </button>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/airdashers">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-neutral-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Airdashers
                    </button>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/french-bread">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-neutral-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      French Bread
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Dropdown;
