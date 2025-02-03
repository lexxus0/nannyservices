# Nanny Finder App

## Overview

Nanny Finder App is a web application designed for a company that offers nanny services. Users can browse nanny profiles, add them to favorites, and schedule personal meetings. The app is built with **React, TypeScript, Firebase**, and additional libraries for form validation and state management.

## Features

- **Authentication:** User registration, login, and logout using Firebase.
- **Search & Filtering:** Sort and filter nannies by name, price, experience, and rating.
- **Favorites:** Users can add nannies to their favorites list, stored in Firebase or localStorage.
- **Appointments:** Users can schedule meetings with selected nannies.
- **Modals:** Registration, login, and appointment modals with easy dismissal.

## Project Structure

The application consists of three main pages:

### 1. Home Page

- Website header.
- Company slogan.
- Button to navigate to the **Nannies** page.

### 2. Nannies Page

- List of nannies with sorting options:
  - Alphabetically (A-Z, Z-A).
  - By price.
  - By popularity (rating from lowest to highest).
- Nanny cards include:
  - Name, avatar, education, experience, reviews, price, kids' age, location, description, and rating.
- "Load more" button for pagination.
- "Read more" button to view detailed nanny profiles.

### 3. Favorites Page

- A private page for logged-in users to view saved nannies.
- The **heart** button toggles favorites and persists after page refresh.

## Technologies Used

- **Frontend:** React (with TypeScript)
- **State Management:** React Hook Form
- **Authentication & Database:** Firebase
- **Validation:** Yup
- **Styling:** Tailwind CSS

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lexxus0/nannyservices.git
   cd nannyservices
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up Firebase:
   - Create a `.env` file in the root directory.
   - Add Firebase credentials:
     ```sh
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_auth_domain
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_storage_bucket
     VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_APP_ID=your_app_id
     ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Register or log in to access favorite nannies.
- Browse nanny profiles and filter by criteria.
- Add or remove nannies from your favorites.
- Schedule appointments with nannies.

## License

This project is licensed under the **MIT License**.
