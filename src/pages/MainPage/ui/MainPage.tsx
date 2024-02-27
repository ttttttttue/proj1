import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {/* <BugButton /> */}
      <h1>{t('Главная страница')}</h1>
    </div>
  );
};
export default MainPage;
