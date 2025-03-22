import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()
    console.log('Create Client !')
    console.log('supa base SUPABASE_URL', process.env.SUPABASE_URL)
    console.log('supa base SUPABASE_ANON_KEY', process.env.SUPABASE_ANON_KEY)



    return createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {

            cookies: {

                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch (er) {
                        console.error(er)
                        console.error(JSON.stringify(er))
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )
}