import type { Localized } from './types'

export type Award = {
  id: string
  image: string
  title: Localized
  result: Localized
  date: string
  projectSlug?: string
}

export const awards: Award[] = [
  {
    id: 'drone-guangdong', image: 'media/portfolio-4.jpg', date: '2024.06',
    title: { zh: '第八届全国青少年无人机大赛 · 广东省赛', en: '8th National Youth Drone Competition · Guangdong' },
    result: { zh: '空地协同对抗赛高中组 · 一等奖', en: 'Air-ground collaborative competition, high school division · First prize' },
  },
  {
    id: 'drone-national', image: 'media/portfolio-5.jpg', date: '2024.08',
    title: { zh: '第八届全国青少年无人机大赛 · 全国赛', en: '8th National Youth Drone Competition · National' },
    result: { zh: '空地协同对抗赛高中组 · 二等奖', en: 'Air-ground collaborative competition, high school division · Second prize' },
  },
  {
    id: 'invention', image: 'media/portfolio-6.png', date: '2025.01', projectSlug: 'cycling-assistant',
    title: { zh: '第二十二届广东省少年儿童发明奖', en: '22nd Guangdong Youth Invention Award' },
    result: { zh: '智能骑行辅助系统 · 三等奖', en: 'Smart Cycling Assistance · Third prize' },
  },
  {
    id: 'digital-literacy', image: 'media/portfolio-7.jpg', date: '2025.06', projectSlug: 'cycling-assistant',
    title: { zh: '广州市学生数字素养提升实践大赛', en: 'Guangzhou Student Digital Literacy Competition' },
    result: { zh: '智能骑行辅助系统 · 三等奖', en: 'Smart Cycling Assistance · Third prize' },
  },
]
