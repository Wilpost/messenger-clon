FROM node:18

# Creación de los directorios
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copio los archivos neceserios
COPY package*.json ./
COPY next.config.js ./

# Instalo las dependencias
RUN npm install

# Copio en mi directorio actual todos los archivos restantes
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]