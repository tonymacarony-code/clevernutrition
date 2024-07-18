// app/actions/signOutAction.js

'use server';

import { signOut } from '@workos-inc/authkit-nextjs';

export async function handleSignOut() {
    await signOut();
}
