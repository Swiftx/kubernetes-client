import classnames from 'classnames';
import { Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styles from './style.module.less';
import { ReactNode } from 'react';
import { routes } from '@renderer/route';

interface MenuItemProps {
  icon: ReactNode;
  title?: string;
  active?: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  const type = props.active ? 'primary' : 'text';
  const style = props.active ? classnames(styles.item, styles.active) : styles.item;
  return (
    <Tooltip placement="right" title={props.title}>
      <Button className={style} icon={props.icon} type={type} />
    </Tooltip>
  );
};

export default () => {
  const { pathname } = useLocation();
  return (
    <div>
      {routes.map(({ title, key, icon }) => {
        const target = '/' + key;
        const prefix = target + '/';
        const active = target == pathname || pathname.startsWith(prefix);
        return (
          <Link to={target}>
            <MenuItem title={title} icon={icon} active={active} />
          </Link>
        );
      })}
    </div>
  );
};
