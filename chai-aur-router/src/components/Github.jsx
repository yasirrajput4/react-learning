import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Github() {
  const { isPending, error, data } = useQuery({
    queryKey: ["githubUser"],
    queryFn: async () => {
      const URL = "https://api.github.com/users/hiteshchoudhary";
      const res = await axios.get(URL);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-2 m-4 bg-red-600 text-white p-6 text-xl rounded-lg text-center">
        <p>Unable to load GitHub profile right now. Please try again later.</p>
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
