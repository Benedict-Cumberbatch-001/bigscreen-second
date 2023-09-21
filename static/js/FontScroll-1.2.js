/**
 +-------------------------------------------------------------------
 * jQuery FontScroll - 文字行向上滚动插件 - http://www.cibiji.com
 +-------------------------------------------------------------------
 * @version    1.0.0 beta
 * @since      2014.06.12
 * @author     kongzhim <kongzhim@163.com> <http://www.cibiji.com>
 * @github     http://git.oschina.net/kzm/FontScroll
 +-------------------------------------------------------------------
 */

(function($){
    $.fn.FontScroll = function(options){
        var opts = $.extend({},$.fn.FontScroll.defualts,options);
		opts._this = this;
		$.fn.FontScroll.setInit(opts);
		$.fn.FontScroll.Up(opts);
		
    }
	//默认属性配置
	$.fn.FontScroll.defualts = {
		Time: 3000,	//时间
		Class: 'fontColor', //样式
		Num: 1  //赋值样式的位置，从零开始计数，默认第二行
	}
	//初始化
	$.fn.FontScroll.setInit = function(opts){
        var _ul = opts._this.children().first();
        _ul.clone().insertAfter(_ul);//初始化克隆
        _ul.children().eq(opts.Num).addClass(opts.Class);//添加样式
	}

	//向上滚动
	$.fn.FontScroll.Up = function(opts){
		var _ul = opts._this.children().first();
		var _li = opts._this.find('li');
		var _ulH = _ul.height(); //总高度
		var _liH = _ul.children().first().outerHeight();//一行高度
		var _temp = _liH;
		var _temp1 = opts.Num;

        var timeID = setInterval(Up,opts.Time);
		_ul.hover(function(){clearInterval(timeID)},function(){timeID = setInterval(Up,opts.Time);});
		
		function Up(){
			_ul.animate({marginTop: '-'+_temp});
			_li.eq(_temp1).removeClass(opts.Class)
			_temp1++;
			_li.eq(_temp1).addClass(opts.Class);
			if(_ulH == _temp){
				_ul.animate({marginTop: '-'+_temp},"normal",over);
			} else {
				_temp += _liH;
			}
		}
		function over(){
            _ul.attr("style",'margin-top:0');
            _temp = _liH;
			_temp1 = opts.Num;
			_li.removeClass(opts.Class).next().eq(0).addClass(opts.Class);
		}
		
	}
	
})(jQuery);