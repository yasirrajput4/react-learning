import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/hiteshchoudhary");
        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching github user:", error);
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

  return (
    <div className="flex flex-col items-center gap-4 m-4 bg-gray-600 text-white p-6 text-3xl rounded-lg">
      <p>Github followers: {data.followers}</p>
      <img
        className="rounded-full shadow-lg"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;
