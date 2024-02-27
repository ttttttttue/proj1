import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.css';
import 'app/styles/index.css';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={AppRoutes.MAIN}
          className={cls.mainLink}
        >
          {t('Главная страница')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
