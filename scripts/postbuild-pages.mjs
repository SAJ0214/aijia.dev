import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const routes = ['about', 'skills', 'projects', 'experience', 'research', 'gallery', 'blog', 'contact', 'resume',
  ...['robomaster','cycling-assistant','yolo-sports','ros2-library','english-platform','drone-vision'].map(slug => `projects/${slug}`),
  'blog/from-model-to-device']
for (const route of routes) {
  mkdirSync(join('dist', route), { recursive: true })
  copyFileSync(join('dist', 'index.html'), join('dist', route, 'index.html'))
}
copyFileSync(join('dist', 'index.html'), join('dist', '404.html'))
