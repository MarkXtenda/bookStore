import { json } from "@sveltejs/kit";

// infer types for cookies
/** @type {import('./$types').RequestHandler } */
export async function GET({cookies}) {
    cookies.delete('jwt');
    return json({message: "Success!"}, {status: 200});
}