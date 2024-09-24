docker-compose up -d

docker build -t clinica-app .
docker run -d -p 8000:8000 clinica-app

documentacion: https://documenter.getpostman.com/view/9677721/2sAXqwXekr

link del proyecto desplegado:
https://clinica-git-master-erick-sanzs-projects.vercel.app/

Nota: cuando se crea un nuevo historial médico, se pueden adjuntar resultados de la prueba en caso de tenerlos, puede ser pdfs o imágenes, sin embargo en la capa gratuita de vercel no es posible subir archivos, se debe contratar un servicio de paga para guardar los archivos, hay muchos servicios para el guardado de archivos como s3, Azure Blob Storage, Google Cloud Storage, entre otros y dado que este es un ejemplo, he optado por guardar los archivos en el servidor por lo que en el caso de querer subir un archivo en las operaciones POST y PATCH solo se podrá realizar de manera local, posteriormente para pasar a un ambiente productivo se contraria un servicio de almacenamiento como los anteriormente mencionados
