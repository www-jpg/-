

$(window).scroll(function () {

    var iflashbuyTop = $(".iflashbuy").offset().top;

    if ($(window).scrollTop() >= iflashbuyTop) {
        $(".backTop").css("display", "block");
    } else {
        $(".backTop").css("display", "none");
    }
})

// 回到顶部
$(".backTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    })
});

// $(".product_list02 .nav").each(function(index, dom){
//     // console.log($(this).find("a"));
//     $(this).find("a").hover(function(){

//         // console.log($(this));
//     })

// })
console.log($(".jiadian"));
// 家电选项卡
$(".jiadian .nav a").hover(function () {
    var index = $(this).index();
    $(this).addClass("active").siblings("a").removeClass("active")
    $(".jiadian .right ul").eq(index).show().siblings().hide();
})


// 左边侧边栏数据

var datas = [
    ["Redmi 9","腾讯黑鲨游戏手机3","Redmi 8A","小米移动 电话卡"],
    ["小米电视 大师 65英寸OLED","小米电视5 75英寸","全面屏电视Pro 55英寸","小米电视4A 58英寸"],
    ["RedmiBook 13","显示器"],
    ["冰箱","微波炉","电磁炉","插线板"],
    ["手环5NFC","滑板车","无线车充"],
    ["打印机","摄像机","小爱音箱"],
    ["移动电源","手机壳"],
    ["洗手机","体脂称","婴儿推车"],
    ["小爱音箱Art","Redmi音箱","蓝牙音箱"],
    ["小背包","床垫","驱蚊器"]
]
console.log(datas.length);

for(var i = 1; i < datas.length; i++){
    var detail = document.createElement("div");
    detail.className = "detail";
    detail.style.width = 248 * datas[i].length + "px";
    var item = document.createElement("div");
    item.className = "item";
    item.style.display = "block";
    for(var y = 0; y < datas[i].length; y++){

        var ul = `
            <ul>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][y]}.png"/>${datas[i][y]}</a></li>
            </ul>
        `;
        item.innerHTML+=ul;
    }
    
    detail.appendChild(item);
    document.querySelector(".main .nav").appendChild(detail);
}

// 侧边导航栏
$(".nav_title li").hover(function(){
    var index = $(this).index();
    $(".detail").eq(index).show().siblings(".detail").hide();
},function(){
    $(".detail").hide();
})

$(".detail").hover(function(){
    var index = $(this).index();
    $(this).show();
    $(".nav_title li").eq(index-1).css("background", "#ff6700");
},function(){
    var index = $(this).index();
    $(".nav_title li").eq(index-1).css("background", "");
    $(this).hide();
})

// 创建li数据
var iflashbuyDatas = [
    {
        pro_name:  "小米小爱音箱 Play（白色）量产版 白色",
        pro_desc:  "听音乐、语音遥控家电",
        old_price: "99元",
        new_price: "169元"
    },{
        pro_name:  "米家扫拖一体机器人 白色",
        pro_desc:  "扫得干净，拖得彻底",
        old_price: "1599元",
        new_price: "1999元"
    },{
        pro_name:  "小米米家智能门锁 标准碳素黑",
        pro_desc:  "一体化活体指纹识别，多种开锁方式",
        old_price: "1199元",
        new_price: "1299元"
    },{
        pro_name:  "MIJOY 抽纸青春版 24包/箱 ",
        pro_desc:  "精选原生竹浆，健康环保",
        old_price: "27.9元",
        new_price: "32.9元"
    },{
        pro_name:  "米家两门冰箱 160L 银色",
        pro_desc:  "小巧能装，速冻养鲜",
        old_price: "929元",
        new_price: "1099元"
    },{
        pro_name:  "巨省电 | 小米新1级空调X 1.5匹",
        pro_desc:  "变频节能巨省电，自清洁",
        old_price: "2099元",
        new_price: "2399元"
    },{
        pro_name:  "小米AI音箱",
        pro_desc:  "听音乐、语音遥控家电",
        old_price: "199元",
        new_price: "299元"
    },{
        pro_name:  "17PIN 星果杯 樱花粉",
        pro_desc:  "随心随行，悦饮随心",
        old_price: "99元",
        new_price: "139元"
    },{
        pro_name:  "小米移动电源10000mAh高配 灰色",
        pro_desc:  "轻薄设计，轻松出行",
        old_price: "129元",
        new_price: "149元"
    },{
        pro_name:  "米家手持无线吸尘器1C 白色",
        pro_desc:  "吸力续航双强劲，清洁小怪兽",
        old_price: "899元",
        new_price: "999元"
    },{
        pro_name:  "米家扫拖一体机器人 白色",
        pro_desc:  "扫得干净，拖得彻底",
        old_price: "1599元",
        new_price: "1999元"
    },{
        pro_name:  "圈厨多功能涮烤锅 黑色火锅盘",
        pro_desc:  "深浅双盘多用途",
        old_price: "329元",
        new_price: "399元"
    },{
        pro_name:  "米家落地扇 白色",
        pro_desc:  "静享智能轻风",
        old_price: "199元",
        new_price: "219元"
    },{
        pro_name:  "小米曲面显示器 34英寸 黑",
        pro_desc:  "超宽大环绕显示屏",
        old_price: "2199元",
        new_price: "2499元"
    },{
        pro_name:  "自清洁 | 米家互联网立式空调 2匹",
        pro_desc:  "一级能效更省电，自清洁",
        old_price: "3499元",
        new_price: "4299元"
    },{
        pro_name:  "米家空气净化器Pro",
        pro_desc:  "大空间，快循环",
        old_price: "999元",
        new_price: "1499元"
    },{
        pro_name:  "小米手环4 石墨黑",
        pro_desc:  "大屏彩显，20天超长续航",
        old_price: "149元",
        new_price: "169元"
    },{
        pro_name:  "小米路由器4C 白色",
        pro_desc:  "300M单频，高增益4天线",
        old_price: "59元",
        new_price: "99元"
    },{
        pro_name:  "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
        pro_desc:  "茶水分离，长效保温",
        old_price: "79元",
        new_price: "99元"
    },{
        pro_name:  "最生活毛巾·Air（10条装） 白色+素蓝",
        pro_desc:  "给生活一条好毛巾",
        old_price: "99元",
        new_price: "169元"
    },{
        pro_name:  "Pinlo迷你三明治机 白色",
        pro_desc:  "小巧身材，一机多用",
        old_price: "109元",
        new_price: "169元"
    },{
        pro_name:  "小米显示器1A 23.8英寸 黑色",
        pro_desc:  "高清画质，超广视角",
        old_price: "679元",
        new_price: "699元"
    },{
        pro_name:  "小浪智能衣物消毒烘干机 白色 35L",
        pro_desc:  "三重杀菌 柔热烘干",
        old_price: "489元",
        new_price: "549元"
    },{
        pro_name:  "小米米家智能门锁 磨砂金 霸王锁体 磨砂金",
        pro_desc:  "适配霸王锁体，多种开锁方式",
        old_price: "1499元",
        new_price: "1799元"
    },{
        pro_name:  "8H多功能护颈枕U1 混灰色",
        pro_desc:  "乳胶颗粒填充 ，舒适入睡",
        old_price: "69元",
        new_price: "79元"
    },{
        pro_name:  "悦米YM人体工学椅 白色",
        pro_desc:  "健康坐姿，舒适体验",
        old_price: "1199元",
        new_price: "1499元"
    },{
        pro_name:  "米家扫拖机器人1C 白色",
        pro_desc:  "能扫能拖，地面清洁交给我",
        old_price: "1199元",
        new_price: "1299元"
    },{
        pro_name:  "RedmiBook 16 i7 16G 512G MX350 灰色",
        pro_desc:  "便携大屏，全“芯”超越",
        old_price: "5499元",
        new_price: "5699元"
    },{
        pro_name:  "最生活浴巾·Air（4条装） 白色+素蓝",
        pro_desc:  "享用一条洁净好浴巾",
        old_price: "169元",
        new_price: "269元"
    },{
        pro_name:  "米家运动鞋4 花灰色 41",
        pro_desc:  "轻盈若絮,弹若脱兔",
        old_price: "189元",
        new_price: "199元"
    },{
        pro_name:  "小米游戏鼠标 黑色",
        pro_desc:  "掌中游戏利器，为真玩家而生",
        old_price: "169元",
        new_price: "199元"
    },{
        pro_name:  "小米手表 尊享版 曜石黑",
        pro_desc:  "能打电话、能下载APP，才是真正的智能手表",
        old_price: "1799元",
        new_price: "1999元"
    }
];

for(var i = 0; i < iflashbuyDatas.length; i++){
    var li = document.createElement("li");
    if((i+1) % 4 == 0){
        li.style.marginRight = 0;
    }
    if(i < 9){
        var num = "0" + (i+1);
    }else{
        num = i+1;
    }

    li.innerHTML = `
        <a href="#">
            <img src="images/shangou/iflashbuy${num}.jpg">
            <p class="biaoti">${iflashbuyDatas[i].pro_name}</p>
            <p class="desc">${iflashbuyDatas[i].pro_desc}</p>
            <p class="price">
                <span>${iflashbuyDatas[i].old_price}</span>
                <del>${iflashbuyDatas[i].new_price}</del>
            </p>
        </a>
    `;
    $(".iflashbuy ul").append(li);
}

// 设置ul的宽度
$(".iflashbuy ul").width($(".iflashbuy li").outerWidth(true) * iflashbuyDatas.length);

// 点击次数
var clickNum = 0;

// 移动距离
var distance = 0;

var flag = true;

if(flag){
    $(".arrow .icon-left").on("click", function(){
        flag = false;
        // 获取每次移动的长度
        var width = $(".iflashbuy .right").width();
        // 有几组数据
        var max = $(".iflashbuy .right li").length / 4;
        
        // console.log(max);
        if(clickNum >= max - 2){
            $(this).addClass("disabled");
            clickNum = max - 2;
        }else{
            $(".icon-arrow-left-copy").removeClass("disabled");
        }
        clickNum ++;
        distance = width * clickNum;
        console.log(clickNum);
        $(".iflashbuy .right ul").animate({"left" : -distance}, function(){
            flag = true;
        });
    })
}

if(flag){
    $(".icon-arrow-left-copy").on("click", function(){
        flag = false;
        var width = $(".iflashbuy .right").width();
        if(clickNum <= 1){
            $(this).addClass("disabled");
            clickNum = 1;
        }else{
            $(".icon-left").removeClass("disabled");
        }
        clickNum --;
        distance = width * clickNum;
        console.log(clickNum);
        $(".iflashbuy .right ul").animate({"left" : -distance}, function(){
            flag = true;
        });
    })
}