import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./utils/route";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import AuthProvider from "./context/authContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./Tenant/Dashboard/Dashboard";
import Wallet from "./Tenant/Dashboard/Wallet/Wallet";
import Property from "./Tenant/Dashboard/Property/Property";
import MyDashboard from "./Tenant/Dashboard/myDashboard";
import Bookings from "./Tenant/Dashboard/Bookings/Bookings";
import Chat from "./Tenant/Dashboard/Chats/Chat";
import ViewBookings from "./Tenant/Dashboard/Bookings/component/ViewBookings";
import PropertyListingDetails from "./Tenant/Dashboard/Property/PropertyListingDetails/PropertyListingDetails";
// importing landlords pages
import LandlordSavings from "./Landlord/Dashboard/Savings/Savings";
import LandlordDashboard from "./Landlord/Dashboard/Dashboard";
import LandlordMyDashboard from "./Landlord/Dashboard/myDashboard";
import LandlordProperty from "./Landlord/Dashboard/Property/Property";
import LandlordBookings from "./Landlord/Dashboard/Bookings/Bookings";
import LandlordChat from "./Landlord/Dashboard/Chats/Chat";
import LandlordWallet from "./Landlord/Dashboard/Wallet/Wallet";
import LandlordListingDetails from "./landlord/Dashboard/Property/PropertyListingDetails/PropertyListingDetails";
import LandlordProfile from "./Landlord/Dashboard/Profile/Profile";
import AddProperty from "./Landlord/Dashboard/Property/component/addProperty";
import CreateAgreement from "./Landlord/Dashboard/Bookings/component/CreateAgreement";
import LandlordViewBookings from "./Landlord/Dashboard/Bookings/component/ViewBookings";
import Profile from "./Tenant/Dashboard/Profile/Profile";
// import SavingsPlan from "./Tenant/Dashboard/Wallet/component/savingsPlan";
import Forgot from "./Forgot/forgot";
import LandlordSavingsPlan from "./Landlord/Dashboard/Savings/component/SavingsPlan";
import Savings from "./Tenant/Dashboard/Savings/Savings";
import SavingsPlan from "./Tenant/Dashboard/Savings/component/SavingsPlan";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Layout() {
  return (
    <section className="">
      <Routes>
        <Route path={AppRoutes.home} element={<Home />} />

        <Route path={AppRoutes.signup} element={<Signup />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.forgot} element={<Forgot />} />
        {/* Protected routes */}

        {/* Tenant Route */}
        <Route element={<ProtectedRoute requiredRole="tenant" />}>
          <Route path={AppRoutes.dashboard} element={<Dashboard />}>
            <Route path="" element={<MyDashboard />} />
            <Route path={AppRoutes.wallet} element={<Wallet />} />
            <Route path={AppRoutes.Savings} element={<Savings />} />

            <Route path={AppRoutes.savingsplan} element={<SavingsPlan />} />
            <Route path={AppRoutes.viewBookings} element={<ViewBookings />} />
            <Route path={AppRoutes.property} element={<Property />} />
            <Route path={AppRoutes.bookings} element={<Bookings />} />
            <Route path={AppRoutes.profile} element={<Profile />} />
            <Route path={AppRoutes.chats} element={<Chat />} />
            <Route
              path={AppRoutes.PropertyListingDetails}
              element={<PropertyListingDetails />}
            />
          </Route>
        </Route>
        {/* Landlord Route */}
        <Route element={<ProtectedRoute requiredRole="landlord" />}>
          <Route
            path={AppRoutes.landlordDashboard}
            element={<LandlordDashboard />}
          >
            <Route path="" element={<LandlordMyDashboard />} />
            <Route
              path={AppRoutes.landlordWallet}
              element={<LandlordWallet />}
            />
            <Route
              path={AppRoutes.landlordSavings}
              element={<LandlordSavings />}
            />
            <Route 
            path={AppRoutes.landlordSavingsPlan} element={<LandlordSavingsPlan />} />
            <Route
              path={AppRoutes.landlordBookings}
              element={<LandlordBookings />}
            />
            <Route
              path={AppRoutes.landlordProperty}
              element={<LandlordProperty />}
            />

            <Route
              path={AppRoutes.landlordAddProperty}
              element={<AddProperty />}
            />
            <Route
              path={AppRoutes.landlordCreateBookings}
              element={<CreateAgreement />}
            />
            <Route path={AppRoutes.landlordChats} element={<LandlordChat />} />
            <Route
              path={AppRoutes.landlordProfile}
              element={<LandlordProfile />}
            />
            <Route
              path={AppRoutes.landlordlistingDetails}
              element={<LandlordListingDetails />}
            />
            <Route
              path={AppRoutes.landlordViewBookings}
              element={<LandlordViewBookings />}
            />
          </Route>
        </Route>
      </Routes>
    </section>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
