// app/layout.tsx
import { ReactNode } from 'react';
import { fonts } from './fonts';
import { Providers } from './providers';
import Nav from '@/components/Navbar';
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
} from '@workos-inc/authkit-nextjs';

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();


  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Nav user={user} signInUrl={signInUrl} signUpUrl={signUpUrl} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
