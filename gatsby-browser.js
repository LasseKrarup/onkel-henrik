/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

import "@fontsource/amatic-sc"

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
};