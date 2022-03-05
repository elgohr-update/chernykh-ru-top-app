import cn from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className='footer-item'>OwlTop &#169; 2020 &#8211; {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
