import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FooterLinks from '@theme-original/Footer/Links';
import type FooterLinksType from '@theme/Footer/Links';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterLinksType>;

type App = {
  name: string;
  icon: string;
  href: string;
};

const apps: App[] = [
  {
    name: 'Cluero',
    icon: 'cluero.png',
    href: 'https://apps.apple.com/cn/app/cluero/id6755574982',
  },
  {
    name: 'Neural Flow 3D',
    icon: 'neural-flow-3d.png',
    href: 'https://apps.apple.com/cn/app/neural-flow-3d-%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/id6746190220',
  },
  {
    name: '叠叠江南',
    icon: 'die-die-jiang-nan.png',
    href: 'https://apps.apple.com/cn/app/%E5%8F%A0%E5%8F%A0%E6%B1%9F%E5%8D%97/id6818072341',
  },
  {
    name: '六爻起卦',
    icon: 'liu-yao-qi-gua.png',
    href: 'https://apps.apple.com/cn/app/%E5%85%AD%E7%88%BB%E8%B5%B7%E5%8D%A6/id6742344212',
  },
  {
    name: '晴书相机',
    icon: 'qing-shu-camera.png',
    href: 'https://apps.apple.com/cn/app/%E6%99%B4%E4%B9%A6%E7%9B%B8%E6%9C%BA/id1543087372',
  },
  {
    name: '分花',
    icon: 'fen-hua.png',
    href: 'https://apps.apple.com/cn/app/%E5%88%86%E8%8A%B1/id6450975779',
  },
];

function AppLink({app}: {app: App}): JSX.Element {
  const iconUrl = useBaseUrl(`/img/apps/${app.icon}`);

  return (
    <Link
      className={styles.appLink}
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${app.name}（在新窗口打开 App Store）`}>
      <img
        className={styles.icon}
        src={iconUrl}
        alt=""
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
      />
      <span className={styles.appName}>{app.name}</span>
    </Link>
  );
}

export default function FooterLinksWrapper(props: Props): JSX.Element {
  return (
    <>
      <FooterLinks {...props} />
      <nav className={styles.apps} aria-label="我的 App">
        <h2 className={styles.title}>我的 App</h2>
        <ul className={styles.appList}>
          {apps.map((app) => (
            <li key={app.href}>
              <AppLink app={app} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
