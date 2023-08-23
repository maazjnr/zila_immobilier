import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: (
        <p style={{ textAlign: "left" }}>
          {" "}
          Why is it considered necessary to register Agreement for Sale?
        </p>
      ),
      content: (
        <p style={{ textAlign: "left" }}>
          The Registration Act, 1908, the Transfer of Property Act, 1882 and the
          Real Estate (Regulation and Development) Act, 2016 mandates the
          registration of an agreement for sale of an immovable property. By
          registering the agreement for sale of an immovable property, it
          becomes a permanent public record. Further, a person is considered as
          the legal owner of an immovable property only after he gets such
          property registered in his name.
        </p>
      ),
    },
    {
      title: (
        <p style={{ textAlign: "left" }}>
          {" "}
          Do I need to pay stamp duty if the property is transferred or is a
          gift?
        </p>
      ),

      content: (
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus
        </p>
      ),
    },
    {
      title: (
        <p style={{ textAlign: "left" }}>
          What are the documents a buyer would need from me?
        </p>
      ),
      content: (
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      ),
    },
    {
      title: (
        <p style={{ textAlign: "left" }}>
          {" "}
          How soon would I receive a call from you after writing?
        </p>
      ),
      content: (
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      ),
    },
  ],
};

const styles = {
  // bgColor: 'red',
  titleTextColor: "#C69B7B",
  // titleTextSize: '48px',
  rowTitleColor: "#C69B7B",
  // rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  rowContentTextSize: "12px",
  // rowContentPaddingTop: '10px',
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "50px",
  // rowContentPaddingRight: '150px',
  arrowColor: "red",
  transitionDuration: "2s",
  timingFunc: "ease",
  rowTitleTextAlign: "left", // Align row titles to the left
  rowContentTextAlign: "left", // Align inner text to the left
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

function Faqs() {
  return (
    <main className="px-4">
      <section className="mt-10 mb-5">
        <h1 className="font-primary font-bold text-2xl text-secondary">
          Frequently Asked Questions
        </h1>
        <p className="text-xs px-5 mt-3">
          You can use this guide to familiarize yourself with rules, laws and
          other important information relating to your property.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {/* Apply text-left class to align text to the left */}
          <Faq
            data={data}
            styles={styles}
            config={config}
            className="text-left"
          />
        </div>
      </div>
    </main>
  );
}

export default Faqs;
