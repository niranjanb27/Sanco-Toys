import { useState } from 'react'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
function App() {
  const [count, setCount] = useState(0)

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>
        <SignedOut>
          <SignInButton /> <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <h1>Welcome, you are signed in!</h1>
        </SignedIn>
      </div>
    </ClerkProvider>
  )
}

export default App
