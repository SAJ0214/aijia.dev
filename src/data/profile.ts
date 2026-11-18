import type { Localized } from './types'

export const profile = {
  name: { zh: '宋爱家', en: 'Aijia Song' } as Localized,
  role: { zh: '机器人 × 计算机视觉 × 嵌入式开发', en: 'Robotics × Computer Vision × Embedded Systems' } as Localized,
  statement: { zh: '让想法接入真实设备，成为能运行的系统。', en: 'Turning ideas into systems that run on real devices.' } as Localized,
  intro: { zh: '广东工业大学计算机科学与技术专业在读。关注机器人、计算机视觉与软硬件协作，喜欢从问题分析走到原型、联调与验证。', en: 'Computer Science student at Guangdong University of Technology, exploring robotics, computer vision, and the connection between software and physical systems.' } as Localized,
  university: { zh: '广东工业大学', en: 'Guangdong University of Technology' } as Localized,
  major: { zh: '计算机科学与技术 · 本科在读', en: 'Computer Science and Technology · Undergraduate' } as Localized,
  location: { zh: '中国 · 广州', en: 'Guangzhou, China' } as Localized,
  email: '2292213976@qq.com',
  github: 'https://github.com/SAJ0214',
  wechat: 'msha2j',
  resume: 'resume/song-aijia-resume.pdf',
}

export const skills = [
  { group: { zh: '编程与环境', en: 'Programming' }, items: ['C', 'C++', 'Python', 'Linux'] },
  { group: { zh: '视觉与 AI', en: 'Vision & AI' }, items: ['YOLO', '目标检测 / Detection', '模型训练 / Training', '边缘部署 / Edge Deployment'] },
  { group: { zh: '机器人与硬件', en: 'Robotics & Hardware' }, items: ['ROS 2', 'Raspberry Pi', 'Arduino', 'NFC', '传感器 / Sensors'] },
] as const

export const milestones = [
  { date: '2024', title: { zh: 'RoboMaster 高中组竞赛', en: 'RoboMaster High School Competition' }, detail: { zh: '参加第八届全国青少年无人机大赛空地协同对抗赛高中组，获广东省赛一等奖、全国赛二等奖。', en: 'Competed in the high school air-ground collaborative event at the 8th National Youth Drone Competition, earning first prize in Guangdong and second prize nationally.' } },
  { date: '2025', title: { zh: '智能骑行辅助系统', en: 'Smart Cycling Assistance' }, detail: { zh: '作品获得广东省少年儿童发明奖三等奖、广州市学生数字素养提升实践大赛三等奖。', en: 'Third prizes in the Guangdong youth invention award and Guangzhou student digital literacy competition.' } },
  { date: '2026', title: { zh: '计算机科学与技术', en: 'Computer Science and Technology' }, detail: { zh: '广东工业大学本科在读；持续探索视觉部署、嵌入式开发与机器人系统。', en: 'Undergraduate at Guangdong University of Technology; continuing work in vision deployment, embedded systems, and robotics.' } },
] as const
