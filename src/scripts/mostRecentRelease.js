const version = require("../../package.json").version;

const repoUrl = "https://github.com/RatKira/Rat";

exports.releaseLink = `${repoUrl}releases/tag/v${version}`;
