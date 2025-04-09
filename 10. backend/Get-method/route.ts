import { movies } from "./db";

//Get all movies routes

export async function GET() {
  return Response.json(movies);
}

export async function POST(request: Request) {
  let movie = await request.json();
  console.log("Movies", movie);

  const newMovie = { ...movie };
  movies.push(newMovie);
  return Response.json(movies);
}
