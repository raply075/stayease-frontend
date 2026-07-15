<div align="center">

# 🏨 StayEase API

### RESTful Backend API for StayEase Hotel Booking Platform

<p align="center">
A modern REST API built with Laravel 12 to power the StayEase Hotel Booking application.
</p>

<p align="center">

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=for-the-badge&logo=php&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Sanctum](https://img.shields.io/badge/Auth-Laravel%20Sanctum-blue?style=for-the-badge)
![REST API](https://img.shields.io/badge/API-REST-success?style=for-the-badge)

</p>

</div>

---

# 📖 About

StayEase API is the backend service of the StayEase Hotel Booking application.

It provides secure RESTful APIs for authentication, hotel management, bookings, favorites, reviews, user profiles, and administrator features.

This project was developed using Laravel 12 following REST API principles.

---

# ✨ Features

- 🔐 Authentication (Laravel Sanctum)
- 👤 User Registration & Login
- 🏨 Hotel Management
- 📅 Hotel Booking
- ❤️ Favorite Hotels
- ⭐ Hotel Reviews
- 👤 User Profile Management
- 🔑 Change Password
- 🚪 Logout All Devices
- 🗑 Delete Account
- 🛡 Admin Dashboard API
- 📡 RESTful JSON Response

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | Laravel 12 |
| Language | PHP 8.2 |
| Database | SQLite |
| Authentication | Laravel Sanctum |
| ORM | Eloquent ORM |
| API | REST API |
| Testing | Postman |

---

# 📁 Project Structure

```
app/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   └── Requests/
│
├── Models/
│
database/
├── migrations/
├── seeders/
└── database.sqlite

routes/
└── api.php

storage/

public/
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/raply075/stayease-api.git
```

```
cd stayease-api
```

---

## Install Dependencies

```bash
composer install
```

---

## Copy Environment

```bash
cp .env.example .env
```

Windows

```bash
copy .env.example .env
```

---

## Generate Application Key

```bash
php artisan key:generate
```

---

## Create SQLite Database

Create an empty file:

```
database/database.sqlite
```

or

```bash
type nul > database/database.sqlite
```

---

## Configure Environment

Make sure your **.env** contains:

```env
DB_CONNECTION=sqlite
```

---

## Run Migration

```bash
php artisan migrate
```

---

## Start Development Server

```bash
php artisan serve
```

Server will run at

```
http://127.0.0.1:8000
```

---

# 🔐 Authentication

The API uses **Laravel Sanctum** for authentication.

After login, every protected endpoint requires:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# 📌 Main Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/register |
| POST | /api/login |
| POST | /api/logout |

---

## Hotels

| Method | Endpoint |
|---------|----------|
| GET | /api/hotels |
| GET | /api/hotels/{id} |
| POST | /api/hotels |
| PUT | /api/hotels/{id} |
| DELETE | /api/hotels/{id} |

---

## Booking

| Method | Endpoint |
|---------|----------|
| GET | /api/bookings |
| POST | /api/bookings |
| DELETE | /api/bookings/{id} |

---

## Favorites

| Method | Endpoint |
|---------|----------|
| GET | /api/favorites |
| POST | /api/favorites |
| DELETE | /api/favorites/{id} |

---

## Reviews

| Method | Endpoint |
|---------|----------|
| GET | /api/reviews |
| POST | /api/reviews |

---

## Profile

| Method | Endpoint |
|---------|----------|
| GET | /api/profile |
| PUT | /api/profile |
| PUT | /api/change-password |
| DELETE | /api/delete-account |

---

# 🗄 Database

The project uses **SQLite** during development.

Database migrations are fully managed by Laravel.

```
database/
│
├── migrations/
├── factories/
├── seeders/
└── database.sqlite
```

---

# 📡 API Response Example

Success Response

```json
{
    "success": true,
    "message": "Login Successful",
    "token": "1|xxxxxxxxxxxxxxxxxx",
    "user": {
        "id":1,
        "name":"Admin",
        "email":"admin@example.com"
    }
}
```

---

# 🔒 Security

- Laravel Sanctum Authentication
- Request Validation
- Password Hashing
- Protected Routes
- Middleware Authentication
- CSRF Protection
- Mass Assignment Protection

---

# 🔮 Future Improvements

- PostgreSQL Support
- MySQL Support
- Docker Deployment
- CI/CD Pipeline
- Swagger API Documentation
- Email Verification
- Payment Gateway Integration
- Unit Testing

---

# 🌐 Frontend Repository

Frontend Project

👉 https://github.com/raply075/stayease-frontend

---

# 👨‍💻 Developer

**Raply Fediansyah**

GitHub

https://github.com/raply075

---

# 📄 License

This project is developed for educational purposes and portfolio.

---

<div align="center">

### ⭐ If you like this project, don't forget to give it a Star ⭐

Made with ❤️ using Laravel 12

</div>
