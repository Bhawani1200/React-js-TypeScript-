import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import { RootState } from "../redux/rootReducer";
import Progress from "../components/Progress";

const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Hero
        title={`Welcome ${user?.name}`}
        subTitle="This is my products project on react."
      />
      <Progress />
    </>
  );
};

export default Home;
