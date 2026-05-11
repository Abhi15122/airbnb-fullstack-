export const fetchCities = async (query: string) => {
  if (!query) return [];

  try {
    const res = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "5d6cc35524msheeafe5aa7092155p15f85cjsn7a71bcc04a1d",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      },
    );

    const data = await res.json();
    console.log("api response", data);

    if (!data.data) return [];

    return data.data.map((city: { city: string; country: string }) => ({
      name: city.city,
      country: city.country,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
