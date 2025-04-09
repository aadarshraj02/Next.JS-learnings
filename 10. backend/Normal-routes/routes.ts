import { movies } from "./db";
import { NextRequest } from "next/server"; //nextjs not installed so its giving error

export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  let movie = await req.json();

  const newMovie = { ...movie };

  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}

export async function GET(request: NextRequest) {
  //giving error as two get function cant be in same file
  const searchParams = request.nextUrl.sendParams;
  const query = searchParams.get("query");

  const filteredMovies = query
    ? movies.filter((m) => m.name.includes(query))
    : movies;
}
