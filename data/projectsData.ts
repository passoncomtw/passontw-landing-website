interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '掛單交易系統-後台',
    description: `掛單交易系統是專門為金融市場設計的系統，可以幫助交易者快速掛單，並且可以幫助交易者快速撤單。`,
    imgSrc: '/static/images/passon-wallet-logo.png',
    href: 'https://token-admin-web.passon.tw/login',
  },
  {
    title: 'Passon TW POS Service',
    description: `Passon TW POS Service 是專門為零售業者設計的POS系統，可以幫助零售業者快速結帳，並且可以幫助零售業者快速管理庫存。`,
    imgSrc: '/static/images/passon-tw-pos-service.png',
    href: 'https://pos-backend-web.passon.tw/login',
  },
]

export default projectsData
