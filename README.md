numberScroll
============

Similar to the digital tube rolling javascript animation plug-in 
/**
 * @彩票项目大奖专题页累计获奖金额数字墙（numberScroll）
 * @author zhoumengyan zhoumengyan@360.cn
 * @version 0.0.1 
 * example:
    $("#numberscroll").numberScroll({
    speed : 1000, 滚动到对应数值的动画速度，默认值1000毫秒
    height: 50 数字展板的高度，请与样式保持同步,缺省时会自动取.wrap的高度
    });
    * Dom
       <div id="numberscroll" value="12亿3456万">
    * css参考：
        .wrap {height:50px; width:auto; text-align: center; overflow: hidden; float: left;font-size: 40px} 
        .inner span {display: block;width: 30px;height:50px;background: #eee;line-height: 50px;}
*/
