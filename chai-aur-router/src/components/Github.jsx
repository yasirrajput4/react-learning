import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/hiteshchoudhary");
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching github user:", err);
        setError(
          "Unable to load GitHub profile right now. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-2 m-4 bg-red-600 text-white p-6 text-xl rounded-lg text-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 m-4 bg-gray-600 text-white p-6 text-3xl rounded-lg">
      <p>Github followers: {data.followers}</p>
      <img
        className="rounded-full shadow-lg"
        src={data.avatar_url}
        alt={`${data.login || "GitHub user"}'s avatar`}
        width={300}
      />
    </div>
  );
}

export default Github;
