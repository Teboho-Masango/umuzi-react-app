# Log It...My Brew App - Documentation

## Project Overview

This is a full-stack web application that allows users to log their coffee brews, view all entries, filter by brew method, and perform CRUD operations (Create, Read, Update, Delete). The backend is built with **Python using FastAPI** and manages data in an SQLite database (`coffee.db`). The front-end is developed with React.

---

## Features

- Creates new brew entries with details such as method, notes, etc.
- View a list of all brews.
- Filter brews by method.
- Edit existing brew entries.
- Delete brew entries.
- Responsive UI suitable for both mobile and desktop.
- Validation to prevent submitting empty forms.

---

## Tech Stack

- **Front-end:** React, JSX, CSS (Tailwind, Bootstrap, or custom)
- **Back-end:** Python with **FastAPI**
- **Database:** SQLite (`coffee.db`)
- **ORM/Database Management:** `database.py`, `models.py`, `schemas.py`
- **Dependencies:** listed in `requirements.txt`

---

## Setup Instructions

### Prerequisites

- [Python 3.x](https://www.python.org/downloads/)
- SQLite (included with Python's standard library)
- Node.js and npm

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/Umuzi-classroom/full-stack-developer-bootcamp-Teboho-Masango.git
```
