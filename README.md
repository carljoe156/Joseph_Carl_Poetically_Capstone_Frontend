# Poetically Book Website Application

## Overview

This application is a MERN (MongoDB, Express, React, Node.js) stack project designed for managing books and/ or poems. Users can perform CRUD (Create, Read, Update, Delete) operations on books and, discover content, and explore additional features such as creating posts and accessing lists.

## Features

### General Features

- Responsive user interface.
- Navigation bar and footer for seamless user experience.
- Error handling with visual feedback using `notistack`.
- Blog Posts about Wellness and Mindfulness

### Book Recommendator

#### Please be mindful of other when using this feature

- **Create Book**: Add a new book with details like title, genre, author, year, pages, and publisher.
- **Read Book**: View details of a specific book.
- **Update Book**: Edit book details.
- **Delete Book**: Remove a book from the list.
- **Book List**: View all books in a dedicated page.

### Additional Features

- **Discover Page**: Explore new books and poems.
- **About Page**: Information about the application and its mission and vision.
- **Create Post**: Add posts to the application for additional engagement.
- **404 Page**: Custom error page for undefined routes.

## Technologies Used

### Frontend

- **React**: Component-based user interface.
- **React Router**: For managing routes.
- **Axios**: For making API calls to our backend
- **Notistack**: For displaying notifications.
- **Tailwind CSS**: For styling the application.

### Backend

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB.

### Development Tools

- **Postman**: For testing API endpoints.
- **ESLint**: For code quality and linting.
- **Prettier**: For consistent code formatting.

## Frontend Folder Structure

```
src/
|--- components/
|   |-- (Books)Home/
|   |-- Layout/
|   |-- Poem/
|   |-- Nav.jsx
|   |-- Footer.jsx
|   |-- Spinner.jsx
|   |-- BackButton.jsx
|
|-- pages/
    |-- Blog/
|   |-- Home.jsx
|   |-- BookList.jsx
|   |-- CreateBook.jsx
|   |-- ShowBook.jsx
|   |-- UpdateBook.jsx
|   |-- DeleteBook.jsx
|   |-- CreatePost.jsx
|   |-- Discover.jsx
|   |-- About.jsx
|
|-- App.jsx
|-- App.css
|-- index.js
```

## API Endpoints HTTP Methods/CRUD Methods

### Books

- `GET /api/v1/book/:id`: Fetch a specific book.
- `POST /api/v1/books`: Add a new book.
- `PUT /api/v1/update/:id`: Update book details.
- `DELETE /api/v1/delete/:id`: Remove a book.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   nodemon index.js
   ```
2. Start the frontend application:
   ```bash
   npm run dev
   ```
3.

- Open the application in your browser at `http://localhost:5173` for frontend.
- Open the application in your browser at `http://localhost:5000` for backend.

## Future Enchancement

- Accessibility Standard UI/UX design
- The implementation of third party libraries and apis
- The implementation of Users and Administration Services

## License

This project is licensed under the MIT License.
