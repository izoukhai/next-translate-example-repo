import useTranslation from "next-translate/useTranslation";
import { ServerComponent } from "../../components/ServerComponent";
import { ClientComponent } from "../../components/ClientComponent";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
};

export default Home;
