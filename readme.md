# 🛒 E-commerce de Productos Tecnológicos

Proyecto full-stack con **Next.js 16+ (App Router, TypeScript)** en el frontend y **Laravel 11 + MySQL** en el backend.  
Permite gestionar un catálogo de productos tecnológicos con CRUD completo (crear, listar, editar y eliminar).

---

## 🚀 Tecnologías utilizadas
- **Frontend:** Next.js 16+, React, TailwindCSS
- **Backend:** Laravel 11, PHP 8.2
- **Base de datos:** MySQL
- **Contenedores:** Docker + WSL2 (Windows 10)
- **API REST:** Laravel API Resource

---

## 📂 Estructura del proyecto
/frontend   → Aplicación Next.js  
/backend    → API Laravel  

---

## ⚙️ Instalación y configuración

1. Clonar repositorio
```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo

2. Configurar variables de entorno
Frontend (frontend/.env.local)

env
NEXT_PUBLIC_API_URL=http://localhost:8000

Backend (backend/.env)

env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3307
DB_DATABASE=tech_products
DB_USERNAME=root
DB_PASSWORD=secret

3. Levantar contenedores
bash
docker compose up --build
Esto iniciará:

Laravel en http://localhost:8000

Next.js en http://localhost:3000

MySQL en localhost:3306

Migraciones y Seeders
Ejecuta migraciones y pobla la base de datos con productos tecnológicos:

bash
docker exec -it backend php artisan migrate --seed
Seeder incluye ejemplos como:

Laptop ASUS ZenBook 14

Monitor LG UltraWide 34"

Mouse Logitech G Pro

Auriculares Sony WH-1000XM5

Teléfono Samsung Galaxy S24

Tablet Microsoft Surface Pro

SSD Samsung 1TB NVMe

🔗 Endpoints principales (Laravel API)
GET /api/products → Listar productos

POST /api/products → Crear producto

GET /api/products/{id} → Mostrar producto

PUT /api/products/{id} → Actualizar producto

DELETE /api/products/{id} → Eliminar producto

💻 Frontend (Next.js)
Página principal: http://localhost:3000

Funcionalidades:

Crear producto tecnológico desde formulario

Listar productos

Editar producto

Eliminar producto

Mensajes de éxito/error