# CineFlix

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!
-->
<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Tools](#tools)
    - [Key Features](#key-features)
 - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
<!-- - [🔭 Future Features](#future-features) -->
 - [🎥 Video Summary](#video-summary)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# ⚔ CineFlix <a name="about-project"></a>

**CineFlix** is about building group web application based on external APIs. An API is selected to provide data on popular movies on which the webapp is built around. The webapp will have 2 user interfaces:

- A home page showing a list of movies with a 'like' button attaached to it.
- A popup window with more information on the movie and also allows viewers to make comments on the movie.

![Screenshot (5)](https://user-images.githubusercontent.com/63909901/236642114-ee2128ea-48e2-45ea-9c2a-d03120f14edd.png)
![Screenshot (6)](https://user-images.githubusercontent.com/63909901/236642153-8636d0c3-d743-4a35-b308-3d6c507c290c.png)
![Screenshot (7)](https://user-images.githubusercontent.com/63909901/236642166-6672fc50-5122-4f97-80b0-f59249f72be9.png)
![Screenshot (8)](https://user-images.githubusercontent.com/63909901/236642176-059d9bc7-d912-4596-8652-5396a9bffd6d.png)
![Screenshot (9)](https://user-images.githubusercontent.com/63909901/236642183-24171bbd-91fd-4c45-8d7b-64144a0600b9.png)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Frontend</summary>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Linters</li>
    <li>GitHub Flow</li>
    <li>Git Flow</li>
    <li>Javascript</li>
    <li>Webpack</li>
  </ul>
</details>

### Tools <a name="tools"></a>

  <details>
    <summary>Code Convention, Code Analysis</summary>
      <ul>
        <li><a href="https://eslint.org/">ESLint</a></li>
        <li><a href="https://webhint.io/">Webhint</a></li>
        <li><a href="https://stylelint.io/">Stylelint</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Lighthouse</a></li>
        <li><a href="https://www.npmjs.com/package/npm-check">node_modules checker</a></li>
      </ul>
  </details>
  <details>
    <summary>Version Control, CI/CD, Hosting Service</summary>
      <ul>
        <li><a href="https://pages.github.com/">Github Pages</a></li>
        <li><a href="https://github.com/features/actions">Github Actions</a></li>
        <li><a href="https://git-scm.com/">Gt</a></li>
      </ul>
  </details>
  <details>
    <summary>IDE, Desktop Apps, Other Tools</summary>
      <ul>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://desktop.github.com/">Github Desktop</a></li>
      </ul>
  </details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- [x] Button Interactions (i.e. hover, etc.)
- [x] Attractive Images & Design
- [x] Dynamic page (data is retrieved from JSON file)
- [x] Update DOM content using APIs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->
### 🚀 Live Demo <a name="live-demo"></a>
- [Live Demo Link](https://davidolanrewaju.github.io/CineFlix/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
<ul>

  <li>GitHub Account</li>
  <li>Git installed on your system</li>
  <li>Install all dependencies</li>
  <li>Code Editor</li>
</ul>

### Setup

Clone this repository to your desired folder, write the following commands in git bash

```sh
  cd my-folder
  git clone https://github.com/davidolanrewaju/CineFlix
```

### Usage

To run the project, execute the following command:

```sh
  npm init -y
  npm install --save-dev hint@7.x
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
  npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
  npm i webpack webpack-cli webpack-dev-server --save-dev
```

### Run tests

To run tests, run the following command:

```sh
  npx hint .
  npx stylelint "**/*.{css,scss}"
  npx eslint .
  npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **David Olanrewaju**

- GitHub: [@davidolanrewaju](https://github.com/dave-prog)
- Twitter: [@ola_dayve](https://twitter.com/ola_dayve)
- LinkedIn: [David Olanrewaju](https://www.linkedin.com/in/david-olanrewaju)

👤 **Emmanuel Steven**

- GitHub: [@emmanuelsteven](https://github.com/emmanuelsteven)
- Twitter: [@CjayStev](https://twitter.com/CjayStev)
- LinkedIn: [steven emmanuel](https://www.linkedin.com/in/steven-emmanuel-75a03a141/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

<!-- ## 🔭 Future Features <a name="future-features"></a>

- [ ] Set alarms for actions
- [ ] Download action list as images, pdfs or docs

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- VIDEO SUMMARY -->
## 🎥 Video Summary <a name="video-summary"></a>
>This is a video summary on the aim of the features implemented.</br>
Click [this link](https://drive.google.com/file/d/1lR3ce165nLBaLiN2gQ-fvVdlqXOIqz5g/view?usp=sharing) to get a brief introduction on CineFlix.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/davidolanrewaju/Leaderboard/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project hit the like button and also hit me up if you need a collaborator on any side projects you're working on.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to:

- [Spencer](https://github.com/skabeo)
- [Bawa](https://github.com/CaptainBawa)
- [Adams](https://github.com/Adams-Ghub) for there support in completing this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **How did you set up your project?**

  - Installed all dependencies given by Microverse (stylelint, webhint, lighthouse)

- **How do I clone your report for use?**

  - Open git bash and enter "git clone <https://github.com/davidolanrewaju/Leaderboard.git>"

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
