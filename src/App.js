import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/LoginPage.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Admin from "./Components/Admin.jsx";
import { ToastContainer, toast } from "react-toastify";
// import HomeLoadingScreen from "./components/HomeLoadingScreen.tsx";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
  useQuery,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import "react-toastify/dist/ReactToastify.css";
// import { onError } from "@apollo/client/link/error";
import { GET_USER } from "./Qurries";
import Bookings from "./Components/Bookings.jsx";
import Invoices from "./Components/Invoices.jsx";
import Ownerdb from "./Components/Ownerdb.jsx";
import Roomservice from "./Components/Roomservice.jsx";
import AvailRooms from "./Components/AvailRooms.jsx";
import Addroom from "./Components/Addroom.jsx";
import Checkin from "./Components/Checkin.jsx";
import CheckedInGuest from "./Components/CheckedInGuest.jsx";

function App() {
  const [user, set_user] = useState(null);
  // const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const { data, loading } = useQuery(GET_USER, {
    errorPolicy: "ignore",
  });
  useEffect(() => {
    if (token) {
      if (data) {
        set_user(data);
      }
    }
  }, [token, data]);

  // if (loading) return <HomeLoadingScreen />;
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage user={user} set_user={set_user} />}
        />
         <Route path="/admin" element={<Admin user={user} set_user={set_user}  />} />
         <Route path="/add-room" element={<Addroom user={user} set_user={set_user}  />} />
         <Route path="/avail-rooms" element={<AvailRooms user={user} set_user={set_user}  />} />
         <Route path="/bookings" element={<Bookings user={user} set_user={set_user}  />} />
         <Route path="/guest-bookings" element={<CheckedInGuest user={user} set_user={set_user}  />} />
         <Route path="/invoices" element={<Invoices user={user} set_user={set_user}  />} />
         <Route path="/dahsboard" element={<Ownerdb user={user} set_user={set_user}  />} />
         <Route path="/room-service" element={<Roomservice user={user} set_user={set_user}  />} />
         <Route path="/check-in/:roomid" element={<Checkin user={user} set_user={set_user}  />} />
        <Route
          path="*"
          element={<Dashboard user={user} set_user={set_user} />}
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
