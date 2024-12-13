# BOOK_RIDE

This project is a feature-rich Uber web application designed to connect **users** and **captains (drivers)** seamlessly. It offers ride booking, live notifications, and distance calculation, with a robust backened and a dynamic frontend.

---

## Features

### **1. User Authentication**

- **Sign-Up and Login**: Users and captains authenticate via email.
- **Role-Based Access**: Users and captains have separate flows after login.

### **2. Map Integration**

- **Dynamic Map Display**: Utilizes OpenLayers (OL) for displaying the map.
- **Address Suggestions**: Provides address suggestions while typing using the GraphHopper API.

### **3. Ride Creation and Management**

- **Distance Calculation**: Calculates distance between two addresses and retrieves latitude and longitude from address strings using GraphHopper.
- **Real-Time Notifications**: When a user creates a ride, captains logged in receive instant notifications via WebSockets.

### **4. OTP-Based Ride Confirmation**

- **Secure Confirmation**: An OTP is generated using the Crypt library and appended to the ride model.
- **Ride Completion**: Captains can confirm rides with the OTP shared by users and confirm to start the ride and click on finish ride when completed.

### **5. Backened Functionality**

- **Models**:
  - **User Model**: Stores user details (e.g., name, email, and password as hash value).
  - **Captain Model**: Stores captain details (e.g., name, email, and availability,vehicle details).
  - **Ride Model**: Stores ride details (e.g., pickup, destination, price, and OTP).
- **APIs**:
  - Retrieve location suggestions.
  - Fetch ride, user, and captain data.

### **6. Frontend Components**

- **Ride Creation Interface**: Allows users to select pickup and destination addresses on a map.
- **Captain Notification UI**: Displays ride details, including price and vehicle type, in real-time.
- **Dynamic Updates**: Updates ride status and user/captain dashboards with live data .

---

## Workflow

1. **User Flow:**

   - User signs up or logs in.
   - Enters pickup and destination addresses.
   - Gets address suggestions and confirms the ride.
   - Receives OTP from the captain to confirm the ride.
   - Marks ride as completed after the journey.

2. **Captain Flow:**
   - Captain logs in and waits for ride notifications.
   - Receives real-time ride requests via WebSocket.
   - Views ride details, including user information, price, and vehicle type.
   - Confirms ride and receives OTP to validate it.
   - Marks the ride as finished and becomes available for new rides.

---

## Technologies Used

### **Frontend**

- **OpenLayers (OL)**: For map display and address interaction.
- **HTML, CSS, JavaScript**: Core technologies for the user interface.

### **Backend**

- **Node.js with Express**: Handles server-side logic.
- **GraphHopper API**: For geocoding, address suggestions, and distance calculations.
- **WebSocket**: For real-time notifications between users and captains.

### **Database**

- **MongoDB**: Stores user, captain, and ride models efficiently.

### **Libraries and APIs**

- **Crypt**: Generates secure OTPs.
- **GraphHopper**: Powers geolocation-based features.

---

## Setup and Installation

### **Prerequisites**

- Node.js
- MongoDB
- A GraphHopper API key

### **Environment Variables**

#### **Frontend (.env)**

Create a `.env` file in the `frontend` directory with the following keys:

```env
REACT_APP_BACKEND_URL=your_backend_url
REACT_APP_MAPS_API=your_graphhopper_maps_api_key
```

#### **Backened (.env)**

Create a `.env` file in the `backend` directory with the following keys:

```env
PORT=your_port_number
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GRAPHHOPPER_API_KEY=your_graphhopper_api_key
```

### **Installation Steps**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BOOK_RIDE.git
   cd BOOK_RIDE
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Start the application:

   - **Frontend**:
     ```bash
     cd frontend
     npm start
     ```
   - **Backened**:
     ```bash
     cd backened
     nodemon server.js
     ```

4. Access the app at:
   - `http://localhost:your_frontend_port`

---

## Key Highlights

- **Seamless User Experience**: Combines interactive maps and real-time notifications.
- **Robust Backend**: Handles complex operations like geocoding and OTP generation securely.
- **Scalable Design**: Modular code structure makes it easy to extend and maintain.

---

## Future Enhancements

- Add payment gateway integration.
- Introduce ride rating and feedback system.
- Implement advanced route optimization for captains.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.




