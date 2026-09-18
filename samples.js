// samples.js — demo page 資料設定。改這個檔案就好，index.html 不用動。
//
// SECTIONS: 兩個比較區。VTN/ETN 區可從 281–320 全部 40 句挑（分數 ../stats/tab1_per_utt_scores.json），
//           AVH-WS-FT 區只能從 302–320 挑（Chien 只有這 18 句，分數 ../stats/tab2_per_utt_scores.json）。
// SAMPLES:  每句的中文 transcript（來源 ELVC_CMKT/data/EL01v4_eval/text_char）。
// SYSTEMS:  demo 表格的欄位，key 對應 samples/ 內的檔名 prefix。
//           檔名規則：samples/{prefix}_EL01v4_{id}.{wav|mp4}

window.DEMO = {
  // 兩個比較區，各五句，依「對方系統 CER − Proposed CER」由大到小排：
  // 從我方領先最多、到打平、到我方落後最多，刻意涵蓋 failure case。
  // 分數來源 SCORES：兩份決定性重解碼設定相同，重疊的 18 句輸出完全一致。
  SECTIONS: [
    {
      title: "vs. previous audio-driven approaches (Audio VTN, Audio ETN)",
      desc: "Five sentences ordered by the CER gap between Audio ETN and our system: " +
            "our largest win first, a tie in the middle, our largest loss last. " +
            "All three share the back-end and the vocoder; only the input differs.",
      systems: ["EL_lip_roi_audio", "EL_lip_silent", "AudioVTN", "AudioETN", "Proposed", "NL_tgt"],
      ids: [292, 310, 281, 316, 293],   // ETN−ours CER gap +60, +40, 0, -30, -40（40 句全集，見 ../stats/tab1_det.py）
      gap: "AudioETN",
    },
    {
      title: "vs. the prior audio-visual system (AVH-WS-FT)",
      desc: "Five sentences ordered by the CER gap between AVH-WS-FT and our system, " +
            "from our largest win to our largest loss. " +
            "AVH-WS-FT reads the EL waveform and the video with its own back-end and vocoder; ours reads the video only.",
      systems: ["EL_lip_roi_audio", "EL_lip_silent", "AVH-WS-FT", "Proposed", "NL_tgt"],
      ids: [310, 306, 302, 314, 308],   // gap +50, +30, 0, -40, -70
      gap: "AVH-WS-FT",
    },
  ],

  // 每個音檔旁邊顯示的辨識設定與分數。
  // RECOGNIZER：所有系統（含 Chien et al.）用同一設定重解碼，見 ../stats/tab2_det.py。
  RECOGNIZER: {
    model: "Whisper large-v3",
    weights: "openai-whisper 20250625, large-v3.pt (sha256 e5b1a55b…)",
    decoding: "language=zh, temperature=0 (greedy), condition_on_previous_text=False",
    note: "CER over characters; SER over pinyin syllables with tone. Not adapted to this speaker or to EL speech.",
  },
  // SCORES[id][systemKey] = [CER, SER(tone), Whisper hypothesis]

  SAMPLES: {
    281: "他捐了很多衣物給災區",
    292: "小妹現在自己會做飯了",
    293: "清明節下了一天毛毛雨",
    302: "這個池塘裡養了很多魚",
    303: "這裡將要建一座發電廠",
    304: "他下山時被蛇咬了一口",
    305: "他計畫今年買一台電腦",
    306: "這間公司要招聘工程師",
    307: "便衣警察抓到一名小偷",
    308: "他是那座大樓的設計師",
    309: "他們擺好姿勢準備拍照",
    310: "今天老師宣布提前放學",
    311: "桌子上擺了一大盤瓜子",
    312: "中國萬里長城中外聞名",
    313: "那片原始森林發生大火",
    314: "棒球飛過來打破了窗戶",
    315: "他的哥哥養了一群白鴿",
    316: "他做完功課才上床睡覺",
    318: "這裡的風俗習慣很特別",
    319: "他腰痛的老毛病又犯了",
    320: "他不小心把茶杯碰翻了",
  },

  // 漢語拼音（帶聲調），由 pypinyin Style.TONE 產生，給非中文語者看發音
  PINYIN: {
    281: "tā juān le hěn duō yī wù gěi zāi qū",
    292: "xiǎo mèi xiàn zài zì jǐ huì zuò fàn le",
    293: "qīng míng jié xià le yī tiān máo máo yǔ",
    302: "zhè ge chí táng lǐ yǎng le hěn duō yú",
    303: "zhè lǐ jiāng yào jiàn yī zuò fā diàn chǎng",
    304: "tā xià shān shí bèi shé yǎo le yī kǒu",
    308: "tā shì nà zuò dà lóu de shè jì shī",
    309: "tā men bǎi hǎo zī shì zhǔn bèi pāi zhào",
    310: "jīn tiān lǎo shī xuān bù tí qián fàng xué",
    312: "zhōng guó wàn lǐ cháng chéng zhōng wài wén míng",
    313: "nà piàn yuán shǐ sēn lín fā shēng dà huǒ",
    314: "bàng qiú fēi guò lái dǎ pò le chuāng hù",
    315: "tā dī gē gē yǎng le yī qún bái gē",
    316: "tā zuò wán gōng kè cái shàng chuáng shuì jiào",
    319: "tā yāo tòng de lǎo máo bìng yòu fàn le",
    305: "tā jì huà jīn nián mǎi yī tái diàn nǎo",
    306: "zhè jiān gōng sī yào zhāo pìn gōng chéng shī",
    307: "biàn yī jǐng chá zhuā dào yī míng xiǎo tōu",
    311: "zhuō zi shàng bǎi le yī dà pán guā zi",
    318: "zhè lǐ de fēng sú xí guàn hěn tè bié",
    320: "tā bù xiǎo xīn bǎ chá bēi pèng fān le",
  },

  SCORES: {
    281: { "AudioVTN": [50, 40, "他捲了多一物給在去"], "AudioETN": [40, 40, "他捐的很多以物給宅局"], "Proposed": [40, 40, "他捲了很多遺物給塞駒"] },
    292: { "AudioVTN": [100, 90, "叫米進仔起回座盤的"], "AudioETN": [110, 110, "就用迷津菜汽器灰鐵般的"], "Proposed": [50, 50, "小美間在時起回做飯了"] },
    293: { "AudioVTN": [60, 60, "景興節下了一千跑步"], "AudioETN": [50, 50, "金鈴錢下了一千毛毛魚"], "Proposed": [90, 90, "精明間加熱飲甜寶寶魚"] },
    302: { "AudioVTN": [30, 30, "這個池塘裡降的很多雨"], "AudioETN": [70, 50, "這個職場理想的多餘"], "Proposed": [60, 40, "這個是糖泥漿的很多餘"], "CLDNN": [100, 90, "則可知道理將得恩婆運"], "AVH-WS": [70, 60, "這個時常意向可能多於"], "AVH-WS-FT": [60, 50, "這個市場一降的很多於"] },
    303: { "AudioVTN": [60, 60, "這裡將條前幾座把天長"], "AudioETN": [70, 60, "這裡將將將計做八點長"], "Proposed": [70, 70, "這裡上要先聽出八點章"], "CLDNN": [100, 100, ""], "AVH-WS": [70, 60, "這裡將有堅定作法念叉"], "AVH-WS-FT": [70, 70, "這裡將有先祈說法念他"] },
    304: { "AudioVTN": [70, 70, "他加餐時北側要熱一桌"], "AudioETN": [70, 70, "他家暫時杯著藥樂一共"], "Proposed": [80, 80, "大家插吃北車要樂一口"], "CLDNN": [90, 90, "他家在去北城要在營作"], "AVH-WS": [60, 50, "阿加贊士背著咬了一口"], "AVH-WS-FT": [60, 60, "他家暫時被這藥熱一勾"] },
    305: { "AudioVTN": [70, 60, "他記掛清田買一才見好"], "AudioETN": [70, 70, "他雞瓜今年滿意再見啦"], "Proposed": [60, 60, "他喜歡今天買硬海電到"], "CLDNN": [90, 90, "他去挖解點麥去在天啊"], "AVH-WS": [50, 40, "阿嘴話今天賣一台電腦"], "AVH-WS-FT": [80, 80, "他喜歡千年百億在天堂"] },
    306: { "AudioVTN": [70, 60, "者間公職要照被公正職"], "AudioETN": [80, 70, "這件同時要秉公聖旨"], "Proposed": [70, 60, "這結公事要逃兵公正制"], "CLDNN": [90, 90, "這間房子有透明風的聲音"], "AVH-WS": [90, 90, "可典共是要朝平皇審日"], "AVH-WS-FT": [100, 100, "德界奉承幼宗民共之志"] },
    307: { "AudioVTN": [90, 90, "建議駕駛到雲頂交通"], "AudioETN": [70, 70, "建議警察找到雲林交通"], "Proposed": [80, 70, "每天常做到一明早通"], "CLDNN": [90, 80, "便以行大作道以淋酒酒"], "AVH-WS": [10, 20, "便宜警察抓到一名小偷"], "AVH-WS-FT": [60, 60, "已經他抓到一名教頭"] },
    308: { "AudioVTN": [40, 40, "他知那座大樓的遮景"], "AudioETN": [70, 70, "他知哪多大樓大者習智"], "Proposed": [70, 70, "他吃大桌大流的這幾隻"], "CLDNN": [80, 70, "他其實想做大樓的這個地址"], "AVH-WS": [60, 60, "他是拿著大農的折旗子"], "AVH-WS-FT": [0, 0, "他是那座大樓的設計師"] },
    309: { "AudioVTN": [80, 80, "當白白要時準備百場"], "AudioETN": [80, 70, "他們拜藥師順被拜葬"], "Proposed": [60, 50, "他們百藥師準備拜獎"], "CLDNN": [120, 120, "那剛剛調子的我們可以拍照了喔"], "AVH-WS": [100, 100, "這本本有志之從明白嗎"], "AVH-WS-FT": [100, 100, ""] },
    310: { "AudioVTN": [80, 70, "寧天導師全部跌方絕"], "AudioETN": [80, 70, "聽天導士全部細節放絕"], "Proposed": [40, 30, "今天老師全部也講放學"], "CLDNN": [100, 100, ""], "AVH-WS": [60, 50, "今天到時全部禮見放學"], "AVH-WS-FT": [90, 80, "民間造勢協不提建方決"] },
    311: { "AudioVTN": [30, 30, "我蒸上擺了一大半瓜子"], "AudioETN": [40, 40, "我智商擺了一大半瓜子"], "Proposed": [20, 20, "桌上擺了一大本瓜子"], "CLDNN": [50, 50, "我身上擺了一大本畫紙"], "AVH-WS": [40, 40, "我身上拜了一大幫瓜子"], "AVH-WS-FT": [40, 40, "我世上拜了一大帆瓜子"] },
    312: { "AudioVTN": [90, 90, "管我完離昌鎮斷外昏迷"], "AudioETN": [100, 90, "風火管理廠長端完畢"], "Proposed": [40, 30, "中國萬裡長徵卓外不明"], "CLDNN": [90, 80, "透過管理長生總會公益"], "AVH-WS": [100, 100, "透過換離常症動化分泌"], "AVH-WS-FT": [90, 80, "控制管理長徵動態軍兵"] },
    313: { "AudioVTN": [70, 70, "他便全持神廷發生大禍"], "AudioETN": [70, 70, "他便許只是你發生大禍"], "Proposed": [90, 90, "他明願知真理髮生到我"], "CLDNN": [90, 90, "他平天世界停發正道作"], "AVH-WS": [70, 70, "阿別圈賜聖靈發生大禍"], "AVH-WS-FT": [100, 100, "他便捲直著你把人打窩"] },
    314: { "AudioVTN": [60, 60, "放酒飛過來他駁了狀物"], "AudioETN": [70, 70, "棒酒肥果然大破了狀物"], "Proposed": [80, 80, "罷休肥國來大撥了莊骨"], "CLDNN": [50, 50, "幫周本過來打破了川普"], "AVH-WS": [60, 70, "當朝飛過來他不了重"], "AVH-WS-FT": [40, 40, "他們就被過來打破了窗戶"] },
    315: { "AudioVTN": [60, 50, "他的哥哥將而以君敗戈"], "AudioETN": [40, 40, "他的哥哥將了一軍百合"], "Proposed": [40, 30, "他得割羊了一群白鴿"], "CLDNN": [70, 70, "他對整個方的一群敗者"], "AVH-WS": [60, 50, "他得求更忙了一群拜歌"], "AVH-WS-FT": [50, 60, "他的又登房了一群螞蟻"] },
    316: { "AudioVTN": [60, 60, "他朱管董可在上睡覺"], "AudioETN": [50, 50, "他祝還功格在床睡覺"], "Proposed": [80, 80, "他出完油格在這做跪腳"], "CLDNN": [130, 120, "他要出門工作在場做什麼推薦啊"], "AVH-WS": [100, 100, "他出外觀光閣在當宋月轎"], "AVH-WS-FT": [90, 80, "他出了關公格再上公黑價"] },
    318: { "AudioVTN": [60, 60, "他裡的工作習慣都變"], "AudioETN": [30, 20, "他禮的風俗習慣特別"], "Proposed": [10, 10, "這裡的風速習慣很特別"], "CLDNN": [70, 70, "那裡的風促新婚人的天"], "AVH-WS": [40, 40, "這裡的風俗習慣難得一點"], "AVH-WS-FT": [50, 50, "這裡的公主習慣難得比"] },
    319: { "AudioVTN": [60, 60, "他要衝的老比腳犯的"], "AudioETN": [90, 90, "他要通到別島跑翻的"], "Proposed": [60, 60, "他要抽的老婆兵有反了"], "CLDNN": [80, 80, "他要中途到法庭就犯罪了"], "AVH-WS": [60, 50, "他要懂得老毛病有反的"], "AVH-WS-FT": [70, 60, "他要動的老婆比右半的"] },
    320: { "AudioVTN": [70, 70, "他不孝心八倍同凡的"], "AudioETN": [50, 50, "他不小心怕他被捧翻的"], "Proposed": [50, 40, "大破曉金把茶杯補翻了"], "CLDNN": [110, 110, "大公求賤大賊免根犯上恨"], "AVH-WS": [160, 160, "咱們國家我們心裡可能還會很不太明白"], "AVH-WS-FT": [70, 70, "再不小心看到明光線"] },
  },

  // type: "video" | "video-muted" | "audio"
  // group: 欄位上方的分組標題
  SYSTEMS: [
    { key: "EL_lip_roi_audio", label: "EL lip ROI + EL audio", group: "Input",         type: "video",       note: "Model-input ROI muxed with the EL recording" },
    { key: "EL_lip_silent",    label: "EL silent lip ROI",     group: "Input",         type: "video-muted", note: "What our system actually sees: no audio" },
    { key: "AudioVTN",      label: "Audio VTN [1]",     group: "Audio-driven (A)",  type: "audio" },
    { key: "AudioETN",      label: "Audio ETN [2]",     group: "Audio-driven (A)",  type: "audio" },
    { key: "AVH-WS-FT",     label: "AVH-WS-FT [3]",     group: "Audio-visual (A+V)",type: "audio", note: "Own back-end & vocoder; reads EL audio + video" },
    { key: "Proposed",      label: "Proposed (V only)", group: "Video-driven (V)",  type: "audio", highlight: true },
    { key: "NL_tgt",        label: "Paired NL audio",   group: "Reference",         type: "audio", note: "Separate take, different length" },
  ],
};
