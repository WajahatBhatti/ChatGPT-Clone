# Chatbot and Text Conversion Application

This repository contains the source code for a Chatbot and Text Conversion application. The application provides various features such as chatbot interaction, text summarization, JavaScript-to-Pseudocode conversion, and more.

## Features

- Interactive chatbot functionality
- Text summarization using AI
- Conversion of JavaScript code to Pseudocode
- User authentication and registration

## Project Structure

The project is divided into two main components: the **client** and the **server**.

### Client

The `client` directory contains the frontend code of the application built using React. It includes components for different pages and features:

- `src`: Contains the main React components and logic of the application.
  - `App.js`: The root component of the application.
  - `components`: Contains reusable UI components.
  - `pages`: Contains individual pages of the application.
  - `theme.js`: Contains theme configuration.
  - Other files for styling, testing, and reporting.

### Server

The `server` directory contains the backend code of the application built using Node.js. It includes the following main files and directories:

- `config`: Contains configuration files, including database configuration.
- `controllers`: Contains controllers for handling different aspects of the application (authentication, OpenAI interaction, etc.).
- `middelwares`: Contains middleware for error handling.
- `models`: Contains database models (user model).
- `routes`: Contains API routes and endpoints (authentication, OpenAI, etc.).
- `utils`: Contains utility files.
- `server.js`: Entry point for the Node.js server.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the `client` directory: `cd client`
3. Install client dependencies: `npm install`
4. Start the React app: `npm start`
5. Open another terminal window/tab
6. Navigate to the `server` directory: `cd ../server`
7. Install server dependencies: `npm install`
8. Start the Node.js server: `npm start`

Make sure to configure environment variables and settings as needed.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
