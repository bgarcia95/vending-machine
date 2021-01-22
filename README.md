# Vending Machine

Development of web application for technical test FOCUS ITO.

# Description

The goal of this assignment is for you to create a single page application to help an end-user manage the simulation of a vending machine capable of asynchronous requests.
Write a program to mock a vending machine, you send/insert orders into the machine and it should prepare/output your selection. Each selection of “food” should compute differently into the machine, hence, take more or less time to prepare.

On app load, the end user is presented with a list of items from which he can select from, the app should display the items that have been selected, the time left for these to be dispatched and also update this list with items that have been dispatched.

# Requirements

> NOTE: Included: ✔️ Not included: ❌

- User selects “x” item from the machine ✔️
- Machine takes the order for item “x” and starts processing it ✔️
- Based on the selection the machine should take “x” amount of time to prepare it ✔️
- While preparing any selection the machine should be able to accept more orders of the same or other items ✔️

## Tech Stack

- [React JS](https://reactjs.org/)

> A JavaScript library for building user interfaces.

- [Redux Toolkit](https://redux-toolkit.js.org/)

> Redux is a predictable state container for JavaScript apps. With that said, Redux Toolkit is a package intended to be the standard way to write Redux logic which help us to save a lot of boilerplate.

- [Styled System](https://styled-system.com/)

> Styled System lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme.

- [Styled Components](https://styled-components.com/)

> Utilising tagged template literals and the power of CSS, styled-components allows you to write actual CSS code to style your components.

## Running Project

- Clone this project

```
git clone https://github.com/bgarcia95/vending-machine.git
```

- Install dependencies

```
npm install
```

In the project directory, you can run:

```
npm start
```

Now open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Enjoy!
