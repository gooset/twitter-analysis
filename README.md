# Twitter Analysis Application

## Overview

The Twitter Analysis Application is a comprehensive tool for scraping Twitter user data, performing personality analysis using a PyTorch model, and storing the results in Elasticsearch and PostgreSQL databases. The application is containerized using Docker and orchestrated using Docker Compose. It includes three main components: backend, Apache Airflow for workflow management, and a front-end for user interaction.

## Project Structure

The project is organized into three main folders:

1. **backend**: Handles Twitter data scraping, PyTorch model inference, and database interactions.

2. **airflow**: Manages the workflow using Apache Airflow. Includes DAGs for orchestrating the data pipeline.

3. **front-end**: Provides a user-friendly interface for interacting with the application. Built with React and Next.js.

## Setup

### Prerequisites

- Docker
- Docker Compose

### Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/twitter-analysis.git
    cd twitter-analysis
    ```

2. **Build and run the Docker containers:**

    ```bash
    docker-compose build
    docker-compose up
    ```

## Components

### 1. Backend

The backend component is responsible for:
- Interact with the elasticsearch engine
- Performing personality analysis using a PyTorch model.
- Storing data in Elasticsearch and PostgreSQL databases.

### 2. Apache Airflow

Apache Airflow is used for orchestrating the workflow. DAGs (Directed Acyclic Graphs) define the sequence of tasks to execute.

### 3. Front-end

The front-end component provides a web-based interface for users to interact with the application. It is built using React and Next.js.

## Configuration

Adjust the configuration settings in each component's respective Dockerfile and configuration files as needed. Make sure to set environment variables for sensitive information.

## Dependencies

The project relies on the following technologies:

- FastAPI for the backend API.
- PyTorch for personality analysis.
- Elasticsearch for data storage.
- PostgreSQL for relational database storage.
- Apache Airflow for workflow management.
- React and Next.js for the front-end.

## Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.
