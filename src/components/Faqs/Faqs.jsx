import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function Faqs() {
  return (
    <main>
      <div className="w-full px-4 pt-16">
        <section className="mt-10 mb-5">
          <h1 className="font-primary font-bold text-2xl text-secondary">
            Frequently Asked Questions
          </h1>
          <p className="text-xs px-5 mt-3">
            You can use this guide to familiarize yourself with rules, laws and
            other important information relating to your property.
          </p>
        </section>

        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 flex flex-col md:flex-row md:justify-between md:space-x-4">
          <Disclosure className="w-full md:w-1/4 mt-2 md:mt-0">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Why is it considered necessary to register Agreement for
                    Sale?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The Registration Act, 1908, the Transfer of Property Act, 1882
                  and the Real Estate (Regulation and Development) Act, 2016
                  mandates the registration of an agreement for sale of an
                  immovable property. By registering the agreement for sale of
                  an immovable property, it becomes a permanent public record.
                  Further, a person is considered as the legal owner of an
                  immovable property only after he gets such property registered
                  in his name.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full md:w-1/4 mt-2 md:mt-0">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Do I need to pay stamp duty if the property is transferred
                    or is a gift?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="w-full md:w-1/4 mt-2 md:mt-0">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                  What are the documents a buyer would need from me?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="w-full md:w-1/4 mt-2 md:mt-0">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                  How soon would I receive a call from you after writing?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </main>
  );
}

export default Faqs;
