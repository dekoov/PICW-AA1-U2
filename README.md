# World Cup 2026 Weather Tracker | PICW-AA1-U2

> **Proyecto Académico:** Servicio de consulta meteorológica para las sedes del Mundial 2026 consumiendo APIs externas.

---

## Descripción

Este repositorio contiene la solución para la actividad **AA1-U2**. El objetivo principal es desarrollar un servicio backend capaz de conectarse con una API meteorológica externa (OpenWeather/WeatherAPI), procesar la información y "servir" el estado del clima actual para las ciudades anfitrionas del próximo Mundial de Fútbol en México, Estados Unidos y Canadá.

---

## Objetivos del Proyecto

Este desarrollo busca cumplir con los siguientes puntos clave:

1.  **Integración de APIs:** Demostrar la capacidad de consumir servicios RESTful de terceros mediante peticiones HTTP.
2.  **Manejo de Datos JSON:** Parsear y estructurar la información recibida para entregar solo los datos relevantes (Temperatura, Humedad, Sensación Térmica).
3.  **Lógica de Negocio:** Filtrar específicamente las sedes oficiales del torneo (ej. CDMX, Guadalajara, New York, Toronto, etc.).
4.  **Despliegue Local:** Configurar un entorno de desarrollo funcional y documentado.

---

## Alcance

* Consulta datos en tiempo real de un proveedor externo.
* Lista el clima de las sedes pre-configuradas del Mundial 2026.
* Maneja errores básicos (ej. si la API externa falla).
* Entrega la información en formato JSON limpio.

---

## Instalación y Configuración

Sigue estos pasos para correr el proyecto en tu máquina local.

### 1. Prerrequisitos
Asegúrate de tener instalado:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (o Python según corresponda el código)
* Un editor de código (VS Code recomendado).

### 2. Clonar el Repositorio
Descarga el código fuente:

```bash
git clone [https://github.com/dekoov/PICW-AA1-U2.git](https://github.com/dekoov/PICW-AA1-U2.git)
cd PICW-AA1-U2

```

### 3. Instalar Dependencias

Instala las librerías necesarias ejecutando:

```bash
npm install
# O si usas Python: pip install -r requirements.txt

```

### 4. Variables de Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key del proveedor de clima:

```env
WEATHER_API_KEY=tu_api_key_aqui

```

### 5. Ejecutar el Servidor

Levanta el servicio:

```bash
npm start
# O para modo desarrollo: npm run dev

```

---

