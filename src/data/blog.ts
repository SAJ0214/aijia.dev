import type { Localized } from './types'

export type Post = { slug: string; title: Localized; summary: Localized; date?: string; tags: string[]; body: Localized }

export const posts: Post[] = [
  {
    slug: 'from-model-to-device',
    title: { zh: '从模型到设备：一次视觉部署实践记录', en: 'From model to device: a vision deployment note' },
    summary: { zh: '梳理已完成的 YOLO 训练、测试与树莓派摄像头部署环节。', en: 'A short record of documented YOLO training, testing, and Raspberry Pi deployment.' },
    tags: ['YOLO', 'Raspberry Pi', 'Vision'],
    body: {
      zh: `# 从模型到设备：一次视觉部署实践记录

视觉项目的难点，常常在模型之外。我的相关实践包括在电脑上整理数据集、训练与测试 YOLO 目标检测模型，随后在树莓派上连接摄像头并尝试实时识别。

## 已完成的环节

1. 整理用于目标检测的数据集并配置训练环境。
2. 在电脑端训练、测试模型，使用摄像头或视频检查识别效果。
3. 在树莓派接入摄像头，尝试把识别功能带到边缘设备。

## 设备端验证的关注点

模型能运行只是第一步。设备端验证还需要关注输入画面的稳定性、响应时间，以及错误识别发生在什么场景。把运行条件和失败样本记录清楚，才能让下一轮调试更有依据。`,
      en: `# From model to device: a vision deployment note

The difficult part of a vision project often lies beyond the model. My documented practice includes preparing a dataset, training and testing YOLO object detection on a PC, and connecting a camera to a Raspberry Pi for real-time recognition.

## Documented steps

1. Prepared a detection dataset and training setup.
2. Trained and tested the model on a PC, checking results with camera or video input.
3. Connected a camera to a Raspberry Pi and explored edge deployment.

## What to inspect on device

Running the model is only the first step. Device validation should examine input stability, response time, and the situations that cause incorrect detections. Recording operating conditions and failure cases makes the next debugging pass more useful.`
    }
  }
]
