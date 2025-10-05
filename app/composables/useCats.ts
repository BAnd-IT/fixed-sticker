interface Cat {
  url: string;
  id: string;
}

export const useCats = () => {
  const fetchCats = async (count: number): Promise<Cat[]> => {
    const results = await Promise.all(
      Array.from({ length: count }, () => 
        $fetch<{ url: string; id: string }>("https://cataas.com/cat?type=square&json=true")
      )
    );
    
    return results.map(({ url, id }) => ({ url, id }));
  };

  return { fetchCats };
};