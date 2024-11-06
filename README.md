
# Task Management App

This is a **Task Management Application** built with **React** and **TypeScript** using the **Test-Driven Development (TDD)** approach. The app allows users to create, update, and delete tasks. It includes basic styling for a polished look and functionality tests to ensure reliability.


## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Tasks**: Add a new task with a description.
- **Edit Tasks**: Modify existing tasks.
- **Complete Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive Design**: Styled for desktop and mobile views.

## Screenshots

### Task Management in Action
![Task Management](![image](https://github.com/user-attachments/assets/2013df27-629e-4352-875e-6b32bfd9fb49))


*(Note: Replace these placeholders with your actual screenshots saved in a `screenshots` folder within your project directory.)*

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- **Add a Task**: Enter a task description in the input field and click "Add Task."
- **Edit a Task**: Click "Edit" next to a task, make changes, and click "Save."
- **Delete a Task**: Click "Delete" next to a task to remove it.
- **Mark as Completed**: Click on a task description to toggle its completed state.

## Testing

This app follows a TDD approach. To run the tests, use:

```bash
npm test
```

Tests cover the core features:
- Adding a task
- Editing a task
- Deleting a task
- Marking a task as complete

## Folder Structure

```plaintext
task-management-app/
├── public/
├── src/
│   ├── components/
│   │   └── TaskList.tsx
│   │   └── TaskList.css
│   ├── tests/
│   │   └── TaskList.test.tsx
│   ├── App.tsx
│   ├── index.tsx
├── README.md
├── package.json
└── tsconfig.json
```

## Technologies Used

- **React** with **TypeScript**
- **Jest** and **React Testing Library** for testing
- **CSS** for styling

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature/fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a Pull Request.

## License

This project is licensed under the MIT License.
