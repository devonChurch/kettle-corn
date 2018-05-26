# Kettle Corn

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<img src="https://user-images.githubusercontent.com/15273233/40571783-36e53f02-60f3-11e8-93ba-2e368b309067.jpg" height="auto" width="300"/>

A **static site generator** for the [Enhance Digital](https://enhancedigital.co.nz/) marketing site.

<img src="https://user-images.githubusercontent.com/15273233/40571793-66163f38-60f3-11e8-9b0b-16bcb9c7e6e7.png" height="auto" width="500"/>

The platform uses [GatsbyJS](https://www.gatsbyjs.org/) as the base and leverages [React](https://reactjs.org/) and [Styled Components](https://www.styled-components.com/).

We developed a [bespoke design pattern](https://enhancedigital.co.nz/styleguide/) using custom components and a [responsive flexible measurement](http://ami.responsivedesign.is/?url=https%3A%2F%2Fenhancedigital.co.nz%2F#) system.

![screen shot 2018-05-25 at 10 07 57 pm](https://user-images.githubusercontent.com/15273233/40571800-733eaa9c-60f3-11e8-81c1-433d28219024.png)


## Infrastructure

The application was generated using **Serverless** principals, utilising *low cost*, *performant* and *scalable* systems within the **AWS** portfolio.

Utilising a comprehensive CI / CD pipeline, a low latency Front-end delivery system and a [micro service backend](https://github.com/devonChurch/sausage-sizzle).

The AWS infrastructure fed into both [Stage](http://stage.enhancedigital.co.nz/) and [Production](https://enhancedigital.co.nz/) environments allowing for *fast*, *stable* and *flexible* iterations.

![kettle-corn](https://user-images.githubusercontent.com/15273233/40571816-b1b0344e-60f3-11e8-83b6-1715874c9339.png)


## Installation

* Clone this repository

  ```
  git clone https://github.com/devonChurch/kettle-corn.git
  ```

* Install project dependancies

  ```
  npm install
  ```

* Build and open a local _development_ version of the application

  ```
  npm start
  ```

## Testing


### Unit Tests

We use [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) to unit test our *utilities* and *React* components. Unit tests are run as part of our CI / CD pipeline and on every `git push` as part of [Husy](https://www.npmjs.com/package/husky) *Git hooks* setup.

* Run unit tests

  ```
  npm run xxxxxxx
  ```


### Visual Regression Tests

As part of our *stage* and *production* deployments we run an *image diffing* sequence to ascertain visual changes in our application *(both good and bad)* between releases.

The system is built with [Puppeteer](https://github.com/GoogleChrome/puppeteer) taking screenshots of each page in a series of different sized *view ports*. From there we use [Resemble.js](http://huddleeng.github.io/Resemble.js/) to find any inconsistencies between the images. The results are then sent to the developer via a [CodeBuild](https://aws.amazon.com/codebuild/), [Lambda](https://aws.amazon.com/lambda/) and [SES](https://aws.amazon.com/ses/) pipeline which emails the visual summary using [Zurbs Foundation](https://foundation.zurb.com/emails/docs/) design pattern.

* Run visual regression tests

  ```
  npm run screenshots:prep
  npm run screenshots:create:development
  npm run screenshots:compare
  ```

![screen shot 2018-05-25 at 10 37 47 pm](https://user-images.githubusercontent.com/15273233/40571850-55b8f1c0-60f4-11e8-9ac6-8802794dd14d.png)


### Integration Tests

To test the *full stack* of the application we run set of custom [Puppeteer](https://github.com/GoogleChrome/puppeteer) sequences to ensure things like *form submissions* are working correctly. Integration tests are run as part of our CI / CD pipeline and on every `git push` as part of [Husy](https://www.npmjs.com/package/husky) *Git hooks* setup.

* Run integration tests

  ```
  npm run test:e2e:development
  ```

![e2e](https://user-images.githubusercontent.com/15273233/40571856-755d8482-60f4-11e8-9c65-53c08595c92b.gif)

