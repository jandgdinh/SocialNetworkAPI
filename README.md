# SocialNetworkAPI

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This is social network application where users can share their thoughts, react to friend's thoughts, and create a friend list. This application uses Express.js for routing, MongoDB for database, and Mongoose for ODM.

## Video Example

https://drive.google.com/file/d/1PblUbTtBpDK0oGY84hUfUvRF3VGdghXw/view?usp=sharing

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)
- [Questions](#questions)

## Installation

    git clone https://github.com/jandgdinh/SocialNetworkAPI

## Usage

In the main directory of the project, run in your terminal,

    npm run dev or npm run start

## User Story

    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

## License

    This project is licensed under the MIT License. For more information, please visit https://opensource.org/licenses/MIT.

## Questions

If you have any questions, please open an issue or contact me directly at jandgdinh@gmail.com. You can find more of my work at https://github.com/jandgdinh
