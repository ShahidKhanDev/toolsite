import { useState } from "react";
import { Header, Website, WebsiteCard } from "./components";
import { websites } from "./data";

// const WebsiteCategory = ({ category }) => {
//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-bold mb-4">{category}</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-3">
//         {websites[category]?.map((website) => (
//           <WebsiteCard
//             key={website.id}
//             website={website}
//             showWebsitePreview={showWebsitePreview}
//             setShowWebsitePreview={setShowWebsitePreview}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const App = () => {
  // const categoryName = Object.keys(websites);
  const [showWebsitePreview, setShowWebsitePreview] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <div className="h-[50vh] bg-blue-500 flex justify-center items-center flex-col">
        <h1 className="text-4xl sm:text-6xl text-white font-bold">TOOLSITE</h1>
        <p className="mt-2 text-white/80 text-md sm:text-xl">
          Where Developers Find Essential Tools
        </p>
      </div>

      <div className="container max-w-4xl mx-auto mt-10 px-3">
        <Website
          showWebsitePreview={showWebsitePreview}
          setShowWebsitePreview={setShowWebsitePreview}
        />
      </div>

      <div
        className={`${
          showWebsitePreview ? "translate-y-0" : "translate-y-[92%]"
        } website__preview fixed bottom-0 left-0 w-full h-[90%] bg-slate-100 rounded-2xl overflow-hidden p-2 duration-200 transition-all`}
      >
        <div className="caption__btns text-right flex items-center justify-end gap-2">
          <button
            className="w-8 h-8 grid place-content-center bg-slate-200 rounded-full text-gray-500"
            onClick={() => setShowWebsitePreview(!showWebsitePreview)}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <button className="w-8 h-8 grid place-content-center bg-slate-200 rounded-full text-gray-500">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className="border border-slate-200 bg-white my-2 rounded-md flex items-center justify-between pr-2">
          <div className="flex items-center px-2 w-full">
            <button className="text-gray-500 grid place-content-center text-[0.85rem]">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </button>
            <input
              type="text"
              value={"https://www.pexels.com"}
              className="text-xs w-full outline-none border-none py-2 px-2 text-gray-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="text-gray-500 grid place-content-center text-[0.85rem]">
              <ion-icon name="open-outline"></ion-icon>
            </button>
            <button className="text-gray-500 grid place-content-center text-[0.85rem]">
              <ion-icon name="share-outline"></ion-icon>
            </button>
          </div>
        </div>
        <iframe
          src="https://www.pexels.com"
          frameBorder="0"
          className="rounded-xl w-full h-[83%]"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
