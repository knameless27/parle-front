# 🌐 Parle Frontend - Aplicación Angular

Este proyecto es el frontend de **Parle**, desarrollado en **Angular** y diseñado para interactuar con el backend de Laravel. Puedes ejecutarlo fácilmente utilizando **Docker** o **npm**.

---

## 📝 Requisitos Previos

Asegúrate de tener instalados los siguientes programas según el método que elijas para ejecutar la aplicación:

### Opción 1: Usando Docker
- [Docker](https://www.docker.com/)

### Opción 2: Usando npm
- [Node.js](https://nodejs.org/) (versión LTS recomendada; aunque el desarrollo se realizó en la versión 23).

---

## 🚀 Instrucciones para Ejecutar el Proyecto

### Opción 1: Ejecutar con Docker

1. **Construir y Ejecutar el Contenedor**  
   Dentro del directorio del proyecto, ejecuta:

   ```bash
   docker build -t parle-frontend .
   docker run -d -p 80:80 parle-frontend
   ```

   Esto inicia un contenedor con **Nginx** que sirve la aplicación Angular. Por defecto, estará disponible en:

   ```
   http://localhost
   ```

2. **Configuración Adicional**  
   Si necesitas cambiar el puerto, ajusta el parámetro `-p` en el comando de ejecución (por ejemplo, `-p 8080:80`).

---

### Opción 2: Ejecutar con npm

1. **Instalar Dependencias**  
   Asegúrate de estar en el directorio del proyecto y ejecuta:

   ```bash
   npm install
   ```

2. **Ejecutar el Servidor de Desarrollo**  
   Inicia el servidor con:

   ```bash
   npm start
   ```

   Por defecto, estará disponible en:

   ```
   http://localhost:4200
   ```
---

## 🛠 Detalles Técnicos

### Dockerfile

El `Dockerfile` utiliza **Nginx** para servir los archivos estáticos generados por Angular en un entorno de producción. A continuación, un resumen de su estructura:

- Copia los archivos generados en `dist/` durante la etapa de construcción.
- Configura un servidor web rápido y eficiente con Nginx.

### Estructura del Proyecto

```plaintext
├── src/
│   ├── app/               # Componentes principales
│   ├── environments/      # Configuración de entornos
├── angular.json           # Configuración de Angular CLI
├── Dockerfile             # Configuración de Docker
├── package.json           # Dependencias y scripts
```

---

## 🔍 Observaciones

- Este frontend fue desarrollado usando Angular y probado con Node.js versión 23 (aunque aún es inestable). Es recomendable usar una versión LTS para mayor estabilidad.
- En caso de ejecutar con Docker, no es necesario tener Node.js instalado en tu máquina local.

---
