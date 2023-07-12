export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBase}/${id}/information`, {
    method: "get",
    headers: {
      "x-api-key": config.apiKey,
    },
    query: {
      includeNutrition: false,
    },
  }).then((data) => {
    return data;
  });
});
