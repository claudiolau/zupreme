export const getFromItem = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_URL ?? "");
  const responseJson = await response.json();
  return responseJson.products;
};
