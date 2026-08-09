import ProfileCard from "./components/ProfileCard";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center min-h-screen bg-gray-100 p-4">
      <ProfileCard
        avatar="https://tse4.mm.bing.net/th/id/OIP.Io7_3wAtzLeFABG7tucj3AHaHa?r=0&pid=Api&P=0&h=180"
        name="John Doe"
        role="Software Engineer"
        isOnline={true}
      />
      <ProfileCard
        avatar="https://tse4.mm.bing.net/th/id/OIP.Io7_3wAtzLeFABG7tucj3AHaHa?r=0&pid=Api&P=0&h=180"
        name="Jane Smith"
        role="Product Manager"
        isOnline={false}
      />{" "}
    </div>
  );
};
export default App;
