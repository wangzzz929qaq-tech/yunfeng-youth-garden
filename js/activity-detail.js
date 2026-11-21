const activities = {
  spring: {
    title: '在春天，重新认识一粒种子', category: '年度主题活动', year: '时间 · 20XX年春季', date: '20XX年 · 春季', place: '地点 · 云峰耕读园', format: '形式 · 农耕体验与共学', theme: '春日播种与土地观察',
    lead: '这是一段用于呈现活动缘起与核心体验的导语占位。青年伙伴从一粒种子开始，在共同劳动中理解季节、土地与彼此的关系。',
    story: ['活动当天从认识种子与节气开始，参与者随后进入田地完成整理、播种和观察记录。此处未来可替换为真实活动流程与现场故事。','下午的共学环节围绕土地、食物与日常生活展开。此处预留活动成果、讨论内容及后续行动的介绍。'],
    highlights: [['认识一粒种子','品种与生长知识占位'],['完成一次播种','实践流程说明占位'],['留下田野笔记','观察与记录成果占位']]
  },
  mountain: {
    title: '沿着山路去阅读', category: '自然观察', year: '时间 · 20XX年夏季', date: '20XX年 · 夏季', place: '地点 · 山林路线占位', format: '形式 · 徒步观察与自然共读', theme: '山林行走与自然阅读',
    lead: '沿着山路缓慢行走，把植物、声音与天气当作可以阅读的文本。这段占位导语用于介绍活动方法与参与体验。',
    story: ['参与者在带领下辨认沿途植物、记录环境变化，并在不同观察点完成安静聆听与小组分享。','行走结束后，大家以文字、声音或图像整理当天的发现，让自然观察成为可以持续练习的能力。'],
    highlights: [['山林观察','路线与物种记录占位'],['自然共读','阅读材料与讨论占位'],['声音地图','现场创作成果占位']]
  },
  craft: {
    title: '双手与材料的对话', category: '乡土技艺', year: '时间 · 20XX年秋季', date: '20XX年 · 秋季', place: '地点 · 手作空间占位', format: '形式 · 技艺体验与共同创作', theme: '地方材料与传统手作',
    lead: '从一件日常器物出发，认识材料的来源与传统技艺背后的生活经验。这里未来可替换为真实课程介绍。',
    story: ['活动由在地老师介绍材料与工具，参与者在示范后完成基础练习，并尝试制作属于自己的作品。','手作不仅是一项技能，也连接着地方资源、代际记忆与生活方式。活动最后以作品分享和口述记录结束。'],
    highlights: [['材料识别','地方材料知识占位'],['技艺练习','制作步骤说明占位'],['作品分享','参与成果展示占位']]
  },
  'night-talk': {
    title: '围炉交换彼此的答案', category: '青年夜话', year: '时间 · 20XX年冬季', date: '20XX年 · 冬季', place: '地点 · 围谈场地占位', format: '形式 · 主题分享与开放讨论', theme: '青年行动与乡土想象',
    lead: '围绕一个共同关心的问题，青年伙伴分享各自的行动、困惑与正在寻找的答案。这里用于承载真实的对谈主题。',
    story: ['夜话从几位伙伴的短分享开始，随后进入开放提问与小组交流。现场不追求统一结论，而是鼓励真实经验的相互照见。','讨论结束后，参与者将关键词写入共同笔记，作为未来活动和行动方向的线索。'],
    highlights: [['主题分享','分享嘉宾信息占位'],['开放对谈','讨论议题内容占位'],['共同笔记','现场观点整理占位']]
  },
  'field-class': {
    title: '把课堂搬到田埂上', category: '节气共学', year: '时间 · 20XX年节气日', date: '20XX年 · 节气占位', place: '地点 · 农田场域占位', format: '形式 · 户外课堂与田野实践', theme: '节气知识与农事体验',
    lead: '课堂从室内来到田埂，知识也与眼前的作物、土壤和天气建立联系。这里预留真实课程目标与内容说明。',
    story: ['课程围绕当日节气展开，通过观察作物状态、土壤湿度和天气变化，将抽象知识放回真实环境。','参与者分组完成一项简单农事实践，并在结尾整理观察结果与新的问题。'],
    highlights: [['节气观察','物候与天气记录占位'],['田野课堂','课程内容说明占位'],['农事实践','参与任务成果占位']]
  },
  village: {
    title: '用镜头记录村落的一天', category: '在地实践', year: '时间 · 20XX年', date: '20XX年 · 日期占位', place: '地点 · 村落名称占位', format: '形式 · 走访记录与影像共创', theme: '村落日常与青年记录',
    lead: '以一天为时间尺度，青年伙伴通过观察、访问与影像记录，尝试理解村落日常中容易被忽略的细节。',
    story: ['活动开始前进行访问方法与影像伦理说明，随后小组进入不同区域完成观察和交流。','傍晚大家整理素材并进行首次分享。这里未来可放置真实作品、受访者故事和活动成果链接。'],
    highlights: [['村落走访','观察路线说明占位'],['人物访问','访问对象信息占位'],['影像共创','作品成果展示占位']]
  }
};

const params = new URLSearchParams(window.location.search);
const activity = activities[params.get('id')] || activities.spring;

document.title = `${activity.title}｜云峰青年耕读园`;
document.getElementById('nav-activity-title').textContent = activity.title;
document.getElementById('crumb-title').textContent = activity.title;
document.getElementById('detail-category').textContent = activity.category;
document.getElementById('detail-title').textContent = activity.title;
document.getElementById('detail-year').textContent = activity.year;
document.getElementById('detail-place').textContent = activity.place;
document.getElementById('detail-format').textContent = activity.format;
document.getElementById('detail-lead').textContent = activity.lead;
document.getElementById('detail-story-one').textContent = activity.story[0];
document.getElementById('detail-story-two').textContent = activity.story[1];
document.getElementById('aside-theme').textContent = activity.theme;
document.getElementById('aside-date').textContent = activity.date;
document.getElementById('aside-place').textContent = activity.place.replace('地点 · ', '');
document.getElementById('detail-highlights').innerHTML = activity.highlights.map(item => `<div class="detail-highlight"><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join('');
