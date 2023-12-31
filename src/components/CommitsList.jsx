import React from "react";

const CommitsList = ({ commits }) => {
  return (
    <div className="font-bold text-red-400 w-full text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {commits.map((commit) => (
        <div key={commit.id} className="">
          <div
            className="text-black font-normal flex flex-col items-start 
          justify-start py-2 px-4 my-5 bg-slate-100 rounded-lg shadow-md mx-3 sm:mx-6 md:mx-5"
          >
            <div className="text-left capitalize">
              <span className="text-gray-400 mr-2">Author:</span>
              {commit.author}
            </div>
            <div className="text-left capitalizen">
              <span className="text-gray-400">Commit Date:</span> <br />
              {new Date(commit.date)
                .toLocaleDateString("es-PE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })
                .replace("a. m.", "AM")}
            </div>
            <div className="text-left capitalizen">
              <span className="text-gray-400">Commit Message:</span> <br />
              {commit.message}
            </div>
            <div className="text-left capitalize">
              <a
                href={commit.url}
                target="_blank"
                className="cursor-pointer underline underline-offset-4"
              >
                <span className="text-gray-400 hover:text-indigo-500 text-right">
                  go to commit
                </span>{" "}
                <br />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommitsList;
