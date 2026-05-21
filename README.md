# Employee Management Frontend

A modern React-based frontend application for managing employee data with a clean, responsive user interface. This application allows users to view, add, and update employee information.

## Features

- **View Employees**: Display a comprehensive list of all employees
- **Add Employees**: Add new employee records through an intuitive form
- **Update Employees**: Edit existing employee information
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Fast Development**: Hot Module Replacement (HMR) with Vite for instant updates

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **JavaScript (ES6+)** - Modern JavaScript

## Project Structure

```
src/
├── components/
│   ├── AddEmployee.jsx       # Form to add new employees
│   ├── UpdateEmployee.jsx    # Form to update employee details
│   ├── EmployeeList.jsx      # Display list of employees
│   └── Navbar.jsx            # Navigation bar
├── services/
│   └── EmployeeService.jsx   # API service for employee operations
├── App.jsx                   # Main application component
├── main.jsx                  # Entry point
├── App.css                   # Global styles
└── index.css                 # Base styles
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Emp-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started

### Development Mode

Start the development server with HMR:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

1. **Navigate** using the navbar to access different sections
2. **View Employees** - See all employee records in a list format
3. **Add Employee** - Click the Add button and fill in the form to create a new employee
4. **Update Employee** - Click Edit on any employee to modify their information

## API Integration

The `EmployeeService.jsx` handles all API calls for employee operations. Configure your backend API endpoint in the service file as needed.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
