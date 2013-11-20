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
;(function($) {
    $.extend($.fn, {
        numberScroll: function(options) {
            var value = $(this).attr('value').split('');
            for (var i in value) {
                var str = $.isNumeric(value[i]) ? '<div class="wrap"><div class="inner" value=' + value[i] + '><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>': '<div class="wrap">' + value[i] + '</div>';
                $(this).append(str);
            }
            options = options || {};
            options.speed = options.speed || 1000;
            options.height = options.height || $(this).find('.wrap').height();
            $(this).find('.inner').each(function(i, item) {
                $(this).animate({
                    marginTop: -options.height * $(item).attr('value')
                },
                options.speed);
            });
        }
    });
})(jQuery);