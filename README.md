# 🧭 InsightBoard — Dashboard Minimalista en Angular

**InsightBoard** es un proyecto minimalista construido con **Angular 20**, diseñado para demostrar dominio del framework moderno, arquitectura *standalone*, consumo de APIs REST y visualización de datos dinámicos.

El objetivo es crear un **dashboard limpio y profesional**, ideal para mostrar en portafolios de desarrolladores front-end.

---

## 🚀 Características principales

- ⚡ **Angular Standalone Components** (sin módulos tradicionales)  
- 🌐 **Consumo de API pública** (JSONPlaceholder)  
- 📊 **Visualización de datos con Chart.js (ng2-charts)**  
- 🧱 **Arquitectura escalable basada en servicios**  
- 💡 **Diseño minimalista y responsivo**  
- 🧩 **Routing configurado con Angular Router**  
- 💬 **Código 100% TypeScript**

---

## 🧠 Lógica principal

El dashboard realiza una petición HTTP a la API pública  
[`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users),  
agrupa los usuarios por ciudad y muestra los resultados en una **gráfica de barras dinámica**.

La arquitectura separa responsabilidades:
- 🧠 Lógica de negocio en `DashboardService`
- 🎨 Visualización en componentes *standalone* (`Dashboard`, `Chart`, `Sidebar`)

---

## 🛠️ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/JhonSuarezS/angular-insightboard.git
cd angular-insightboard
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar el servidor de desarrollo
```bash
ng serve
```

El proyecto estará disponible en 👉 **http://localhost:4200/**

---

## 🌍 API utilizada

- **Base URL:** `https://jsonplaceholder.typicode.com`  
- **Endpoint:** `/users`  
- **Uso:** Agrupar usuarios por ciudad y visualizar con Chart.js  

---

## 🎯 Próximas mejoras

- 🧾 Tabla interactiva con búsqueda y filtros (`@angular/material`)  
- 🔐 Autenticación simulada (login/logout)  
- 🌙 Dark mode con CSS variables  
- 🔗 Integración con una API real  

---

## 🧑‍💻 Autor

**Jhon Suárez S.**  
Desarrollador Web — Frontend & Backend  

📍 [Portafolio](https://jhonsuarezs.github.io/Portafolio/)  
💼 [GitHub](https://github.com/JhonSuarezS)

