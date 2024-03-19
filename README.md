# A/B Testing System for Webpage Variations

## Overview

This A/B Testing System is designed to evaluate the effectiveness of two webpage variations (A and B) by tracking user interactions and determining which variation provides a more optimal user experience. The system randomly assigns a variation to visitors and tracks their interactions, including page views and 'Sign Up' button clicks, to analyze and compare the click-through rate (CTR) of each variation.

## Key Features

- **Random Variation Assignment**: Visitors are randomly assigned one of two variations when they visit the webpage for the first time, ensuring an unbiased distribution of test samples.

- **Persistent Variation Assignment**: The assigned variation is stored in the user's cookies to maintain consistency throughout the user session, even after page refreshes or revisits.

- **Page View Tracking**: The system tracks each visit to the page using the `$trackPageview` plugin from `analytics-api.ts` to monitor user engagement.

- **'Sign Up' Button Click Tracking**: Clicks on the 'Sign Up' button are specifically tracked via the `$trackEvent` plugin in `analytics-api.ts` to measure direct user actions towards conversion.

- **Duplicate Click Prevention**: Implements logic to ensure that multiple clicks on the 'Sign Up' button by the same user are not redundantly tracked, focusing on the first interaction for accuracy.

- **CTR Calculation and Analysis**: Send to API to calculates the CTR for each variation by dividing the number of 'Sign Up' button clicks by the number of page views, ensuring unique counts per user for precise comparison.

## Installation and Running the Project

```bash
# Clone the repository
git clone https://github.com/hermaphroditos/abtest.git

# Navigate to the project directory
cd abtest

# Install necessary packages
npm install

# Start the application in development mode
npm run dev
```

## Docker Build and Run 

```bash
docker build -t abtest .
docker run -p 3000:3000 abtest
```

* URL: http://localhost:3000