// =============================================
// 《影余寄情》作品数据库
// 每个文件是摄影集的一页，每页可能包含多幅作品
// =============================================

const pageDatabase = [
    // ========== 封面 ==========
    { page: 0, file: '封面.jpg', title: '余生向夏 甘载镜程', chapter: '封面',
      works: [{ title: '封面', date: '2014.07.20', location: '天门', type: '封面设计', desc: '摄影集封面' }] },
    
    // ========== 第一篇：步履赴山河 · 光影记远途 ==========
    { page: 1, file: '01.jpg', title: '影余寄情', chapter: '第一篇',
      works: [{ title: '序言与目录', date: '2026.04', location: '天门', type: '文字页', desc: '红黑配色，竖排文字，传统中式排版' }] },
    
    { page: 2, file: '02.jpg', title: '霞光初映楚天塔 / 天门古阁', chapter: '第一篇',
      works: [
        { title: '霞光初映楚天塔', date: '2014.09.24', location: '天门', type: '城市风光', desc: '电视塔与摩天轮黄昏剪影' },
        { title: '天门古阁，茶韵流芳', date: '2023.06.30', location: '天门', type: '人文建筑', desc: '传统楼阁建筑群' }
      ] },
    
    { page: 3, file: '03.jpg', title: '楚风商街 / 夜幕下的天门新城', chapter: '第一篇',
      works: [
        { title: '楚风商街，喜气盈门', date: '2012.09.20', location: '天门', type: '城市风光', desc: '传统商业街夜景' },
        { title: '夜幕下的天门新城', date: '2014.07.20', location: '天门', type: '城市风光', desc: '城市夜景发展变迁' }
      ] },
    
    { page: 4, file: '04.jpg', title: '茶楼沐晚照 / 茶经楼畔彩柱舞', chapter: '第一篇',
      works: [
        { title: '茶楼沐晚照', date: '2015.12.01', location: '天门', type: '人文风光', desc: '茶经楼日落剪影' },
        { title: '茶经楼畔彩柱舞', date: '2014.09.04', location: '天门', type: '创意摄影', desc: '夜间喷泉灯光秀' }
      ] },
    
    { page: 5, file: '05.jpg', title: '阁影入云端 / 落日映红西江水', chapter: '第一篇',
      works: [
        { title: '阁影入云端', date: '2015.10.17', location: '天门', type: '人文风光', desc: '浮香阁暮色' },
        { title: '落日映红西江水', date: '2016.04.30', location: '天门', type: '艺术纪实', desc: '夕阳染红江面' }
      ] },
    
    { page: 6, file: '06.jpg', title: '共享花事', chapter: '第一篇',
      works: [{ title: '共享花事', date: '2019.11.08', location: '天门', type: '人文风光', desc: '花海游人、冬湖游船' }] },
    
    { page: 7, file: '07.jpg', title: '雪满水榭亭 / 红墙素雪祀茶仙', chapter: '第一篇',
      works: [
        { title: '雪满水榭亭', date: '2026.01.20', location: '天门', type: '风光摄影', desc: '雪景园林' },
        { title: '红墙素雪祀茶仙', date: '2014.02.09', location: '天门', type: '人文风光', desc: '雪中茶经楼' }
      ] },
    
    { page: 8, file: '08.jpg', title: '古园灯影 / 印象西江', chapter: '第一篇',
      works: [
        { title: '古园灯影', date: '2025.10.10', location: '天门胡家花园', type: '人文风光', desc: '古园夜景' },
        { title: '印象西江', date: '2025.01.21', location: '天门', type: '艺术摄影', desc: '黑金风格艺术处理' }
      ] },
    
    { page: 9, file: '09.jpg', title: '车流纺锦章 / 流光溢彩照', chapter: '第一篇',
      works: [
        { title: '车流纺锦章', date: '2015.09.12', location: '北京', type: '城市风光', desc: '立交桥夜景车流光轨' },
        { title: '流光溢彩照', date: '2020.08.04', location: '天门', type: '城市风光', desc: '城市街景长曝光' }
      ] },
    
    { page: 10, file: '10.jpg', title: '张家湖静泊图 / 交相辉映', chapter: '第一篇',
      works: [
        { title: '张家湖静泊图', date: '2025.10.28', location: '天门', type: '风光摄影', desc: '湖面工程船静泊' },
        { title: '交相辉映', date: '2014.02.01', location: '天门', type: '城市风光', desc: '古塔夜景彩灯' }
      ] },
    
    { page: 11, file: '11.jpg', title: '百年大计', chapter: '第一篇',
      works: [{ title: '百年大计', date: '2015.11.08', location: '天门', type: '工业纪实', desc: '建筑工地施工场景' }] },
    
    { page: 12, file: '12.jpg', title: '天门大桥 / 雪花啤酒厂', chapter: '第一篇',
      works: [
        { title: '天门大桥', date: '2019.10.13', location: '天门', type: '人文纪实', desc: '老天门人的记忆' },
        { title: '雪花啤酒厂', date: '2012.10.25', location: '天门', type: '工业纪实', desc: '地方工业荣光见证' }
      ] },
    
    { page: 13, file: '13.jpg', title: '金辉映残荷 / 铁花翻空作礼花', chapter: '第一篇',
      works: [
        { title: '金辉映残荷', date: '2022.10.11', location: '天门', type: '艺术摄影', desc: '残荷秋色' },
        { title: '铁花翻空作礼花', date: '2024.02.11', location: '天门', type: '人文纪实', desc: '打铁花非遗表演' }
      ] },
    
    { page: 14, file: '14.jpg', title: '汉街波影伴桥眠 / 一桥弦韵映楚河', chapter: '第一篇',
      works: [
        { title: '汉街波影伴桥眠', date: '2012.01.25', location: '武汉', type: '城市风光', desc: '长桥倒影城市风光' },
        { title: '一桥弦韵映楚河', date: '2012.01.25', location: '武汉', type: '城市风光', desc: '斜拉桥琴弦般韵律' }
      ] },
    
    { page: 15, file: '15.jpg', title: '天安门夜景 / 杭州灯光秀', chapter: '第一篇',
      works: [
        { title: '天安门夜景', date: '2009.12.29', location: '北京', type: '城市风光', desc: '建国60周年后天安门城楼' },
        { title: '杭州灯光秀', date: '2017.01.03', location: '杭州', type: '城市风光', desc: '高楼LED灯光秀' }
      ] },
    
    { page: 16, file: '16.jpg', title: '申城不夜天 / 上海体育公园', chapter: '第一篇',
      works: [
        { title: '申城不夜天', date: '2019.09.07', location: '上海', type: '城市风光', desc: '陆家嘴天际线夜景' },
        { title: '上海体育公园', date: '2017.03.03', location: '上海', type: '人文风光', desc: '世博后滩螺旋形天桥' }
      ] },
    
    { page: 17, file: '17.jpg', title: '红墙影碧 / 上海世博会', chapter: '第一篇',
      works: [
        { title: '红墙影碧', date: '2017.04.23', location: '大上海国际花园', type: '城市风光', desc: '红白住宅楼群倒影' },
        { title: '上海世博会', date: '2010.07.17', location: '上海', type: '城市风光', desc: '世博园夜景' }
      ] },
    
    { page: 18, file: '18.jpg', title: '云的样子 / 夕照海碧台', chapter: '第一篇',
      works: [
        { title: '云的样子', date: '2017.08.03', location: '秦皇岛', type: '风光摄影', desc: '云层变幻' },
        { title: '夕照海碧台', date: '2019.02.17', location: '秦皇岛', type: '风光摄影', desc: '海边建筑日落剪影' }
      ] },
    
    { page: 19, file: '19.jpg', title: '半岛公园 / 在海边', chapter: '第一篇',
      works: [
        { title: '半岛公园', date: '2017.10.16', location: '秦皇岛', type: '风光摄影', desc: '冬日水鸟栖息' },
        { title: '在海边', date: '2019.01.13', location: '秦皇岛', type: '风光摄影', desc: '冬日黄昏海边剪影' }
      ] },
    
    { page: 20, file: '20.jpg', title: '海港日出 / 海钓', chapter: '第一篇',
      works: [
        { title: '海港日出', date: '2017.09.20', location: '秦皇岛', type: '风光摄影', desc: '港口日出与起重机剪影' },
        { title: '海钓', date: '2017.09.20', location: '秦皇岛', type: '人文纪实', desc: '垂钓者晨光下的诗意' }
      ] },
    
    { page: 21, file: '21.jpg', title: '待确认', chapter: '第一篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 22, file: '22.jpg', title: '新疆薰衣草基地 / 新疆牧场', chapter: '第一篇',
      works: [
        { title: '新疆薰衣草基地', date: '2019.06.23', location: '新疆伊犁', type: '风光摄影', desc: '薰衣草花海' },
        { title: '新疆牧场', date: '2019.06.22', location: '新疆伊犁', type: '人文纪实', desc: '马群与蒙古包' }
      ] },
    
    { page: 23, file: '23.jpg', title: '旗津望高 / 日月澄波', chapter: '第一篇',
      works: [
        { title: '旗津望高', date: '2010.06.13', location: '台湾高雄', type: '城市风光', desc: '高雄市俯瞰' },
        { title: '日月澄波', date: '2010.06.13', location: '台湾', type: '风光摄影', desc: '竹筏渔网船与耶稣光' }
      ] },
    
    { page: 24, file: '24.jpg', title: '待确认', chapter: '第一篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 25, file: '25.jpg', title: '北美秋天的都铎建筑 / 北美冬日的都铎建筑', chapter: '第一篇',
      works: [
        { title: '北美秋天的都铎建筑', date: '2013.09.12', location: '蒙特利尔', type: '城市风光', desc: '都铎复兴式建筑秋景' },
        { title: '北美冬日的都铎建筑', date: '2013.01.01', location: '蒙特利尔', type: '城市风光', desc: '都铎复兴式建筑雪景' }
      ] },
    
    { page: 26, file: '26.jpg', title: '待确认', chapter: '第一篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 27, file: '27.jpg', title: '奥林匹克场馆 / 谧静的农庄', chapter: '第一篇',
      works: [
        { title: '奥林匹克场馆', date: '2013.08.07', location: '蒙特利尔', type: '城市风光', desc: '蒙特利尔奥林匹克体育场' },
        { title: '谧静的农庄', date: '2013.08.11', location: '蒙特利尔', type: '风光摄影', desc: '田园风光' }
      ] },
    
    { page: 28, file: '28.jpg', title: '眺望蒙市 / 维多利亚海湾', chapter: '第一篇',
      works: [
        { title: '眺望蒙市', date: '2013.10.12', location: '蒙特利尔', type: '城市风光', desc: '皇家山俯瞰蒙特利尔' },
        { title: '维多利亚海湾', date: '2013.11.11', location: '温哥华', type: '风光摄影', desc: '帆船与飞鸟' }
      ] },
    
    { page: 29, file: '29.jpg', title: '丹顶鹤的故事 / 华灯初上', chapter: '第一篇',
      works: [
        { title: '丹顶鹤的故事', date: '2013.08', location: '蒙特利尔植物园', type: '艺术摄影', desc: '立体花坛大赛作品' },
        { title: '华灯初上', date: '2013.03.29', location: 'Saint-Lambert', type: '城市风光', desc: '小镇夜景' }
      ] },
    
    { page: 30, file: '30.jpg', title: '蒙特利尔赌场 / 老港船锚雕塑', chapter: '第一篇',
      works: [
        { title: '蒙特利尔赌场', date: '2013.03.30', location: '蒙特利尔', type: '城市风光', desc: '现代几何造型建筑' },
        { title: '老港船锚雕塑', date: '2013.09.30', location: '蒙特利尔', type: '人文纪实', desc: '船锚纪念航海历史' }
      ] },
    
    { page: 31, file: '31.jpg', title: '待确认', chapter: '第一篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 32, file: '32.jpg', title: '班夫国家公园硫磺山', chapter: '第一篇',
      works: [
        { title: '硫磺山山顶建筑', date: '2013.11.06', location: '加拿大班夫', type: '风光摄影', desc: '缆车终点站' },
        { title: '硫磺山云雾景观', date: '2013.11.06', location: '加拿大班夫', type: '风光摄影', desc: '山体云雾景观' }
      ] },
    
    { page: 33, file: '33.jpg', title: '拉龙德游乐园 / 雅克·卡蒂埃大桥', chapter: '第一篇',
      works: [
        { title: '拉龙德游乐园', date: '2013.07.29', location: '蒙特利尔', type: '人文纪实', desc: '过山车轨道纵横' },
        { title: '雅克·卡蒂埃大桥', date: '2013.07.29', location: '蒙特利尔', type: '城市风光', desc: '长曝光夜景' }
      ] },
    
    { page: 34, file: '34.jpg', title: '待确认', chapter: '第一篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 35, file: '35.jpg', title: '老挝大地 / 湄南河畔郑王庙', chapter: '第一篇',
      works: [
        { title: '老挝大地', date: '2024.10.11', location: '老挝', type: '风光摄影', desc: '航拍老挝大地' },
        { title: '湄南河畔郑王庙', date: '2012.03.24', location: '泰国曼谷', type: '人文风光', desc: '郑王庙日落' }
      ] },
    
    // ========== 第二篇：笑泪皆入镜 · 百态见真情 ==========
    { page: 36, file: '36.jpg', title: '老伴 / 父爱如山', chapter: '第二篇',
      works: [
        { title: '老伴', date: '2019.12.09', location: '天门', type: '家庭纪实', desc: '年长女性半身特写' },
        { title: '父爱如山', date: '2018.03.04', location: '秦皇岛', type: '家庭纪实', desc: '父亲肩扛孙女' }
      ] },
    
    { page: 37, file: '37.jpg', title: '女儿 / 外孙女', chapter: '第二篇',
      works: [
        { title: '女儿', date: '2018.06.07', location: '天门', type: '家庭纪实', desc: '户外公益活动现场' },
        { title: '外孙女', date: '2013.08.21', location: '蒙特利尔', type: '家庭纪实', desc: '葡萄藤叶间' }
      ] },
    
    { page: 38, file: '38.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 39, file: '39.jpg', title: '蒸蒸日上 / 蒸菜飘香', chapter: '第二篇',
      works: [
        { title: '蒸蒸日上', date: '2010.04.28', location: '天门', type: '人文纪实', desc: '天门首届蒸菜节' },
        { title: '蒸菜飘香', date: '2010.04.28', location: '天门', type: '人文纪实', desc: '蒸菜节美食' }
      ] },
    
    { page: 40, file: '40.jpg', title: '非遗传承人 / 义诊进社区', chapter: '第二篇',
      works: [
        { title: '非遗传承人', date: '2021.02.27', location: '天门', type: '人文纪实', desc: '传统技艺传承' },
        { title: '义诊进社区', date: '2022.03.02', location: '天门', type: '人文纪实', desc: '社区志愿服务' }
      ] },
    
    { page: 41, file: '41.jpg', title: '勇往直前 / 齐心夺冠', chapter: '第二篇',
      works: [
        { title: '勇往直前', date: '2017.10.05', location: '天门', type: '人文纪实', desc: '越野车飞跃水坑' },
        { title: '齐心夺冠', date: '2025.05.17', location: '天门', type: '人文纪实', desc: '龙舟赛竞技' }
      ] },
    
    { page: 42, file: '42.jpg', title: '凌空投晓梦 / 我们是快乐的摄影人', chapter: '第二篇',
      works: [
        { title: '凌空投晓梦', date: '2016.05.17', location: '天门', type: '人文纪实', desc: '篮球投篮瞬间' },
        { title: '我们是快乐的摄影人', date: '2016.04.26', location: '天门', type: '团体肖像', desc: '老年摄影爱好者团队' }
      ] },
    
    { page: 43, file: '43.jpg', title: '凌空投梦 / 快乐的摄影人', chapter: '第二篇',
      works: [
        { title: '凌空投梦', date: '2016.05.17', location: '天门', type: '人文纪实', desc: '篮球投篮瞬间' },
        { title: '快乐的摄影人', date: '2016.04.26', location: '天门', type: '团体肖像', desc: '老年摄影爱好者团队' }
      ] },
    
    { page: 44, file: '44.jpg', title: '岁月留痕 / 庄重的托付', chapter: '第二篇',
      works: [
        { title: '岁月留痕', date: '2011.11.13', location: '宜昌', type: '人文纪实', desc: '时光印记' },
        { title: '庄重的托付', date: '2020.06.26', location: '荆州', type: '人文纪实', desc: '手机拍摄' }
      ] },
    
    { page: 45, file: '45.jpg', title: '面艺呈绝技 / 夜舞龙光曳', chapter: '第二篇',
      works: [
        { title: '面艺呈绝技', date: '2017.02.14', location: '上海七宝镇', type: '人文纪实', desc: '面艺师傅拉面' },
        { title: '夜舞龙光曳', date: '2017.02.11', location: '上海欢乐谷', type: '创意摄影', desc: '光绘舞蹈' }
      ] },
    
    { page: 46, file: '46.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 47, file: '47.jpg', title: '铁板翻香忆皇岛 / 货好也要吆喝', chapter: '第二篇',
      works: [
        { title: '铁板翻香忆皇岛', date: '2017.09.28', location: '秦皇岛', type: '人文纪实', desc: '铁板烧美食' },
        { title: '货好也要吆喝', date: '2018.02.19', location: '秦皇岛', type: '人文纪实', desc: '街头叫卖' }
      ] },
    
    { page: 48, file: '48.jpg', title: '生活不易 / 他俩和他俩', chapter: '第二篇',
      works: [
        { title: '生活不易', date: '2017.08.16', location: '秦皇岛', type: '人文纪实', desc: '雨中外卖员' },
        { title: '他俩和他俩', date: '2018.02.16', location: '秦皇岛', type: '人文纪实', desc: '情侣与亲子' }
      ] },
    
    { page: 49, file: '49.jpg', title: '高雄夜市 / 铸剑为犁', chapter: '第二篇',
      works: [
        { title: '高雄夜市', date: '2010.06.10', location: '台湾高雄', type: '人文纪实', desc: '夜市美食' },
        { title: '铸剑为犁', date: '2010.06.10', location: '金门岛', type: '人文纪实', desc: '和平象征' }
      ] },
    
    { page: 50, file: '50.jpg', title: '萌宝看世界', chapter: '第二篇',
      works: [
        { title: '萌宝看世界（一）', date: '2017.12.27', location: '秦皇岛', type: '家庭纪实', desc: '幼儿好奇张望' },
        { title: '萌宝看世界（二）', date: '2017.09.02', location: '秦皇岛', type: '家庭纪实', desc: '幼儿探索世界' }
      ] },
    
    { page: 51, file: '51.jpg', title: '慧手童心 / 未来纳税人', chapter: '第二篇',
      works: [
        { title: '慧手童心', date: '2019.02.15', location: '秦皇岛', type: '家庭纪实', desc: '幼儿拼搭乐高' },
        { title: '未来纳税人', date: '2013.09.20', location: '蒙特利尔', type: '人文纪实', desc: '儿童列队持彩带' }
      ] },
    
    { page: 52, file: '52.jpg', title: '美国世贸大厦', chapter: '第二篇',
      works: [
        { title: '美国世贸大厦前', date: '2001.09.01', location: '纽约', type: '人文纪实', desc: '911前的世贸中心' },
        { title: '世贸大厦第103层酒吧', date: '2001.09.01', location: '纽约', type: '人文纪实', desc: '高空酒吧' }
      ] },
    
    { page: 53, file: '53.jpg', title: '美国会大厦前 / 联合国总部前', chapter: '第二篇',
      works: [
        { title: '美国会大厦前', date: '2001.09.01', location: '华盛顿', type: '人文纪实', desc: '国会大厦留影' },
        { title: '联合国总部前', date: '2001.08.31', location: '纽约', type: '人文纪实', desc: '联合国总部留影' }
      ] },
    
    { page: 54, file: '54.jpg', title: '与市长合影 / Mall里手艺人', chapter: '第二篇',
      works: [
        { title: '与蒙特利尔市长合影', date: '2001.12', location: '蒙特利尔', type: '人文纪实', desc: '与政要合影' },
        { title: 'Mall里手艺人', date: '2013.04.01', location: '蒙特利尔', type: '人文纪实', desc: '手工艺人操作' }
      ] },
    
    { page: 55, file: '55.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 56, file: '56.jpg', title: '圣帕特里克节游行', chapter: '第二篇',
      works: [
        { title: '圣帕特里克节游行（一）', date: '2013.03.17', location: '蒙特利尔', type: '人文纪实', desc: '绿装游行人群' },
        { title: '圣帕特里克节游行（二）', date: '2013.03.17', location: '蒙特利尔', type: '人文纪实', desc: '特色装扮者' }
      ] },
    
    { page: 57, file: '57.jpg', title: '加拿大国庆游行', chapter: '第二篇',
      works: [{ title: '加拿大国庆游行', date: '2013.07.01', location: '蒙特利尔', type: '人文纪实', desc: '华人舞龙与枫叶旗' }] },
    
    { page: 58, file: '58.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 59, file: '59.jpg', title: '蒙特利尔双胞胎游行', chapter: '第二篇',
      works: [{ title: '蒙特利尔双胞胎游行', date: '2013.07.28', location: '蒙特利尔', type: '人文纪实', desc: '笑节双胞胎巡游' }] },
    
    { page: 60, file: '60.jpg', title: '加拿大老兵节', chapter: '第二篇',
      works: [
        { title: '加拿大老兵节（一）', date: '2013.11.11', location: '温哥华', type: '人文纪实', desc: '老兵搀扶行走' },
        { title: '加拿大老兵节（二）', date: '2013.11.11', location: '温哥华', type: '人文纪实', desc: '老兵集体肃立' }
      ] },
    
    { page: 61, file: '61.jpg', title: 'Saint-Lambert夏季文化节', chapter: '第二篇',
      works: [{ title: 'Saint-Lambert夏季文化节', date: '2013.08.25', location: '魁北克', type: '人文纪实', desc: '桑巴游行' }] },
    
    { page: 62, file: '62.jpg', title: 'Saint-Lambert夏季文化节', chapter: '第二篇',
      works: [
        { title: 'Saint-Lambert文化节（一）', date: '2013.08.25', location: 'Saint-Lambert', type: '人文纪实', desc: '文化节现场' },
        { title: 'Saint-Lambert文化节（二）', date: '2013.08.25', location: 'Saint-Lambert', type: '人文纪实', desc: '户外市集' }
      ] },
    
    { page: 63, file: '63.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 64, file: '64.jpg', title: '独具匠心', chapter: '第二篇',
      works: [{ title: '独具匠心', date: '2013.06.15', location: '蒙特利尔', type: '人文纪实', desc: '木工艺匠人展演' }] },
    
    { page: 65, file: '65.jpg', title: '院卖', chapter: '第二篇',
      works: [
        { title: '院卖（一）', date: '2013.08.17', location: '蒙特利尔', type: '人文纪实', desc: '庭院旧货出售' },
        { title: '院卖（二）', date: '2013.06.15', location: '蒙特利尔', type: '人文纪实', desc: '住宅前院设摊' }
      ] },
    
    { page: 66, file: '66.jpg', title: '二战军人纪念雕塑 / 小憩', chapter: '第二篇',
      works: [
        { title: '二战军人纪念雕塑', date: '2013.03.08', location: '蒙特利尔', type: '人文纪实', desc: '军人雕像' },
        { title: '小憩', date: '2013.07.22', location: '蒙特利尔皇家山', type: '人文纪实', desc: '林间休憩' }
      ] },
    
    { page: 67, file: '67.jpg', title: '华人舞龙国庆游行', chapter: '第二篇',
      works: [{ title: '华人舞龙国庆游行', date: '2013.07.01', location: '蒙特利尔', type: '人文纪实', desc: '华人社团舞龙' }] },
    
    { page: 68, file: '68.jpg', title: '老兵 / 街头偶遇', chapter: '第二篇',
      works: [
        { title: '老兵', date: '2013.11.11', location: '温哥华', type: '人文纪实', desc: '佩戴勋章的老兵' },
        { title: '街头偶遇', date: '2013.05.07', location: '蒙特利尔', type: '人文纪实', desc: '白须长者街头微笑' }
      ] },
    
    { page: 69, file: '69.jpg', title: '泰式烧烤 / 喧嚣的海滩', chapter: '第二篇',
      works: [
        { title: '泰式烧烤', date: '2012.03.27', location: '泰国普吉岛', type: '人文纪实', desc: '夜市沙威玛烤肉' },
        { title: '喧嚣的海滩', date: '2012.03.27', location: '泰国普吉岛', type: '风光摄影', desc: '热带海滩度假' }
      ] },
    
    { page: 70, file: '70.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 71, file: '71.jpg', title: '待确认', chapter: '第二篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    // ========== 第三篇：四时皆有景 · 花鸟尽含情 ==========
    { page: 72, file: '72.jpg', title: '夏荷擎露暗香浮', chapter: '第三篇',
      works: [{ title: '夏荷擎露暗香浮', date: '—', location: '中国南方', type: '艺术摄影', desc: '荷花特写、扇面画框、诗书画印' }] },
    
    { page: 73, file: '73.jpg', title: '秋菊凌霜持劲节', chapter: '第三篇',
      works: [{ title: '秋菊凌霜持劲节', date: '2022年秋', location: '中国', type: '艺术摄影', desc: '九宫格菊花特写' }] },
    
    { page: 74, file: '74.jpg', title: '冬梅傲雪立风流', chapter: '第三篇',
      works: [
        { title: '冬梅傲雪立风流（组图）', date: '—', location: '中国', type: '艺术摄影', desc: '九幅梅花主题摄影' }
      ] },
    
    { page: 75, file: '75.jpg', title: '国际烟花系列', chapter: '第三篇',
      works: [
        { title: '烟花（英格兰）', date: '2012.06.28', location: '英格兰', type: '艺术风光', desc: '红色放射状烟花' },
        { title: '烟花（西班牙）', date: '2012.07.12', location: '西班牙', type: '艺术风光', desc: '多色烟花' },
        { title: '烟花（意大利）', date: '2012.07.31', location: '意大利', type: '艺术风光', desc: '桥梁剪影烟花' },
        { title: '烟花（蒙特利尔）', date: '2012.08.03', location: '蒙特利尔', type: '艺术风光', desc: '国际焰火大赛' }
      ] },
    
    { page: 76, file: '76.jpg', title: '待确认', chapter: '第三篇',
      works: [{ title: '待确认', date: '待确认', location: '待确认', type: '待确认', desc: '待确认' }] },
    
    { page: 77, file: '77.jpg', title: '国际烟花系列', chapter: '第三篇',
      works: [
        { title: '烟花（英格兰）', date: '2012.06.28', location: '英格兰', type: '艺术风光', desc: '英格兰烟花' },
        { title: '烟花（西班牙）', date: '2012.07.12', location: '西班牙', type: '艺术风光', desc: '西班牙烟花' },
        { title: '烟花（意大利）', date: '2012.07.31', location: '意大利', type: '艺术风光', desc: '意大利烟花' }
      ] },
    
    { page: 78, file: '78.jpg', title: '圆形摄影组图', chapter: '第三篇',
      works: [
        { title: '圆形摄影组图', date: '—', location: '—', type: '艺术摄影', desc: '六幅圆形裁剪摄影作品' }
      ] },
    
    { page: 79, file: '79.jpg', title: '四时花鸟', chapter: '第三篇',
      works: [
        { title: '冬·雪中灰椋鸟', date: '—', location: '中国', type: '生态摄影', desc: '雪中灰椋鸟栖息枯枝' },
        { title: '夏·碧伟蜓', date: '—', location: '中国', type: '生态摄影', desc: '碧伟蜓停驻豆荚' },
        { title: '秋·玉带凤蝶', date: '—', location: '中国', type: '生态摄影', desc: '凤蝶吸食百日菊' },
        { title: '春·家鹅与竹林', date: '—', location: '中国', type: '生态摄影', desc: '家鹅互动、新笋竹林' }
      ] },
    
    { page: 80, file: '80.jpg', title: '观柴影', chapter: '第三篇',
      works: [
        { title: '雪覆红果', date: '2026.02', location: '天门', type: '艺术摄影', desc: '雪中红果' },
        { title: '天书', date: '2026.02', location: '天门', type: '艺术摄影', desc: '残荷倒影制作' }
      ] }
];

// ========== 全局变量 ==========
let currentFilters = { chapter: 'all', location: 'all', type: 'all', year: 'all', search: '' };
let currentView = 'grid';
let currentLightboxIndex = 0;
let filteredPages = [...pageDatabase];

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
    setupEventListeners();
    setupScrollAnimations();
});

// ========== 渲染函数 ==========
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    filteredPages = pageDatabase.filter(page => {
        // 篇章筛选
        if (currentFilters.chapter !== 'all' && page.chapter !== currentFilters.chapter) return false;
        
        // 地点筛选（支持模糊匹配）
        if (currentFilters.location !== 'all') {
            const loc = currentFilters.location;
            const hasLocation = page.works.some(w => {
                if (!w.location) return false;
                const l = w.location.toLowerCase();
                // 加拿大匹配
                if (loc === '加拿大') {
                    return l.includes('蒙特利尔') || l.includes('温哥华') || l.includes('魁北克') || 
                           l.includes('班夫') || l.includes('加拿大') || l.includes('saint');
                }
                // 欧洲匹配
                if (loc === '欧洲') {
                    return l.includes('英格兰') || l.includes('西班牙') || l.includes('意大利') || l.includes('老挝');
                }
                return l.includes(loc.toLowerCase());
            });
            if (!hasLocation) return false;
        }
        
        // 类型筛选
        if (currentFilters.type !== 'all') {
            const hasType = page.works.some(w => w.type && w.type.includes(currentFilters.type));
            if (!hasType) return false;
        }
        
        // 年份筛选
        if (currentFilters.year !== 'all') {
            const year = currentFilters.year;
            const hasYear = page.works.some(w => w.date && w.date.includes(year));
            if (!hasYear) return false;
        }
        
        // 搜索筛选
        if (currentFilters.search) {
            const s = currentFilters.search.toLowerCase();
            const match = page.title.toLowerCase().includes(s) || 
                page.works.some(w => (w.title && w.title.toLowerCase().includes(s)) || (w.desc && w.desc.toLowerCase().includes(s)));
            if (!match) return false;
        }
        return true;
    });
    
    grid.innerHTML = filteredPages.map((page, index) => `
        <div class="gallery-item" data-index="${index}" onclick="openLightbox(${index})">
            <img src="images/mobile/${page.file}" 
                 srcset="images/mobile/${page.file} 800w, images/desktop/${page.file} 1920w"
                 sizes="(max-width: 768px) 800px, 1920px"
                 alt="${page.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="chapter-badge ${getChapterClass(page.chapter)}">${page.chapter}</span>
                <h3 class="gallery-item-title">${page.title}</h3>
                <p class="gallery-item-info">P.${page.page} · ${page.works.length}幅</p>
            </div>
        </div>
    `).join('');
    
    renderChapterView();
    document.getElementById('results-count').textContent = `共 ${filteredPages.length} 页`;
    setupScrollAnimations();
}

function renderChapterView() {
    const cv = document.getElementById('chapter-view');
    const chapters = [
        { key: '第一篇', title: '步履赴山河', subtitle: '光影记远途', icon: '🏔️' },
        { key: '第二篇', title: '笑泪皆入镜', subtitle: '百态见真情', icon: '👥' },
        { key: '第三篇', title: '四时皆有景', subtitle: '花鸟尽含情', icon: '🌸' }
    ];
    cv.innerHTML = chapters.map(ch => {
        const pages = filteredPages.filter(p => p.chapter === ch.key);
        return `<div class="chapter-section" data-chapter="${ch.key}">
            <div class="chapter-header" onclick="toggleChapter('${ch.key}')">
                <span class="chapter-icon">${ch.icon}</span>
                <div class="chapter-title-group"><h3>${ch.key}：${ch.title}</h3><p class="chapter-subtitle">${ch.subtitle}</p></div>
                <span class="chapter-count">${pages.length}页</span><span class="chapter-toggle">▼</span>
            </div>
            <div class="chapter-pages">
                ${pages.map((page, i) => `<div class="page-card" onclick="openLightbox(${pageDatabase.indexOf(page)})">
                    <img src="images/mobile/${page.file}" 
                         srcset="images/mobile/${page.file} 800w, images/desktop/${page.file} 1920w"
                         sizes="(max-width: 768px) 800px, 1920px"
                         alt="${page.title}" loading="lazy">
                    <div class="page-info"><span class="page-number">P.${page.page}</span><h4>${page.title}</h4><p>${page.works.length}幅作品</p></div>
                </div>`).join('')}
            </div>
        </div>`;
    }).join('');
}

function getChapterClass(chapter) {
    return { '封面': 'badge-cover', '第一篇': 'badge-chapter1', '第二篇': 'badge-chapter2', '第三篇': 'badge-chapter3' }[chapter] || '';
}

// ========== 视图切换 ==========
function switchView(view) {
    currentView = view;
    document.getElementById('gallery-grid').style.display = view === 'grid' ? 'grid' : 'none';
    document.getElementById('chapter-view').style.display = view === 'grid' ? 'none' : 'block';
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
}

function toggleChapter(chapter) {
    document.querySelector(`.chapter-section[data-chapter="${chapter}"]`)?.classList.toggle('collapsed');
}

// ========== Lightbox ==========
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 根据屏幕方向调整布局
    const lightboxContent = document.querySelector('.lightbox-content');
    if (window.innerWidth <= 767 && window.innerHeight > window.innerWidth) {
        lightboxContent.classList.add('portrait-mode');
    } else {
        lightboxContent.classList.remove('portrait-mode');
    }
}

function updateLightbox() {
    const page = filteredPages[currentLightboxIndex];
    if (!page) return;
    const img = document.getElementById('lightbox-img');
    
    // 根据屏幕大小和方向选择合适的图片
    const isPortrait = window.innerHeight > window.innerWidth;
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile && isPortrait) {
        // 手机竖屏：使用手机版图片
        img.src = `images/mobile/${page.file}`;
        img.sizes = '95vw';
    } else {
        // 电脑或横屏：使用响应式图片
        img.src = `images/desktop/${page.file}`;
        img.srcset = `images/mobile/${page.file} 800w, images/desktop/${page.file} 1920w`;
        img.sizes = '(max-width: 768px) 800px, 1920px';
    }
    
    document.getElementById('lightbox-title').textContent = page.title;
    document.getElementById('lightbox-meta').textContent = `第 ${page.page} 页 · ${page.chapter}`;
    document.getElementById('lightbox-desc').innerHTML = page.works.map(w => `
        <div class="work-item">
            <strong>${w.title}</strong>
            ${w.date && w.date !== '待确认' ? `<span class="work-date">${w.date}</span>` : ''}
            ${w.location && w.location !== '待确认' ? `<span class="work-location">${w.location}</span>` : ''}
            ${w.type !== '待确认' ? `<span class="work-type">${w.type}</span>` : ''}
            ${w.desc !== '待确认' ? `<p class="work-desc">${w.desc}</p>` : ''}
        </div>
    `).join('');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(dir) {
    currentLightboxIndex = (currentLightboxIndex + dir + filteredPages.length) % filteredPages.length;
    updateLightbox();
}

// ========== 筛选 ==========
function applyFilters() {
    currentFilters.chapter = document.getElementById('filter-chapter').value || 'all';
    currentFilters.location = document.getElementById('filter-location').value || 'all';
    currentFilters.type = document.getElementById('filter-type').value || 'all';
    currentFilters.year = document.getElementById('filter-year').value || 'all';
    renderGallery();
}

function clearFilters() {
    document.getElementById('filter-chapter').value = '';
    document.getElementById('filter-location').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-year').value = '';
    document.getElementById('search-input').value = '';
    currentFilters = { chapter: 'all', location: 'all', type: 'all', year: 'all', search: '' };
    renderGallery();
}

// ========== 响应式适配 ==========
let currentOrientation = 'landscape';

function detectOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    currentOrientation = isPortrait ? 'portrait' : 'landscape';
    document.body.setAttribute('data-orientation', currentOrientation);
    
    // 更新 Lightbox 布局
    const lightboxContent = document.querySelector('.lightbox-content');
    if (lightboxContent) {
        if (window.innerWidth <= 767 && isPortrait) {
            lightboxContent.classList.add('portrait-mode');
        } else {
            lightboxContent.classList.remove('portrait-mode');
        }
    }
}

function handleResize() {
    detectOrientation();
    // 动态调整网格列数
    const grid = document.querySelector('.gallery-grid');
    if (grid) {
        const width = window.innerWidth;
        if (width >= 1200) grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
        else if (width >= 900) grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        else if (width >= 600) grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        else if (width >= 400) grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        else grid.style.gridTemplateColumns = '1fr';
    }
}

// ========== 事件监听 ==========
function setupEventListeners() {
    // 搜索和筛选
    document.getElementById('search-input').addEventListener('input', e => { currentFilters.search = e.target.value; renderGallery(); });
    document.getElementById('filter-chapter').addEventListener('change', applyFilters);
    document.getElementById('filter-location').addEventListener('change', applyFilters);
    document.getElementById('filter-type').addEventListener('change', applyFilters);
    document.getElementById('filter-year').addEventListener('change', applyFilters);
    
    // 视图切换
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
    
    // 键盘导航
    document.addEventListener('keydown', e => {
        if (document.getElementById('lightbox').classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'Escape') closeLightbox();
        }
    });
    
    // 点击遮罩关闭
    document.getElementById('lightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
    
    // 屏幕方向和尺寸变化
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            detectOrientation();
            handleResize();
        }, 100);
    });
    
    // 初始检测
    detectOrientation();
    handleResize();
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 50);
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.gallery-item, .page-card').forEach(item => observer.observe(item));
}

function scrollToGallery() { document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' }); }

// ========== 全局暴露 ==========
window.scrollToGallery = scrollToGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.toggleChapter = toggleChapter;
window.switchView = switchView;
