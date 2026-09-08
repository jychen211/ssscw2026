/* ============================================================
   苏州河 Citywalk — 结构化数据
   ------------------------------------------------------------
   type:  stop（正式站点，绿色编号） | glance（顺路看点，蓝色眼睛）
          | optional（备选景点，橙色空心菱形） | chapter（主题步行章节）
   coord: [经度, 纬度]（高德 GCJ-02）
   stay / addMin: 分钟
   tags:  food 餐饮 | mall 商场 | id 需携带护照/实名核验
   ============================================================ */

/* ---------- 界面文案 ---------- */
const UI = {
  zh: {
    kicker: 'SUZHOU CREEK · CITYWALK',
    title: '上海阿姨的一天',
    subtitle: '从街坊烟火、城市更新，到苏州河与上海历史',
    metaDuration: '约 {t}',
    metaWalk: '步行约 {d} 公里',
    metaStopsLabel: '6 个正式站点',
    btnRoute: '查看完整路线',
    mapTitle: '完整路线地图',
    mapNoteFormal: '正式路线',
    mapNoteAside: '顺路看看景点',
    mapNoteOptional: '备选景点',
    mapNotePhoto: '推荐拍照点',
    photoSpotsLabel: '推荐拍照点：',
    mapNoteAction: '点击图标',
    mapNoteClickable: '显示景点详情',
    mapNoteRetry: '若步行路线出现虚线，请点击‘重新计算路线’。',
    mapPopupCard: '景点介绍',
    mapPopupCopy: '复制地址',
    mapPopupMaps: '到这里去',
    mapProviderTitle: '选择地图',
    mapProviderGoogle: '谷歌地图',
    mapProviderAmap: '高德地图',
    mapProviderApple: 'Apple 地图',
    mapProviderCancel: '取消',
    mapPopupCopied: '地址已复制',
    mapLoading: '地图加载中…',
    mapFail: '地图暂时无法加载（可能是网络或 Key 限制）。路线卡片和单站导航仍可正常使用。',
    mapNoKey: '尚未配置高德地图 Key，地图区域已跳过。路线卡片和单站导航不受影响。',
    locate: '◎ 获取我的位置',
    locating: '正在获取位置…',
    locateAgain: '◎ 重新定位',
    locateFail: '无法获取当前位置，请检查手机和浏览器的定位权限。',
    reroute: '↻ 重新计算路线',
    rerouting: '正在重新计算…',
    rerouteDone: '路线已重新计算',
    copyList: '复制有序地点清单',
    copiedList: '已复制有序地点清单，可在高德 App 中手动建立多途经点路线。',
    prepTitle: '行前准备',
    prepHint: '舒适地走完这条路线所需的几件小事。',
    timelineTitle: '路线',
    routeHint: '绿色编号＝正式站点 · 蓝色眼睛＝顺路看 · 橙色菱形＝备选（可加入）',
    legendStop: '正式路线',
    legendAside: '顺路看看',
    legendOptional: '备选景点（可选择）',
    asideTitle: '顺路看点',
    asideHint: '不编号、不额外绕路，建议停留 2–10 分钟。',
    optionalTitle: '备选景点',
    optionalHint: '可按兴趣加入或移出路线；加入后只更新地图、路线顺序与预计总时长。',
    boatTitle: '隐藏玩法：苏州河游船',
    endingTitle: '结语：另一面的上海',
    stay: '建议停留 {m}',
    stayRange: '建议停留 {a}–{b} 分钟',
    hours: '开放时间',
    stayKey: '建议停留',
    intro: '介绍',
    addr: '地址',
    navAmap: '高德步行导航',
    navApple: 'Apple Maps',
    addStop: '加入路线',
    removeStop: '移出路线',
    navFail: '无法打开地图 App，已改为复制查询名称，可粘贴到地图 App 搜索。',
    copyFallback: '复制失败，请长按地址手动复制。',
    foodLabel: '可用餐',
    mallLabel: '商场',
    idLabel: '护照',
    stopWord: '第 {n} 站',
    stopWordShort: '第 {n} 站',
    tipNoPhoto: '请勿拍摄住宅内部或未经允许近距离拍摄居民。',
    checkHintAll: '（{a}/{b}）',
    footNote: '开放时间、预约与游船班次等信息可能变动，请以官方渠道当日公布为准。',
    createdBy: 'Made with care by Jenny, Hy4, Luna, Doubao, Sol&Astra',
    langLabel: '语言',
    totalBase: '预计总时长',
    detail: '展开',
    collapse: '收起'
    ,bookLabel: '推荐书籍'
  },
  de: {
    kicker: 'SUZHOU CREEK · CITYWALK',
    title: 'Ein Tag im Leben einer Shanghaier Tante',
    subtitle: 'Vom gelebten Alltag über Stadterneuerung bis zum Suzhou Creek und zur Geschichte Shanghais',
    metaDuration: 'ca. {t}',
    metaWalk: 'ca. {d} km zu Fuß',
    metaStopsLabel: '6 feste Stationen',
    metaStops: '6 feste Stationen',
    metaStart: 'empfohlen 09:00–17:00',
    btnRoute: 'Ganze Route ansehen',
    mapTitle: 'Karte der ganzen Route',
    mapNoteFormal: 'die feste Route',
    mapNoteAside: 'Sehenswürdigkeiten am Weg',
    mapNoteOptional: 'Wahlstationen',
    mapNotePhoto: 'empfohlene Fotopunkte',
    photoSpotsLabel: 'Empfohlene Fotopunkte:',
    mapNoteAction: 'Klicken Sie auf das Symbol',
    mapNoteClickable: 'um die Stationsbeschreibung anzuzeigen',
    mapNoteRetry: 'Wenn die Fußgängerroute gestrichelt erscheint, klicken Sie bitte auf „Route neu berechnen“.',
    mapPopupCard: 'Stationsbeschreibung',
    mapPopupCopy: 'Adresse kopieren',
    mapPopupMaps: 'Hierhin navigieren',
    mapProviderTitle: 'Karte auswählen',
    mapProviderGoogle: 'Google Maps',
    mapProviderAmap: 'Amap',
    mapProviderApple: 'Apple Karten',
    mapProviderCancel: 'Abbrechen',
    mapPopupCopied: 'Adresse kopiert',
    mapLoading: 'Karte wird geladen …',
    mapFail: 'Die Karte konnte nicht geladen werden (Netzwerk oder Key-Einschränkung). Alle Karten, das Kopieren von Adressen und die Einzelnavigation funktionieren weiterhin.',
    mapNoKey: 'Es ist kein Amap-Key hinterlegt, der Kartenbereich wird übersprungen. Route, Adressen kopieren und Einzelnavigation sind nicht betroffen.',
    locate: '◎ Meinen Standort zeigen',
    locating: 'Standort wird ermittelt …',
    locateAgain: '◎ Erneut lokalisieren',
    locateFail: 'Standort nicht verfügbar. Bitte die Standortberechtigung von Telefon und Browser prüfen.',
    reroute: '↻ Route neu berechnen',
    rerouting: 'Route wird neu berechnet …',
    rerouteDone: 'Route wurde neu berechnet',
    copyList: 'Geordnete Ortsliste kopieren',
    copiedList: 'Liste kopiert – damit lässt sich in der Amap-App eine Route mit Zwischenzielen anlegen.',
    prepTitle: 'Vorbereitung',
    prepHint: 'Vor dem Start durchgehen. Der Haken bleibt nur in diesem Browser gespeichert.',
    timelineTitle: 'Route',
    routeHint: 'Grüne Nummer = feste Station · blaues Auge = Sehenswürdigkeit am Weg · orange Raute = Wahlstation (hinzufügbar)',
    legendStop: 'Feste Station',
    legendAside: 'Sehenswürdigkeit am Weg',
    legendOptional: 'Wahlstation (hinzufügbar)',
    asideTitle: 'Sehenswürdigkeiten am Weg',
    asideHint: 'Ohne Nummer, ohne Umweg – 2 bis 10 Minuten reichen.',
    optionalTitle: 'Wahlstationen',
    optionalHint: 'Nach Interesse hinzufügen oder entfernen. Danach aktualisieren sich Karte, Reihenfolge und die geplante Gesamtdauer.',
    boatTitle: 'Extra: Bootsfahrt auf dem Suzhou Creek',
    endingTitle: 'Schluss: Eine andere Seite von Shanghai',
    stay: 'empfohlen {m}',
    stayRange: '{a}–{b} Minuten',
    hours: 'Öffnungszeiten',
    stayKey: 'Empfohlene Dauer',
    intro: 'Über den Ort',
    addr: 'Adresse',
    navAmap: 'Amap – zu Fuß',
    navApple: 'Apple Maps',
    addStop: 'Zur Route hinzufügen',
    removeStop: 'Aus Route entfernen',
    navFail: 'Karten-App konnte nicht geöffnet werden. Stattdessen wurde der Suchname kopiert.',
    copyFallback: 'Kopieren fehlgeschlagen – bitte Adresse lange drücken und manuell kopieren.',
    foodLabel: 'Essen möglich',
    mallLabel: 'Einkaufszentrum',
    idLabel: 'Reisepass',
    stopWord: 'Station {n}',
    stopWordShort: 'Station {n}',
    tipNoPhoto: 'Bitte keine Wohnungen fotografieren und keine Menschen ohne Erlaubnis aus nächster Nähe.',
    checkHintAll: '({a}/{b})',
    footNote: 'Öffnungszeiten, Anmelderegeln und Bootsfahrpläne können sich ändern – bitte am Tag selbst in den offiziellen Kanälen prüfen.',
    createdBy: 'Made with care by Jenny, Hy4, Luna, Doubao, Sol&Astra',
    langLabel: 'Sprache',
    totalBase: 'Geplante Gesamtdauer',
    detail: 'Mehr',
    collapse: 'Weniger'
    ,bookLabel: 'Buchempfehlung'
  }
};

/* ---------- 行前准备清单 ---------- */
const PREP = [
  { id: 'heat', zh: '⚠️高温天气，请做好防晒措施，随身携带防晒用品并及时补充水分。', de: '⚠️ Bei heißem Wetter bitte Sonnenschutz verwenden, Sonnenschutzmittel mitnehmen und regelmäßig Wasser trinken.' },
  { id: 'rain', zh: '如天气预报有雨，请随身携带雨伞。', de: 'Wenn Regen vorhergesagt ist, bitte einen Regenschirm mitnehmen.' },
  { id: 'shoes', zh: '请穿着舒适、适合长时间步行的鞋子。', de: 'Bitte bequeme Schuhe tragen, die für langes Gehen geeignet sind.' },
  { id: 'temple-dress', zh: '参观玉佛寺时，请注意着装得体。', de: 'Beim Besuch des Jade-Buddha-Tempels bitte auf angemessene Kleidung achten.' },
  { id: 'passport', zh: '请携带护照原件', de: 'Bitte den Originalreisepass mitnehmen.' },
  { id: 'city-ride', zh: '提前准备好共享单车或滴滴 App，走累了也可以City Ride。', de: 'Bitte die Apps für Leihfahrräder oder Didi vorab bereithalten; wenn die Füße müde werden, ist auch eine City Ride möglich.' }
];

/* ---------- 正式站点 / 顺路看点 / 备选景点 ---------- */
const PLACES = [
  {
    id: 'yufo',
    type: 'stop',
    order: 10,
    slot: '09:00–10:00',
    coord: [121.445135, 31.241382],
    name: { zh: '玉佛寺', en: 'Jade Buddha Temple', de: 'Jade-Buddha-Tempel' },
    addr: {
      zh: '上海市普陀区安远路170号',
      en: 'No. 170 Anyuan Road, Putuo District, Shanghai'
    },
    stay: 40,
    tags: ['food'],
    tagText: {
      zh: '素面/月饼',
      de: 'Vegetarische Nudeln/Mondkuchen'
    },
    hours: {
      zh: '08:00–16:30（免香花券入寺；重大节日另行公告）',
      de: '08:00–16:30 (Eintritt frei; an Feiertagen gesonderte Ankündigung)'
    },
    highlight: {
      zh: '香火与菜场只隔一条街——寺院是社区的一部分。',
      de: 'Weihrauch und Gemüsemarkt liegen eine Straße auseinander – der Tempel gehört zum Viertel.'
    },
    intro: {
      zh: '玉佛禅寺始建于 1882 年，因两尊从缅甸请回的玉佛而得名。如今寺院仍在城市中心运转：门外是住宅、菜场和小店，门内是上香、诵经和日常修行。在这里看看，一座寺庙如何成为城市生活的一部分。',
      de: 'Der Tempel wurde 1882 gegründet und erhielt seinen Namen von zwei Jade-Buddha-Figuren, die aus Birma hierhergebracht wurden. Heute ist er weiterhin mitten im Stadtleben verankert: Vor dem Tempel liegen Wohnhäuser, Märkte und kleine Läden, im Inneren finden Gebete, Rezitationen und der tägliche religiöse Alltag statt. Hier lässt sich beobachten, wie ein Tempel Teil des städtischen Lebens wird.'
    },
    tips: {
      zh: '👀 路上别忘了找一找「大橘禅院」。\n\n⚠️ 入寺注意着装：避免背心、露脐装、拖鞋及过短的裙裤。',
      de: '👀 Unterwegs nicht vergessen, nach dem „Big Orange Zen Temple“ Ausschau zu halten.\n\n⚠️ Beim Tempel bitte angemessene Kleidung tragen: Keine Trägershirts, bauchfreien Oberteile, Hausschuhe oder zu kurzen Röcke und Hosen.'
    },
    links: [{ label: { zh: '玉佛禅寺官网 ↗', en: 'Jade Buddha Temple official website ↗', de: 'Offizielle Website des Jade-Buddha-Tempels ↗' }, url: { zh: 'https://www.yufotemple.com/', en: 'https://www.yufotemple.com/', de: 'https://www.yufotemple.com/en/' } }]
  },

  {
    id: 'chapter-putuo',
    type: 'chapter',
    order: 15,
    title: {
      zh: '长寿路 / 西康路一带的社区生活',
      en: 'Community life around Changshou and Xikang Roads',
      de: 'Alltagsleben rund um Changshou- und Xikang-Straße'
    },
    body: {
      zh: '武康路、愚园路代表了许多游客熟悉的上海：梧桐、老建筑、咖啡馆，以及经过精心更新的街道空间。\n\n而在长寿路和西康路一带，住宅、早餐铺、便利店、快递、电动车，还有买菜和通勤的人，共同构成了更朴素而具体的日常。这里的生活并没有被特别整理成一道“风景”，却更接近这座城市每天真实运转的样子。\n\n继续往鸿寿坊走，这种自然生长的街坊生活，会逐渐过渡到一种经过城市更新重新组织的“精致烟火气”：旧里弄的尺度和建筑语言被保留下来，新的餐饮、咖啡和商业进入其中。',
      de: 'Wukang Road und Yuyuan Road zeigen vielen Besuchern das vertraute Shanghai: Platanen, alte Häuser, Cafés und sorgfältig erneuerte Straßenräume.\n\nRund um Changshou- und Xikang-Straße ist der Alltag schlichter und unmittelbarer: Wohnungen, Frühstücksläden, Convenience-Stores, Lieferboten, E-Bikes und Menschen auf dem Weg zur Arbeit oder zum Markt. Dieses Leben wurde nicht eigens zur „Sehenswürdigkeit“ gemacht – gerade deshalb zeigt es, wie die Stadt wirklich funktioniert.\n\nAuf dem Weg nach Hong Shou Fang geht dieser gewachsene Alltag allmählich in eine neu organisierte, gepflegte Form des Quartierslebens über: Die Maßstäbe und Spuren der alten Gassen bleiben, neue Gastronomie, Cafés und Geschäfte kommen hinzu.'
    }
  },

  {
    id: 'dachun-market',
    type: 'glance',
    order: 35,
    leg: '11:05–11:25',
    coord: [121.443350, 31.239432],
    name: { zh: '大春平价菜场', en: 'Dachun Affordable Market', de: 'Dachun-Preiswertmarkt' },
    addr: {
      zh: '上海市普陀区西康路928号',
      en: 'No. 928 Xikang Road, Putuo District, Shanghai'
    },
    stay: 10,
    tags: [],
    hours: {
      zh: '营业时间以现场为准',
      de: 'Öffnungszeiten bitte vor Ort prüfen'
    },
    highlight: {
      zh: '老式菜场里的上海市井日常。',
      de: 'Shanghai-Alltag in einer traditionellen Markthalle.'
    },
    intro: {
      zh: '这种老式菜场展示了上海传统的市井面貌。如今主要是本地老年人还会前来采购，上海年轻人大多线上买菜配送到家，很少来这种地方。\n\n菜场的亮点是水产区，水箱里的活鱼、鲜虾、螃蟹与贝类可现场挑选，由摊主当场处理完毕，买回即可烹饪。',
      de: 'Dieser traditionelle Markt zeigt das alltägliche Shanghai von früher. Heute kommen vor allem ältere Anwohner zum Einkaufen; die meisten jungen Shanghaier bestellen Lebensmittel online und lassen sie nach Hause liefern, sodass sie solche Orte nur selten besuchen.\n\nBesonders sehenswert ist die Fisch- und Meeresfrüchteabteilung: Lebende Fische, frische Garnelen, Krabben und Muscheln können aus den Becken ausgewählt und direkt vom Händler küchenfertig verarbeitet werden – zu Hause kann man sie sofort zubereiten.'
    },
    tips: null
  },

  {
    id: 'hongshou',
    type: 'stop',
    order: 30,
    slot: '10:15–11:05',
    coord: [121.440182, 31.240997],
    name: { zh: '鸿寿坊', en: 'Hong Shou Fang', de: 'Hong Shou Fang' },
    addr: {
      zh: '上海市普陀区西康路1143号',
      en: 'No. 1143 Xikang Road, Putuo District, Shanghai'
    },
    stay: 30,
    tags: ['mall', { key: 'shikumen', icon: 'residence', label: { zh: '石库门', de: 'Shikumen' } }],
    tagText: {
      zh: '商场',
      de: 'Einkaufszentrum'
    },
    hours: {
      zh: '约 10:00–22:00（各店铺略有差异）',
      de: 'ca. 10:00–22:00 (je nach Geschäft)'
    },
    highlight: {
      zh: '石库门里弄被重新设计成“菜场＋咖啡”的日常商业。',
      de: 'Eine Shikumen-Gasse, neu erfunden als Alltagskommerz aus Markt und Kaffee.'
    },
    intro: {
      zh: '鸿寿坊始建于 1933 年，2023 年改造后重新开放。石库门弄堂结构、赤色陶砖和门头装饰被保留下来，中央食集则把菜场、老字号、精品咖啡和各种餐饮放在同一片屋檐下，延续着这里从三十年代卖米的吆喝、七八十年代粮票买副食品的生活传统。\n\n相比新天地、张园等石库门改造后的精致商业区，鸿寿坊更像附近居民老少皆宜的社区会客厅。\n\n👀 想知道哪家店好吃又便宜？看看阿姨们在哪里排队。',
      de: 'Hong Shou Fang entstand 1933 als zweigeschossige Shikumen-Siedlung und wurde nach der Erneuerung 2023 wiedereröffnet. Die Gassenstruktur, die roten Terrakotta-Ziegel und die Türportale blieben erhalten; die zentrale Markthalle bringt Gemüsemarkt, alteingesessene Marken, Spezialitätenkaffee und verschiedenste Gastronomie unter ein Dach. So setzt sie die Alltagstradition dieses Viertels fort – von den Rufen der Reishändler in den 1930er-Jahren bis zum Einkauf von Grundbedarf mit Lebensmittelmarken in den 1970er- und 1980er-Jahren.\n\nIm Vergleich zu den eleganten, hochwertigen Shikumen-Vierteln Xintiandi und Zhangyuan ist Hong Shou Fang eher ein Treffpunkt für die Anwohner – für Jung und Alt.\n\n👀 Wer wissen möchte, wo es gut und günstig schmeckt, schaut einfach, vor welchem Laden die Tanten Schlange stehen.'
    },
    tips: null
  },

  {
    id: 'changshou',
    type: 'glance',
    order: 40,
    leg: '11:05–11:40',
    coord: [121.43951, 31.24337],
    name: { zh: '长寿公园', en: 'Changshou Park', de: 'Changshou-Park' },
    addr: {
      zh: '上海市普陀区长寿路260号',
      en: 'No. 260 Changshou Road, Putuo District, Shanghai'
    },
    stay: 5,
    tags: [],
    hours: {
      zh: '24 小时开放',
      de: 'rund um die Uhr geöffnet'
    },
    highlight: {
      zh: '24 小时开放的社区公园。',
      de: 'Ein rund um die Uhr offener Park – morgens und abends das Wohnzimmer der Nachbarschaft.'
    },
    intro: {
      zh: '在这座约4万平方米的社区公园里，附近居民可以慢跑、散步、打羽毛球，也可以下棋、唱歌。公园里的游乐场则吸引了不少带孩子前来的家庭。像这样的社区公园散落在上海各处，也是城市漫步途中适合停下来小憩的一站。',
      de: 'In diesem rund 40.000 Quadratmeter großen Nachbarschaftspark können Anwohner joggen, spazieren gehen, Badminton spielen, Schach spielen und singen. Der Spielplatz zieht viele Familien mit Kindern an. Solche Nachbarschaftsparks gibt es überall in Shanghai; auch beim Stadtspaziergang laden sie zu einer kurzen Pause ein.'
    },
    tips: null
  },

  {
    id: 'trees',
    type: 'stop',
    order: 50,
    slot: '11:40–12:40',
    coord: [121.445506, 31.249016],
    name: { zh: '天安千树', en: '1000 Trees', de: '1000 Trees' },
    addr: {
      zh: '上海市普陀区莫干山路600号',
      en: 'No. 600 Moganshan Road, Putuo District, Shanghai'
    },
    stay: 20,
    tags: ['mall', { key: 'photo', icon: 'camera', label: { zh: '拍照', de: 'Fotospot' } }, { key: 'aldi', icon: 'mall', label: { zh: '奥乐齐', de: 'ALDI' } }],
    tagText: {
      zh: '商场',
      de: 'Einkaufszentrum'
    },
    hours: {
      zh: '商场约 10:00–21:30；沿河步道全天可通行',
      de: 'Einkaufszentrum ca. 10:00–21:30; Uferweg tagsüber frei zugänglich'
    },
    highlight: {
      zh: '空中花园搬进商场的建筑，争议与惊喜都在。',
      de: 'Ein Bau, der die hängenden Gärten in ein Einkaufszentrum holt – umstritten und sehenswert zugleich.'
    },
    intro: {
      zh: '天安千树坐落于苏州河畔，由英国设计师 Thomas Heatherwick 领衔设计，融合中国黄山山势与古巴比伦空中花园设计灵感，宛如一座从城市中生长出来的“空中森林”，是极具辨识度的城市地标。\n\n商场完整保留了原阜丰面粉厂的历史建筑，让工业记忆与当代城市生活在苏州河畔相融共生。',
      de: '1000 Trees liegt am Ufer des Suzhou Creek und wurde unter der Leitung des britischen Designers Thomas Heatherwick entworfen. Inspiriert von den Bergformen des Huangshan und den Hängenden Gärten von Babylon wirkt das Gebäude wie ein „Himmelswald“, der aus der Stadt herauswächst, und ist ein äußerst markantes Wahrzeichen.\n\nDas Einkaufszentrum bewahrt die historischen Gebäude der ehemaligen Fufeng-Mehlmühle vollständig und lässt so industrielle Erinnerung und zeitgenössisches Stadtleben am Suzhou Creek zusammenfinden.'
    },
    notes: [
      {
        icon: 'idea',
        text: {
          zh: '可从昌化路桥旁入口进入商场 B1 层，横穿商场到达 M50 创意园。B1 层设有奥乐齐超市。',
          de: 'Vom Eingang neben der Changhua Road Bridge gelangt man in die B1-Ebene des Einkaufszentrums. Durchquert man das Einkaufszentrum, erreicht man den M50 Creative Park. Auf B1 befindet sich ein ALDI-Supermarkt.'
        }
      },
      {
        icon: 'smile',
        text: {
          zh: '你觉得它像什么？问问身边的中国朋友，答案可能比官方介绍更有趣。',
          de: 'Woran erinnert euch das Gebäude? Fragt chinesische Freunde – ihre Antworten sind vielleicht interessanter als die offizielle Beschreibung.'
        }
      }
    ],
    photoSpots: ['changhua-moganshan', 'changhua-bridge'],
    tips: null
  },

  {
    id: 'buy42',
    type: 'optional',
    order: 20,
    addMin: 20,
    coord: [121.44691720604894, 31.240605840871176],
    name: {
      zh: '善淘BUY42慈善商店',
      en: 'Shantao BUY42 Charity Shop',
      de: 'Shantao BUY42 Charity-Shop'
    },
    addr: {
      zh: '静安区江宁路916号',
      en: 'No. 916 Jiangning Road'
    },
    stay: 20,
    tags: [],
    hours: {
      zh: '4–9 月 9:00–21:00；10–3 月 9:00–20:00',
      de: 'April–September 9:00–21:00; Oktober–März 9:00–20:00'
    },
    highlight: {
      zh: 'Buy42 = Buy for two',
      en: 'Shantao BUY42 is a charity shop.',
      de: 'Buy42 = Buy for two'
    },
    intro: {
      zh: '这是一家社区慈善商店。居民和企业捐来的闲置物品在这里重新流通，门店也为残障伙伴提供就业和培训机会。\n\nBuy42 = Buy for two：为自己，也为别人。',
      en: 'Most items here are donated by individuals and companies, giving pre-owned things a new life in the city; shopping, donating, or volunteering can all be ways to take part in public good.',
      de: 'Dies ist ein gemeinnütziger Nachbarschaftsladen. Gebrauchte Dinge, die von Anwohnern und Unternehmen gespendet werden, zirkulieren hier weiter; außerdem bietet der Laden Menschen mit Behinderung Arbeitsplätze und Schulungen.\n\nBuy42 = Buy for two: für sich selbst und für andere.'
    },
    tips: null,
    links: [{ label: { zh: '善淘官网 ↗', en: 'Shantao official website ↗', de: 'Offizielle Website von Shantao ↗' }, url: 'https://www.buy42.com/' }]
  },

  {
    id: 'texmuseum',
    type: 'optional',
    order: 60,
    addMin: 30,
    coord: [121.446125, 31.246907],
    name: { zh: '上海纺织博物馆', en: 'Shanghai Textile Museum', de: 'Textilmuseum Shanghai' },
    addr: {
      zh: '上海市普陀区澳门路128号',
      en: 'No. 128 Aomen Road, Putuo District, Shanghai'
    },
    stay: 30,
    tags: [],
    hours: {
      zh: '周二至周日 9:30–16:00（周一闭馆，法定节假日除外；春节期间闭馆）',
      de: 'Di–So 9:30–16:00 (Montag geschlossen, außer an gesetzlichen Feiertagen; während des Frühlingsfests geschlossen)'
    },
    highlight: {
      zh: '苏州河“母亲工业”的档案室，就在申新九厂原址上。',
      de: 'Das Archiv der „Mutterindustrie“ am Suzhou Creek – auf dem Gelände der ehemaligen Shenxin-Spinnerei Nr. 9.'
    },
    intro: {
      zh: '从明代（1368—1644年）备受推崇的“松江布”，到如今的高科技发展，纺织业一直被誉为上海的“母亲工业”。\n\n如果你想进一步了解上海的纺织工业，位于普陀区的上海纺织博物馆是一个非常值得参观的地方。\n\n博物馆收藏了超过20,000件（套）实物、文献和图片资料，浓缩并展现了上海地区六千多年的纺织历史。',
      de: 'Vom hochgeschätzten „Songjiang-Tuch“ der Ming-Zeit (1368–1644) bis zur heutigen Hightech-Entwicklung gilt die Textilindustrie als Shanghais „Mutterindustrie“.\n\nWer mehr über Shanghais Textilindustrie erfahren möchte, findet im Shanghaier Textilmuseum im Bezirk Putuo einen besonders lohnenden Besuchsort.\n\nDas Museum bewahrt mehr als 20.000 Objekte, Dokumente und Bildmaterialien und bündelt die über sechstausendjährige Textilgeschichte der Region Shanghai.'
    },
    tips: null
  },

  {
    id: 'm50',
    type: 'stop',
    order: 70,
    slot: '13:05–14:00',
    coord: [121.449359, 31.248122],
    name: { zh: 'M50 创意园', en: 'M50 Creative Park', de: 'M50 Kreativpark' },
    addr: {
      zh: '上海市普陀区莫干山路50号',
      en: 'No. 50 Moganshan Road, Putuo District, Shanghai'
    },
    stay: 40,
    tags: [],
    hours: {
      zh: '园区约 08:00–22:00；画廊多为 10:00–18:00，个别周一闭馆',
      de: 'Areal ca. 08:00–22:00; Galerien meist 10:00–18:00, teils montags geschlossen'
    },
    highlight: {
      zh: '纺织厂厂房里长出的当代艺术区，涂鸦墙是它的门面。',
      de: 'Ein zeitgenössisches Kunstviertel in alten Spinnereihallen – mit Graffitiwänden als Aushängeschild.'
    },
    intro: {
      zh: 'M50创意园是一处由废弃纺织厂改造而成的地标性艺术街区。\n\n这里原本是一座纺织厂，于1999年关闭。如今，M50汇集了艺术家工作室、画廊以及各类创意文化机构，并已发展成为充满活力的当代艺术与创意文化聚集地。\n\n园区保留了烟囱、锅炉等工业时代留下的痕迹，同时也融入了涂鸦等现代元素。\n\n在这里还可以体验各种手工活动项目，还有丰富的免费展览可供参观。\n\n最新展览信息请查看M50微信公众号',
      de: 'Der M50 Creative Park ist ein kunstprägendes Viertel, das aus einer stillgelegten Textilfabrik entstanden ist.\n\nHier stand ursprünglich eine Textilfabrik, die 1999 geschlossen wurde. Heute versammelt M50 Künstlerateliers, Galerien und verschiedene kreative Kultureinrichtungen und hat sich zu einem lebendigen Zentrum für zeitgenössische Kunst und Kreativkultur entwickelt.\n\nSchornstein, Kessel und andere Spuren des Industriezeitalters blieben erhalten und verbinden sich mit modernen Elementen wie Graffiti.\n\nAußerdem gibt es verschiedene handwerkliche Aktivitäten und zahlreiche kostenlose Ausstellungen.\n\nFür aktuelle Ausstellungsinformationen bitte den WeChat-Kanal von M50 prüfen.'
    },
    tips: null
  },

  {
    id: 'fuxin',
    type: 'glance',
    order: 100,
    leg: '15:20–16:00',
    coord: [121.464724, 31.241645],
    name: { zh: '福新面粉一厂旧址', en: 'Former Site of Fuxin No. 1 Flour Mill', de: 'Ehemalige Fuxin-Mehlmühle Nr. 1' },
    addr: {
      zh: '上海市静安区光复路423号',
      en: 'No. 423 Guangfu Road'
    },
    stay: 5,
    tags: [],
    hours: {
      zh: '沿河外观，全天可见；内部不开放参观',
      de: 'Ansicht vom Ufer jederzeit möglich; innen keine Besichtigung'
    },
    highlight: {
      zh: '河边一排老厂房，是苏州河“面粉厂时代”剩下的半页。',
      de: 'Eine Reihe alter Fabrikbauten am Wasser – die halbe Seite, die vom „Mühlenzeitalter“ des Suzhou Creek blieb.'
    },
    intro: {
      zh: '1912 年底，荣宗敬、荣德生兄弟在此创办福新面粉厂，依托苏州河水运与沿岸产业聚集，发展成近代上海最大的私营机器面粉厂。1956 年与阜丰面粉厂合并，后成为上海面粉厂。现存沿河两排建筑：前一排为清水青红砖的砖木结构二至三层楼房，后排为六层钢筋混凝土框架。南墙仍可见“福新面粉公司”字样。',
      de: 'Ende 1912 gründeten die Brüder Rong Zongjing und Rong Desheng hier die Fuxin-Mehlmühle. Dank der Binnenschifffahrt auf dem Suzhou Creek und der benachbarten Betriebe wuchs sie zur größten privaten Maschinenmühle Shanghais. 1956 fusionierte sie mit der Fufeng-Mühle, später wurde daraus die Shanghaier Mehlwerke. Erhalten sind zwei Gebäudereihen am Wasser: vorne zwei- bis dreigeschossige Ziegelbauten mit rot-grünem Sichtmauerwerk, hinten ein sechsgeschossiger Stahlbetonbau. An der Südwand ist noch der Schriftzug „Fuxin Flour Company“ zu erkennen.'
    },
    tips: null
  },

  {
    id: 'butterfly',
    type: 'stop',
    order: 80,
    slot: '14:45–15:20',
    coord: [121.456146, 31.237291],
    name: {
      zh: '蝴蝶湾党群服务中心',
      en: 'Butterfly Bay Community Party and Public Service Center',
      de: 'Stadtteilzentrum Butterfly Bay'
    },
    addr: {
      zh: '上海市静安区康定东路85号',
      en: 'No. 85 East Kangding Road, Jing’an District, Shanghai'
    },
    stay: 30,
    tags: [
      { key: 'community-food', icon: 'food', label: { zh: '最美社区食堂', de: 'Schönste Nachbarschaftskantine' } },
      { key: 'cafe', icon: 'coffee', label: { zh: '咖啡馆', de: 'Café' } },
      { key: 'library', icon: 'library', label: { zh: '图书馆', de: 'Bibliothek' } },
      { key: 'residence', icon: 'residence', label: { zh: '名人故居', de: 'Wohnhaus einer berühmten Persönlichkeit' } }
    ],
    hours: {
      zh: '邻里楼约 8:30–20:30，蝴蝶堡约 8:30–20:00，水晶宫约 9:00–17:00（各空间略有差异）',
      de: 'Nachbarschaftsgebäude ca. 8:30–20:30, „Schmetterlingsburg“ ca. 8:30–20:00, „Kristallpalast“ ca. 9:00–17:00 (Abweichungen möglich)'
    },
    highlight: {
      zh: '不是景点：一个向所有人开放的社区客厅。',
      de: 'Keine Sehenswürdigkeit, sondern ein offenes Wohnzimmer für alle im Quartier.'
    },
    intro: {
      zh: '蝴蝶湾党群服务中心的核心建筑“蝴蝶堡”是一栋有百余年历史、具有安妮女王复兴风格的老建筑，与中国现代著名女作家张爱玲故居改造的“邻里楼”和原泵房改造的“水晶宫”向周边居民提供社区食堂、自习教室、跑者咖啡馆等玩乐与便民服务，也常举办社区市集和手作活动。\n\n周边是蝴蝶湾公园与苏州河滨水步道，这类空间在中国城市里非常普遍，却很少出现在游客路线中——它展示的是“15 分钟社区生活圈”的日常运行方式。',
      de: 'Das Kerngebäude des Zentrums, die „Schmetterlingsburg“, ist ein über hundert Jahre altes Gebäude im Queen-Anne-Revival-Stil. Zusammen mit dem zum ehemaligen Wohnhaus der Schriftstellerin Eileen Chang umgebauten „Nachbarschaftsgebäude“ und dem aus einem früheren Pumpenhaus entstandenen „Kristallpalast“ bietet es den Anwohnern Raum zum Lesen, Ausruhen, Spielen und für praktische Dienstleistungen; außerdem finden hier oft Quartiersmärkte und Handwerksaktivitäten statt.\n\nIn der Umgebung liegen der Schmetterlingsbucht-Park und die Uferpromenade des Suzhou Creek. Solche Orte sind in chinesischen Städten sehr verbreitet, tauchen aber nur selten in Touristenrouten auf – hier zeigt sich, wie ein „15-Minuten-Lebenskreis“ im Alltag funktioniert.'
    },
    tips: null
  },

  {
    id: 'chapter-creek',
    type: 'chapter',
    order: 85,
    title: {
      zh: '苏州河滨水步道',
      en: 'Suzhou Creek Riverside Walk',
      de: 'Suzhou-Creek-Uferweg'
    },
    body: {
      zh: '苏州河曾凭借便利的水运，沿岸集聚起纺织厂、面粉厂、仓库与各类工业厂房，河水也曾遭受严重污染。\n\n二十世纪上半叶，大批工人与普通百姓栖居在这片工业岸线旁。那些低矮破败的简易棚屋，便是上海人口中的“滚地龙”。彼时，南京路百货云集、舞厅流光，霓虹灯火璀璨；咫尺之外，却是机器轰鸣的工厂、连片的棚户，以及为生活苦苦挣扎的普通人。相隔不远，却仿若两个截然不同的上海。\n\n如今漫步河畔，老厂房蜕变为文艺艺术园区，昔日的工业岸线改造为可供跑步、滑板、遛狗休憩的公共空间。曾经朴素甚至贫寒的河岸地带，已然成为寸土寸金的城市热土，沿河散落着诸多格调精致的咖啡馆，成为网红与潮人争相打卡的去处。',
      de: 'Der Suzhou Creek zog dank seiner günstigen Wasserwege Spinnereien, Mehlmühlen, Lagerhäuser und verschiedenste Industriebauten an; zugleich war das Wasser einst stark verschmutzt.\n\nIn der ersten Hälfte des 20. Jahrhunderts lebten zahlreiche Arbeiter und einfache Stadtbewohner an dieser industriell geprägten Uferzone. Die niedrigen, heruntergekommenen Behelfshütten wurden in Shanghai „Gundilong“ genannt. Damals reihten sich an der Nanjing Road Kaufhäuser aneinander, Tanzlokale leuchteten und Neonlichter erhellten die Nacht; nur wenige Schritte entfernt dröhnten Fabrikmaschinen, erstreckten sich Hüttensiedlungen, und gewöhnliche Menschen kämpften ums Überleben. Die Orte lagen nah beieinander und wirkten doch wie zwei völlig verschiedene Shanghais.\n\nHeute spaziert man am Fluss entlang: Alte Fabrikhallen haben sich in kreative Kunstviertel verwandelt, und das frühere Industrieufer wurde zu öffentlichen Räumen zum Joggen, Skaten, Gassigehen und Ausruhen. Das einst schlichte, teils ärmliche Ufer ist zu begehrtem Stadtgebiet geworden; entlang des Flusses liegen zahlreiche stilvolle Cafés und beliebte Treffpunkte für Influencer und Trendmenschen.'
    },
    bookNote: {
      zh: '石库门、棚户区、人力车夫、菜场、煤球店、烟纸店、老虎灶，以及生活在弄堂里的普通市民。',
      de: 'Shikumen, Hüttensiedlungen, Rikschafahrer, Märkte, Kohlenläden, Tabak- und Papierläden, öffentliche Kochstellen – und die gewöhnlichen Menschen, die in den Gassen lebten.'
    },
    links: [{ label: { zh: '《霓虹灯外：20世纪初日常生活中的上海》', en: 'Beyond the Neon Lights: Everyday Shanghai in the Early Twentieth Century', de: 'Beyond the Neon Lights: Everyday Shanghai in the Early Twentieth Century' }, url: { zh: 'https://book.douban.com/subject/30254263/', en: 'https://www.ucpress.edu/book/9780520262202/beyond-the-neon-lights', de: 'https://www.ucpress.edu/books/beyond-the-neon-lights/paper' } }]
  },

  {
    id: 'fotografiska',
    type: 'optional',
    order: 105,
    addMin: 30,
    // 官网 WGS-84 [121.4652706, 31.24168] 转为 GCJ-02；光复路127号，四行仓库旁。
    coord: [121.469821, 31.239765],
    name: { zh: 'Fotografiska 上海影像艺术中心', en: 'Fotografiska Shanghai', de: 'Fotografiska Shanghai' },
    addr: {
      zh: '上海市静安区光复路127号',
      en: 'No. 127 Guangfu Road, Jing’an District, Shanghai'
    },
    stay: 30,
    tags: [
      { key: 'art', icon: 'art', label: { zh: '艺术馆', de: 'Kunstzentrum' } },
      { key: 'cafe', icon: 'coffee', label: { zh: '咖啡馆', de: 'Café' } }
    ],
    hours: {
      zh: '每天 10:30–23:00',
      de: 'täglich 10:30–23:00'
    },
    highlight: {
      zh: '从银行仓库到国际影像艺术机构，苏州河边的工业建筑继续讲述城市。',
      de: 'Vom Banklagerhaus zur internationalen Institution für visuelle Kunst – ein Industriebau am Suzhou Creek erzählt weiter von der Stadt.'
    },
    intro: {
      zh: 'Fotografiska 是一家源自斯德哥尔摩的国际影像艺术机构，上海馆坐落在苏州河畔，由一座始建于 1931 年的银行仓库改建而成，也是四行仓库体系的一部分。\n\n四层高的仓库保留了早期工业建筑的尺度和现代主义外观，如今则被重新改造成摄影、影像、装置和当代视觉艺术的展览空间。',
      de: 'Fotografiska ist eine internationale Institution für Fotografie und visuelle Kunst mit Ursprung in Stockholm. Der Standort Shanghai liegt am Suzhou Creek und wurde in einem 1931 errichteten Banklagerhaus eingerichtet, das Teil des Sihang-Warehouse-Komplexes ist.\n\nDas viergeschossige Lagerhaus bewahrt die Dimensionen und die moderne Fassade der frühen Industriearchitektur. Heute ist es ein Ausstellungsort für Fotografie, Bewegtbild, Installationen und zeitgenössische visuelle Kunst.'
    },
    tips: null,
    links: [{ label: { zh: 'Fotografiska 官方网站 ↗', en: 'Fotografiska official website ↗', de: 'Offizielle Website von Fotografiska ↗' }, url: { zh: 'https://shanghai.fotografiska.com/zh/', en: 'https://shanghai.fotografiska.com/zh/', de: 'https://shanghai.fotografiska.com/en' } }]
  },

  {
    id: 'sihang',
    type: 'stop',
    order: 110,
    slot: '16:00–17:00',
    coord: [121.471089, 31.240258],
    name: {
      zh: '四行仓库纪念馆',
      en: 'Shanghai Sihang Warehouse Battle Memorial',
      de: 'Sihang-Lagerhaus-Gedenkstätte'
    },
    addr: {
      zh: '上海市静安区光复路21号',
      en: 'No. 21 Guangfu Road, Jing’an District, Shanghai'
    },
    stay: 30,
    tags: [
      { key: 'war-memory', icon: 'memorial', label: { zh: '战争记忆', de: 'Kriegserinnerung' } },
      { key: 'entry-cutoff', icon: 'clock', label: { zh: '16:00停止入馆', de: 'Einlass bis 16:00' } }
    ],
    hours: {
      zh: '周二至周日 9:00–16:30（16:00 停止入馆）；周一闭馆，法定节假日除外；免费、免预约',
      de: 'Di–So 9:00–16:30 (Einlass bis 16:00); montags geschlossen außer an Feiertagen; kostenlos, ohne Anmeldung'
    },
    highlight: {
      zh: '城市把一场战役留在原址上，也留在公共记忆里。',
      de: 'Die Stadt bewahrt eine Schlacht am Originalschauplatz – und im öffentlichen Gedächtnis.'
    },
    intro: {
      zh: '1937年淞沪会战末期，中国军队第88师420余名官兵在谢晋元率领下坚守四行仓库四昼夜，后来以“八百壮士”闻名。今天的上海四行仓库抗战纪念馆就建在这处战场旧址之上，西墙至今仍保留着当年的弹孔与炮击痕迹。\n\n纪念馆的核心展览围绕四行仓库保卫战展开，通过史料、场景复原等方式再现战斗经过与守军事迹。展陈规模不大，却把“遗址、战斗、纪念”三层含义叠在同一栋建筑里。这里也是本路线的终点：从寺庙、市井、工厂、河岸一路走到战争记忆。',
      de: 'Ende der Schlacht um Shanghai 1937 hielten sich mehr als 420 Soldaten der chinesischen 88. Division unter dem Kommando von Xie Jinyuan vier Tage und vier Nächte im Sihang-Lagerhaus. Später wurden sie als „800 Helden“ bekannt. Das heutige Shanghai Sihang Warehouse Battle Memorial steht auf diesem ehemaligen Schlachtfeld; an der Westwand sind bis heute Einschusslöcher und Spuren des Beschusses erhalten.\n\nDie zentrale Ausstellung des Memorials widmet sich der Verteidigung des Sihang-Lagerhauses und rekonstruiert anhand historischer Quellen und szenischer Darstellungen den Verlauf der Kämpfe und die Taten der Verteidiger. Die Ausstellung ist nicht groß, verbindet aber in einem Gebäude die drei Ebenen „historischer Ort, Schlacht und Gedenken“. Hier endet auch diese Route: Sie führt von Tempel, Alltag, Fabriken und Flussufer bis zur Erinnerung an den Krieg.'
    },
    tips: null,
    guideLinks: [
      {
        label: { zh: '纪念馆导览 ↗', en: 'Memorial guide ↗', de: 'Guide zur Gedenkstätte ↗' },
        url: { zh: 'http://sihang.firstinvest.com.cn/#/', en: 'http://sihang.firstinvest.com.cn/#/', de: 'http://sihang.firstinvest.com.cn/#/list/en' }
      }
    ],
    linksTitle: { zh: '推荐电影', de: 'Filmtipp' },
    filmNote: {
      zh: '一河之隔，一边是炮火中的生死战场，另一边却灯火如常，人们喝着咖啡，隔岸围观这场战争。',
      de: 'Nur durch den Fluss getrennt: Auf der einen Seite tobte ein Kampf auf Leben und Tod, auf der anderen gingen die Lichter an, während Menschen Kaffee tranken und den Krieg vom gegenüberliegenden Ufer aus beobachteten.'
    },
    links: [
          {
        label: { zh: '了解《八佰》 ↗', en: 'more about The Eight Hundred ↗', de: 'Mehr über The Eight Hundred ↗' },
        url: 'https://www.cinema.de/film/the-800%2C10371922.html?utm_source=chatgpt.com'
      }
    ]
  },

  {
    id: 'joycity',
    type: 'optional',
    order: 120,
    addMin: 60,
    coord: [121.472158, 31.243898],
    name: { zh: '静安大悦城', en: 'Jing’an Joy City', de: 'Jing’an Joy City' },
    addr: {
      zh: '上海市静安区西藏北路166号',
      en: 'No. 166 North Xizang Road, Jing’an District, Shanghai'
    },
    stay: 60,
    tags: [
      'mall',
      { key: 'ferris', icon: 'ferris', label: { zh: '摩天轮', de: 'Riesenrad' } }
    ],
    hours: {
      zh: '约 10:00–22:00；摩天轮约 11:00–21:00（周末与节假日 10:00 起）',
      de: 'ca. 10:00–22:00; Riesenrad ca. 11:00–21:00 (am Wochenende ab 10:00)'
    },
    highlight: {
      zh: '二次元、快闪与屋顶摩天轮：上海年轻人的商业切面。',
      de: 'Anime-Kultur, Pop-up-Stores und ein Riesenrad auf dem Dach: Shanghais junge Konsumwelt.'
    },
    intro: {
      zh: '静安大悦城是上海很有代表性的二次元聚集地。商场里聚集了大量动漫、游戏和潮玩周边店，各种热门 IP 快闪和限定活动几乎不断档。经常能遇到精心妆造的 Coser 在商场里拍照、和同好“集邮”，也有人专程带着角色周边来打卡。',
      de: 'Jing’an Joy City ist einer der bekanntesten Treffpunkte der Anime- und Popkultur in Shanghai. Im Einkaufszentrum gibt es zahlreiche Geschäfte für Anime-, Gaming- und Designer-Toys sowie Fanartikel. Pop-up-Stores und limitierte Aktionen beliebter IPs finden hier nahezu ohne Unterbrechung statt. Häufig sieht man aufwendig kostümierte Cosplayer, die im Einkaufszentrum Fotos machen und sich mit anderen Fans zum „Sammeln“ von Erinnerungsfotos treffen. Manche kommen auch eigens mit Fanartikeln ihrer Lieblingsfiguren zum Check-in.'
    },
    tips: null
  }
];

/* ---------- 推荐拍照点（只显示在地图上，不参与路线计算） ---------- */
const PHOTO_SPOTS = [
  {
    id: 'changhua-moganshan',
    coord: [121.443996, 31.248676],
    name: {
      zh: '昌化路与莫干山路交叉口',
      de: 'Kreuzung Changhua Road / Moganshan Road'
    },
    hint: {
      zh: '推荐拍摄天安千树的街道纵深。',
      de: 'Empfohlener Blick entlang der Straße auf 1000 Trees.'
    }
  },
  {
    id: 'changhua-bridge',
    coord: [121.443891, 31.249791],
    name: {
      zh: '昌化路桥',
      de: 'Changhua Road Bridge'
    },
    hint: {
      zh: '推荐从桥上拍摄天安千树与苏州河。',
      de: 'Empfohlener Blick auf 1000 Trees und den Suzhou Creek.'
    }
  }
];

/* ---------- 隐藏玩法：苏州河游船 ---------- */
const BOAT = {
  zh: {
    title: { zh: '隐藏玩法：苏州河游船', en: 'Hidden option: Suzhou Creek boat ride' },
    paragraphs: [
      '苏州河不仅适合沿岸步行，也可以换个角度坐船看城市。游船沿苏州河穿行，可以从水面欣赏两岸的老建筑、工业遗存、桥梁，以及不断变化的城市天际线。',
      '本次 Citywalk 会经过昌化路码头和四行仓库码头，都可以作为上船点。但是游船班次较少，需要提前规划。'
    ],
    ticket: '购票和游船路线信息：悠游苏州河微信公众号。'
  },
  de: {
    title: { zh: '隐藏玩法：苏州河游船', en: 'Hidden option: Suzhou Creek boat ride' },
    paragraphs: [
      'Der Suzhou Creek eignet sich nicht nur für Spaziergänge am Ufer – man kann die Stadt auch vom Wasser aus entdecken. Die Boote fahren den Fluss entlang und eröffnen den Blick auf alte Gebäude, industrielle Relikte, Brücken und eine sich ständig verändernde Skyline.',
      'Auf dieser Citywalk-Route kommt man am Changhua-Road-Pier und am Sihang-Warehouse-Pier vorbei; beide können als Zustieg dienen. Einige Linien fahren weiter bis zum Bund Source, dem Mündungsbereich, bevor der Suzhou Creek in den Huangpu-Fluss fließt.'
    ],
    ticket: 'Ticket- und Routeninformationen: über den WeChat-Account „悠游苏州河“. Dein chinesischer Student Buddy kann beim Nachschauen helfen'
  },
};

/* ---------- 结尾总结 ---------- */
const ENDING = {
  zh: {
    title: { zh: '结语：另一面的上海', en: 'Conclusion: Another Side of Shanghai' },
    body: [
      '上海不只有外滩的天际线、繁华的商业街和被反复介绍的城市地标。',
      '今天，你看到寺院如何融入社区，旧里弄和工厂如何获得新的用途，曾经污染的河岸如何成为居民散步、运动和休息的公共空间，也看到城市如何保存战争记忆。城市在这里被生活使用，也在这里不断变化；有些记忆被更新，有些记忆则被保留下来。',
      '也许，这些不那么耀眼、却一直在运转的地方，正是上海最值得慢慢看的另一面。'
    ],
    question: '今天哪一个地方，让你觉得自己看到了不一样的上海？'
  },
  de: {
    title: { zh: '结语：另一面的上海', en: 'Conclusion: Another Side of Shanghai' },
    body: [
      'Shanghai ist mehr als die Skyline des Bunds, glänzende Einkaufsstraßen und die immer wieder vorgestellten Sehenswürdigkeiten.',
      'Heute habt ihr gesehen, wie ein Tempel Teil einer Nachbarschaft ist, wie alte Gassen und Fabriken neue Aufgaben bekommen, wie ein einst verseuchtes Ufer zum öffentlichen Raum für Spaziergänge, Sport und Pausen wurde – und wie eine Stadt ihre Kriegserinnerung bewahrt. Die Stadt wird hier vom Alltag genutzt und verändert sich zugleich; manche Erinnerungen werden erneuert, andere bleiben erhalten.',
      'Vielleicht sind gerade diese unscheinbaren Orte, die ständig in Betrieb bleiben, die andere Seite Shanghais, die es sich am meisten lohnt, langsam zu entdecken.'
    ],
    question: 'Welcher Ort hat dir heute das Gefühl gegeben, eine andere Seite Shanghais zu sehen?'
  }
};

/* ---------- 页脚参考入口 ---------- */
const FOOT_LINKS = [];

/* ---------- 路线基础信息 ---------- */
const ROUTE_META = {
  baseMinutes: 330,      // 固定 5.5 小时
  fallbackKm: 6.5        // 地图未加载时的步行距离估算
};
