# 🍑 Peach Nutrition API

This project is the foundational backend API for the Peach Nutrition e-commerce platform. It provides complete data management (CRUD) for the product catalog using a modern, scalable **Layered Architecture** and **TypeScript**.

## 🚀 Key Technologies

* **Platform:** Node.js (with ES Modules)
* **Language:** **TypeScript**
* **Database:** PostgreSQL (managed via Docker)
* **ORM (Object-Relational Mapper):** **TypeORM**
* **Web Framework:** Express.js
* **Architecture:** **Layered (Controller, Service, Repository)**

## 🏗️ Implemented Architecture & Data Flow

The system features a **three-tier architecture** that ensures **clean code** and **separation of concerns**:

1.  **Controller Layer:** Handles HTTP requests and response formatting (`src/controllers/productRouter.ts`).
2.  **Service Layer:** Contains all **Business Logic** and orchestrates complex operations (`src/services/ProductService.ts`).
3.  **Repository Layer:** Manages all data access via TypeORM to PostgreSQL (`src/repositories/ProductRepository.ts`).

## 📋 Completed Endpoints (Full CRUD)

All endpoints are versioned at `/api/v1/`.

| Resource | Method | Path | Description | HTTP Status |
| :--- | :--- | :--- | :--- | :--- |
| **Products** | `GET` | `/products` | **Read:** Retrieves all available products. | `200 OK` |
| **Products** | `POST` | `/products` | **Create:** Creates a single new product. | `201 Created` |
| **Products** | `POST` | `/products/bulk` | **Create (Bulk):** Accepts a JSON array for mass data migration (used for Shopify import). | `201 Created` |
| **Products** | `PATCH` | `/products/:id` | **Update:** Partially updates product fields (e.g., price, stock). | `200 OK` |
| **Products** | `DELETE` | `/products/:id` | **Delete:** Removes a specific product from the catalog. | `204 No Content` |

## 🛠️ Getting Started

1.  **Dependencies:** `npm install`
2.  **Database:** Start the PostgreSQL container: `docker compose up -d`
3.  **Run Dev Server:** `npm run dev`

---
**Current State:** The entire product catalog has been successfully imported from the Shopify CSV using the `/api/v1/products/bulk` endpoint. The project is ready for the integration of **Cloud (AWS)** and **Asynchronous/Event-Driven** components.
