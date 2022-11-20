FROM apache/airflow:2.2.3-python3.9

# Set the working directory to /airflow
WORKDIR /airflow

COPY airflow.cfg /opt/airflow/airflow.cfg
COPY dags/airfow_es.py /opt/airflow/dags/airfow_es.py
COPY webserver_config.py /opt/airflow/webserver_config.py
COPY standalone_admin_password.txt /opt/airflow/standalone_admin_password.txt

# Expose the web server and scheduler ports
EXPOSE 8080 5555

# Initialize Airflow database and create admin user
RUN airflow db init && \
    airflow users create \
        --username admin \
        --firstname admin \
        --lastname admin \
        --role Admin \
        --email admin@example.com

# Run Airflow web server and wait for it to start before launching the scheduler
CMD ["bash", "-c", "airflow webserver --port 8080 & sleep 10 && airflow scheduler"]

