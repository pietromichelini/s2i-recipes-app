<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/pietromichelini/s2i-recipes-app/">
    <img src="public/favicon.ico" alt="Logo" width="50" height="50">
  </a>
<h3 align="center">VeggiEat</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/196601958-88171416-0957-48c3-9b86-43eef46b5146.gif" /></p>

<p> This project consists in a simple web app to find vegetarian and non-vegetarian recipes. </br>
Click <a target="_blank" href="https://veggieat.netlify.app/">here</a> to try it now. </p> 

(The information displayed is fetched from [spoonacular's food API](https://spoonacular.com/food-api))

### Built With

* [ReactJS](https://reactjs.org/)
* [axios](https://www.npmjs.com/package/axios)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [styled-components](https://www.npmjs.com/package/styled-components)
* [@splidejs/react-splide](https://www.npmjs.com/package/@splidejs/splide)
* [react-icons](https://www.npmjs.com/package/react-icons)
* [framer-motion](https://www.npmjs.com/package/framer-motion)
* [react-js-switch](https://www.npmjs.com/package/react-js-switch)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

If you don't have Node installed yet, click [here](https://nodejs.org/en/).

If you don't have npm installed yet, simply type the following command in your terminal.

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/pietromichelini/s2i-react-meditation-app.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Build from source 

   ```sh
   npm run build
   ```

4. Open dist/index.html 

In alternative to steps 3 and 4 you can also just serve directly from source.
```sh
   npm start
   ```
   
## Usage

The gif below demonstrates all the features included in the web app.

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/196601558-377facb1-06f2-4fff-bbdf-d20d40e2fd55.gif" /></p>

After using the app a lot you may run into the following error.

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/196603252-1623edad-abcb-440b-afc8-47b011bc8eb2.gif" /></p>

This is due to the fact that the [spoonacular API](https://spoonacular.com/food-api) only allows a maximum of 150 daily requests per account.

If you are running the app locally, you can quickly fix this issue by following these steps: open the .env file, change the api key (there are 3 listed below the REACT_APP_API_KEY variable) and restart the local server as demonstrated below.

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/196182027-e4fd9d42-e344-4908-a53b-6ede03f80688.gif" /></p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Pietro Michelini - pietro.michelini@gmail.com

Project Links: 
- [Github Repository](https://github.com/pietromichelini/s2i-recipes-app)
- [Netlify Website](https://veggieat.netlify.app)
