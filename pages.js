const ghpages = require("gh-pages");
const repoURL = "https://github.com/DzeCin/dzenan.github.io.git";

ghpages.publish(
  "/",
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
