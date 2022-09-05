const Discord = require("discord.js");

const fs = require("fs");
const version = require("../../package.json").version;
const releaseUrl = require("../scripts/mostRecentRelease").releaseLink;

const currentPatchNotes = fs
    .readFileSync(`./release_notes/v${version}.md`, "utf8")
    // These replaces filter out the markdown headings and change them bold. They are down individually so different styles can be applied to different levels
    .replace(/^# (.*$)/gim, "**$1**")
    .replace(/^## (.*$)/gim, "**$1**")
    .replace(/^### (.*$)/gim, "**$1**")
    .replace(/^#### (.*$)/gim, "**$1**");

exports.patchEmbed = patchEmbed;
