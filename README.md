# Electron_TS_React_2023

This project his a desktop alarm.

## Technologies

Stack used in this project:

- ReactJS
- Typescript
- Electron
- TypeScript
- Sequelize
- Vite
- Forge
- SQLite3

## Installation

Clone the projet, install the dependencies and start the server.

```sh
git clone 
npm i
```

### Setup .env

```sh
cp .env.example .env
```

You might need to change the variable to make sur the project work on your environment

### Run development server

```sh
npm start
```

### Run production server

```sh
npm run make && npm run package
```

## Structure

.
 * [config](./config)
   * [vite](./config/vite)
   * [forge](./config/forge)
 * [electron](./electron)
   * [configurations](./electron/configurations)
   * [controllers](./electron/controllers)
   * [main](./electron/main)
   * [models](./electron/models)
   * [preload](./electron/preload)
   * [routes](./electron/routes)
   * [services](./electron/services)
   * [utils](./electron/utils)
   * [main](./electron/main.ts)
 * [seed](./seed)
   * [Alarm](./seed/Alarm)
   * [index.ts](./seed/index)
 * [src](./src)
   * [api-client](./src/api-client)
   * [components](./src/components)
   * [contexts](./src/contexts)
   * [hooks](./src/hooks)
   * [layouts](./src/layouts)
   * [styles](./src/styles)
   * [utils](./src/utils)
   * [App.tsx](./src/App.tsx)
   * [index.tsx](./src/index.tsx)

As you can see, we have 4 main directories inside the project.

- 'config' is all the configuration of building tools (Vite & Forge)
- 'electron' is the back-end of the app in Electron
- 'seed' is the little program to create data for the database
- 'src' is the front-end of the app using React, Typescript and ChakraUI

## Configuration

The config folder contains two subfolders: vite and forge

In Vite's case it will contain a file called `vite.config` which contains some configurations about how our application should be built with.

We use Electron forge who is an all-in-one tool to package and distribute Electron applications inside file `forge.config.js`

This configuration is very verbose and enables special node.js API.

But it's really useful when developing an application with multiple processes like this one.

## Back-end

The back-end has a MVC design pattern.

It's made with electron for the desktop app with all the configuration necessary.

With the contextBridge to open Node API for the front-end inside `preload` file.

All controllers are here. They manage the request to the database with sequelize.

Models contains every model used by the application like alarm.

Services contain every service used by the application for the management of alarms with `node-schedule`
a npm package to create cron task.

Routes are the routes that will be accessible for the front-end. The route here can be seen
like the IPC communication of Electron.

Utils contain some useful functions or classes which could be shared across different parts of our code base.

## Seed

This folder is only there to create data inside the database with sequelize
To run this you only need to launch this cmd :

```sh
  npm run seed
```

## Front-end

The front-end is made in React 18.x.

Chakra UI as our CSS framework.

For the typing checking, we use Typescript.

How work the alarm :

- We can add new alarm by clicking on the `Create Alarm` button.
- Inside the popup, we can set the hour of the alarm and save it by clicking on `Save`.
- Also, we can delete or edit by clicking on `Delete` or `Edit`.
- The switch button lets the user enable or disable the alarm.
- When the hour of your alarm comes, a notification his send with a sound.

We have one `BasicLayout` use by the `HomePage`. We only have the root '/' enable.

Inside this layout, there is a header, footer, and main content. All components are imported into this layout component.

Inside the HomePage component, there is a list of Alarms. Each item represents each alarm created before with the hour.

All the components are pretty basic, with low complexity to avoid unnecessary things.

## Improvement

1 Add some features by adding some custom configuration for alarm (recurrence for example).

2 Change the Alarm algorithm by waiting an action of the user to turn it off.

3 Review the responsivity of the application. And change the design.

4 Add some unit tests to the application.

5 Verify the security of the app.
