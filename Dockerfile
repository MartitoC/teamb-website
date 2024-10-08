# Usa una imagen base de Node.js con Alpine para que sea liviano
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Exponer el puerto que Vite usará (puerto 5173 en desarrollo o 4173 en preview)
EXPOSE 5173
EXPOSE 4173

# Comando para correr Vite en modo desarrollo
CMD ["npm", "run", "dev"]
