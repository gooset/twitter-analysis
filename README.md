# Twitter Analysis App

The Twitter Analysis App is a web application that allows users to search for tweets based on keywords or user profiles. It provides a simple and intuitive interface for users to discover and analyze tweets of interest. The application consists of a backend API built with FastAPI and a frontend implemented using React.

## Application Structure

The application consists of the following components:

- `airflow/dags`: Contains the Apache Airflow DAG file (`airfow_es.py`) for scheduling and executing data scraping tasks.
- `backend`: Contains the backend API implementation.
  - `app`: Contains the FastAPI application code.
    - `api.py`: Defines the API routes and their corresponding handlers.
    - `__init__.py`: Initializes the FastAPI application.
    - `pg_logic`: Contains the PostgreSQL database logic.
      - `database.py`: Handles database connections and queries.
      - `models.py`: Defines the database models.
  - `main.py`: Entry point for the backend server.
- `front-end`: Contains the frontend code implemented using React.
  - `assets`: Contains the application assets, such as icons and logos.
  - `components`: Contains reusable React components.
  - `containers`: Contains the main containers for different sections of the application.
  - `pages`: Contains the Next.js pages for routing.
  - `store`: Contains Redux store configuration and slice files for managing application state.
  - `styles`: Contains the Sass stylesheets.
  - `utils`: Contains utility functions used in the application.
- `README.md`: This file.
- `requirements.txt`: Contains the Python dependencies required to run the application.

## Technologies Used

- Backend: FastAPI, Python, Apache Airflow
- Data Processing: Pandas, NumPy, PyTorch
- Web Scraping: SnsCrape
- Frontend: React, Redux, Axios, Sass, Next.js, Webpack

## Installation and Setup

1. Clone the repository: `git clone https://github.com/gooset/twitter-analysis.git`
2. Navigate to the project directory: `cd twitter-analysis`

### Backend Setup

3. Set up and activate a virtual environment: (optional but recommended)
   - Create a virtual environment: `python -m venv venv`
   - Activate the virtual environment:
     - For Windows: `venv\Scripts\activate`
     - For macOS/Linux: `source venv/bin/activate`
4. Install the backend dependencies: `pip install -r requirements.txt`
5. Start the backend server: `uvicorn backend.main:app --reload`

### Frontend Setup

6. Navigate to the frontend directory: `cd front-end`
7. Install the frontend dependencies: `npm install`
8. Start the frontend development server: `npm run dev`

9. Open your browser and visit: `http://localhost:3000`

## Usage

1. On the home page, enter a keyword or a Twitter username in the respective search bar.
2. Click the "Search" button or press Enter to retrieve the relevant tweets.
3. Explore the search results, view individual tweets, and perform sentiment analysis if desired.
4. Navigate through the different sections of the app to analyze and visualize the tweets.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

