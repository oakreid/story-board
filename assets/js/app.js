// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;
import _ from "lodash";
import socket from "./socket";

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import root_init from "./root";

$(() => {
  let node = $('#root')[0];
  if (node) {
    let channel = socket.channel("chat:lobby", {});
    root_init(node, channel);
  }
});
