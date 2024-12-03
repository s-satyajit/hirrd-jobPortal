# Hirrd Job Portal

![Hirrd](public/logo.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Program Workflow](#program-workflow)
- [Data Flow](#data-flow)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Hooks](#hooks)
- [Contribution Guidelines](#contribution-guidelines)

## Introduction

Hirrd is a cutting-edge job portal designed to bridge the gap between recruiters and job seekers. Whether you're a recruiter looking to post job opportunities or a candidate searching for the perfect job, Hirrd provides a seamless, efficient, and user-friendly experience. Built with modern web technologies, Hirrd ensures smooth performance and an intuitive interface.

## Features

- **User Authentication**: Secure sign-up and sign-in for recruiters and candidates through Clerk.
- **Job Posting**: Recruiters can post job listings with detailed descriptions.
- **Job Application**: Candidates can browse and apply for jobs.
- **Company Profiles**: Fetch and display company information and logos from Supabase.
- **Real-Time Data**: Dynamic data fetching and updates ensure the latest information is always available.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: [ReactJS](https://reactjs.org/)
- **Backend**: [Supabase](https://supabase.io/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **UI Components**: [ShadCN UI](https://shadcn.dev/)
- **Validation**: [Zod](https://zod.dev/)
- **State Management**: [React Hooks](https://react.dev/reference/react/hooks)

## Installation

Follow these steps to get a local copy of the project up and running:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/s-satyajit/hirrd-jobPortal.git
   cd hirrd-jobPortal
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   - Create a `.env` file in the root directory and add your Supabase and Clerk keys.

   ```env
   REACT_APP_SUPABASE_URL=<your-supabase-url>
   REACT_APP_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   REACT_APP_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

## Usage

Once the setup is complete, you can use the following features:

1. **Sign Up/In**:

   - Recruiters and candidates can sign up and sign in using the forms provided by Clerk.

2. **Job Posting (Recruiters)**:

   - Navigate to the recruiter dashboard to post new job listings.

3. **Apply for Job (Candidates)**:
   - Browse the job listings and apply directly through the portal.

## Project Structure

Here's an overview of the project's structure:

```
📦
├─ .env
├─ .gitignore
├─ README.md
├─ components.json
├─ eslint.config.js
├─ favicon.ico
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ banner.jpeg
│  ├─ companies
│  │  ├─ amazon.svg
│  │  ├─ atlassian.svg
│  │  ├─ google.webp
│  │  ├─ ibm.svg
│  │  ├─ meta.svg
│  │  ├─ microsoft.webp
│  │  ├─ netflix.png
│  │  └─ uber.svg
│  ├─ logo.png
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ api
│  │  ├─ apiApplication.js
│  │  ├─ apiCompanies.js
│  │  └─ apiJobs.js
│  ├─ components
│  │  ├─ add-company-drawer.jsx
│  │  ├─ application-card.jsx
│  │  ├─ apply-job.jsx
│  │  ├─ created-applications.jsx
│  │  ├─ created-jobs.jsx
│  │  ├─ header.jsx
│  │  ├─ job-card.jsx
│  │  ├─ protected-route.jsx
│  │  ├─ theme-provider.jsx
│  │  └─ ui
│  │     ├─ accordion.jsx
│  │     ├─ button.jsx
│  │     ├─ card.jsx
│  │     ├─ carousel.jsx
│  │     ├─ drawer.jsx
│  │     ├─ input.jsx
│  │     ├─ label.jsx
│  │     ├─ radio-group.jsx
│  │     ├─ select.jsx
│  │     └─ textarea.jsx
│  ├─ data
│  │  ├─ companies.json
│  │  └─ faq.json
│  ├─ hooks
│  │  └─ use-fetch.jsx
│  ├─ index.css
│  ├─ layout
│  │  └─ app-layout.jsx
│  ├─ lib
│  │  └─ utils.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ job.jsx
│  │  ├─ jobListing.jsx
│  │  ├─ landing.jsx
│  │  ├─ my-jobs.jsx
│  │  ├─ onboarding.jsx
│  │  ├─ post-job.jsx
│  │  └─ saved-jobs.jsx
│  └─ utils
│     └─ supabase.js
├─ tailwind.config.js
└─ vite.config.js
```

<!-- ©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator) -->

## Program Workflow

### Recruiters

1. **Sign Up/In**:

   - Recruiters create an account using Clerk.
   - Upon successful sign-in, recruiters are redirected to their dashboard.

2. **Post Job**:
   - In the dashboard, recruiters fill out a form to post a job.
   - The job details are sent to Supabase using the `createJob` API endpoint.
   - The new job is stored in the `jobs` table in Supabase.

### Candidates

1. **Sign Up/In**:

   - Candidates create an account using Clerk.
   - Upon successful sign-in, candidates can browse job listings.

2. **Browse Jobs**:

   - Candidates view job listings fetched from Supabase.
   - Job details include title, description, company name, and logo.

3. **Apply for Job**:
   - Candidates can apply for jobs directly from the job details page.
   - Application data is sent to Supabase and stored in the `applications` table.

## Data Flow

### Fetching Jobs

1. The `useFetch` hook is used to fetch job data from Supabase.
2. The `getJobs` function is called with the necessary filters (location, company_id, searchQuery).
3. Supabase queries the `jobs` table and returns the results to the frontend.

### Posting Jobs

1. The `createJob` function is called with job details.
2. The job details are sent to Supabase, where a new job entry is created in the `jobs` table.

## Authentication

Authentication is managed by Clerk. Here’s how it works:

1. **Sign Up**: Users register by providing their email and password.
2. **Sign In**: Users authenticate using their credentials.
3. **Session Management**: Clerk manages user sessions, ensuring secure access to protected routes.

## API Endpoints

### Get Jobs

Fetches job listings with optional filters for location, company ID, and search query.

```javascript
import { SupabaseClient } from "@supabase/supabase-js";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await SupabaseClient(token);

  let query = supabase
    .from("jobs")
    .select("*, company:companies(name, logo_url), saved: saved_jobs(id)");

  if (location) query = query.eq("location", location);
  if (company_id) query = query.eq("company_id", company_id);
  if (searchQuery) query = query.ilike("title", `%${searchQuery}%`);

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs: ", error);
    return null;
  }

  return data;
}
```

### Create Job
Adds a new job posting to the Supabase database.

```javascript
import { SupabaseClient } from "@supabase/supabase-js";

export async function createJob(token, jobDetails) {
  const supabase = await SupabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .insert(jobDetails);

  if (error) {
    console.error("Error creating job: ", error);
    return null;
  }

  return data;
}
```

## Components
## JobCard
Displays individual job details.

```javascript
// job-card.js
import React from 'react';

const JobCard = ({ job }) => (
  <div className="job-card">
    <h3>{job.title}</h3>
    <p>{job.description}</p>
    <p>{job.company.name}</p>
    <img src={job.company.logo_url} alt="Company Logo" />
  </div>
);

export default JobCard;
```

## Hooks
### useFetch
Custom hook for fetching data.

```javascript
import { useState } from "react";
import { useSession } from "@clerk/clerk-react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });
      const response = await cb(supabaseAccessToken, options, ...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
};

export default useFetch;
```

## Contribution Guidelines

1. **Fork the repository:** Click the "Fork" button on the top right of the repository page.

2. **Clone your fork:**

```bash
git clone https://github.com/s-satyajit/hirrd-jobPortal.git
```

3. **Create a new branch:**

```bash
git checkout -b feature-name
```

4. **Make your changes:**

- Ensure your code follows the project's style guidelines.

- Add tests if applicable.

- Update documentation as needed.

5. **Commit your changes:**

```bash
git commit -m "Add feature-name"
```

6. **Push to your branch:**

```bash
git push origin feature-name
```

7. **Create a Pull Request:**

- Go to the repository page and click "New Pull Request".

- Provide a clear description of your changes.
