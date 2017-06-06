# motius-demo

This is a demo for Motius java script test

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.2.0.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Technologies used:

- MongoDB
- Node
- Express
- Angular - Angular FullStack generator [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.2.0.
- Bootstrap for responsive
- Vis.js for charting library

### Instructions to Install and Run

	1. Run `npm install` to install server dependencies.

	2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

	3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

### Build & Structure

#### Frontend
- Code is in the client folder
	- main: Contains the main view, components and logic to show all the Usecases and milestone timeline.
	- addCase: Contains the view, components and logic to add a new Usecase.
	- client/components/navbar/ can find the view and logic of the navegation bar, the data is in the navbar.component.js
	- client/app/app.js are injected all the angular modules that are necesary for the project 
#### Backend code is in the server folder
- Code is in the server folder
	- api/task: contains the logic and endpoint for crud a new task, in task_model.js is describe the model of the Usecase
