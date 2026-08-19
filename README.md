Travilo --- Frontend Developer Technical Test

A responsive React.js implementation of the provided travel website
design for the Control Loops Frontend Developer technical assessment.

Overview

This project recreates the provided Figma design as a responsive travel
website using React.js and modern CSS.

The implementation focuses on:

Accurate layout, spacing, typography, colors, and visual details

Responsive desktop, tablet, and mobile layouts

Reusable React components

Semantic HTML

Custom typography and design variables

Local image and SVG assets

Smooth navigation between page sections

Destination filtering functionality

Responsive mobile navigation

Glassmorphism search interface

Tech Stack

React.js

Vite

JavaScript

CSS3

HTML5

Project Structure

src/
├── assets/
│   ├── icons/
│   ├── images/
│   └── logo.svg
├── components/
├── styles/
├── App.jsx
└── main.jsx

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js 18+

npm

Check your installed versions:

node -v
npm -v

Installation

Clone the repository:

git clone https://github.com/MOwaisAbbas/travelers.git

Navigate to the project directory:

cd travelers

Install dependencies:

npm install

Run Locally

Start the Vite development server:

npm run dev

The application will be available at the local URL shown by Vite,
typically:

http://localhost:5173

Production Build

Create a production build:

npm run build

Preview the production build locally:

npm run preview

Responsive Design

The interface is designed for:

Desktop

Laptop

Tablet

Mobile

Responsive behavior is implemented using CSS media queries and flexible
Grid and Flexbox layouts.

Main Features

Responsive header navigation

Mobile hamburger menu

Smooth scrolling between page sections

Hero section with destination search

Glassmorphism search bar

Popular destinations section

Travel choice destination cards

Destination filtering

Responsive image layouts

Local SVG icons and image assets

Assets

All visual assets are stored locally inside src/assets, including:

Hero images

Destination images

Package images

SVG icons

Logo

Code Structure

The project uses reusable React components with separate CSS files for
component-specific styling.

The implementation follows:

Semantic HTML

Component-based React architecture

Clear component-specific class names

Reusable data-driven card rendering

Responsive CSS

Minimal unnecessary JavaScript

Maintainable project organization

Deployment

The project can be deployed using Vercel, Netlify, or another static
hosting platform.

For a Vercel deployment:

Import the GitHub repository into Vercel.

Select the project.

Use the default Vite configuration.

Deploy the project.

Build command:

npm run build

Output directory:

dist

Live Demo

Live URL:

<YOUR_DEPLOYED_URL>

GitHub Repository

Repository URL:

https://github.com/MOwaisAbbas/travelers.git

Submission

This repository contains the complete source code for the Control Loops
Frontend Developer technical assessment.