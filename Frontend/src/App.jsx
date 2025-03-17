import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>
        <SignedOut>
          <SignInButton /> <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
          <h1>Welcome, you are signed in!</h1>
          <ProtectedComponent /> {/* ✅ Moved API call inside a child component */}
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}

// ✅ Moved `useAuth()` inside a child component that is inside `<SignedIn>`
function ProtectedComponent() {
  const { getToken } = useAuth(); // Now it's inside ClerkProvider

  const fetchData = async () => {
    try {
      const token = await getToken(); // ✅ Fetch the token inside this component
      console.log("Token:", token);

      const response = await fetch(
        "http://localhost:4000/api/v1/users/get-user-profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",// ✅ Attach token to request
          },
          credentials: "include", // ✅ Ensure cookies are sent
        }
      );
      // const response = await fetch(
      //   "http://localhost:4000/protected",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${token}`, 
      //       "Content-Type": "application/json",// ✅ Attach token to request
      //     },
      //     credentials: "include", // ✅ Ensure cookies are sent
      //   }
      // );

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
