import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'robomaster', title: { zh: 'RoboMaster 机器人竞赛', en: 'RoboMaster Robotics' },
    subtitle: { zh: '赛场操作、设备调试与团队协作', en: 'Competition operation, debugging, and teamwork' },
    category: 'robotics', year: '2024', featured: true,
    image: 'media/portfolio-1.jpg', imageAlt: { zh: 'RoboMaster 比赛现场，队员调试机器人', en: 'Team debugging a robot at RoboMaster' },
    tags: ['RoboMaster', '机器人调试', '团队协作'],
    before: { zh: '比赛现场需要协调机器人操作、设备状态和团队配合。', en: 'Competition required coordination across robot operation, equipment status, and the team.' },
    built: { zh: '担任队长、操作手与调试人员，参与训练安排、比赛执行和现场排障。', en: 'Served as captain, operator, and debugger, coordinating practice and troubleshooting on site.' },
    after: { zh: '积累了机器人现场调试与团队协作经验。', en: 'Gained hands-on debugging and collaboration experience.' },
    process: [{ zh: '组织训练，完成操作练习与比赛准备。', en: 'Organized training and prepared for competition.' }, { zh: '在现场承担机器人操作与问题排查。', en: 'Operated the robot and troubleshot on site.' }],
    challenges: [{ zh: '现场故障定位与团队沟通。', en: 'On-site fault isolation and team communication.' }],
    contribution: { zh: '队长、操作手、调试人员。', en: 'Captain, operator, and debugger.' },
    gallery: ['media/portfolio-1.jpg', 'media/robomaster-field.jpg'],
    diagram: 'flowchart LR\n A[训练与策略] --> B[设备调试]\n B --> C[赛场操作]\n C --> D[现场排障]'
  },
  {
    slug: 'cycling-assistant', title: { zh: '智能骑行辅助系统', en: 'Smart Cycling Assistance' },
    subtitle: { zh: '从硬件连接到传感器联调的原型实践', en: 'A prototype built through hardware and sensor integration' },
    category: 'embedded', year: '2025', featured: true,
    image: 'media/portfolio-2.jpg', imageAlt: { zh: '智能骑行辅助系统原型', en: 'Smart cycling assistance prototype' },
    tags: ['Arduino', '掌控板', '传感器'],
    before: { zh: '希望通过电子模块制作骑行辅助原型，探索传感器信息如何转化为可用反馈。', en: 'Explored how sensor input could become useful feedback in a cycling assistance prototype.' },
    built: { zh: '自主设计与制作原型，完成 Arduino、掌控板、传感器的连接、程序编写和功能调试。', en: 'Designed and built a prototype with Arduino, a controller board, sensors, code, and functional debugging.' },
    after: { zh: '完成作品展示，获得省级发明奖与市级数字素养比赛三等奖。', en: 'Presented the prototype and received third prizes in provincial invention and municipal digital literacy competitions.' },
    process: [{ zh: '确定系统功能并连接硬件模块。', en: 'Defined functions and connected hardware modules.' }, { zh: '编写控制程序，调试传感器应用并验证功能。', en: 'Wrote control code, tuned sensors, and verified behavior.' }],
    challenges: [{ zh: '多模块连接与传感器调试。', en: 'Integrating multiple modules and tuning sensors.' }],
    contribution: { zh: '自主设计、制作与调试。', en: 'Independent design, construction, and debugging.' },
    outcome: { zh: '第二十二届广东省少年儿童发明奖三等奖；2025 年广州市学生数字素养提升实践大赛三等奖。', en: 'Third prizes at the 22nd Guangdong Youth Invention Award and the 2025 Guangzhou Student Digital Literacy Competition.' },
    gallery: ['media/portfolio-2.jpg', 'media/portfolio-6.png', 'media/portfolio-7.jpg'],
    diagram: 'flowchart LR\n A[传感器输入] --> B[Arduino / 掌控板]\n B --> C[控制程序]\n C --> D[骑行辅助反馈]'
  },
  {
    slug: 'yolo-sports', title: { zh: '树莓派与 YOLO 目标识别', en: 'Raspberry Pi & YOLO Detection' },
    subtitle: { zh: '目标检测模型训练与设备端实践', en: 'Object detection training and edge device practice' },
    category: 'vision', featured: true,
    tags: ['YOLO', 'Python', 'Raspberry Pi'],
    before: { zh: '希望让目标检测模型在摄像头与真实设备上运行。', en: 'Explored running an object detection model with a camera on a physical device.' },
    built: { zh: '在电脑端整理数据集、训练与测试 YOLO 模型，并在树莓派接入摄像头尝试实时识别。', en: 'Prepared a dataset, trained and tested YOLO on a PC, and connected a camera to a Raspberry Pi for real-time detection.' },
    after: { zh: '完成了从模型训练到设备部署的实践链路。', en: 'Practiced the path from model training to device deployment.' },
    process: [{ zh: '配置数据集与模型训练环境。', en: 'Set up the dataset and training environment.' }, { zh: '使用摄像头或视频检查识别效果，并尝试设备端部署。', en: 'Checked detection with camera or video input and explored device deployment.' }],
    contribution: { zh: '数据集整理、模型训练测试与设备接入。', en: 'Dataset preparation, model training and testing, and device setup.' },
    gallery: ['media/raspberry-pi-terminal.jpg'],
    diagram: 'flowchart LR\n A[摄像头 / 视频] --> B[YOLO 目标检测]\n B --> C[识别结果]\n C --> D[树莓派设备端]'
  },
  {
    slug: 'ros2-library', title: { zh: 'ROS 2 智能图书馆管理系统', en: 'ROS 2 Smart Library System' },
    subtitle: { zh: '用 NFC 连接实体设备与管理系统', en: 'Connecting devices to a management system through NFC' },
    category: 'robotics', featured: true,
    tags: ['ROS 2', 'NFC', '行空板'],
    before: { zh: '图书馆场景需要读取实体卡片信息，并将结果传入系统流程。', en: 'A library workflow needed to read physical cards and pass identification data into the system.' },
    built: { zh: '结合行空板 NFC 识别与 ROS 2，完成卡片信息读取、设备与系统交互、软硬件联调。', en: 'Combined NFC on a controller board with ROS 2 for card reading, device-to-system communication, and integration.' },
    after: { zh: '完成场景测试，探索设备与软件系统的协作方式。', en: 'Completed scenario tests and explored device-to-software interaction.' },
    process: [{ zh: '设计卡片读取与系统交互流程。', en: 'Designed the card reading and system interaction flow.' }, { zh: '完成设备接线、功能联调与场景测试。', en: 'Connected hardware, integrated functions, and tested scenarios.' }],
    challenges: [{ zh: 'NFC 识别结果与 ROS 2 系统流程的衔接。', en: 'Linking NFC identification to the ROS 2 workflow.' }],
    contribution: { zh: '系统功能设计、软硬件联调与场景测试。', en: 'Function design, hardware-software integration, and scenario testing.' },
    outcome: { zh: '实现卡片信息读取及实体设备与管理系统的信息交互。', en: 'Implemented card reading and device-to-system interaction.' },
    diagram: 'flowchart LR\n A[NFC 卡片] --> B[行空板识别]\n B --> C[ROS 2 通信]\n C --> D[图书馆管理系统]'
  },
  {
    slug: 'english-platform', title: { zh: '英语学习与背诵平台', en: 'English Learning Platform' },
    subtitle: { zh: '单词卡片、练习与学习进度的轻量应用', en: 'A lightweight app for vocabulary practice and progress' },
    category: 'software', image: 'media/english-platform.png',
    imageAlt: { zh: '英语单词学习平台的学习卡片界面截图', en: 'Vocabulary learning card interface' },
    tags: ['学习卡片', '选择题', '拼写练习'],
    before: { zh: '围绕期末考英语单词复习，整理词汇并设计便于反复练习的页面。', en: 'Organized exam vocabulary into an interface for repeated practice.' },
    built: { zh: '截图展示学习卡片、选择题、拼写练习、收藏与进度统计等功能入口。', en: 'The screenshot shows flashcards, multiple-choice practice, spelling practice, favorites, and progress tracking.' },
    after: { zh: '保留了可浏览的单词学习界面。截图记录的词库总量为 599 词。', en: 'A usable vocabulary interface is documented. The screenshot shows a 599-word collection.' },
    contribution: { zh: '界面署名“由小宋同学制作”。', en: 'The interface credits “Xiao Song” as its creator.' },
    gallery: ['media/english-platform.png']
  },
  {
    slug: 'drone-vision', title: { zh: '无人机空地协同竞赛', en: 'Drone Air-Ground Competition' },
    subtitle: { zh: '第八届全国青少年无人机大赛参赛记录', en: 'A record from the 8th National Youth Drone Competition' },
    category: 'robotics', year: '2024', tags: ['无人机竞赛', '空地协同', '团队实践'],
    before: { zh: '参与空地协同对抗赛高中组，面对协同操作的赛场任务。', en: 'Entered the high school air-ground collaborative competition.' },
    built: { zh: '与团队完成广东省赛和全国赛的比赛任务。', en: 'Competed with the team at Guangdong and national events.' },
    after: { zh: '获广东省赛一等奖、全国赛二等奖。', en: 'Received first prize in Guangdong and second prize nationally.' },
    outcome: { zh: '两项奖项均有原始证书，可在图集中查看。', en: 'Both awards are documented by original certificates in the gallery.' },
    gallery: ['media/portfolio-4.jpg', 'media/portfolio-5.jpg']
  }
]

export const getProject = (slug: string) => projects.find(project => project.slug === slug)
