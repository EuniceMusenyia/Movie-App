export async function getSearch(query) {
    const url = `/api/get-search?query=${encodeURIComponent(query)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Search for '${query}' returned no results.`);
      }
      const result = await response.json();
      return result;
    } catch (error:any) {
      throw new Error(`Failed to search movies by query: ${error.message}`);
    }
  }