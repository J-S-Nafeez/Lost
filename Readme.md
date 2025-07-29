# 🔍 Lost & Found Portal

A comprehensive web application designed for educational institutions to help students report and find lost items efficiently. Built with modern web technologies and deployed with containerization support.

# Live Demo 🌐🔗  
👉 [https://lost-khaki.vercel.app/](https://lost-khaki.vercel.app/)

## 🌟 Features

### Core Functionality
- **User Authentication**: Secure registration and login system
- **Item Management**: Post lost and found items with detailed descriptions
- **Search & Filter**: Advanced filtering options to find items quickly
- **Contact System**: Integrated feedback and messaging system
- **Responsive Design**: Mobile-first approach for all devices

### User Capabilities
- ✅ Register and authenticate securely
- ✅ Post lost items with descriptions and images
- ✅ Browse found items gallery
- ✅ Contact administrators for support
- ✅ Real-time item status updates

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library
- **Vite** - Fast build tool and development server
- **CSS** - CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing

### DevOps & Deployment
- **Docker** - Containerization support
- **Render** - Cloud deployment platform

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)
- Docker (optional, for containerized deployment)

### Environment Setup

Create `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

Create `.env` file in the client directory:
```env
VITE_API_BASE_URL=YOUR_URL
```

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/J-S-Nafeez/Lost.git
cd Lost
```

2. **Install dependencies**
```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

3. **Start development servers**
```bash
# Backend (Port 5000)
cd server
nodemon server.js

# Frontend (Port 3000)
cd ../client
npm run dev
```

### Docker Deployment (Optional)

For containerized deployment:
```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

## 📁 Project Structure

```
Lost/
├── client/                   # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── server/                  # Node.js backend API
│   ├── routes/             # API route handlers
│   │   ├── authRoutes.js   # Authentication endpoints
│   │   ├── itemRoutes.js   # Item CRUD operations
│   │   └── contactRoutes.js # Contact form handling
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database schemas
│   ├── controllers/       # Business logic
│   └── package.json
├── docker-compose.yml      # Container orchestration (optional)
└── README.md              # Project documentation
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User authentication

### Item Management (`/api/items`)
- `GET /` - Retrieve all items
- `POST /` - Create new item (Protected)

### Contact System (`/api/contactus`)
- `POST /` - Submit contact form

### Health Check
- `GET /` - Backend status verification

## 🐳 Docker Configuration

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  frontend:
    build: ./client
    ports:
      - "3000:80"
    depends_on:
      - backend
  
  backend:
    build: ./server
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
    depends_on:
      - mongodb
  
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

## 🚀 Deployment

### Live Application
- **Frontend**:🌐✨https://lost-khaki.vercel.app
- **Backend API**: https://YOUR_URL
- **Database**: MongoDB Atlas

### Deployment Commands
```bash
# Build for production
npm run build

# View application logs
npm run logs
```


## 📊 Performance Features

- ⚡ Optimized bundle size with Vite
- 🔄 Lazy loading for better performance
- 📱 Progressive Web App capabilities
- 🗄️ Efficient database queries
- 🔐 Secure JWT authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Jammalamadugu Shaik Nafeez**
- GitHub: [@J-S-Nafeez](https://github.com/J-S-Nafeez)
- LinkedIn: [Jammalamadugu Shaik Nafeez](https://www.linkedin.com/in/jammalamadugu-shaik-nafeez)
- Email: ahamednafeez70@gmail.com

## 🙏 Acknowledgments

- Thanks to the open-source community
- Educational institution support
- Beta testers and feedback providers

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ for the student community*