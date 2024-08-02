import React from "react";
import { websites } from "../data";
import WebsiteCard from "./WebsiteCard";

const Website = ({ showWebsitePreview, setShowWebsitePreview }) => {
  return (
    <>
      {Object.keys(websites).map((category, index) => (
        <div key={index} className="section__website mb-12">
          <div className="category__title relative">
            <h2 className="capitalize mb-1 text-xl font-medium">{category}</h2>
            <div className="h-1 bg-slate-200 dark:bg-slate-900 ounded-full overflow-hidden mb-6">
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-emerald-500"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-5">
            {websites[category].map((website) => (
              <WebsiteCard
                key={website.id}
                data={website}
                showWebsitePreview={showWebsitePreview}
                setShowWebsitePreview={setShowWebsitePreview}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Website;
