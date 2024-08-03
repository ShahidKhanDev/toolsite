const WebsitePreview = ({
  showWebsitePreview,
  fullScreen,
  setShowWebsitePreview,
  setFullScreen,
}) => {
  return (
    <>
      <div
        className={`${
          showWebsitePreview
            ? "translate-y-0"
            : "translate-y-full shadow-1 bg-white"
          // : "translate-y-[91.8%] shadow-1 bg-white"
        } website__preview fixed bottom-0 left-0 w-full ${
          fullScreen ? "h-full rounded-none" : "h-[90%] rounded-2xl"
        } bg-slate-100 overflow-hidden p-2 duration-200 transition-all z-50`}
      >
        <div className="flex gap-4">
          <div className="website__url flex-grow border border-slate-200 bg-white my-2 rounded-md flex items-center justify-between pr-2">
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
          <div className="caption__btns text-right flex items-center justify-end gap-2">
            <button
              className="minimize__btn w-8 h-8 grid place-content-center bg-slate-200 rounded-full text-gray-500"
              onClick={() => setShowWebsitePreview(!showWebsitePreview)}
            >
              <ion-icon name="remove-outline"></ion-icon>
            </button>

            <button
              className="w-8 h-8 grid place-content-center bg-slate-200 rounded-full text-gray-500"
              onClick={() => {
                if (!showWebsitePreview && !fullScreen) {
                  setShowWebsitePreview(true);
                  setFullScreen(true);
                } else {
                  setFullScreen(!fullScreen);
                }
              }}
            >
              <i>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M14 10L20 4M20 4H15.5M20 4V8.5M4 4L10 10M4 4V8.5M4 4H8.5M14 14L20 20M20 20V15.5M20 20H15.5M10 14L4 20M4 20H8.5M4 20L4 15.5"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </button>
            <button className="w-8 h-8 grid place-content-center bg-slate-200 rounded-full text-gray-500">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </div>

        <iframe
          src="https://www.pexels.com"
          frameBorder="0"
          className={`rounded-xl w-full ${fullScreen ? "h-[93%]" : "h-[92%]"} `}
        ></iframe>
      </div>

      <div className="tabs fixed bottom-2 left-1/2 -translate-x-1/2">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-[var(--primary-clr)] rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Tabs</span>
          <span className="sr-only">Tabs</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            1
          </div>
        </button>
      </div>
    </>
  );
};

export default WebsitePreview;
