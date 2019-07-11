/**
 * Created by ikonon on 2019/6/20
 */
// 各分类内容

module.exports  = {
  ding: 'http://www.bilibili.com/index/ding.json',

// 轮播图
  banner: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=23',

// 默认搜索单词
  getSearchDefaultWords: 'http://www.bilibili.com/widget/getSearchDefaultWords',

  search: "https://s.search.bilibili.com/main/suggest?jsoncallback=jQuery172006627648913118622_1561010831012&func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=5805913&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&term=x&rnd=0.6276401863140921&_=1561011107854",


// 主站头部背景图
  topbg: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=142',

// 各分类热门内容
  hot: 'http://api.bilibili.com/x/web-show/res/locs?pf=0&ids=1550,1554,1556,1558,1560,1562,1564,1566,1568,1570,1572,1574,1624,1636,1639',

// 推广
  promote: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=34',

// 推广右侧广告
  promoteAd: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=29',

// 直播
  liveXhr: 'http://api.live.bilibili.com/bili/recom',

// 番剧下方更新列表右侧新番放送表上侧
  slideshow: 'http://www.bilibili.com/index/slideshow/41.json',
// 番剧下方更新列表右侧新番放送表下侧
  season: 'http://www.bilibili.com/api_proxy?app=bangumi&action=get_season_by_tag&page=1&tag_id=101&pagesize=4',


// 轮播图右边总排行
// 3日排行
  ranking3: 'http://www.bilibili.com/index/ranking-3day.json',
// 7日排行
  ranking7: 'http://www.bilibili.com/index/ranking-week.json',
// 昨日排行
  randking: 'http://www.bilibili.com/index/ranking.json',

// 最底部特别推荐
  recommend: 'http://www.bilibili.com/index/recommend.json',

  rankbase: 'http://www.bilibili.com/index/catalogy/',
};
