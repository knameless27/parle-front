# 📘 Documentación del Proyecto: Parle Frontend

Este documento describe la implementación del frontend para **Parle**, desarrollado con **Angular**. A continuación, se detallan las características, requisitos, y la arquitectura del proyecto.

---

## 🎯 Objetivo

El frontend de **Parle** tiene como objetivo:

1. Proveer una interfaz de usuario moderna e interactiva para gestionar usuarios y posts.
2. Consumir los endpoints REST del backend desarrollado en Laravel.
3. Permitir la interacción fluida entre el usuario y el sistema, con énfasis en la experiencia y usabilidad.

---

## 1. Framework y Herramientas

- **Angular**: Framework principal utilizado para construir la interfaz de usuario.
- **Nginx**: Servidor web para servir los archivos estáticos.
- **Docker**: Contenedor para simplificar el despliegue.

## 2. Funcionalidades

### Gestión de Usuarios

- Formulario para **registrar usuarios**.
- Pantalla de inicio de sesión para **autenticar usuarios** y almacenar su token.

### Gestión de Posts

- Interfaz para:
  - **Crear un post** (requiere autenticación).
  - **Listar posts** por categoría, consumiendo el endpoint correspondiente del backend.

### Gestión de Categorías

- Visualización y selección de categorías en formularios y vistas relacionadas.

## 3. Despliegue

El frontend puede ejecutarse de dos maneras:

1. Utilizando el servidor de Angular (`ng serve`).
2. Sirviendo los archivos compilados con **Nginx** dentro de un contenedor Docker.

---

## 🛠 Arquitectura del Proyecto

El proyecto sigue la estructura estándar de Angular:

```plaintext
├── src/
│   ├── app/               # Componentes principales
│   │   ├── components/    # Componentes donde estan los post, login y registro
│   │   ├── services/      # Api del aplicativo
│   ├── environments/      # Configuración de entornos (dev/prod)
├── angular.json           # Configuración de Angular CLI
├── Dockerfile             # Configuración de Docker
├── package.json           # Dependencias y scripts
```

### Componentes Clave

1. **Register y Login Components**:
   - Maneja el inicio de sesión y registro de usuarios.
   - Utiliza servicios para comunicarse con los endpoints del backend (`/api/register`, `/api/login`).

2. **PostsComponent**:
   - Lista posts por categoría.
   - Permite crear nuevos posts para usuarios autenticados.

---

## 🚀 Configuración y Ejecución

### Variables de Entorno

Asegúrate de configurar las variables en `src/environments` para apuntar al backend correcto:

#### `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api',
};
```

### Npm

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:

   ```bash
   npm start
   ```

   La aplicación estará disponible en:

   ```
   http://localhost:4200
   ```

### Docker

1. Construye el contenedor:

   ```bash
   docker build -t parle-frontend .
   ```

2. Ejecuta el contenedor:

   ```bash
   docker run -d -p 80:80 parle-frontend
   ```

   La aplicación estará disponible en:

   ```
   http://localhost
   ```
