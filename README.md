# Todo Monorepo - Prueba Técnica

## Descripción

Este proyecto es una prueba técnica para el puesto de Fullstack Developer. Es una aplicación organizada como un **monorepo** utilizando **pnpm** como gestor de paquetes. Aunque prefiero trabajar con repositorios separados para cada servicio o módulo en proyectos reales, en este caso he optado por un monorepo para simplificar la evaluación y ejecución del proyecto.

El monorepo incluye:

- **API**: Desarrollada con **NestJS**.
- **Cliente Web**: Basado en **Next.js**.

Ambos están configurados para trabajar de manera conjunta y pueden ejecutarse fácilmente en local.

## Estructura del Proyecto

```
todo-monorepo/
├── apps/
│   ├── api/      # API desarrollada con NestJS
│   ├── web/      # Cliente web desarrollado con Next.js
├── packages/     # Paquetes o librerías compartidas (si aplica)
└── pnpm-workspace.yaml # Configuración del monorepo
```

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** >= 18
- **pnpm** 9.0.0 o superior
- **Git**

## Configuración Inicial

1. **Instalar pnpm** (si no lo tienes):

   ```bash
   npm install -g pnpm@9.0.0
   ```

2. **Clonar el repositorio**:

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd todo-monorepo
   ```

3. **Instalar dependencias**:

   ```bash
   pnpm install
   ```

## Ejecución del Proyecto

### 1. Levantar Todo el Proyecto

Para ejecutar tanto la API como el cliente web de forma simultánea, utiliza el siguiente comando:

```bash
pnpm dev
```

Esto levantará:

- **API**: `http://localhost:4000`
  - Documentación Swagger: `http://localhost:4000/swagger`
- **Cliente Web**: `http://localhost:3000`

### 2. Opciones para Ejecutar por Separado

Si prefieres ejecutar las aplicaciones de forma independiente, utiliza los siguientes comandos:

#### Levantar la API

```bash
pnpm --filter api dev
```

- Servidor: `http://localhost:4000`
- Documentación Swagger: `http://localhost:4000/swagger`

#### Levantar el Cliente Web

```bash
pnpm --filter web dev
```

- Cliente Web: `http://localhost:3000`

## Scripts Disponibles

### Globales

- **`pnpm build`**: Construye todas las aplicaciones.
- **`pnpm dev`**: Inicia todas las aplicaciones en modo desarrollo.
- **`pnpm lint`**: Ejecuta linters.
- **`pnpm format`**: Formatea el código.
- **`pnpm check-types`**: Verifica los tipos de TypeScript.

### Específicos

- **API**: `pnpm --filter api [script]`
- **Web**: `pnpm --filter web [script]`

Ejemplo:

```bash
pnpm --filter api dev
pnpm --filter web build
```

## Notas sobre el Monorepo

Este proyecto utiliza un enfoque monorepo con **pnpm** para:

- Compartir dependencias entre aplicaciones.
- Simplificar la instalación y ejecución.

Aunque práctico para pruebas técnicas, en producción podría ser más adecuado separar cada servicio en repositorios independientes.

## Documentación Adicional

- **Swagger**: Documentación de la API en `http://localhost:4000/swagger`.
- **Validación**: Uso de `class-validator` y `class-transformer` para validar y transformar datos.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactarme.
`carlos.rojas.diaz.barriga@gmail.com`
¡Gracias por evaluar esta prueba técnica!
