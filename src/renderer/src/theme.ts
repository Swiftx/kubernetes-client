import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  components: {
    Layout: {
      bodyBg: '#1c1c1c',
      headerBg: '#1c1c1c',
      headerColor: '#fff',
      headerHeight: 35,
      headerPadding: '0 16',
      siderBg: '#1c1c1c',
      colorText: '#fff'
    },
    Button: {
      defaultBg: '#131313',
      defaultColor: '#ccc',
      defaultBorderColor: '#131313',
      defaultHoverBg: '#131313',
      defaultHoverColor: '#fff',
      defaultHoverBorderColor: '#131313'
    },
    Dropdown: {
      colorBgElevated: '#333333',
      colorText: '#ccc',
      colorSplit: '#666666'
    }
  }
};
