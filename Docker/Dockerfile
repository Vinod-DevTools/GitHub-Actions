# Use official Python base image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source code
COPY app.py .

# Expose port 5000 for Flask app
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]
