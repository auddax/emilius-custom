import { 
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  LayoutOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-planner',
      path: `${APP_PREFIX_PATH}/planner`,
      title: 'sidenav.planner',
      icon: LayoutOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'sidenav.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'catalog-productList',
          path: `${APP_PREFIX_PATH}/catalog/product-list`,
          title: 'sidenav.catalog.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-productCategories',
          path: `${APP_PREFIX_PATH}/catalog/product-сategories`,
          title: 'sidenav.catalog.productCategories',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-productCollections',
          path: `${APP_PREFIX_PATH}/catalog/product-сollections`,
          title: 'sidenav.catalog.productCollections',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-productCombos',
          path: `${APP_PREFIX_PATH}/catalog/product-сombos`,
          title: 'sidenav.catalog.productCombos',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'sidenav.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'sidenav.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'clients-userList',
          path: `${APP_PREFIX_PATH}/clients/user-list`,
          title: 'sidenav.clients.userlist',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'clients-groups',
          path: `${APP_PREFIX_PATH}/clients/groups`,
          title: 'sidenav.clients.userGroups',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'sidenav.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promo',
      path: `${APP_PREFIX_PATH}/promo`,
      title: 'sidenav.promo',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline',
      path: `${APP_PREFIX_PATH}/offline`,
      title: 'sidenav.offline',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'offline-addresses',
          path: `${APP_PREFIX_PATH}/offline/addresses`,
          title: 'sidenav.offline.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'offline-zones',
          path: `${APP_PREFIX_PATH}/offline/zones`,
          title: 'sidenav.offline.zones',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/employees`,
      title: 'sidenav.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mailLists',
      path: `${APP_PREFIX_PATH}/mail-lists`,
      title: 'sidenav.mailLists',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'system-mobile',
        path: `${APP_PREFIX_PATH}/system/mobile`,
        title: 'sidenav.system.mobile',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: []
      },
    ]
  }
]



const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree,
]

export default navigationConfig;
