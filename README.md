### Aplicacion de ejemplo para una clinica

En esta aplicacion se demuestra principalmente la integracion continua (CI), el despliegue continuo (CD), la dockerizacion de una aplicacion, CRUDs, manejo de errores y relaciones entre colecciones de documentos para una clinica utilizando una base de datos no relacional, cabe mencionar que el objetivo principal es demostrar el dominio de las tecnologias utilizadas, mas no la implementacion de un sistema completo de una clinica

### Tecnologias utilizadas

- Express
- Nest Js
- TypeScript
- MongoDB
- Winston,
- Docker
- Docker Compose
- Supertest
- Jest
- Vercel
- Git
- Github Actions
- Swagger
- Commitizen
- Husky
- Eslint
- Prettier

### Instrucciones

Para ejecutarlo desde docker-compose:
docker-compose up -d

Para construir la imagen de docker
docker build -t clinica-app .
docker run -d -p 8000:8000 clinica-app

Para ejecutar las pruebas:
npm run test

### Documentación:

https://documenter.getpostman.com/view/9677721/2sAXqwXekr
https://clinica-git-master-erick-sanzs-projects.vercel.app/api

### Proyecto desplegado:

https://clinica-git-master-erick-sanzs-projects.vercel.app/

Nota: cuando se crea un nuevo historial médico, se pueden adjuntar resultados de la prueba medica en caso de tenerlos, pueden ser pdfs o imágenes, sin embargo en la capa gratuita de vercel no es posible subir archivos, para ello hay mejores alternativas de paga tales como s3, Azure Blob Storage, Google Cloud Storage, entre otros y dado que este es un ejemplo se opto por unicamente por servicios gratuitos
