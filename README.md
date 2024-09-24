para ejecutar el proyecto se necesita una cadena de conexion a una base de datos de mongoDb, en mi caso utilice un servidor gratuito, y tambien la ruta donde se almaceran tus archivos

Para ejecutarlo desde docker-compose:
docker-compose up -d

Para construir la imagen de docker
docker build -t clinica-app .
docker run -d -p 8000:8000 clinica-app

Para ejecutar las pruebas:
npm run test

Documentacion:
https://documenter.getpostman.com/view/9677721/2sAXqwXekr

link del proyecto desplegado:
https://clinica-git-master-erick-sanzs-projects.vercel.app/

Nota: cuando se crea un nuevo historial médico, se pueden adjuntar resultados de la prueba en caso de tenerlos, puede ser pdfs o imágenes, sin embargo en la capa gratuita de vercel no es posible subir archivos, se debe contratar un servicio de paga para guardar los archivos, hay muchos servicios para el guardado de archivos como s3, Azure Blob Storage, Google Cloud Storage, entre otros y dado que este es un ejemplo, he optado por guardar los archivos en el servidor por lo que en el caso de querer subir un archivo en las operaciones POST y PATCH solo se podrá realizar de manera local, posteriormente para pasar a un ambiente productivo se contraria un servicio de almacenamiento como los anteriormente mencionados
