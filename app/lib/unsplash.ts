export const fetchImages = async (query: string) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=5`,
      {
        headers: {
          Authorization: `Client-ID 6YNUFZ95Vyd9Io0SL0PyfGI9kQYKKWRiHixXCfGONoY`,
        },
      },
    );
    const data = await res.json();
    return data.results.map((img: { urls: { regular: string } }) => img.urls.regular);
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return [];
  }
};
