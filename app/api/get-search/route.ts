import { BASE_URL, ACCESS_TOKEN } from "@/app/config";
export async function searchMoviesByQuery(query:any) {
  try {
    if (!BASE_URL) {
      throw new Error("Movie base URL not available");
    }
    if (!ACCESS_TOKEN) {
      throw new Error("Movie API token not available");
    }
    const response = await fetch(`${BASE_URL}/3/search/movie?query=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const responseJson = await response.json();
    return responseJson.results;
  } catch (error:any) {
    throw new Error(`Failed to search movies by query: ${error.message}`);
  }
}