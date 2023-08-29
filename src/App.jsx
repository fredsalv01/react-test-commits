import React, { useState, useEffect } from "react";
import CommitsList from "./components/CommitsList";
import Loading from "./components/Loading";

const App = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCommits = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/commits");
      const data = await response.json();
      setCommits(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div className="bg-white w-full md:w-[98vw] lg:w-[90vw] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center mt-10 mb-5 text-xl md:text-3xl  font-semibold">
          React 18 <span className="text-purple-400">Github</span>Commits App
        </h1>
        <img src="/github-logo.png" className="w-12 h-12" alt="" />

        <p className="text-center mt-5 text-sm md:text-base">
          This is a demo app to show the{" "}
          <span className="font-semibold">all commits</span> from this
          particular repository{" "}
          <a
            href="
            https://github.com/fredalbert37/node-github-app"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-indigo-500"
          >
            click here{" "}
          </a>
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-center mt-10">
          <p className="text-red-500 font-semibold">
            There was an error, please try again later 😥
          </p>
        </div>
      ) : (
        <div className="text-center mt-10">
          {commits.length === 0 ? (
            <p className="text-neutral-400 font-semibold">
              There are no commits to show 😔
            </p>
          ) : (
            <CommitsList commits={commits} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
