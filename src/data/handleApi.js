export async function handleApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
export default async function handleSubmit(
  searchIn,
  setSearchIn,
  setCoffeData,
  setnotFound
) {
  if (!searchIn) return;
  setCoffeData([]);
  const data = await renderData(
    "https://coffee-backend-phi.vercel.app/cafes",
    searchIn,
    setCoffeData,
    setnotFound
  );
  setSearchIn("");
  return data;
}
async function renderData(url, searchIn, setCoffeData, setnotFound) {
  const ApiData = await handleApi(url);
  const ApiDataTargeted =
    searchIn.toLowerCase() === "cafe"
      ? ApiData
      : [...ApiData].filter((data) =>
          data.search.toLowerCase().includes(searchIn)
        );
  if (ApiDataTargeted.length === 0) {
    setnotFound("Not Found");
    return;
  }
  setCoffeData(() =>
    ApiDataTargeted.constructor.name === "Array"
      ? ApiDataTargeted
      : [ApiDataTargeted]
  );
  return ApiData;
}
