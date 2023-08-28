import React from "react";
import CommitsList from "./components/CommitsList";

const App = () => {
  const [commits, setCommits] = React.useState([
    {
      id: "ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      message: "fix: find all response with commit entity",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      date: "2023-08-28T22:02:23Z",
    },
    {
      id: "51517d741efefda62e31122e679e91be4f443977",
      message: "fix: using only get all flow",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/51517d741efefda62e31122e679e91be4f443977",
      date: "2023-08-28T22:01:46Z",
    },
    {
      id: "32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      message: "changes in repo backend",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      date: "2023-08-28T21:54:28Z",
    },
    {
      id: "d109c3268eecaa5591aaba74a42cf1519408d50a",
      message: "first commit",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/d109c3268eecaa5591aaba74a42cf1519408d50a",
      date: "2023-08-28T20:36:48Z",
    },
    {
      id: "ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      message: "fix: find all response with commit entity",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      date: "2023-08-28T22:02:23Z",
    },
    {
      id: "51517d741efefda62e31122e679e91be4f443977",
      message: "fix: using only get all flow",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/51517d741efefda62e31122e679e91be4f443977",
      date: "2023-08-28T22:01:46Z",
    },
    {
      id: "32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      message: "changes in repo backend",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      date: "2023-08-28T21:54:28Z",
    },
    {
      id: "d109c3268eecaa5591aaba74a42cf1519408d50a",
      message: "first commit",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/d109c3268eecaa5591aaba74a42cf1519408d50a",
      date: "2023-08-28T20:36:48Z",
    },
    {
      id: "ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      message: "fix: find all response with commit entity",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/ab7dc07eca57c8062e4e25de6273a078a23cdeba",
      date: "2023-08-28T22:02:23Z",
    },
    {
      id: "51517d741efefda62e31122e679e91be4f443977",
      message: "fix: using only get all flow",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/51517d741efefda62e31122e679e91be4f443977",
      date: "2023-08-28T22:01:46Z",
    },
    {
      id: "32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      message: "changes in repo backend",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/32dc27c07ddf91457b98ac9f4e6cc27f06a7dde1",
      date: "2023-08-28T21:54:28Z",
    },
    {
      id: "d109c3268eecaa5591aaba74a42cf1519408d50a",
      message: "first commit",
      author: "Freddy Morales",
      url: "https://github.com/fredsalv01/github-commits-test/commit/d109c3268eecaa5591aaba74a42cf1519408d50a",
      date: "2023-08-28T20:36:48Z",
    },
  ]);

  // const fetchCommits = async () => {
  //   const response = await fetch("http://localhost:3000/api/v1/commits");
  //   const data = await response.json();
  //   setCommits(data);
  // };

  // React.useEffect(() => {
  //   fetchCommits();
  // }, []);

  // console.log(commits);

  return (
    <div className="bg-white w-[1440px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center mt-10 mb-5 text-2xl sm:text-3xl  font-semibold">
          React 18 <span className="text-purple-400">Github</span>Commits App
        </h1>
        <img src="/github-logo.png" className="w-12 h-12" alt="" />

        <p className="text-center mt-5 text-sm sm:text-base">
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

      <div className="text-center mt-10">
        <CommitsList commits={commits} />
      </div>
    </div>
  );
};

export default App;
