# Tatawo3 front-end

<div style="text-align: center;">
  <img src="public/Logo.svg" alt="Tatawo3 Logo" width="200">
</div>

> Connecting volunteers, organizations, and the community for meaningful Iftar experiences.

## ℹ️ Overview

Tatawo3 is a platform that bridges the gap between organizations hosting Iftar events, volunteers looking to contribute, and community members seeking places to enjoy Iftar. Our intuitive interface provides tailored experiences for each user type while making Iftar location discovery accessible to everyone.

## ★ Core Concept

Tatawo3 creates a comprehensive ecosystem for Iftar experiences:

- **Open Iftar Discovery**: Anyone can find and access information about nearby Iftar events, no account required
- **Dedicated Role-Based Dashboards**: Authenticated users access specialized interfaces based on their role (Volunteer or Organization)
- **Community-Driven Engagement**: Fostering connections between organizations providing Iftar, volunteers contributing their time, and community members

## ⚡ Key Features

### 🔎 Iftar Discovery (For Everyone)

- **Location-Based Search**: Find nearby Iftar events with an intuitive map interface
- **Detailed Event Information**: Access menus, serving times, seating availability, and special accommodations
- **Real-Time Updates**: Get current information about food service status and capacity
- **Custom Filters**: Search for events based on dietary preferences and accessibility needs

### 👤 Volunteer Experience

Volunteers access a personalized dashboard with these dedicated tabs:

- **Overview**: At-a-glance summary of upcoming tasks, impact metrics, and notifications
- **Tasks**: Manage current and upcoming volunteer commitments
- **Opportunities**: Discover new volunteer positions at Iftar events near you
- **Rewards**: Track your earned reputation points, badges, and recognition for your service

### 📊 Organization Portal

Organizations benefit from powerful management tools through these specialized tabs:

- **Overview**: Dashboard showing key metrics about events, volunteer participation, and guest attendance
- **Events**: Create, edit and manage Iftar events with detailed scheduling and requirements
- **Volunteers Management**: Coordinate volunteer assignments, track participation, and manage communication
- **Analytics (AI-Powered)**: Gain insights into attendance patterns, resource utilization, and optimization suggestions

---

## 📁 **Folder Structure Overview**

```
.
├── cypress/          # End-to-end tests
├── docker-compose.yml
├── Dockerfile
├── public/           # Static assets
├── src/              # Main source code
│   ├── app/          # Pages, routes, layouts
│   ├── components/   # UI components
│   ├── features/     # Feature-specific logic
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities and helpers
│   ├── providers/    # Context and providers
│   ├── stores/       # State management
│   └── types/        # TypeScript types
└── tailwind.config.ts
```

This structure is designed for flexibility and clarity. Add pages under `app/`, place reusable components in `components/`, implement business logic in `features/`, and manage state in `stores/`.

---

## 💡 Platform Benefits

- **Enhanced Community Connection**: Bringing together those who serve and those who gather
- **Efficient Resource Management**: Helping organizations optimize volunteer deployment
- **Recognition System**: Acknowledging and rewarding volunteer contributions
- **Data-Driven Decisions**: Using AI insights to improve Iftar experiences

## ⚙️ Technical Implementation

- Responsive design for all devices with lightning-fast performance
- Real-time notifications and updates
- Geolocation services for proximity-based features
- Intuitive, accessible interface requiring minimal user inputs

---

## 🌐 Live Demo

Experience Tatawo3 without installing anything:

- **Live Site**: [https://tatawo3-frontend.vercel.app/home](https://tatawo3-frontend.vercel.app/home)
- **Test Account**: `test@gmail.com` / password: `Test1234`

After signing in with the provided credentials:

- For volunteer features: Navigate to `/volunteer/overview`
- For organization features: Navigate to `/organization/overview`

---

## ▶️ Running the Project Locally

### Run the development server:

```bash
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🐳 **Docker Usage**

### Build and Start:

```bash
docker-compose up --build
```

### Stop:

```bash
docker-compose down
```

---

## 🧪 **Testing with Cypress**

### Run Tests :

```bash
npm run cypress:open
```

---

## 📞 **Contact**

- **GitHub**: [Adel2411](https://github.com/Adel2411)
- **Email**: [hadjarabadel.2411@gmail.com](mailto:hadjarabadel.2411@gmail.com)
