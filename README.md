docker-compose up -d

docker build -t clinica-app .
docker run -d -p 8000:8000 clinica-app
