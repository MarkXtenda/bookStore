import { goto } from "$app/navigation"
import { setUser } from '$lib/firebase/database.client'

export async function afterLogin(url: any, userId: string) {
    const route = url.searchParams.get('redirect') || '/'
    await setUser(userId);
    await goto(route);
    
}