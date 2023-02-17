import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="main-heading">
        { t('gameTitle')}
      </h1>
      <span>
        { t('homePageText') }
      </span>
    </div>
  )
};

export default HomePage;
