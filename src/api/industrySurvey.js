// 192.168.2.16:8053
// 登录zxn  123账号才有权限访问
// /nj/graph/getCalIndustrySurveyTable1?year=   获取黑色部分数据
// /nj/graph/getGraph?year= 获取红色部分数据
// /nj/graph/addOrUpdateIndustrySurvey  保存红色数据
//  同比 result = (((d1 - d0) / (d0 ? Math.abs(d0) : 0)) * 100).toFixed(2)

import request from "@/utils/request";
export function getCalIndustrySurveyTable1(params) {
  return request({
    url: "/nj/graph/getCalIndustrySurveyTable1",
    method: "get",
    params
  });
}
export function getCalIndustrySurveyTable2(params) {
  return request({
    url: "/nj/graph/getCalIndustrySurveyTable2",
    method: "get",
    params
  });
}
export function getGraph(params) {
  return request({
    url: "/nj/graph/getGraph",
    method: "get",
    params
  });
}
export function addOrUpdateIndustrySurvey(data) {
  return request({
    url: "/nj/graph/addOrUpdateIndustrySurvey",
    method: "post",
    data
  });
}

// private String year;    //年份
// private Double industrySum; //农业产业化组织总数
// private Double ltOrgan; //龙头企业带动型
// private Double ltOrganRate; //龙头企业带动型占比
// private Double coopOragn;   //合作组织带动型
// private Double coopOragnRate;   //合作组织带动型占比
// private Double marketSum;  //专业市场带动型
// private Double marketSumRate;  //专业市场带动型占比
// private Double otherOrgan;  //其他类型
// private Double otherOrganRate;  //其他类型占比

// private Double orderSum;    //订单合同方式
// private Double coopMode;    //合作方式
// private Double stockMode;   //股份合作方式
// private Double ortherMode;  //其它方式

// private Double zzy; //种植业
// private Double zzyRate; //种植业占比
// private Double xmy; //畜牧业
// private Double xmyRate; //畜牧业占比
// private Double scy; //水产业
// private Double scyRate; //水产业占比
// private Double ly;  //林业
// private Double lyRate;  //林业占比
// private Double qty; //其它
// private Double qtyRate; //其他占比

// private String mountainData;    //山区
// private String prddata; //珠三角
// private String eastData;    //东翼
// private String westData;    //西翼

// private Double orderSumRate;//订单合同方式占比
// private Double coopModeRate;    //合作方式占比
// private Double stockModeRate;   //股份合作方式占比
// private Double ortherModeRate;  //其它方式占比

// private Double zzyYOY;  //种植业同比
// private Double xmyYOY;  //畜牧业同比
// private Double scyYOY;  //水产业同比
// private Double lyYOY;   //林业同比
// private Double qtyYOY;  //其它同比

// private String sort;    //农业产业化组织区域排名
// private Double fixAssets;   //固定资产净值
// private Double fixAssetsYOY;   //固定资产净值同比
// private Double aveFixAssets;    //平均固定资产净值
// private String sort1;   //固定资产总值排名
// private Double ltSaleNum;   //龙头年销售收入
// private Double aveLtSaleNum;    //龙头平均年销售收入
// private Double ltSaleNumYOY;    //龙头销售收入同比
// private String sort2;   //龙头企业销售收入排名
// private Double coopSaleNum; //农业产业化组织销售收入
// private Double aveCoopSaleNum;  //平均农业产业化组织销售收入
// private Double coopSaleNumYOY;  //农业产业化组织销售收入同比
// private String sort3;   //农业产业化组织销售排名
// private Double marketSaleNum;   //专业市场交易额
// private Double aveMarketSaleNum;    //专业市场平均交易额
// private String sort4;   //专业市场交易额排名
// private Double oneEMarket;  //交易额1亿元以上的专业市场

// private Double driveFarmer; //带动农户数
//     private Double driveFarmerYOY;  //带动农户数同比
//     private Double raiseIncome; //农户从事产业化经营增收总额
//     private Double raiseIncomeYOY;  //农户从事产业化经营增收总额同比
//     private Double aveRaiseIncome;  //带动农户均增收
//     private Double aveRaiseIncomeYOY;   //带动农户均增收同比
//     private Double allOrderMoney;   //年订单总额
//     private Double executeOrderMoney;   //年履约订单成交额
//     private String areaDataDriveFarmer; //带动农户数按地区
//     private String areaRaiseIncome;//带动农户增收按地区
//     private String areaAveRaiseIncome;  //带动农户均增收按地区
//     private Double employeeNum;//农业产业化组织年末从业人数
//     private Double employeeNumYOY;//年末从业任务同比
//     private String sort5;   //农业产业化组织带动就业排名前10的地市
//     private Double plantArea;   //种植面积
//     private Double plantAreaYOY;    //种植面积同比
//     private String sort6;//种植面积排名前3的地市
//     private Double livestockNum;    //牲畜饲养量
//     private Double livestockNumYOY;//牲畜饲养量同比
//     private String sort7;   //牲畜饲养排名前3的地市
//     private Double poultryNum;  //禽类饲养量
//     private Double poultryNumYOY;//禽类饲养量同比
//     private String sort8;   //禽类饲养排名前3的地市
//     private Double waterArea;   //养殖水面面积
//     private Double waterAreaYOY;    //养殖水面面积同比
//     private String sort9;   //养殖水面面积排名前3的地市
