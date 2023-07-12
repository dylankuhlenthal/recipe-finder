export default defineEventHandler(async (event) => {
  const { ingredients, pantry } = getQuery(event);
  const config = useRuntimeConfig();

  return $fetch(config.apiBase + "/findByIngredients", {
    method: "get",
    headers: {
      "x-api-key": config.apiKey,
    },
    query: {
      number: 3,
      ingredients,
      ignorePantry: pantry,
    },
  }).then((data) => {
    return data;
  });
});
