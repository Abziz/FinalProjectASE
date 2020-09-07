/* eslint-disable */
// Avoid `console` errors in browsers that lack a console.
(function() {
  let method;
  const noop = function noop() {};
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn',
  ];
  let length = methods.length;
  const console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/* !
* jquery counterup
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e) {
  'use strict'; e.fn.counterUp=function(t) {
    const n=e.extend({time: 400, delay: 10}, t); return this.each(function() {
      const t=e(this); const r=n; const i=function() {
        const e=[]; const n=r.time/r.delay; let i=t.text(); const s=/[0-9]+,[0-9]+/.test(i); i=i.replace(/,/g, ''); const o=/^[0-9]+$/.test(i); const u=/^[0-9]+\.[0-9]+$/.test(i); const a=u?(i.split('.')[1]||[]).length:0; for (let f=n; f>=1; f--) {
          let l=parseInt(i/n*f); u&&(l=parseFloat(i/n*f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/, '$1,$2'); e.unshift(l);
        }t.data('counterup-nums', e); t.text('0'); const c=function() {
          t.text(t.data('counterup-nums').shift()); if (t.data('counterup-nums').length)setTimeout(t.data('counterup-func'), r.delay); else {
            delete t.data('counterup-nums'); t.data('counterup-nums', null); t.data('counterup-func', null);
          }
        }; t.data('counterup-func', c); setTimeout(t.data('counterup-func'), r.delay);
      }; t.waypoint(i, {offset: '100%', triggerOnce: !0});
    });
  };
})(jQuery);

// :: easing js
jQuery.easing.jswing=jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: 'easeOutQuad', swing: function(n, e, t, r, u) {
  return jQuery.easing[jQuery.easing.def](n, e, t, r, u);
}, easeInQuad: function(n, e, t, r, u) {
  return r*(e/=u)*e+t;
}, easeOutQuad: function(n, e, t, r, u) {
  return -r*(e/=u)*(e-2)+t;
}, easeInOutQuad: function(n, e, t, r, u) {
  return (e/=u/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t;
}, easeInCubic: function(n, e, t, r, u) {
  return r*(e/=u)*e*e+t;
}, easeOutCubic: function(n, e, t, r, u) {
  return r*((e=e/u-1)*e*e+1)+t;
}, easeInOutCubic: function(n, e, t, r, u) {
  return (e/=u/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t;
}, easeInQuart: function(n, e, t, r, u) {
  return r*(e/=u)*e*e*e+t;
}, easeOutQuart: function(n, e, t, r, u) {
  return -r*((e=e/u-1)*e*e*e-1)+t;
}, easeInOutQuart: function(n, e, t, r, u) {
  return (e/=u/2)<1?r/2*e*e*e*e+t:-r/2*((e-=2)*e*e*e-2)+t;
}, easeInQuint: function(n, e, t, r, u) {
  return r*(e/=u)*e*e*e*e+t;
}, easeOutQuint: function(n, e, t, r, u) {
  return r*((e=e/u-1)*e*e*e*e+1)+t;
}, easeInOutQuint: function(n, e, t, r, u) {
  return (e/=u/2)<1?r/2*e*e*e*e*e+t:r/2*((e-=2)*e*e*e*e+2)+t;
}, easeInSine: function(n, e, t, r, u) {
  return -r*Math.cos(e/u*(Math.PI/2))+r+t;
}, easeOutSine: function(n, e, t, r, u) {
  return r*Math.sin(e/u*(Math.PI/2))+t;
}, easeInOutSine: function(n, e, t, r, u) {
  return -r/2*(Math.cos(Math.PI*e/u)-1)+t;
}, easeInExpo: function(n, e, t, r, u) {
  return 0==e?t:r*Math.pow(2, 10*(e/u-1))+t;
}, easeOutExpo: function(n, e, t, r, u) {
  return e==u?t+r:r*(-Math.pow(2, -10*e/u)+1)+t;
}, easeInOutExpo: function(n, e, t, r, u) {
  return 0==e?t:e==u?t+r:(e/=u/2)<1?r/2*Math.pow(2, 10*(e-1))+t:r/2*(-Math.pow(2, -10*--e)+2)+t;
}, easeInCirc: function(n, e, t, r, u) {
  return -r*(Math.sqrt(1-(e/=u)*e)-1)+t;
}, easeOutCirc: function(n, e, t, r, u) {
  return r*Math.sqrt(1-(e=e/u-1)*e)+t;
}, easeInOutCirc: function(n, e, t, r, u) {
  return (e/=u/2)<1?-r/2*(Math.sqrt(1-e*e)-1)+t:r/2*(Math.sqrt(1-(e-=2)*e)+1)+t;
}, easeInElastic: function(n, e, t, r, u) {
  var a=1.70158; let i=0; let s=r; if (0==e) return t; if (1==(e/=u)) return t+r; if (i||(i=.3*u), s<Math.abs(r)) {
    s=r; var a=i/4;
  } else var a=i/(2*Math.PI)*Math.asin(r/s); return -(s*Math.pow(2, 10*(e-=1))*Math.sin((e*u-a)*(2*Math.PI)/i))+t;
}, easeOutElastic: function(n, e, t, r, u) {
  var a=1.70158; let i=0; let s=r; if (0==e) return t; if (1==(e/=u)) return t+r; if (i||(i=.3*u), s<Math.abs(r)) {
    s=r; var a=i/4;
  } else var a=i/(2*Math.PI)*Math.asin(r/s); return s*Math.pow(2, -10*e)*Math.sin((e*u-a)*(2*Math.PI)/i)+r+t;
}, easeInOutElastic: function(n, e, t, r, u) {
  var a=1.70158; let i=0; let s=r; if (0==e) return t; if (2==(e/=u/2)) return t+r; if (i||(i=u*(.3*1.5)), s<Math.abs(r)) {
    s=r; var a=i/4;
  } else var a=i/(2*Math.PI)*Math.asin(r/s); return 1>e?-.5*(s*Math.pow(2, 10*(e-=1))*Math.sin((e*u-a)*(2*Math.PI)/i))+t:s*Math.pow(2, -10*(e-=1))*Math.sin((e*u-a)*(2*Math.PI)/i)*.5+r+t;
}, easeInBack: function(n, e, t, r, u, a) {
  return void 0==a&&(a=1.70158), r*(e/=u)*e*((a+1)*e-a)+t;
}, easeOutBack: function(n, e, t, r, u, a) {
  return void 0==a&&(a=1.70158), r*((e=e/u-1)*e*((a+1)*e+a)+1)+t;
}, easeInOutBack: function(n, e, t, r, u, a) {
  return void 0==a&&(a=1.70158), (e/=u/2)<1?r/2*(e*e*(((a*=1.525)+1)*e-a))+t:r/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t;
}, easeInBounce: function(n, e, t, r, u) {
  return r-jQuery.easing.easeOutBounce(n, u-e, 0, r, u)+t;
}, easeOutBounce: function(n, e, t, r, u) {
  return (e/=u)<1/2.75?r*(7.5625*e*e)+t:2/2.75>e?r*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?r*(7.5625*(e-=2.25/2.75)*e+.9375)+t:r*(7.5625*(e-=2.625/2.75)*e+.984375)+t;
}, easeInOutBounce: function(n, e, t, r, u) {
  return u/2>e?.5*jQuery.easing.easeInBounce(n, 2*e, 0, r, u)+t:.5*jQuery.easing.easeOutBounce(n, 2*e-u, 0, r, u)+.5*r+t;
}});

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a, b, c, d) {
  function e(b, c) {
    this.settings=null, this.options=a.extend({}, e.Defaults, c), this.$element=a(b), this._handlers={}, this._plugins={}, this._supress={}, this._current=null, this._speed=null, this._coordinates=[], this._breakpoint=null, this._width=null, this._items=[], this._clones=[], this._mergers=[], this._widths=[], this._invalidated={}, this._pipe=[], this._drag={time: null, target: null, pointer: null, stage: {start: null, current: null}, direction: null}, this._states={current: {}, tags: {initializing: ['busy'], animating: ['busy'], dragging: ['interacting']}}, a.each(['onResize', 'onThrottledResize'], a.proxy(function(b, c) {
      this._handlers[c]=a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
      this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this);
    }, this)), a.each(e.Workers, a.proxy(function(b, c) {
      this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)});
    }, this)), this.setup(), this.initialize();
  }e.Defaults={items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: 'swing', info: !1, nestedItemSelector: !1, itemElement: 'div', stageElement: 'div', refreshClass: 'owl-refresh', loadedClass: 'owl-loaded', loadingClass: 'owl-loading', rtlClass: 'owl-rtl', responsiveClass: 'owl-responsive', dragClass: 'owl-drag', itemClass: 'owl-item', stageClass: 'owl-stage', stageOuterClass: 'owl-stage-outer', grabClass: 'owl-grab'}, e.Width={Default: 'default', Inner: 'inner', Outer: 'outer'}, e.Type={Event: 'event', State: 'state'}, e.Plugins={}, e.Workers=[{filter: ['width', 'settings'], run: function() {
    this._width=this.$element.width();
  }}, {filter: ['width', 'items', 'settings'], run: function(a) {
    a.current=this._items&&this._items[this.relative(this._current)];
  }}, {filter: ['items', 'settings'], run: function() {
    this.$stage.children('.cloned').remove();
  }}, {filter: ['width', 'items', 'settings'], run: function(a) {
    const b=this.settings.margin||''; const c=!this.settings.autoWidth; const d=this.settings.rtl; const e={'width': 'auto', 'margin-left': d?b:'', 'margin-right': d?'':b}; !c&&this.$stage.children().css(e), a.css=e;
  }}, {filter: ['width', 'items', 'settings'], run: function(a) {
    const b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin; let c=null; let d=this._items.length; const e=!this.settings.autoWidth; const f=[]; for (a.items={merge: !1, width: b}; d--;)c=this._mergers[d], c=this.settings.mergeFit&&Math.min(c, this.settings.items)||c, a.items.merge=c>1||a.items.merge, f[d]=e?b*c:this._items[d].width(); this._widths=f;
  }}, {filter: ['items', 'settings'], run: function() {
    const b=[]; const c=this._items; const d=this.settings; const e=Math.max(2*d.items, 4); const f=2*Math.ceil(c.length/2); let g=d.loop&&c.length?d.rewind?e:Math.max(e, f):0; let h=''; let i=''; for (g/=2; g--;)b.push(this.normalize(b.length/2, !0)), h+=c[b[b.length-1]][0].outerHTML, b.push(this.normalize(c.length-1-(b.length-1)/2, !0)), i=c[b[b.length-1]][0].outerHTML+i; this._clones=b, a(h).addClass('cloned').appendTo(this.$stage), a(i).addClass('cloned').prependTo(this.$stage);
  }}, {filter: ['width', 'items', 'settings'], run: function() {
    for (var a=this.settings.rtl?1:-1, b=this._clones.length+this._items.length, c=-1, d=0, e=0, f=[]; ++c<b;)d=f[c-1]||0, e=this._widths[this.relative(c)]+this.settings.margin, f.push(d+e*a); this._coordinates=f;
  }}, {filter: ['width', 'items', 'settings'], run: function() {
    const a=this.settings.stagePadding; const b=this._coordinates; const c={'width': Math.ceil(Math.abs(b[b.length-1]))+2*a, 'padding-left': a||'', 'padding-right': a||''}; this.$stage.css(c);
  }}, {filter: ['width', 'items', 'settings'], run: function(a) {
    let b=this._coordinates.length; const c=!this.settings.autoWidth; const d=this.$stage.children(); if (c&&a.items.merge) for (;b--;)a.css.width=this._widths[this.relative(b)], d.eq(b).css(a.css); else c&&(a.css.width=a.items.width, d.css(a.css));
  }}, {filter: ['items'], run: function() {
    this._coordinates.length<1&&this.$stage.removeAttr('style');
  }}, {filter: ['width', 'items', 'settings'], run: function(a) {
    a.current=a.current?this.$stage.children().index(a.current):0, a.current=Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
  }}, {filter: ['position'], run: function() {
    this.animate(this.coordinates(this._current));
  }}, {filter: ['width', 'position', 'items', 'settings'], run: function() {
    let a; let b; let c; let d; const e=this.settings.rtl?1:-1; const f=2*this.settings.stagePadding; const g=this.coordinates(this.current())+f; const h=g+this.width()*e; const i=[]; for (c=0, d=this._coordinates.length; c<d; c++)a=this._coordinates[c-1]||0, b=Math.abs(this._coordinates[c])+f*e, (this.op(a, '<=', g)&&this.op(a, '>', h)||this.op(b, '<', g)&&this.op(b, '>', h))&&i.push(c); this.$stage.children('.active').removeClass('active'), this.$stage.children(':eq('+i.join('), :eq(')+')').addClass('active'), this.settings.center&&(this.$stage.children('.center').removeClass('center'), this.$stage.children().eq(this.current()).addClass('center'));
  }}], e.prototype.initialize=function() {
    if (this.enter('initializing'), this.trigger('initialize'), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth&&!this.is('pre-loading')) {
      let b; let c; let e; b=this.$element.find('img'), c=this.settings.nestedItemSelector?'.'+this.settings.nestedItemSelector:d, e=this.$element.children(c).width(), b.length&&e<=0&&this.preloadAutoWidthImages(b);
    } this.$element.addClass(this.options.loadingClass), this.$stage=a('<'+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(':visible')?this.refresh():this.invalidate('width'), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave('initializing'), this.trigger('initialized');
  }, e.prototype.setup=function() {
    const b=this.viewport(); const c=this.options.responsive; let d=-1; let e=null; c?(a.each(c, function(a) {
      a<=b&&a>d&&(d=Number(a));
    }), e=a.extend({}, this.options, c[d]), 'function'==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()), delete e.responsive, e.responsiveClass&&this.$element.attr('class', this.$element.attr('class').replace(new RegExp('('+this.options.responsiveClass+'-)\\S+\\s', 'g'), '$1'+d))):e=a.extend({}, this.options), this.trigger('change', {property: {name: 'settings', value: e}}), this._breakpoint=d, this.settings=e, this.invalidate('settings'), this.trigger('changed', {property: {name: 'settings', value: this.settings}});
  }, e.prototype.optionsLogic=function() {
    this.settings.autoWidth&&(this.settings.stagePadding=!1, this.settings.merge=!1);
  }, e.prototype.prepare=function(b) {
    const c=this.trigger('prepare', {content: b}); return c.data||(c.data=a('<'+this.settings.itemElement+'/>').addClass(this.options.itemClass).append(b)), this.trigger('prepared', {content: c.data}), c.data;
  }, e.prototype.update=function() {
    for (let b=0, c=this._pipe.length, d=a.proxy(function(a) {
        return this[a];
      }, this._invalidated), e={}; b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter, d).length>0)&&this._pipe[b].run(e), b++; this._invalidated={}, !this.is('valid')&&this.enter('valid');
  }, e.prototype.width=function(a) {
    switch (a=a||e.Width.Default) {
      case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width-2*this.settings.stagePadding+this.settings.margin;
    }
  }, e.prototype.refresh=function() {
    this.enter('refreshing'), this.trigger('refresh'), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave('refreshing'), this.trigger('refreshed');
  }, e.prototype.onThrottledResize=function() {
    b.clearTimeout(this.resizeTimer), this.resizeTimer=b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize=function() {
    return !!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(':visible')&&(this.enter('resizing'), this.trigger('resize').isDefaultPrevented()?(this.leave('resizing'), !1):(this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized')))));
  }, e.prototype.registerEventHandlers=function() {
    a.support.transition&&this.$stage.on(a.support.transition.end+'.owl.core', a.proxy(this.onTransitionEnd, this)), this.settings.responsive!==!1&&this.on(b, 'resize', this._handlers.onThrottledResize), this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass), this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
      return !1;
    })), this.settings.touchDrag&&(this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart=function(b) {
    let d=null; 3!==b.which&&(a.support.transform?(d=this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(','), d={x: d[16===d.length?12:4], y: d[16===d.length?13:5]}):(d=this.$stage.position(), d={x: this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left, y: d.top}), this.is('animating')&&(a.support.transform?this.animate(d.x):this.$stage.stop(), this.invalidate('position')), this.$element.toggleClass(this.options.grabClass, 'mousedown'===b.type), this.speed(0), this._drag.time=(new Date).getTime(), this._drag.target=a(b.target), this._drag.stage.start=d, this._drag.stage.current=d, this._drag.pointer=this.pointer(b), a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)), a(c).one('mousemove.owl.core touchmove.owl.core', a.proxy(function(b) {
      const d=this.difference(this._drag.pointer, this.pointer(b)); a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)), Math.abs(d.x)<Math.abs(d.y)&&this.is('valid')||(b.preventDefault(), this.enter('dragging'), this.trigger('drag'));
    }, this)));
  }, e.prototype.onDragMove=function(a) {
    let b=null; let c=null; let d=null; const e=this.difference(this._drag.pointer, this.pointer(a)); const f=this.difference(this._drag.stage.start, e); this.is('dragging')&&(a.preventDefault(), this.settings.loop?(b=this.coordinates(this.minimum()), c=this.coordinates(this.maximum()+1)-b, f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()), c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()), d=this.settings.pullDrag?-1*e.x/5:0, f.x=Math.max(Math.min(f.x, b+d), c+d)), this._drag.stage.current=f, this.animate(f.x));
  }, e.prototype.onDragEnd=function(b) {
    const d=this.difference(this._drag.pointer, this.pointer(b)); const e=this._drag.stage.current; const f=d.x>0^this.settings.rtl?'left':'right'; a(c).off('.owl.core'), this.$element.removeClass(this.options.grabClass), (0!==d.x&&this.is('dragging')||!this.is('valid'))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed), this.current(this.closest(e.x, 0!==d.x?f:this._drag.direction)), this.invalidate('position'), this.update(), this._drag.direction=f, (Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one('click.owl.core', function() {
      return !1;
    })), this.is('dragging')&&(this.leave('dragging'), this.trigger('dragged'));
  }, e.prototype.closest=function(b, c) {
    let d=-1; const e=30; const f=this.width(); const g=this.coordinates(); return this.settings.freeDrag||a.each(g, a.proxy(function(a, h) {
      return 'left'===c&&b>h-e&&b<h+e?d=a:'right'===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b, '<', h)&&this.op(b, '>', g[a+1]||h-f)&&(d='left'===c?a+1:a), d===-1;
    }, this)), this.settings.loop||(this.op(b, '>', g[this.minimum()])?d=b=this.minimum():this.op(b, '<', g[this.maximum()])&&(d=b=this.maximum())), d;
  }, e.prototype.animate=function(b) {
    const c=this.speed()>0; this.is('animating')&&this.onTransitionEnd(), c&&(this.enter('animating'), this.trigger('translate')), a.support.transform3d&&a.support.transition?this.$stage.css({transform: 'translate3d('+b+'px,0px,0px)', transition: this.speed()/1e3+'s'}):c?this.$stage.animate({left: b+'px'}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)):this.$stage.css({left: b+'px'});
  }, e.prototype.is=function(a) {
    return this._states.current[a]&&this._states.current[a]>0;
  }, e.prototype.current=function(a) {
    if (a===d) return this._current; if (0===this._items.length) return d; if (a=this.normalize(a), this._current!==a) {
      const b=this.trigger('change', {property: {name: 'position', value: a}}); b.data!==d&&(a=this.normalize(b.data)), this._current=a, this.invalidate('position'), this.trigger('changed', {property: {name: 'position', value: this._current}});
    } return this._current;
  }, e.prototype.invalidate=function(b) {
    return 'string'===a.type(b)&&(this._invalidated[b]=!0, this.is('valid')&&this.leave('valid')), a.map(this._invalidated, function(a, b) {
      return b;
    });
  }, e.prototype.reset=function(a) {
    a=this.normalize(a), a!==d&&(this._speed=0, this._current=a, this.suppress(['translate', 'translated']), this.animate(this.coordinates(a)), this.release(['translate', 'translated']));
  }, e.prototype.normalize=function(a, b) {
    const c=this._items.length; const e=b?0:this._clones.length; return !this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2), a;
  }, e.prototype.relative=function(a) {
    return a-=this._clones.length/2, this.normalize(a, !0);
  }, e.prototype.maximum=function(a) {
    let b; let c; let d; const e=this.settings; let f=this._coordinates.length; if (e.loop)f=this._clones.length/2+this._items.length-1; else if (e.autoWidth||e.merge) {
      for (b=this._items.length, c=this._items[--b].width(), d=this.$element.width(); b--&&(c+=this._items[b].width()+this.settings.margin, !(c>d)););f=b+1;
    } else f=e.center?this._items.length-1:this._items.length-e.items; return a&&(f-=this._clones.length/2), Math.max(f, 0);
  }, e.prototype.minimum=function(a) {
    return a?0:this._clones.length/2;
  }, e.prototype.items=function(a) {
    return a===d?this._items.slice():(a=this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers=function(a) {
    return a===d?this._mergers.slice():(a=this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones=function(b) {
    const c=this._clones.length/2; const e=c+this._items.length; const f=function(a) {
      return a%2===0?e+a/2:c-(a+1)/2;
    }; return b===d?a.map(this._clones, function(a, b) {
      return f(b);
    }):a.map(this._clones, function(a, c) {
      return a===b?f(c):null;
    });
  }, e.prototype.speed=function(a) {
    return a!==d&&(this._speed=a), this._speed;
  }, e.prototype.coordinates=function(b) {
    let c; let e=1; let f=b-1; return b===d?a.map(this._coordinates, a.proxy(function(a, b) {
      return this.coordinates(b);
    }, this)):(this.settings.center?(this.settings.rtl&&(e=-1, f=b+1), c=this._coordinates[b], c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0, c=Math.ceil(c));
  }, e.prototype.duration=function(a, b, c) {
    return 0===c?0:Math.min(Math.max(Math.abs(b-a), 1), 6)*Math.abs(c||this.settings.smartSpeed);
  }, e.prototype.to=function(a, b) {
    let c=this.current(); let d=null; let e=a-this.relative(c); const f=(e>0)-(e<0); const g=this._items.length; const h=this.minimum(); let i=this.maximum(); this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g), a=c+e, d=((a-h)%g+g)%g+h, d!==a&&d-e<=i&&d-e>0&&(c=d-e, a=d, this.reset(c))):this.settings.rewind?(i+=1, a=(a%i+i)%i):a=Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(':visible')&&this.update();
  }, e.prototype.next=function(a) {
    a=a||!1, this.to(this.relative(this.current())+1, a);
  }, e.prototype.prev=function(a) {
    a=a||!1, this.to(this.relative(this.current())-1, a);
  }, e.prototype.onTransitionEnd=function(a) {
    if (a!==d&&(a.stopPropagation(), (a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))) return !1; this.leave('animating'), this.trigger('translated');
  }, e.prototype.viewport=function() {
    let d; return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn('Can not detect viewport width.'), d;
  }, e.prototype.replace=function(b) {
    this.$stage.empty(), this._items=[], b&&(b=b instanceof jQuery?b:a(b)), this.settings.nestedItemSelector&&(b=b.find('.'+this.settings.nestedItemSelector)), b.filter(function() {
      return 1===this.nodeType;
    }).each(a.proxy(function(a, b) {
      b=this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1*b.find('[data-merge]').addBack('[data-merge]').attr('data-merge')||1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0), this.invalidate('items');
  }, e.prototype.add=function(b, c) {
    const e=this.relative(this._current); c=c===d?this._items.length:this.normalize(c, !0), b=b instanceof jQuery?b:a(b), this.trigger('add', {content: b, position: c}), b=this.prepare(b), 0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b), 0!==this._items.length&&this._items[c-1].after(b), this._items.push(b), this._mergers.push(1*b.find('[data-merge]').addBack('[data-merge]').attr('data-merge')||1)):(this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1*b.find('[data-merge]').addBack('[data-merge]').attr('data-merge')||1)), this._items[e]&&this.reset(this._items[e].index()), this.invalidate('items'), this.trigger('added', {content: b, position: c});
  }, e.prototype.remove=function(a) {
    a=this.normalize(a, !0), a!==d&&(this.trigger('remove', {content: this._items[a], position: a}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate('items'), this.trigger('removed', {content: null, position: a}));
  }, e.prototype.preloadAutoWidthImages=function(b) {
    b.each(a.proxy(function(b, c) {
      this.enter('pre-loading'), c=a(c), a(new Image).one('load', a.proxy(function(a) {
        c.attr('src', a.target.src), c.css('opacity', 1), this.leave('pre-loading'), !this.is('pre-loading')&&!this.is('initializing')&&this.refresh();
      }, this)).attr('src', c.attr('src')||c.attr('data-src')||c.attr('data-src-retina'));
    }, this));
  }, e.prototype.destroy=function() {
    this.$element.off('.owl.core'), this.$stage.off('.owl.core'), a(c).off('.owl.core'), this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer), this.off(b, 'resize', this._handlers.onThrottledResize)); for (const d in this._plugins) this._plugins[d].destroy(); this.$stage.children('.cloned').remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass+'-\\S+\\s', 'g'), '')).removeData('owl.carousel');
  }, e.prototype.op=function(a, b, c) {
    const d=this.settings.rtl; switch (b) {
      case '<': return d?a>c:a<c; case '>': return d?a<c:a>c; case '>=': return d?a<=c:a>=c; case '<=': return d?a>=c:a<=c;
    }
  }, e.prototype.on=function(a, b, c, d) {
a.addEventListener?a.addEventListener(b, c, d):a.attachEvent&&a.attachEvent('on'+b, c);
  }, e.prototype.off=function(a, b, c, d) {
a.removeEventListener?a.removeEventListener(b, c, d):a.detachEvent&&a.detachEvent('on'+b, c);
  }, e.prototype.trigger=function(b, c, d, f, g) {
    const h={item: {count: this._items.length, index: this.current()}}; const i=a.camelCase(a.grep(['on', b, d], function(a) {
      return a;
    }).join('-').toLowerCase()); const j=a.Event([b, 'owl', d||'carousel'].join('.').toLowerCase(), a.extend({relatedTarget: this}, h, c)); return this._supress[b]||(a.each(this._plugins, function(a, b) {
      b.onTrigger&&b.onTrigger(j);
    }), this.register({type: e.Type.Event, name: b}), this.$element.trigger(j), this.settings&&'function'==typeof this.settings[i]&&this.settings[i].call(this, j)), j;
  }, e.prototype.enter=function(b) {
    a.each([b].concat(this._states.tags[b]||[]), a.proxy(function(a, b) {
      this._states.current[b]===d&&(this._states.current[b]=0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave=function(b) {
    a.each([b].concat(this._states.tags[b]||[]), a.proxy(function(a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register=function(b) {
    if (b.type===e.Type.Event) {
      if (a.event.special[b.name]||(a.event.special[b.name]={}), !a.event.special[b.name].owl) {
        const c=a.event.special[b.name]._default; a.event.special[b.name]._default=function(a) {
          return !c||!c.apply||a.namespace&&a.namespace.indexOf('owl')!==-1?a.namespace&&a.namespace.indexOf('owl')>-1:c.apply(this, arguments);
        }, a.event.special[b.name].owl=!0;
      }
    } else {
      b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags, this._states.tags[b.name]=a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
        return a.inArray(c, this._states.tags[b.name])===d;
      }, this)));
    }
  }, e.prototype.suppress=function(b) {
    a.each(b, a.proxy(function(a, b) {
      this._supress[b]=!0;
    }, this));
  }, e.prototype.release=function(b) {
    a.each(b, a.proxy(function(a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer=function(a) {
    const c={x: null, y: null}; return a=a.originalEvent||a||b.event, a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a, a.pageX?(c.x=a.pageX, c.y=a.pageY):(c.x=a.clientX, c.y=a.clientY), c;
  }, e.prototype.isNumeric=function(a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference=function(a, b) {
    return {x: a.x-b.x, y: a.y-b.y};
  }, a.fn.owlCarousel=function(b) {
    const c=Array.prototype.slice.call(arguments, 1); return this.each(function() {
      const d=a(this); let f=d.data('owl.carousel'); f||(f=new e(this, 'object'==typeof b&&b), d.data('owl.carousel', f), a.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function(b, c) {
        f.register({type: e.Type.Event, name: c}), f.$element.on(c+'.owl.carousel.core', a.proxy(function(a) {
          a.namespace&&a.relatedTarget!==this&&(this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), 'string'==typeof b&&'_'!==b.charAt(0)&&f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this._core=b, this._interval=null, this._visible=null, this._handlers={'initialized.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.autoRefresh&&this.watch();
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  }; e.Defaults={autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch=function() {
    this._interval||(this._visible=this._core.$element.is(':visible'), this._interval=b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh=function() {
    this._core.$element.is(':visible')!==this._visible&&(this._visible=!this._visible, this._core.$element.toggleClass('owl-hidden', !this._visible), this._visible&&this._core.invalidate('width')&&this._core.refresh());
  }, e.prototype.destroy=function() {
    let a; let c; b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this))'function'!=typeof this[c]&&(this[c]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this._core=b, this._loaded=[], this._handlers={'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function(b) {
      if (b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&'position'==b.property.name||'initialized'==b.type)) {
        for (let c=this._core.settings, e=c.center&&Math.ceil(c.items/2)||c.items, f=c.center&&e*-1||0, g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f, h=this._core.clones().length, i=a.proxy(function(a, b) {
          this.load(b);
        }, this); f++<e;) this.load(h/2+this._core.relative(g)), h&&a.each(this._core.clones(this._core.relative(g)), i), g++;
      }
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  }; e.Defaults={lazyLoad: !1}, e.prototype.load=function(c) {
    const d=this._core.$stage.children().eq(c); const e=d&&d.find('.owl-lazy'); !e||a.inArray(d.get(0), this._loaded)>-1||(e.each(a.proxy(function(c, d) {
      let e; const f=a(d); const g=b.devicePixelRatio>1&&f.attr('data-src-retina')||f.attr('data-src'); this._core.trigger('load', {element: f, url: g}, 'lazy'), f.is('img')?f.one('load.owl.lazy', a.proxy(function() {
        f.css('opacity', 1), this._core.trigger('loaded', {element: f, url: g}, 'lazy');
      }, this)).attr('src', g):(e=new Image, e.onload=a.proxy(function() {
        f.css({'background-image': 'url("'+g+'")', 'opacity': '1'}), this._core.trigger('loaded', {element: f, url: g}, 'lazy');
      }, this), e.src=g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy=function() {
    let a; let b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this))'function'!=typeof this[b]&&(this[b]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this._core=b, this._handlers={'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.autoHeight&&this.update();
    }, this), 'changed.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.autoHeight&&'position'==a.property.name&&this.update();
    }, this), 'loaded.owl.lazy': a.proxy(function(a) {
      a.namespace&&this._core.settings.autoHeight&&a.element.closest('.'+this._core.settings.itemClass).index()===this._core.current()&&this.update();
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  }; e.Defaults={autoHeight: !1, autoHeightClass: 'owl-height'}, e.prototype.update=function() {
    const b=this._core._current; const c=b+this._core.settings.items; const d=this._core.$stage.children().toArray().slice(b, c); const e=[]; let f=0; a.each(d, function(b, c) {
      e.push(a(c).height());
    }), f=Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy=function() {
    let a; let b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this))'function'!=typeof this[b]&&(this[b]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this._core=b, this._videos={}, this._playing=null, this._handlers={'initialized.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.register({type: 'state', name: 'playing', tags: ['interacting']});
    }, this), 'resize.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault();
    }, this), 'refreshed.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.is('resizing')&&this._core.$stage.find('.cloned .owl-video-frame').remove();
    }, this), 'changed.owl.carousel': a.proxy(function(a) {
      a.namespace&&'position'===a.property.name&&this._playing&&this.stop();
    }, this), 'prepared.owl.carousel': a.proxy(function(b) {
      if (b.namespace) {
        const c=a(b.content).find('.owl-video'); c.length&&(c.css('display', 'none'), this.fetch(c, a(b.content)));
      }
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on('click.owl.video', '.owl-video-play-icon', a.proxy(function(a) {
      this.play(a);
    }, this));
  }; e.Defaults={video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch=function(a, b) {
    let c=function() {
      return a.attr('data-vimeo-id')?'vimeo':a.attr('data-vzaar-id')?'vzaar':'youtube';
    }(); let d=a.attr('data-vimeo-id')||a.attr('data-youtube-id')||a.attr('data-vzaar-id'); const e=a.attr('data-width')||this._core.settings.videoWidth; const f=a.attr('data-height')||this._core.settings.videoHeight; const g=a.attr('href'); if (!g) throw new Error('Missing video URL.'); if (d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf('youtu')>-1)c='youtube'; else if (d[3].indexOf('vimeo')>-1)c='vimeo'; else {
      if (!(d[3].indexOf('vzaar')>-1)) throw new Error('Video URL not supported.'); c='vzaar';
    }d=d[6], this._videos[g]={type: c, id: d, width: e, height: f}, b.attr('data-video', g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail=function(b, c) {
    let d; let e; let f; const g=c.width&&c.height?'style="width:'+c.width+'px;height:'+c.height+'px;"':''; const h=b.find('img'); let i='src'; let j=''; const k=this._core.settings; const l=function(a) {
      e='<div class="owl-video-play-icon"></div>', d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>', b.after(d), b.after(e);
    }; if (b.wrap('<div class="owl-video-wrapper"'+g+'></div>'), this._core.settings.lazyLoad&&(i='data-src', j='owl-lazy'), h.length) return l(h.attr(i)), h.remove(), !1; 'youtube'===c.type?(f='//img.youtube.com/vi/'+c.id+'/hqdefault.jpg', l(f)):'vimeo'===c.type?a.ajax({type: 'GET', url: '//vimeo.com/api/v2/video/'+c.id+'.json', jsonp: 'callback', dataType: 'jsonp', success: function(a) {
      f=a[0].thumbnail_large, l(f);
    }}):'vzaar'===c.type&&a.ajax({type: 'GET', url: '//vzaar.com/api/videos/'+c.id+'.json', jsonp: 'callback', dataType: 'jsonp', success: function(a) {
      f=a.framegrab_url, l(f);
    }});
  }, e.prototype.stop=function() {
    this._core.trigger('stop', null, 'video'), this._playing.find('.owl-video-frame').remove(), this._playing.removeClass('owl-video-playing'), this._playing=null, this._core.leave('playing'), this._core.trigger('stopped', null, 'video');
  }, e.prototype.play=function(b) {
    let c; const d=a(b.target); let e=d.closest('.'+this._core.settings.itemClass); const f=this._videos[e.attr('data-video')]; const g=f.width||'100%'; const h=f.height||this._core.$stage.height(); this._playing||(this._core.enter('playing'), this._core.trigger('play', null, 'video'), e=this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), 'youtube'===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+'?autoplay=1&rel=0&v='+f.id+'" frameborder="0" allowfullscreen></iframe>':'vimeo'===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':'vzaar'===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">'+c+'</div>').insertAfter(e.find('.owl-video')), this._playing=e.addClass('owl-video-playing'));
  }, e.prototype.isInFullScreen=function() {
    const b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement; return b&&a(b).parent().hasClass('owl-video-frame');
  }, e.prototype.destroy=function() {
    let a; let b; this._core.$element.off('click.owl.video'); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this))'function'!=typeof this[b]&&(this[b]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.Video=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this.core=b, this.core.options=a.extend({}, e.Defaults, this.core.options), this.swapping=!0, this.previous=d, this.next=d, this.handlers={'change.owl.carousel': a.proxy(function(a) {
      a.namespace&&'position'==a.property.name&&(this.previous=this.core.current(), this.next=a.property.value);
    }, this), 'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function(a) {
      a.namespace&&(this.swapping='translated'==a.type);
    }, this), 'translate.owl.carousel': a.proxy(function(a) {
      a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap();
    }, this)}, this.core.$element.on(this.handlers);
  }; e.Defaults={animateOut: !1, animateIn: !1}, e.prototype.swap=function() {
    if (1===this.core.settings.items&&a.support.animation&&a.support.transition) {
      this.core.speed(0); let b; const c=a.proxy(this.clear, this); const d=this.core.$stage.children().eq(this.previous); const e=this.core.$stage.children().eq(this.next); const f=this.core.settings.animateIn; const g=this.core.settings.animateOut; this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b+'px'}).addClass('animated owl-animated-out').addClass(g)), f&&e.one(a.support.animation.end, c).addClass('animated owl-animated-in').addClass(f));
    }
  }, e.prototype.clear=function(b) {
    a(b.target).css({left: ''}).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy=function() {
    let a; let b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this))'function'!=typeof this[b]&&(this[b]=null);
  },
  a.fn.owlCarousel.Constructor.Plugins.Animate=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  var e=function(b) {
    this._core=b, this._timeout=null, this._paused=!1, this._handlers={'changed.owl.carousel': a.proxy(function(a) {
a.namespace&&'settings'===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&'position'===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval();
    }, this), 'initialized.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.autoplay&&this.play();
    }, this), 'play.owl.autoplay': a.proxy(function(a, b, c) {
      a.namespace&&this.play(b, c);
    }, this), 'stop.owl.autoplay': a.proxy(function(a) {
      a.namespace&&this.stop();
    }, this), 'mouseover.owl.autoplay': a.proxy(function() {
      this._core.settings.autoplayHoverPause&&this._core.is('rotating')&&this.pause();
    }, this), 'mouseleave.owl.autoplay': a.proxy(function() {
      this._core.settings.autoplayHoverPause&&this._core.is('rotating')&&this.play();
    }, this), 'touchstart.owl.core': a.proxy(function() {
      this._core.settings.autoplayHoverPause&&this._core.is('rotating')&&this.pause();
    }, this), 'touchend.owl.core': a.proxy(function() {
      this._core.settings.autoplayHoverPause&&this.play();
    }, this)}, this._core.$element.on(this._handlers), this._core.options=a.extend({}, e.Defaults, this._core.options);
  }; e.Defaults={autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, e.prototype.play=function(a, b) {
    this._paused=!1, this._core.is('rotating')||(this._core.enter('rotating'), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout=function(d, e) {
    return this._timeout&&b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
      this._paused||this._core.is('busy')||this._core.is('interacting')||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed);
    }, this), d||this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval=function() {
    this._timeout=this._getNextTimeout();
  }, e.prototype.stop=function() {
    this._core.is('rotating')&&(b.clearTimeout(this._timeout), this._core.leave('rotating'));
  }, e.prototype.pause=function() {
    this._core.is('rotating')&&(this._paused=!0);
  }, e.prototype.destroy=function() {
    let a; let b; this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this))'function'!=typeof this[b]&&(this[b]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  'use strict'; var e=function(b) {
    this._core=b, this._initialized=!1, this._pages=[], this._controls={}, this._templates=[], this.$element=this._core.$element, this._overrides={next: this._core.next, prev: this._core.prev, to: this._core.to}, this._handlers={'prepared.owl.carousel': a.proxy(function(b) {
      b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot')+'</div>');
    }, this), 'added.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position, 0, this._templates.pop());
    }, this), 'remove.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position, 1);
    }, this), 'changed.owl.carousel': a.proxy(function(a) {
      a.namespace&&'position'==a.property.name&&this.draw();
    }, this), 'initialized.owl.carousel': a.proxy(function(a) {
      a.namespace&&!this._initialized&&(this._core.trigger('initialize', null, 'navigation'), this.initialize(), this.update(), this.draw(), this._initialized=!0, this._core.trigger('initialized', null, 'navigation'));
    }, this), 'refreshed.owl.carousel': a.proxy(function(a) {
      a.namespace&&this._initialized&&(this._core.trigger('refresh', null, 'navigation'), this.update(), this.draw(), this._core.trigger('refreshed', null, 'navigation'));
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  }; e.Defaults={nav: !1, navText: ['prev', 'next'], navSpeed: !1, navElement: 'div', navContainer: !1, navContainerClass: 'owl-nav', navClass: ['owl-prev', 'owl-next'], slideBy: 1, dotClass: 'owl-dot', dotsClass: 'owl-dots', dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1}, e.prototype.initialize=function() {
    let b; const c=this._core.settings; this._controls.$relative=(c.navContainer?a(c.navContainer):a('<div>').addClass(c.navContainerClass).appendTo(this.$element)).addClass('disabled'), this._controls.$previous=a('<'+c.navElement+'>').addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on('click', a.proxy(function(a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next=a('<'+c.navElement+'>').addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on('click', a.proxy(function(a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData||(this._templates=[a('<div>').addClass(c.dotClass).append(a('<span>')).prop('outerHTML')]), this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a('<div>').addClass(c.dotsClass).appendTo(this.$element)).addClass('disabled'), this._controls.$absolute.on('click', 'div', a.proxy(function(b) {
      const d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index(); b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this)); for (b in this._overrides) this._core[b]=a.proxy(this[b], this);
  }, e.prototype.destroy=function() {
    let a; let b; let c; let d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d]=this._overrides[d]; for (c in Object.getOwnPropertyNames(this))'function'!=typeof this[c]&&(this[c]=null);
  }, e.prototype.update=function() {
    let a; let b; let c; const d=this._core.clones().length/2; const e=d+this._core.items().length; const f=this._core.maximum(!0); const g=this._core.settings; const h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items; if ('page'!==g.slideBy&&(g.slideBy=Math.min(g.slideBy, g.items)), g.dots||'page'==g.slideBy) {
      for (this._pages=[], a=d, b=0, c=0; a<e; a++) {
        if (b>=h||0===b) {
          if (this._pages.push({start: Math.min(f, a-d), end: a-d+h-1}), Math.min(f, a-d)===f) break; b=0, ++c;
        }b+=this._core.mergers(this._core.relative(a));
      }
    }
  }, e.prototype.draw=function() {
    let b; const c=this._core.settings; const d=this._core.items().length<=c.items; const e=this._core.relative(this._core.current()); const f=c.loop||c.rewind; this._controls.$relative.toggleClass('disabled', !c.nav||d), c.nav&&(this._controls.$previous.toggleClass('disabled', !f&&e<=this._core.minimum(!0)), this._controls.$next.toggleClass('disabled', !f&&e>=this._core.maximum(!0))), this._controls.$absolute.toggleClass('disabled', !c.dots||d), c.dots&&(b=this._pages.length-this._controls.$absolute.children().length, c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join('')):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find('.active').removeClass('active'), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass('active'));
  }, e.prototype.onTrigger=function(b) {
    const c=this._core.settings; b.page={index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)};
  }, e.prototype.current=function() {
    const b=this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) {
      return a.start<=b&&a.end>=b;
    }, this)).pop();
  }, e.prototype.getPosition=function(b) {
    let c; let d; const e=this._core.settings; return 'page'==e.slideBy?(c=a.inArray(this.current(), this._pages), d=this._pages.length, b?++c:--c, c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()), d=this._core.items().length, b?c+=e.slideBy:c-=e.slideBy), c;
  }, e.prototype.next=function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev=function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to=function(b, c, d) {
    let e; !d&&this._pages.length?(e=this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b%e+e)%e].start, c)):a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  'use strict'; var e=function(c) {
    this._core=c, this._hashes={}, this.$element=this._core.$element, this._handlers={'initialized.owl.carousel': a.proxy(function(c) {
      c.namespace&&'URLHash'===this._core.settings.startPosition&&a(b).trigger('hashchange.owl.navigation');
    }, this), 'prepared.owl.carousel': a.proxy(function(b) {
      if (b.namespace) {
        const c=a(b.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash'); if (!c) return; this._hashes[c]=b.content;
      }
    }, this), 'changed.owl.carousel': a.proxy(function(c) {
      if (c.namespace&&'position'===c.property.name) {
        const d=this._core.items(this._core.relative(this._core.current())); const e=a.map(this._hashes, function(a, b) {
          return a===d?b:null;
        }).join(); if (!e||b.location.hash.slice(1)===e) return; b.location.hash=e;
      }
    }, this)}, this._core.options=a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on('hashchange.owl.navigation', a.proxy(function(a) {
      const c=b.location.hash.substring(1); const e=this._core.$stage.children(); const f=this._hashes[c]&&e.index(this._hashes[c]); f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f), !1, !0);
    }, this));
  }; e.Defaults={URLhashListener: !1}, e.prototype.destroy=function() {
    let c; let d; a(b).off('hashchange.owl.navigation'); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this))'function'!=typeof this[d]&&(this[d]=null);
  }, a.fn.owlCarousel.Constructor.Plugins.Hash=e;
}(window.Zepto||window.jQuery, window, document), function(a, b, c, d) {
  function e(b, c) {
    let e=!1; const f=b.charAt(0).toUpperCase()+b.slice(1); return a.each((b+' '+h.join(f+' ')+f).split(' '), function(a, b) {
      if (g[b]!==d) return e=!c||b, !1;
    }), e;
  } function f(a) {
    return e(a, !0);
  } var g=a('<support>').get(0).style; var h='Webkit Moz O ms'.split(' '); const i={transition: {end: {WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd', transition: 'transitionend'}}, animation: {end: {WebkitAnimation: 'webkitAnimationEnd', MozAnimation: 'animationend', OAnimation: 'oAnimationEnd', animation: 'animationend'}}}; const j={csstransforms: function() {
    return !!e('transform');
  }, csstransforms3d: function() {
    return !!e('perspective');
  }, csstransitions: function() {
    return !!e('transition');
  }, cssanimations: function() {
    return !!e('animation');
  }}; j.csstransitions()&&(a.support.transition=new String(f('transition')), a.support.transition.end=i.transition.end[a.support.transition]), j.cssanimations()&&(a.support.animation=new String(f('animation')), a.support.animation.end=i.animation.end[a.support.animation]), j.csstransforms()&&(a.support.transform=new String(f('transform')), a.support.transform3d=j.csstransforms3d());
}(window.Zepto||window.jQuery, window, document);

/* ! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
'function'==typeof define&&define.amd?define(['jquery'], a):a('object'==typeof exports?require('jquery'):window.jQuery||window.Zepto);
}(function(a) {
  let b; let c; let d; let e; let f; let g; const h='Close'; const i='BeforeClose'; const j='AfterClose'; const k='BeforeAppend'; const l='MarkupParse'; const m='Open'; const n='Change'; const o='mfp'; const p='.'+o; const q='mfp-ready'; const r='mfp-removing'; const s='mfp-prevent-close'; const t=function() {}; const u=!!window.jQuery; const v=a(window); const w=function(a, c) {
    b.ev.on(o+a+p, c);
  }; const x=function(b, c, d, e) {
    let f=document.createElement('div'); return f.className='mfp-'+b, d&&(f.innerHTML=d), e?c&&c.appendChild(f):(f=a(f), c&&f.appendTo(c)), f;
  }; const y=function(c, d) {
    b.ev.triggerHandler(o+c, d), b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1), b.st.callbacks[c]&&b.st.callbacks[c].apply(b, a.isArray(d)?d:[d]));
  }; const z=function(c) {
    return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace('%title%', b.st.tClose)), g=c), b.currTemplate.closeBtn;
  }; const A=function() {
    a.magnificPopup.instance||(b=new t, b.init(), a.magnificPopup.instance=b);
  }; const B=function() {
    const a=document.createElement('p').style; const b=['ms', 'O', 'Moz', 'Webkit']; if (void 0!==a.transition) return !0; for (;b.length;) if (b.pop()+'Transition'in a) return !0; return !1;
  }; t.prototype={constructor: t, init: function() {
    const c=navigator.appVersion; b.isLowIE=b.isIE8=document.all&&!document.addEventListener, b.isAndroid=/android/gi.test(c), b.isIOS=/iphone|ipad|ipod/gi.test(c), b.supportsTransition=B(), b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d=a(document), b.popupsCache={};
  }, open: function(c) {
    let e; if (c.isObj===!1) {
      b.items=c.items.toArray(), b.index=0; let g; const h=c.items; for (e=0; e<h.length; e++) {
        if (g=h[e], g.parsed&&(g=g.el[0]), g===c.el[0]) {
          b.index=e; break;
        }
      }
    } else b.items=a.isArray(c.items)?c.items:[c.items], b.index=c.index||0; if (b.isOpen) return void b.updateItemHTML(); b.types=[], f='', c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d, c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}), b.currTemplate=b.popupsCache[c.key]):b.currTemplate={}, b.st=a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos='auto'===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos, b.st.modal&&(b.st.closeOnContentClick=!1, b.st.closeOnBgClick=!1, b.st.showCloseBtn=!1, b.st.enableEscapeKey=!1), b.bgOverlay||(b.bgOverlay=x('bg').on('click'+p, function() {
      b.close();
    }), b.wrap=x('wrap').attr('tabindex', -1).on('click'+p, function(a) {
      b._checkIfClose(a.target)&&b.close();
    }), b.container=x('container', b.wrap)), b.contentContainer=x('content'), b.st.preloader&&(b.preloader=x('preloader', b.container, b.st.tLoading)); const i=a.magnificPopup.modules; for (e=0; e<i.length; e++) {
      let j=i[e]; j=j.charAt(0).toUpperCase()+j.slice(1), b['init'+j].call(b);
    }y('BeforeOpen'), b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l, function(a, b, c, d) {
      c.close_replaceWith=z(d.type);
    }), f+=' mfp-close-btn-in'):b.wrap.append(z())), b.st.alignTop&&(f+=' mfp-align-top'), b.fixedContentPos?b.wrap.css({overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY}):b.wrap.css({top: v.scrollTop(), position: 'absolute'}), (b.st.fixedBgPos===!1||'auto'===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height: d.height(), position: 'absolute'}), b.st.enableEscapeKey&&d.on('keyup'+p, function(a) {
      27===a.keyCode&&b.close();
    }), v.on('resize'+p, function() {
      b.updateSize();
    }), b.st.closeOnContentClick||(f+=' mfp-auto-cursor'), f&&b.wrap.addClass(f); const k=b.wH=v.height(); const n={}; if (b.fixedContentPos&&b._hasScrollBar(k)) {
      const o=b._getScrollbarSize(); o&&(n.marginRight=o);
    }b.fixedContentPos&&(b.isIE7?a('body, html').css('overflow', 'hidden'):n.overflow='hidden'); let r=b.st.mainClass; return b.isIE7&&(r+=' mfp-ie7'), r&&b._addClassToMFP(r), b.updateItemHTML(), y('BuildControls'), a('html').css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)), b._lastFocusedEl=document.activeElement, setTimeout(function() {
b.content?(b._addClassToMFP(q), b._setFocus()):b.bgOverlay.addClass(q), d.on('focusin'+p, b._onFocusIn);
    }, 16), b.isOpen=!0, b.updateSize(k), y(m), c;
  }, close: function() {
    b.isOpen&&(y(i), b.isOpen=!1, b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r), setTimeout(function() {
      b._close();
    }, b.st.removalDelay)):b._close());
  }, _close: function() {
    y(h); let c=r+' '+q+' '; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass&&(c+=b.st.mainClass+' '), b._removeClassFromMFP(c), b.fixedContentPos) {
      const e={marginRight: ''}; b.isIE7?a('body, html').css('overflow', ''):e.overflow='', a('html').css(e);
    }d.off('keyup'+p+' focusin'+p), b.ev.off(p), b.wrap.attr('class', 'mfp-wrap').removeAttr('style'), b.bgOverlay.attr('class', 'mfp-bg'), b.container.attr('class', 'mfp-container'), !b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(), b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(), b.currItem=null, b.content=null, b.currTemplate=null, b.prevHeight=0, y(j);
  }, updateSize: function(a) {
    if (b.isIOS) {
      const c=document.documentElement.clientWidth/window.innerWidth; const d=window.innerHeight*c; b.wrap.css('height', d), b.wH=d;
    } else b.wH=a||v.height(); b.fixedContentPos||b.wrap.css('height', b.wH), y('Resize');
  }, updateItemHTML: function() {
    let c=b.items[b.index]; b.contentContainer.detach(), b.content&&b.content.detach(), c.parsed||(c=b.parseEl(b.index)); const d=c.type; if (y('BeforeChange', [b.currItem?b.currItem.type:'', d]), b.currItem=c, !b.currTemplate[d]) {
      const f=b.st[d]?b.st[d].markup:!1; y('FirstMarkupParse', f), f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0;
    }e&&e!==c.type&&b.container.removeClass('mfp-'+e+'-holder'); const g=b['get'+d.charAt(0).toUpperCase()+d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded=!0, y(n, c), e=c.type, b.container.prepend(b.contentContainer), y('AfterChange');
  }, appendContent: function(a, c) {
    b.content=a, a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find('.mfp-close').length||b.content.append(z()):b.content=a:b.content='', y(k), b.container.addClass('mfp-'+c+'-holder'), b.contentContainer.append(b.content);
  }, parseEl: function(c) {
    let d; let e=b.items[c]; if (e.tagName?e={el: a(e)}:(d=e.type, e={data: e, src: e.src}), e.el) {
      for (let f=b.types, g=0; g<f.length; g++) {
        if (e.el.hasClass('mfp-'+f[g])) {
          d=f[g]; break;
        }
      }e.src=e.el.attr('data-mfp-src'), e.src||(e.src=e.el.attr('href'));
    } return e.type=d||b.st.type||'inline', e.index=c, e.parsed=!0, b.items[c]=e, y('ElementParse', e), b.items[c];
  }, addGroup: function(a, c) {
    const d=function(d) {
      d.mfpEl=this, b._openClick(d, a, c);
    }; c||(c={}); const e='click.magnificPopup'; c.mainEl=a, c.items?(c.isObj=!0, a.off(e).on(e, d)):(c.isObj=!1, c.delegate?a.off(e).on(e, c.delegate, d):(c.items=a, a.off(e).on(e, d)));
  }, _openClick: function(c, d, e) {
    const f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick; if (f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)) {
      const g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn; if (g) {
        if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width()<g) return !0;
      } c.type&&(c.preventDefault(), b.isOpen&&c.stopPropagation()), e.el=a(c.mfpEl), e.delegate&&(e.items=d.find(e.delegate)), b.open(e);
    }
  }, updateStatus: function(a, d) {
    if (b.preloader) {
      c!==a&&b.container.removeClass('mfp-s-'+c), d||'loading'!==a||(d=b.st.tLoading); const e={status: a, text: d}; y('UpdateStatus', e), a=e.status, d=e.text, b.preloader.html(d), b.preloader.find('a').on('click', function(a) {
        a.stopImmediatePropagation();
      }), b.container.addClass('mfp-s-'+a), c=a;
    }
  }, _checkIfClose: function(c) {
    if (!a(c).hasClass(s)) {
      const d=b.st.closeOnContentClick; const e=b.st.closeOnBgClick; if (d&&e) return !0; if (!b.content||a(c).hasClass('mfp-close')||b.preloader&&c===b.preloader[0]) return !0; if (c===b.content[0]||a.contains(b.content[0], c)) {
        if (d) return !0;
      } else if (e&&a.contains(document, c)) return !0; return !1;
    }
  }, _addClassToMFP: function(a) {
    b.bgOverlay.addClass(a), b.wrap.addClass(a);
  }, _removeClassFromMFP: function(a) {
    this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
  }, _hasScrollBar: function(a) {
    return (b.isIE7?d.height():document.body.scrollHeight)>(a||v.height());
  }, _setFocus: function() {
    (b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus();
  }, _onFocusIn: function(c) {
    return c.target===b.wrap[0]||a.contains(b.wrap[0], c.target)?void 0:(b._setFocus(), !1);
  }, _parseMarkup: function(b, c, d) {
    let e; d.data&&(c=a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
      if (void 0===d||d===!1) return !0; if (e=c.split('_'), e.length>1) {
        const f=b.find(p+'-'+e[0]); if (f.length>0) {
          const g=e[1]; 'replaceWith'===g?f[0]!==d[0]&&f.replaceWith(d):'img'===g?f.is('img')?f.attr('src', d):f.replaceWith(a('<img>').attr('src', d).attr('class', f.attr('class'))):f.attr(e[1], d);
        }
      } else b.find(p+'-'+c).html(d);
    });
  }, _getScrollbarSize: function() {
    if (void 0===b.scrollbarSize) {
      const a=document.createElement('div'); a.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(a), b.scrollbarSize=a.offsetWidth-a.clientWidth, document.body.removeChild(a);
    } return b.scrollbarSize;
  }}, a.magnificPopup={instance: null, proto: t.prototype, modules: [], open: function(b, c) {
    return A(), b=b?a.extend(!0, {}, b):{}, b.isObj=!0, b.index=c||0, this.instance.open(b);
  }, close: function() {
    return a.magnificPopup.instance&&a.magnificPopup.instance.close();
  }, registerModule: function(b, c) {
    c.options&&(a.magnificPopup.defaults[b]=c.options), a.extend(this.proto, c.proto), this.modules.push(b);
  }, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: '', preloader: !0, focus: '', closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...', autoFocusLast: !0}}, a.fn.magnificPopup=function(c) {
    A(); const d=a(this); if ('string'==typeof c) {
      if ('open'===c) {
        let e; const f=u?d.data('magnificPopup'):d[0].magnificPopup; const g=parseInt(arguments[1], 10)||0; f.items?e=f.items[g]:(e=d, f.delegate&&(e=e.find(f.delegate)), e=e.eq(g)), b._openClick({mfpEl: e}, d, f);
      } else b.isOpen&&b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c=a.extend(!0, {}, c), u?d.data('magnificPopup', c):d[0].magnificPopup=c, b.addGroup(d, c); return d;
  }; let C; let D; let E; const F='inline'; const G=function() {
    E&&(D.after(E.addClass(C)).detach(), E=null);
  }; a.magnificPopup.registerModule(F, {options: {hiddenClass: 'hide', markup: '', tNotFound: 'Content not found'}, proto: {initInline: function() {
    b.types.push(F), w(h+'.'+F, function() {
      G();
    });
  }, getInline: function(c, d) {
    if (G(), c.src) {
      const e=b.st.inline; let f=a(c.src); if (f.length) {
        const g=f[0].parentNode; g&&g.tagName&&(D||(C=e.hiddenClass, D=x(C), C='mfp-'+C), E=f.after(D).detach().removeClass(C)), b.updateStatus('ready');
      } else b.updateStatus('error', e.tNotFound), f=a('<div>'); return c.inlineElement=f, f;
    } return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
  }}}); let H; const I='ajax'; const J=function() {
    H&&a(document.body).removeClass(H);
  }; const K=function() {
    J(), b.req&&b.req.abort();
  }; a.magnificPopup.registerModule(I, {options: {settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function() {
    b.types.push(I), H=b.st.ajax.cursor, w(h+'.'+I, K), w('BeforeChange.'+I, K);
  }, getAjax: function(c) {
    H&&a(document.body).addClass(H), b.updateStatus('loading'); const d=a.extend({url: c.src, success: function(d, e, f) {
      const g={data: d, xhr: f}; y('ParseAjax', g), b.appendContent(a(g.data), I), c.finished=!0, J(), b._setFocus(), setTimeout(function() {
        b.wrap.addClass(q);
      }, 16), b.updateStatus('ready'), y('AjaxContentAdded');
    }, error: function() {
      J(), c.finished=c.loadError=!0, b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src));
    }}, b.st.ajax.settings); return b.req=a.ajax(d), '';
  }}}); let L; const M=function(c) {
    if (c.data&&void 0!==c.data.title) return c.data.title; const d=b.st.image.titleSrc; if (d) {
      if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d)||'';
    } return '';
  }; a.magnificPopup.registerModule('image', {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function() {
    const c=b.st.image; const d='.image'; b.types.push('image'), w(m+d, function() {
      'image'===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor);
    }), w(h+d, function() {
      c.cursor&&a(document.body).removeClass(c.cursor), v.off('resize'+p);
    }), w('Resize'+d, b.resizeImage), b.isLowIE&&w('AfterChange', b.resizeImage);
  }, resizeImage: function() {
    const a=b.currItem; if (a&&a.img&&b.st.image.verticalFit) {
      let c=0; b.isLowIE&&(c=parseInt(a.img.css('padding-top'), 10)+parseInt(a.img.css('padding-bottom'), 10)), a.img.css('max-height', b.wH-c);
    }
  }, _onImageHasSize: function(a) {
    a.img&&(a.hasSize=!0, L&&clearInterval(L), a.isCheckingImgSize=!1, y('ImageHasSize', a), a.imgHidden&&(b.content&&b.content.removeClass('mfp-loading'), a.imgHidden=!1));
  }, findImageSize: function(a) {
    let c=0; const d=a.img[0]; var e=function(f) {
      L&&clearInterval(L), L=setInterval(function() {
        return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L), c++, void(3===c?e(10):40===c?e(50):100===c&&e(500)));
      }, f);
    }; e(1);
  }, getImage: function(c, d) {
    let e=0; var f=function() {
      c&&(c.img[0].complete?(c.img.off('.mfploader'), c===b.currItem&&(b._onImageHasSize(c), b.updateStatus('ready')), c.hasSize=!0, c.loaded=!0, y('ImageLoadComplete')):(e++, 200>e?setTimeout(f, 100):g()));
    }; var g=function() {
      c&&(c.img.off('.mfploader'), c===b.currItem&&(b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))), c.hasSize=!0, c.loaded=!0, c.loadError=!0);
    }; var h=b.st.image; const i=d.find('.mfp-img'); if (i.length) {
      let j=document.createElement('img'); j.className='mfp-img', c.el&&c.el.find('img').length&&(j.alt=c.el.find('img').attr('alt')), c.img=a(j).on('load.mfploader', f).on('error.mfploader', g), j.src=c.src, i.is('img')&&(c.img=c.img.clone()), j=c.img[0], j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1);
    } return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c), b.resizeImage(), c.hasSize?(L&&clearInterval(L), c.loadError?(d.addClass('mfp-loading'), b.updateStatus('error', h.tError.replace('%url%', c.src))):(d.removeClass('mfp-loading'), b.updateStatus('ready')), d):(b.updateStatus('loading'), c.loading=!0, c.hasSize||(c.imgHidden=!0, d.addClass('mfp-loading'), b.findImageSize(c)), d);
  }}}); let N; const O=function() {
    return void 0===N&&(N=void 0!==document.createElement('p').style.MozTransform), N;
  }; a.magnificPopup.registerModule('zoom', {options: {enabled: !1, easing: 'ease-in-out', duration: 300, opener: function(a) {
    return a.is('img')?a:a.find('img');
  }}, proto: {initZoom: function() {
    let a; const c=b.st.zoom; const d='.zoom'; if (c.enabled&&b.supportsTransition) {
      let e; let f; const g=c.duration; const j=function(a) {
        const b=a.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'); const d='all '+c.duration/1e3+'s '+c.easing; const e={'position': 'fixed', 'zIndex': 9999, 'left': 0, 'top': 0, '-webkit-backface-visibility': 'hidden'}; const f='transition'; return e['-webkit-'+f]=e['-moz-'+f]=e['-o-'+f]=e[f]=d, b.css(e), b;
      }; const k=function() {
        b.content.css('visibility', 'visible');
      }; w('BuildControls'+d, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e), b.content.css('visibility', 'hidden'), a=b._getItemToZoom(), !a) return void k(); f=j(a), f.css(b._getOffset()), b.wrap.append(f), e=setTimeout(function() {
            f.css(b._getOffset(!0)), e=setTimeout(function() {
              k(), setTimeout(function() {
                f.remove(), a=f=null, y('ZoomAnimationEnded');
              }, 16);
            }, g);
          }, 16);
        }
      }), w(i+d, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e), b.st.removalDelay=g, !a) {
            if (a=b._getItemToZoom(), !a) return; f=j(a);
          }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css('visibility', 'hidden'), setTimeout(function() {
            f.css(b._getOffset());
          }, 16);
        }
      }), w(h+d, function() {
        b._allowZoom()&&(k(), f&&f.remove(), a=null);
      });
    }
  }, _allowZoom: function() {
    return 'image'===b.currItem.type;
  }, _getItemToZoom: function() {
    return b.currItem.hasSize?b.currItem.img:!1;
  }, _getOffset: function(c) {
    let d; d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem); const e=d.offset(); const f=parseInt(d.css('padding-top'), 10); const g=parseInt(d.css('padding-bottom'), 10); e.top-=a(window).scrollTop()-f; const h={width: d.width(), height: (u?d.innerHeight():d[0].offsetHeight)-g-f}; return O()?h['-moz-transform']=h.transform='translate('+e.left+'px,'+e.top+'px)':(h.left=e.left, h.top=e.top), h;
  }}}); const P='iframe'; const Q='//about:blank'; const R=function(a) {
    if (b.currTemplate[P]) {
      const c=b.currTemplate[P].find('iframe'); c.length&&(a||(c[0].src=Q), b.isIE8&&c.css('display', a?'block':'none'));
    }
  }; a.magnificPopup.registerModule(P, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: 'iframe_src', patterns: {youtube: {index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1'}, vimeo: {index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1'}, gmaps: {index: '//maps.google.', src: '%id%&output=embed'}}}, proto: {initIframe: function() {
    b.types.push(P), w('BeforeChange', function(a, b, c) {
      b!==c&&(b===P?R():c===P&&R(!0));
    }), w(h+'.'+P, function() {
      R();
    });
  }, getIframe: function(c, d) {
    let e=c.src; const f=b.st.iframe; a.each(f.patterns, function() {
      return e.indexOf(this.index)>-1?(this.id&&(e='string'==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length, e.length):this.id.call(this, e)), e=this.src.replace('%id%', e), !1):void 0;
    }); const g={}; return f.srcAction&&(g[f.srcAction]=e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d;
  }}}); const S=function(a) {
    const c=b.items.length; return a>c-1?a-c:0>a?c+a:a;
  }; const T=function(a, b, c) {
    return a.replace(/%curr%/gi, b+1).replace(/%total%/gi, c);
  }; a.magnificPopup.registerModule('gallery', {options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%'}, proto: {initGallery: function() {
    const c=b.st.gallery; const e='.mfp-gallery'; return b.direction=!0, c&&c.enabled?(f+=' mfp-gallery', w(m+e, function() {
      c.navigateByImgClick&&b.wrap.on('click'+e, '.mfp-img', function() {
        return b.items.length>1?(b.next(), !1):void 0;
      }), d.on('keydown'+e, function(a) {
37===a.keyCode?b.prev():39===a.keyCode&&b.next();
      });
    }), w('UpdateStatus'+e, function(a, c) {
      c.text&&(c.text=T(c.text, b.currItem.index, b.items.length));
    }), w(l+e, function(a, d, e, f) {
      const g=b.items.length; e.counter=g>1?T(c.tCounter, f.index, g):'';
    }), w('BuildControls'+e, function() {
      if (b.items.length>1&&c.arrows&&!b.arrowLeft) {
        const d=c.arrowMarkup; const e=b.arrowLeft=a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')).addClass(s); const f=b.arrowRight=a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right')).addClass(s); e.click(function() {
          b.prev();
        }), f.click(function() {
          b.next();
        }), b.container.append(e.add(f));
      }
    }), w(n+e, function() {
      b._preloadTimeout&&clearTimeout(b._preloadTimeout), b._preloadTimeout=setTimeout(function() {
        b.preloadNearbyImages(), b._preloadTimeout=null;
      }, 16);
    }), void w(h+e, function() {
      d.off(e), b.wrap.off('click'+e), b.arrowRight=b.arrowLeft=null;
    })):!1;
  }, next: function() {
    b.direction=!0, b.index=S(b.index+1), b.updateItemHTML();
  }, prev: function() {
    b.direction=!1, b.index=S(b.index-1), b.updateItemHTML();
  }, goTo: function(a) {
    b.direction=a>=b.index, b.index=a, b.updateItemHTML();
  }, preloadNearbyImages: function() {
    let a; const c=b.st.gallery.preload; const d=Math.min(c[0], b.items.length); const e=Math.min(c[1], b.items.length); for (a=1; a<=(b.direction?e:d); a++)b._preloadItem(b.index+a); for (a=1; a<=(b.direction?d:e); a++)b._preloadItem(b.index-a);
  }, _preloadItem: function(c) {
    if (c=S(c), !b.items[c].preloaded) {
      let d=b.items[c]; d.parsed||(d=b.parseEl(c)), y('LazyLoad', d), 'image'===d.type&&(d.img=a('<img class="mfp-img" />').on('load.mfploader', function() {
        d.hasSize=!0;
      }).on('error.mfploader', function() {
        d.hasSize=!0, d.loadError=!0, y('LazyLoadError', d);
      }).attr('src', d.src)), d.preloaded=!0;
    }
  }}}); const U='retina'; a.magnificPopup.registerModule(U, {options: {replaceSrc: function(a) {
    return a.src.replace(/\.\w+$/, function(a) {
      return '@2x'+a;
    });
  }, ratio: 1}, proto: {initRetina: function() {
    if (window.devicePixelRatio>1) {
      const a=b.st.retina; let c=a.ratio; c=isNaN(c)?c():c, c>1&&(w('ImageHasSize.'+U, function(a, b) {
        b.img.css({'max-width': b.img[0].naturalWidth/c, 'width': '100%'});
      }), w('ElementParse.'+U, function(b, d) {
        d.src=a.replaceSrc(d, c);
      }));
    }
  }}}), A();
});

/* !
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(l, o, e) {
  'use strict'; l.fn.scrollUp=function(o) {
    l.data(e.body, 'scrollUp')||(l.data(e.body, 'scrollUp', !0), l.fn.scrollUp.init(o));
  }, l.fn.scrollUp.init=function(r) {
    let s; let t; let c; let i; let n; let a; let d; const p=l.fn.scrollUp.settings=l.extend({}, l.fn.scrollUp.defaults, r); let f=!1; switch (d=p.scrollTrigger?l(p.scrollTrigger):l('<a/>', {id: p.scrollName, href: '#top'}), p.scrollTitle&&d.attr('title', p.scrollTitle), d.appendTo('body'), p.scrollImg||p.scrollTrigger||d.html(p.scrollText), d.css({display: 'none', position: 'fixed', zIndex: p.zIndex}), p.activeOverlay&&l('<div/>', {id: p.scrollName+'-active'}).css({position: 'absolute', top: p.scrollDistance+'px', width: '100%', borderTop: '1px dotted'+p.activeOverlay, zIndex: p.zIndex}).appendTo('body'), p.animation) {
      case 'fade': s='fadeIn', t='fadeOut', c=p.animationSpeed; break; case 'slide': s='slideDown', t='slideUp', c=p.animationSpeed; break; default: s='show', t='hide', c=0;
    }i='top'===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance, n=l(o).scroll(function() {
l(o).scrollTop()>i?f||(d[s](c), f=!0):f&&(d[t](c), f=!1);
    }), p.scrollTarget?'number'==typeof p.scrollTarget?a=p.scrollTarget:'string'==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0, d.click(function(o) {
      o.preventDefault(), l('html, body').animate({scrollTop: a}, p.scrollSpeed, p.easingType);
    });
  }, l.fn.scrollUp.defaults={scrollName: 'scrollUp', scrollDistance: 300, scrollFrom: 'top', scrollSpeed: 300, easingType: 'linear', animation: 'fade', animationSpeed: 200, scrollTrigger: !1, scrollTarget: !1, scrollText: 'Scroll to top', scrollTitle: !1, scrollImg: !1, activeOverlay: !1, zIndex: 2147483647}, l.fn.scrollUp.destroy=function(r) {
    l.removeData(e.body, 'scrollUp'), l('#'+l.fn.scrollUp.settings.scrollName).remove(), l('#'+l.fn.scrollUp.settings.scrollName+'-active').remove(), l.fn.jquery.split('.')[1]>=7?l(o).off('scroll', r):l(o).unbind('scroll', r);
  }, l.scrollUp=l.fn.scrollUp;
}(jQuery, window, document);

// :: Waypoints js
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  const t=[].indexOf||function(t) {
    for (let e=0, n=this.length; e<n; e++) {
      if (e in this&&this[e]===t) return e;
    } return -1;
  }; const e=[].slice; (function(t, e) {
    if (typeof define==='function'&&define.amd) {
      return define('waypoints', ['jquery'], function(n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function(n, r) {
    let i; let o; let l; let s; let f; let u; let a; let c; let h; let d; let p; let y; let v; let w; let g; let m; i=n(r); c=t.call(r, 'ontouchstart')>=0; s={horizontal: {}, vertical: {}}; f=1; a={}; u='waypoints-context-id'; p='resize.waypoints'; y='scroll.waypoints'; v=1; w='waypoints-waypoint-ids'; g='waypoint'; m='waypoints'; o=function() {
      function t(t) {
        const e=this; this.$element=t; this.element=t[0]; this.didResize=false; this.didScroll=false; this.id='context'+f++; this.oldScroll={x: t.scrollLeft(), y: t.scrollTop()}; this.waypoints={horizontal: {}, vertical: {}}; t.data(u, this.id); a[this.id]=this; t.bind(y, function() {
          let t; if (!(e.didScroll||c)) {
            e.didScroll=true; t=function() {
              e.doScroll(); return e.didScroll=false;
            }; return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        }); t.bind(p, function() {
          let t; if (!e.didResize) {
            e.didResize=true; t=function() {
              n[m]('refresh'); return e.didResize=false;
            }; return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }t.prototype.doScroll=function() {
        let t; const e=this; t={horizontal: {newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left'}, vertical: {newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up'}}; if (c&&(!t.vertical.oldScroll||!t.vertical.newScroll)) {
          n[m]('refresh');
        }n.each(t, function(t, r) {
          let i; let o; let l; l=[]; o=r.newScroll>r.oldScroll; i=o?r.forward:r.backward; n.each(e.waypoints[t], function(t, e) {
            let n; let i; if (r.oldScroll<(n=e.offset)&&n<=r.newScroll) {
              return l.push(e);
            } else if (r.newScroll<(i=e.offset)&&i<=r.oldScroll) {
              return l.push(e);
            }
          }); l.sort(function(t, e) {
            return t.offset-e.offset;
          }); if (!o) {
            l.reverse();
          } return n.each(l, function(t, e) {
            if (e.options.continuous||t===l.length-1) {
              return e.trigger([i]);
            }
          });
        }); return this.oldScroll={x: t.horizontal.newScroll, y: t.vertical.newScroll};
      }; t.prototype.refresh=function() {
        let t; let e; let r; const i=this; r=n.isWindow(this.element); e=this.$element.offset(); this.doScroll(); t={horizontal: {contextOffset: r?0:e.left, contextScroll: r?0:this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left', offsetProp: 'left'}, vertical: {contextOffset: r?0:e.top, contextScroll: r?0:this.oldScroll.y, contextDimension: r?n[m]('viewportHeight'):this.$element.height(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up', offsetProp: 'top'}}; return n.each(t, function(t, e) {
          return n.each(i.waypoints[t], function(t, r) {
            let i; let o; let l; let s; let f; i=r.options.offset; l=r.offset; o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp]; if (n.isFunction(i)) {
              i=i.apply(r.element);
            } else if (typeof i==='string') {
              i=parseFloat(i); if (r.options.offset.indexOf('%')>-1) {
                i=Math.ceil(e.contextDimension*i/100);
              }
            }r.offset=o-e.contextOffset+e.contextScroll-i; if (r.options.onlyOnScroll&&l!=null||!r.enabled) {
              return;
            } if (l!==null&&l<(s=e.oldScroll)&&s<=r.offset) {
              return r.trigger([e.backward]);
            } else if (l!==null&&l>(f=e.oldScroll)&&f>=r.offset) {
              return r.trigger([e.forward]);
            } else if (l===null&&e.oldScroll>=r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      }; t.prototype.checkEmpty=function() {
        if (n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(' ')); return delete a[this.id];
        }
      }; return t;
    }(); l=function() {
      function t(t, e, r) {
        let i; let o; r=n.extend({}, n.fn[g].defaults, r); if (r.offset==='bottom-in-view') {
          r.offset=function() {
            let t; t=n[m]('viewportHeight'); if (!n.isWindow(e.element)) {
              t=e.$element.height();
            } return t-n(this).outerHeight();
          };
        } this.$element=t; this.element=t[0]; this.axis=r.horizontal?'horizontal':'vertical'; this.callback=r.handler; this.context=e; this.enabled=r.enabled; this.id='waypoints'+v++; this.offset=null; this.options=r; e.waypoints[this.axis][this.id]=this; s[this.axis][this.id]=this; i=(o=t.data(w))!=null?o:[]; i.push(this.id); t.data(w, i);
      }t.prototype.trigger=function(t) {
        if (!this.enabled) {
          return;
        } if (this.callback!=null) {
          this.callback.apply(this.element, t);
        } if (this.options.triggerOnce) {
          return this.destroy();
        }
      }; t.prototype.disable=function() {
        return this.enabled=false;
      }; t.prototype.enable=function() {
        this.context.refresh(); return this.enabled=true;
      }; t.prototype.destroy=function() {
        delete s[this.axis][this.id]; delete this.context.waypoints[this.axis][this.id]; return this.context.checkEmpty();
      }; t.getWaypointsByElement=function(t) {
        let e; let r; r=n(t).data(w); if (!r) {
          return [];
        }e=n.extend({}, s.horizontal, s.vertical); return n.map(r, function(t) {
          return e[t];
        });
      }; return t;
    }(); d={init: function(t, e) {
      let r; if (e==null) {
        e={};
      } if ((r=e.handler)==null) {
        e.handler=t;
      } this.each(function() {
        let t; let r; let i; let s; t=n(this); i=(s=e.context)!=null?s:n.fn[g].defaults.context; if (!n.isWindow(i)) {
          i=t.closest(i);
        }i=n(i); r=a[i.data(u)]; if (!r) {
          r=new o(i);
        } return new l(t, r, e);
      }); n[m]('refresh'); return this;
    }, disable: function() {
      return d._invoke(this, 'disable');
    }, enable: function() {
      return d._invoke(this, 'enable');
    }, destroy: function() {
      return d._invoke(this, 'destroy');
    }, prev: function(t, e) {
      return d._traverse.call(this, t, e, function(t, e, n) {
        if (e>0) {
          return t.push(n[e-1]);
        }
      });
    }, next: function(t, e) {
      return d._traverse.call(this, t, e, function(t, e, n) {
        if (e<n.length-1) {
          return t.push(n[e+1]);
        }
      });
    }, _traverse: function(t, e, i) {
      let o; let l; if (t==null) {
        t='vertical';
      } if (e==null) {
        e=r;
      }l=h.aggregate(e); o=[]; this.each(function() {
        let e; e=n.inArray(this, l[t]); return i(o, e, l[t]);
      }); return this.pushStack(o);
    }, _invoke: function(t, e) {
      t.each(function() {
        let t; t=l.getWaypointsByElement(this); return n.each(t, function(t, n) {
          n[e](); return true;
        });
      }); return this;
    }}; n.fn[g]=function() {
      let t; let r; r=arguments[0], t=2<=arguments.length?e.call(arguments, 1):[]; if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error('jQuery Waypoints needs a callback function or handler option.');
      } else {
        return n.error('The '+r+' method does not exist in jQuery Waypoints.');
      }
    }; n.fn[g].defaults={context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false}; h={refresh: function() {
      return n.each(a, function(t, e) {
        return e.refresh();
      });
    }, viewportHeight: function() {
      let t; return (t=r.innerHeight)!=null?t:i.height();
    }, aggregate: function(t) {
      let e; let r; let i; e=s; if (t) {
        e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0;
      } if (!e) {
        return [];
      }r={horizontal: [], vertical: []}; n.each(r, function(t, i) {
        n.each(e[t], function(t, e) {
          return i.push(e);
        }); i.sort(function(t, e) {
          return t.offset-e.offset;
        }); r[t]=n.map(i, function(t) {
          return t.element;
        }); return r[t]=n.unique(r[t]);
      }); return r;
    }, above: function(t) {
      if (t==null) {
        t=r;
      } return h._filter(t, 'vertical', function(t, e) {
        return e.offset<=t.oldScroll.y;
      });
    }, below: function(t) {
      if (t==null) {
        t=r;
      } return h._filter(t, 'vertical', function(t, e) {
        return e.offset>t.oldScroll.y;
      });
    }, left: function(t) {
      if (t==null) {
        t=r;
      } return h._filter(t, 'horizontal', function(t, e) {
        return e.offset<=t.oldScroll.x;
      });
    }, right: function(t) {
      if (t==null) {
        t=r;
      } return h._filter(t, 'horizontal', function(t, e) {
        return e.offset>t.oldScroll.x;
      });
    }, enable: function() {
      return h._invoke('enable');
    }, disable: function() {
      return h._invoke('disable');
    }, destroy: function() {
      return h._invoke('destroy');
    }, extendFn: function(t, e) {
      return d[t]=e;
    }, _invoke: function(t) {
      let e; e=n.extend({}, s.vertical, s.horizontal); return n.each(e, function(e, n) {
        n[t](); return true;
      });
    }, _filter: function(t, e, r) {
      let i; let o; i=a[n(t).data(u)]; if (!i) {
        return [];
      }o=[]; n.each(i.waypoints[e], function(t, e) {
        if (r(i, e)) {
          return o.push(e);
        }
      }); o.sort(function(t, e) {
        return t.offset-e.offset;
      }); return n.map(o, function(t) {
        return t.element;
      });
    }}; n[m]=function() {
      let t; let n; n=arguments[0], t=2<=arguments.length?e.call(arguments, 1):[]; if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    }; n[m].settings={resizeThrottle: 100, scrollThrottle: 30}; return i.load(function() {
      return n[m]('refresh');
    });
  });
}).call(this);

/* ! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function() {
  let a; let b; let c; let d; let e; const f=function(a, b) {
    return function() {
      return a.apply(b, arguments);
    };
  }; const g=[].indexOf||function(a) {
    for (let b=0, c=this.length; c>b; b++) if (b in this&&this[b]===a) return b; return -1;
  }; b=function() {
    function a() {} return a.prototype.extend=function(a, b) {
      let c; let d; for (c in b)d=b[c], null==a[c]&&(a[c]=d); return a;
    }, a.prototype.isMobile=function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }, a.prototype.createEvent=function(a, b, c, d) {
      let e; return null==b&&(b=!1), null==c&&(c=!1), null==d&&(d=null), null!=document.createEvent?(e=document.createEvent('CustomEvent'), e.initCustomEvent(a, b, c, d)):null!=document.createEventObject?(e=document.createEventObject(), e.eventType=a):e.eventName=a, e;
    }, a.prototype.emitEvent=function(a, b) {
      return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():'on'+b in(null!=a)?a['on'+b]():void 0;
    }, a.prototype.addEvent=function(a, b, c) {
      return null!=a.addEventListener?a.addEventListener(b, c, !1):null!=a.attachEvent?a.attachEvent('on'+b, c):a[b]=c;
    }, a.prototype.removeEvent=function(a, b, c) {
      return null!=a.removeEventListener?a.removeEventListener(b, c, !1):null!=a.detachEvent?a.detachEvent('on'+b, c):delete a[b];
    }, a.prototype.innerHeight=function() {
      return 'innerHeight'in window?window.innerHeight:document.documentElement.clientHeight;
    }, a;
  }(), c=this.WeakMap||this.MozWeakMap||(c=function() {
    function a() {
      this.keys=[], this.values=[];
    } return a.prototype.get=function(a) {
      let b; let c; let d; let e; let f; for (f=this.keys, b=d=0, e=f.length; e>d; b=++d) if (c=f[b], c===a) return this.values[b];
    }, a.prototype.set=function(a, b) {
      let c; let d; let e; let f; let g; for (g=this.keys, c=e=0, f=g.length; f>e; c=++e) if (d=g[c], d===a) return void(this.values[c]=b); return this.keys.push(a), this.values.push(b);
    }, a;
  }()), a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function() {
    function a() {
      'undefined'!=typeof console&&null!==console&&console.warn('MutationObserver is not supported by your browser.'), 'undefined'!=typeof console&&null!==console&&console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
    } return a.notSupported=!0, a.prototype.observe=function() {}, a;
  }()), d=this.getComputedStyle||function(a, b) {
    return this.getPropertyValue=function(b) {
      let c; return 'float'===b&&(b='styleFloat'), e.test(b)&&b.replace(e, function(a, b) {
        return b.toUpperCase();
      }), (null!=(c=a.currentStyle)?c[b]:void 0)||null;
    }, this;
  }, e=/(\-([a-z]){1})/g, this.WOW=function() {
    function e(a) {
      null==a&&(a={}), this.scrollCallback=f(this.scrollCallback, this), this.scrollHandler=f(this.scrollHandler, this), this.resetAnimation=f(this.resetAnimation, this), this.start=f(this.start, this), this.scrolled=!0, this.config=this.util().extend(a, this.defaults), null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)), this.animationNameCache=new c, this.wowEvent=this.util().createEvent(this.config.boxClass);
    } return e.prototype.defaults={boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null}, e.prototype.init=function() {
      let a; return this.element=window.document.documentElement, 'interactive'===(a=document.readyState)||'complete'===a?this.start():this.util().addEvent(document, 'DOMContentLoaded', this.start), this.finished=[];
    }, e.prototype.start=function() {
      let b; let c; let d; let e; if (this.stopped=!1, this.boxes=function() {
        let a; let c; let d; let e; for (d=this.element.querySelectorAll('.'+this.config.boxClass), e=[], a=0, c=d.length; c>a; a++)b=d[a], e.push(b); return e;
      }.call(this), this.all=function() {
        let a; let c; let d; let e; for (d=this.boxes, e=[], a=0, c=d.length; c>a; a++)b=d[a], e.push(b); return e;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e=this.boxes, c=0, d=e.length; d>c; c++)b=e[c], this.applyStyle(b, !0); return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window, 'scroll', this.scrollHandler), this.util().addEvent(window, 'resize', this.scrollHandler), this.interval=setInterval(this.scrollCallback, 50)), this.config.live?new a(function(a) {
        return function(b) {
          let c; let d; let e; let f; let g; for (g=[], c=0, d=b.length; d>c; c++) {
            f=b[c], g.push(function() {
              let a; let b; let c; let d; for (c=f.addedNodes||[], d=[], a=0, b=c.length; b>a; a++)e=c[a], d.push(this.doSync(e)); return d;
            }.call(a));
          } return g;
        };
      }(this)).observe(document.body, {childList: !0, subtree: !0}):void 0;
    }, e.prototype.stop=function() {
      return this.stopped=!0, this.util().removeEvent(this.config.scrollContainer||window, 'scroll', this.scrollHandler), this.util().removeEvent(window, 'resize', this.scrollHandler), null!=this.interval?clearInterval(this.interval):void 0;
    }, e.prototype.sync=function(b) {
      return a.notSupported?this.doSync(this.element):void 0;
    }, e.prototype.doSync=function(a) {
      let b; let c; let d; let e; let f; if (null==a&&(a=this.element), 1===a.nodeType) {
        for (a=a.parentNode||a, e=a.querySelectorAll('.'+this.config.boxClass), f=[], c=0, d=e.length; d>c; c++)b=e[c], g.call(this.all, b)<0?(this.boxes.push(b), this.all.push(b), this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b, !0), f.push(this.scrolled=!0)):f.push(void 0); return f;
      }
    }, e.prototype.show=function(a) {
      return this.applyStyle(a), a.className=a.className+' '+this.config.animateClass, null!=this.config.callback&&this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, 'animationend', this.resetAnimation), this.util().addEvent(a, 'oanimationend', this.resetAnimation), this.util().addEvent(a, 'webkitAnimationEnd', this.resetAnimation), this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation), a;
    }, e.prototype.applyStyle=function(a, b) {
      let c; let d; let e; return d=a.getAttribute('data-wow-duration'), c=a.getAttribute('data-wow-delay'), e=a.getAttribute('data-wow-iteration'), this.animate(function(f) {
        return function() {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, e.prototype.animate=function() {
      return 'requestAnimationFrame'in window?function(a) {
        return window.requestAnimationFrame(a);
      }:function(a) {
        return a();
      };
    }(), e.prototype.resetStyle=function() {
      let a; let b; let c; let d; let e; for (d=this.boxes, e=[], b=0, c=d.length; c>b; b++)a=d[b], e.push(a.style.visibility='visible'); return e;
    }, e.prototype.resetAnimation=function(a) {
      let b; return a.type.toLowerCase().indexOf('animationend')>=0?(b=a.target||a.srcElement, b.className=b.className.replace(this.config.animateClass, '').trim()):void 0;
    }, e.prototype.customStyle=function(a, b, c, d, e) {
      return b&&this.cacheAnimationName(a), a.style.visibility=b?'hidden':'visible', c&&this.vendorSet(a.style, {animationDuration: c}), d&&this.vendorSet(a.style, {animationDelay: d}), e&&this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b?'none':this.cachedAnimationName(a)}), a;
    }, e.prototype.vendors=['moz', 'webkit'], e.prototype.vendorSet=function(a, b) {
      let c; let d; let e; let f; d=[]; for (c in b) {
        e=b[c], a[''+c]=e, d.push(function() {
          let b; let d; let g; let h; for (g=this.vendors, h=[], b=0, d=g.length; d>b; b++)f=g[b], h.push(a[''+f+c.charAt(0).toUpperCase()+c.substr(1)]=e); return h;
        }.call(this));
      } return d;
    }, e.prototype.vendorCSS=function(a, b) {
      let c; let e; let f; let g; let h; let i; for (h=d(a), g=h.getPropertyCSSValue(b), f=this.vendors, c=0, e=f.length; e>c; c++)i=f[c], g=g||h.getPropertyCSSValue('-'+i+'-'+b); return g;
    }, e.prototype.animationName=function(a) {
      let b; try {
        b=this.vendorCSS(a, 'animation-name').cssText;
      } catch (c) {
        b=d(a).getPropertyValue('animation-name');
      } return 'none'===b?'':b;
    }, e.prototype.cacheAnimationName=function(a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName=function(a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler=function() {
      return this.scrolled=!0;
    }, e.prototype.scrollCallback=function() {
      let a; return !this.scrolled||(this.scrolled=!1, this.boxes=function() {
        let b; let c; let d; let e; for (d=this.boxes, e=[], b=0, c=d.length; c>b; b++)a=d[b], a&&(this.isVisible(a)?this.show(a):e.push(a)); return e;
      }.call(this), this.boxes.length||this.config.live)?void 0:this.stop();
    }, e.prototype.offsetTop=function(a) {
      for (var b; void 0===a.offsetTop;)a=a.parentNode; for (b=a.offsetTop; a=a.offsetParent;)b+=a.offsetTop; return b;
    }, e.prototype.isVisible=function(a) {
      let b; let c; let d; let e; let f; return c=a.getAttribute('data-wow-offset')||this.config.offset, f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset, e=f+Math.min(this.element.clientHeight, this.util().innerHeight())-c, d=this.offsetTop(a), b=d+a.clientHeight, e>=d&&b>=f;
    }, e.prototype.util=function() {
      return null!=this._util?this._util:this._util=new b;
    }, e.prototype.disabled=function() {
      return !this.config.mobile&&this.util().isMobile(navigator.userAgent);
    }, e;
  }();
}).call(this);

/* !
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(e, t) {
'function'==typeof define&&define.amd?define('ev-emitter/ev-emitter', t):'object'==typeof module&&module.exports?module.exports=t():e.EvEmitter=t();
}('undefined'!=typeof window?window:this, function() {
  function e() {} const t=e.prototype; return t.on=function(e, t) {
    if (e&&t) {
      const i=this._events=this._events||{}; const n=i[e]=i[e]||[]; return -1==n.indexOf(t)&&n.push(t), this;
    }
  }, t.once=function(e, t) {
    if (e&&t) {
      this.on(e, t); const i=this._onceEvents=this._onceEvents||{}; const n=i[e]=i[e]||{}; return n[t]=!0, this;
    }
  }, t.off=function(e, t) {
    const i=this._events&&this._events[e]; if (i&&i.length) {
      const n=i.indexOf(t); return -1!=n&&i.splice(n, 1), this;
    }
  }, t.emitEvent=function(e, t) {
    const i=this._events&&this._events[e]; if (i&&i.length) {
      let n=0; let o=i[n]; t=t||[]; for (let r=this._onceEvents&&this._onceEvents[e]; o;) {
        const s=r&&r[o]; s&&(this.off(e, o), delete r[o]), o.apply(this, t), n+=s?0:1, o=i[n];
      } return this;
    }
  }, t.allOff=t.removeAllListeners=function() {
    delete this._events, delete this._onceEvents;
  }, e;
}), function(e, t) {
  'use strict'; 'function'==typeof define&&define.amd?define(['ev-emitter/ev-emitter'], function(i) {
    return t(e, i);
  }):'object'==typeof module&&module.exports?module.exports=t(e, require('ev-emitter')):e.imagesLoaded=t(e, e.EvEmitter);
}('undefined'!=typeof window?window:this, function(e, t) {
  function i(e, t) {
    for (const i in t)e[i]=t[i]; return e;
  } function n(e) {
    let t=[]; if (Array.isArray(e))t=e; else if ('number'==typeof e.length) for (let i=0; i<e.length; i++)t.push(e[i]); else t.push(e); return t;
  } function o(e, t, r) {
    return this instanceof o?('string'==typeof e&&(e=document.querySelectorAll(e)), this.elements=n(e), this.options=i({}, this.options), 'function'==typeof t?r=t:i(this.options, t), r&&this.on('always', r), this.getImages(), h&&(this.jqDeferred=new h.Deferred), void setTimeout(function() {
      this.check();
    }.bind(this))):new o(e, t, r);
  } function r(e) {
    this.img=e;
  } function s(e, t) {
    this.url=e, this.element=t, this.img=new Image;
  } var h=e.jQuery; const a=e.console; o.prototype=Object.create(t.prototype), o.prototype.options={}, o.prototype.getImages=function() {
    this.images=[], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages=function(e) {
    'IMG'==e.nodeName&&this.addImage(e), this.options.background===!0&&this.addElementBackgroundImages(e); const t=e.nodeType; if (t&&d[t]) {
      for (var i=e.querySelectorAll('img'), n=0; n<i.length; n++) {
        const o=i[n]; this.addImage(o);
      } if ('string'==typeof this.options.background) {
        const r=e.querySelectorAll(this.options.background); for (n=0; n<r.length; n++) {
          const s=r[n]; this.addElementBackgroundImages(s);
        }
      }
    }
  }; var d={1: !0, 9: !0, 11: !0}; return o.prototype.addElementBackgroundImages=function(e) {
    const t=getComputedStyle(e); if (t) {
      for (let i=/url\((['"])?(.*?)\1\)/gi, n=i.exec(t.backgroundImage); null!==n;) {
        const o=n&&n[2]; o&&this.addBackground(o, e), n=i.exec(t.backgroundImage);
      }
    }
  }, o.prototype.addImage=function(e) {
    const t=new r(e); this.images.push(t);
  }, o.prototype.addBackground=function(e, t) {
    const i=new s(e, t); this.images.push(i);
  }, o.prototype.check=function() {
    function e(e, i, n) {
      setTimeout(function() {
        t.progress(e, i, n);
      });
    } var t=this; return this.progressedCount=0, this.hasAnyBroken=!1, this.images.length?void this.images.forEach(function(t) {
      t.once('progress', e), t.check();
    }):void this.complete();
  }, o.prototype.progress=function(e, t, i) {
    this.progressedCount++, this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded, this.emitEvent('progress', [this, e, t]), this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this, e), this.progressedCount==this.images.length&&this.complete(), this.options.debug&&a&&a.log('progress: '+i, e, t);
  }, o.prototype.complete=function() {
    const e=this.hasAnyBroken?'fail':'done'; if (this.isComplete=!0, this.emitEvent(e, [this]), this.emitEvent('always', [this]), this.jqDeferred) {
      const t=this.hasAnyBroken?'reject':'resolve'; this.jqDeferred[t](this);
    }
  }, r.prototype=Object.create(t.prototype), r.prototype.check=function() {
    const e=this.getIsImageComplete(); return e?void this.confirm(0!==this.img.naturalWidth, 'naturalWidth'):(this.proxyImage=new Image, this.proxyImage.addEventListener('load', this), this.proxyImage.addEventListener('error', this), this.img.addEventListener('load', this), this.img.addEventListener('error', this), void(this.proxyImage.src=this.img.src));
  }, r.prototype.getIsImageComplete=function() {
    return this.img.complete&&void 0!==this.img.naturalWidth;
  }, r.prototype.confirm=function(e, t) {
    this.isLoaded=e, this.emitEvent('progress', [this, this.img, t]);
  }, r.prototype.handleEvent=function(e) {
    const t='on'+e.type; this[t]&&this[t](e);
  }, r.prototype.onload=function() {
    this.confirm(!0, 'onload'), this.unbindEvents();
  }, r.prototype.onerror=function() {
    this.confirm(!1, 'onerror'), this.unbindEvents();
  }, r.prototype.unbindEvents=function() {
    this.proxyImage.removeEventListener('load', this), this.proxyImage.removeEventListener('error', this), this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
  }, s.prototype=Object.create(r.prototype), s.prototype.check=function() {
    this.img.addEventListener('load', this), this.img.addEventListener('error', this), this.img.src=this.url; const e=this.getIsImageComplete(); e&&(this.confirm(0!==this.img.naturalWidth, 'naturalWidth'), this.unbindEvents());
  }, s.prototype.unbindEvents=function() {
    this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
  }, s.prototype.confirm=function(e, t) {
    this.isLoaded=e, this.emitEvent('progress', [this, this.element, t]);
  }, o.makeJQueryPlugin=function(t) {
    t=t||e.jQuery, t&&(h=t, h.fn.imagesLoaded=function(e, t) {
      const i=new o(this, e, t); return i.jqDeferred.promise(h(this));
    });
  }, o.makeJQueryPlugin(), o;
});

/* !
 * Isotope PACKAGED v3.0.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
!function(t, e) {
'function'==typeof define&&define.amd?define('jquery-bridget/jquery-bridget', ['jquery'], function(i) {
  return e(t, i);
}):'object'==typeof module&&module.exports?module.exports=e(t, require('jquery')):t.jQueryBridget=e(t, t.jQuery);
}(window, function(t, e) {
  'use strict'; function i(i, s, a) {
    function u(t, e, n) {
      let o; const s='$().'+i+'("'+e+'")'; return t.each(function(t, u) {
        const h=a.data(u, i); if (!h) return void r(i+' not initialized. Cannot call methods, i.e. '+s); const d=h[e]; if (!d||'_'==e.charAt(0)) return void r(s+' is not a valid method'); const l=d.apply(h, n); o=void 0===o?l:o;
      }), void 0!==o?o:t;
    } function h(t, e) {
      t.each(function(t, n) {
        let o=a.data(n, i); o?(o.option(e), o._init()):(o=new s(n, e), a.data(n, i, o));
      });
    }a=a||e||t.jQuery, a&&(s.prototype.option||(s.prototype.option=function(t) {
      a.isPlainObject(t)&&(this.options=a.extend(!0, this.options, t));
    }), a.fn[i]=function(t) {
      if ('string'==typeof t) {
        const e=o.call(arguments, 1); return u(this, t, e);
      } return h(this, t), this;
    }, n(a));
  } function n(t) {
    !t||t&&t.bridget||(t.bridget=i);
  } var o=Array.prototype.slice; const s=t.console; var r='undefined'==typeof s?function() {}:function(t) {
    s.error(t);
  }; return n(e||t.jQuery), i;
}), function(t, e) {
'function'==typeof define&&define.amd?define('ev-emitter/ev-emitter', e):'object'==typeof module&&module.exports?module.exports=e():t.EvEmitter=e();
}('undefined'!=typeof window?window:this, function() {
  function t() {} const e=t.prototype; return e.on=function(t, e) {
    if (t&&e) {
      const i=this._events=this._events||{}; const n=i[t]=i[t]||[]; return n.indexOf(e)==-1&&n.push(e), this;
    }
  }, e.once=function(t, e) {
    if (t&&e) {
      this.on(t, e); const i=this._onceEvents=this._onceEvents||{}; const n=i[t]=i[t]||{}; return n[e]=!0, this;
    }
  }, e.off=function(t, e) {
    const i=this._events&&this._events[t]; if (i&&i.length) {
      const n=i.indexOf(e); return n!=-1&&i.splice(n, 1), this;
    }
  }, e.emitEvent=function(t, e) {
    const i=this._events&&this._events[t]; if (i&&i.length) {
      let n=0; let o=i[n]; e=e||[]; for (let s=this._onceEvents&&this._onceEvents[t]; o;) {
        const r=s&&s[o]; r&&(this.off(t, o), delete s[o]), o.apply(this, e), n+=r?0:1, o=i[n];
      } return this;
    }
  }, t;
}), function(t, e) {
  'use strict'; 'function'==typeof define&&define.amd?define('get-size/get-size', [], function() {
    return e();
  }):'object'==typeof module&&module.exports?module.exports=e():t.getSize=e();
}(window, function() {
  'use strict'; function t(t) {
    const e=parseFloat(t); const i=t.indexOf('%')==-1&&!isNaN(e); return i&&e;
  } function e() {} function i() {
    for (var t={width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e=0; e<h; e++) {
      const i=u[e]; t[i]=0;
    } return t;
  } function n(t) {
    const e=getComputedStyle(t); return e||a('Style returned '+e+'. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'), e;
  } function o() {
    if (!d) {
      d=!0; const e=document.createElement('div'); e.style.width='200px', e.style.padding='1px 2px 3px 4px', e.style.borderStyle='solid', e.style.borderWidth='1px 2px 3px 4px', e.style.boxSizing='border-box'; const i=document.body||document.documentElement; i.appendChild(e); const o=n(e); s.isBoxSizeOuter=r=200==t(o.width), i.removeChild(e);
    }
  } function s(e) {
    if (o(), 'string'==typeof e&&(e=document.querySelector(e)), e&&'object'==typeof e&&e.nodeType) {
      const s=n(e); if ('none'==s.display) return i(); const a={}; a.width=e.offsetWidth, a.height=e.offsetHeight; for (var d=a.isBorderBox='border-box'==s.boxSizing, l=0; l<h; l++) {
        const f=u[l]; const c=s[f]; const m=parseFloat(c); a[f]=isNaN(m)?0:m;
      } const p=a.paddingLeft+a.paddingRight; const y=a.paddingTop+a.paddingBottom; const g=a.marginLeft+a.marginRight; const v=a.marginTop+a.marginBottom; const _=a.borderLeftWidth+a.borderRightWidth; const I=a.borderTopWidth+a.borderBottomWidth; const z=d&&r; const x=t(s.width); x!==!1&&(a.width=x+(z?0:p+_)); const S=t(s.height); return S!==!1&&(a.height=S+(z?0:y+I)), a.innerWidth=a.width-(p+_), a.innerHeight=a.height-(y+I), a.outerWidth=a.width+g, a.outerHeight=a.height+v, a;
    }
  } let r; var a='undefined'==typeof console?e:function(t) {
    console.error(t);
  }; var u=['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth']; var h=u.length; var d=!1; return s;
}), function(t, e) {
  'use strict'; 'function'==typeof define&&define.amd?define('desandro-matches-selector/matches-selector', e):'object'==typeof module&&module.exports?module.exports=e():t.matchesSelector=e();
}(window, function() {
  'use strict'; const t=function() {
    const t=Element.prototype; if (t.matches) return 'matches'; if (t.matchesSelector) return 'matchesSelector'; for (let e=['webkit', 'moz', 'ms', 'o'], i=0; i<e.length; i++) {
      const n=e[i]; const o=n+'MatchesSelector'; if (t[o]) return o;
    }
  }(); return function(e, i) {
    return e[t](i);
  };
}), function(t, e) {
'function'==typeof define&&define.amd?define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(i) {
  return e(t, i);
}):'object'==typeof module&&module.exports?module.exports=e(t, require('desandro-matches-selector')):t.fizzyUIUtils=e(t, t.matchesSelector);
}(window, function(t, e) {
  const i={}; i.extend=function(t, e) {
    for (const i in e)t[i]=e[i]; return t;
  }, i.modulo=function(t, e) {
    return (t%e+e)%e;
  }, i.makeArray=function(t) {
    let e=[]; if (Array.isArray(t))e=t; else if (t&&'number'==typeof t.length) for (let i=0; i<t.length; i++)e.push(t[i]); else e.push(t); return e;
  }, i.removeFrom=function(t, e) {
    const i=t.indexOf(e); i!=-1&&t.splice(i, 1);
  }, i.getParent=function(t, i) {
    for (;t!=document.body;) if (t=t.parentNode, e(t, i)) return t;
  }, i.getQueryElement=function(t) {
    return 'string'==typeof t?document.querySelector(t):t;
  }, i.handleEvent=function(t) {
    const e='on'+t.type; this[e]&&this[e](t);
  }, i.filterFindElements=function(t, n) {
    t=i.makeArray(t); const o=[]; return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t); e(t, n)&&o.push(t); for (let i=t.querySelectorAll(n), s=0; s<i.length; s++)o.push(i[s]);
      }
    }), o;
  }, i.debounceMethod=function(t, e, i) {
    const n=t.prototype[e]; const o=e+'Timeout'; t.prototype[e]=function() {
      const t=this[o]; t&&clearTimeout(t); const e=arguments; const s=this; this[o]=setTimeout(function() {
        n.apply(s, e), delete s[o];
      }, i||100);
    };
  }, i.docReady=function(t) {
    const e=document.readyState; 'complete'==e||'interactive'==e?setTimeout(t):document.addEventListener('DOMContentLoaded', t);
  }, i.toDashed=function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e+'-'+i;
    }).toLowerCase();
  }; const n=t.console; return i.htmlInit=function(e, o) {
    i.docReady(function() {
      const s=i.toDashed(o); const r='data-'+s; const a=document.querySelectorAll('['+r+']'); const u=document.querySelectorAll('.js-'+s); const h=i.makeArray(a).concat(i.makeArray(u)); const d=r+'-options'; const l=t.jQuery; h.forEach(function(t) {
        let i; const s=t.getAttribute(r)||t.getAttribute(d); try {
          i=s&&JSON.parse(s);
        } catch (a) {
          return void(n&&n.error('Error parsing '+r+' on '+t.className+': '+a));
        } const u=new e(t, i); l&&l.data(t, o, u);
      });
    });
  }, i;
}), function(t, e) {
'function'==typeof define&&define.amd?define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], e):'object'==typeof module&&module.exports?module.exports=e(require('ev-emitter'), require('get-size')):(t.Outlayer={}, t.Outlayer.Item=e(t.EvEmitter, t.getSize));
}(window, function(t, e) {
  'use strict'; function i(t) {
    for (var e in t) return !1; return e=null, !0;
  } function n(t, e) {
    t&&(this.element=t, this.layout=e, this.position={x: 0, y: 0}, this._create());
  } function o(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return '-'+t.toLowerCase();
    });
  } const s=document.documentElement.style; const r='string'==typeof s.transition?'transition':'WebkitTransition'; const a='string'==typeof s.transform?'transform':'WebkitTransform'; const u={WebkitTransition: 'webkitTransitionEnd', transition: 'transitionend'}[r]; const h={transform: a, transition: r, transitionDuration: r+'Duration', transitionProperty: r+'Property', transitionDelay: r+'Delay'}; const d=n.prototype=Object.create(t.prototype); d.constructor=n, d._create=function() {
    this._transn={ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: 'absolute'});
  }, d.handleEvent=function(t) {
    const e='on'+t.type; this[e]&&this[e](t);
  }, d.getSize=function() {
    this.size=e(this.element);
  }, d.css=function(t) {
    const e=this.element.style; for (const i in t) {
      const n=h[i]||i; e[n]=t[i];
    }
  }, d.getPosition=function() {
    const t=getComputedStyle(this.element); const e=this.layout._getOption('originLeft'); const i=this.layout._getOption('originTop'); const n=t[e?'left':'right']; const o=t[i?'top':'bottom']; const s=this.layout.size; let r=n.indexOf('%')!=-1?parseFloat(n)/100*s.width:parseInt(n, 10); let a=o.indexOf('%')!=-1?parseFloat(o)/100*s.height:parseInt(o, 10); r=isNaN(r)?0:r, a=isNaN(a)?0:a, r-=e?s.paddingLeft:s.paddingRight, a-=i?s.paddingTop:s.paddingBottom, this.position.x=r, this.position.y=a;
  }, d.layoutPosition=function() {
    const t=this.layout.size; const e={}; const i=this.layout._getOption('originLeft'); const n=this.layout._getOption('originTop'); const o=i?'paddingLeft':'paddingRight'; const s=i?'left':'right'; const r=i?'right':'left'; const a=this.position.x+t[o]; e[s]=this.getXValue(a), e[r]=''; const u=n?'paddingTop':'paddingBottom'; const h=n?'top':'bottom'; const d=n?'bottom':'top'; const l=this.position.y+t[u]; e[h]=this.getYValue(l), e[d]='', this.css(e), this.emitEvent('layout', [this]);
  }, d.getXValue=function(t) {
    const e=this.layout._getOption('horizontal'); return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+'%':t+'px';
  }, d.getYValue=function(t) {
    const e=this.layout._getOption('horizontal'); return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+'%':t+'px';
  }, d._transitionTo=function(t, e) {
    this.getPosition(); const i=this.position.x; const n=this.position.y; const o=parseInt(t, 10); const s=parseInt(e, 10); const r=o===this.position.x&&s===this.position.y; if (this.setPosition(t, e), r&&!this.isTransitioning) return void this.layoutPosition(); const a=t-i; const u=e-n; const h={}; h.transform=this.getTranslate(a, u), this.transition({to: h, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0});
  }, d.getTranslate=function(t, e) {
    const i=this.layout._getOption('originLeft'); const n=this.layout._getOption('originTop'); return t=i?t:-t, e=n?e:-e, 'translate3d('+t+'px, '+e+'px, 0)';
  }, d.goTo=function(t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo=d._transitionTo, d.setPosition=function(t, e) {
    this.position.x=parseInt(t, 10), this.position.y=parseInt(e, 10);
  }, d._nonTransition=function(t) {
    this.css(t.to), t.isCleaning&&this._removeStyles(t.to); for (const e in t.onTransitionEnd)t.onTransitionEnd[e].call(this);
  }, d.transition=function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); const e=this._transn; for (var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i]; for (i in t.to)e.ingProperties[i]=!0, t.isCleaning&&(e.clean[i]=!0); if (t.from) {
      this.css(t.from); let n=this.element.offsetHeight; n=null;
    } this.enableTransition(t.to), this.css(t.to), this.isTransitioning=!0;
  }; const l='opacity,'+o(a); d.enableTransition=function() {
    if (!this.isTransitioning) {
      let t=this.layout.options.transitionDuration; t='number'==typeof t?t+'ms':t, this.css({transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay||0}), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd=function(t) {
    this.ontransitionend(t);
  }, d.onotransitionend=function(t) {
    this.ontransitionend(t);
  }; const f={'-webkit-transform': 'transform'}; d.ontransitionend=function(t) {
    if (t.target===this.element) {
      const e=this._transn; const n=f[t.propertyName]||t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties)&&this.disableTransition(), n in e.clean&&(this.element.style[t.propertyName]='', delete e.clean[n]), n in e.onEnd) {
        const o=e.onEnd[n]; o.call(this), delete e.onEnd[n];
      } this.emitEvent('transitionEnd', [this]);
    }
  }, d.disableTransition=function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning=!1;
  }, d._removeStyles=function(t) {
    const e={}; for (const i in t)e[i]=''; this.css(e);
  }; const c={transitionProperty: '', transitionDuration: '', transitionDelay: ''}; return d.removeTransitionStyles=function() {
    this.css(c);
  }, d.stagger=function(t) {
    t=isNaN(t)?0:t, this.staggerDelay=t+'ms';
  }, d.removeElem=function() {
    this.element.parentNode.removeChild(this.element), this.css({display: ''}), this.emitEvent('remove', [this]);
  }, d.remove=function() {
    return r&&parseFloat(this.layout.options.transitionDuration)?(this.once('transitionEnd', function() {
      this.removeElem();
    }), void this.hide()):void this.removeElem();
  }, d.reveal=function() {
    delete this.isHidden, this.css({display: ''}); const t=this.layout.options; const e={}; const i=this.getHideRevealTransitionEndProperty('visibleStyle'); e[i]=this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e});
  }, d.onRevealTransitionEnd=function() {
    this.isHidden||this.emitEvent('reveal');
  }, d.getHideRevealTransitionEndProperty=function(t) {
    const e=this.layout.options[t]; if (e.opacity) return 'opacity'; for (const i in e) return i;
  }, d.hide=function() {
    this.isHidden=!0, this.css({display: ''}); const t=this.layout.options; const e={}; const i=this.getHideRevealTransitionEndProperty('hiddenStyle'); e[i]=this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e});
  }, d.onHideTransitionEnd=function() {
    this.isHidden&&(this.css({display: 'none'}), this.emitEvent('hide'));
  }, d.destroy=function() {
    this.css({position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: ''});
  }, n;
}), function(t, e) {
  'use strict'; 'function'==typeof define&&define.amd?define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(i, n, o, s) {
    return e(t, i, n, o, s);
  }):'object'==typeof module&&module.exports?module.exports=e(t, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item')):t.Outlayer=e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function(t, e, i, n, o) {
  'use strict'; function s(t, e) {
    const i=n.getQueryElement(t); if (!i) return void(u&&u.error('Bad element for '+this.constructor.namespace+': '+(i||t))); this.element=i, h&&(this.$element=h(this.element)), this.options=n.extend({}, this.constructor.defaults), this.option(e); const o=++l; this.element.outlayerGUID=o, f[o]=this, this._create(); const s=this._getOption('initLayout'); s&&this.layout();
  } function r(t) {
    function e() {
      t.apply(this, arguments);
    } return e.prototype=Object.create(t.prototype), e.prototype.constructor=e, e;
  } function a(t) {
    if ('number'==typeof t) return t; const e=t.match(/(^\d*\.?\d*)(\w*)/); let i=e&&e[1]; const n=e&&e[2]; if (!i.length) return 0; i=parseFloat(i); const o=m[n]||1; return i*o;
  } var u=t.console; var h=t.jQuery; const d=function() {}; var l=0; var f={}; s.namespace='outlayer', s.Item=o, s.defaults={containerStyle: {position: 'relative'}, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: '0.4s', hiddenStyle: {opacity: 0, transform: 'scale(0.001)'}, visibleStyle: {opacity: 1, transform: 'scale(1)'}}; const c=s.prototype; n.extend(c, e.prototype), c.option=function(t) {
    n.extend(this.options, t);
  }, c._getOption=function(t) {
    const e=this.constructor.compatOptions[t]; return e&&void 0!==this.options[e]?this.options[e]:this.options[t];
  }, s.compatOptions={initLayout: 'isInitLayout', horizontal: 'isHorizontal', layoutInstant: 'isLayoutInstant', originLeft: 'isOriginLeft', originTop: 'isOriginTop', resize: 'isResizeBound', resizeContainer: 'isResizingContainer'}, c._create=function() {
    this.reloadItems(), this.stamps=[], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle); const t=this._getOption('resize'); t&&this.bindResize();
  }, c.reloadItems=function() {
    this.items=this._itemize(this.element.children);
  }, c._itemize=function(t) {
    for (var e=this._filterFindItemElements(t), i=this.constructor.Item, n=[], o=0; o<e.length; o++) {
      const s=e[o]; const r=new i(s, this); n.push(r);
    } return n;
  }, c._filterFindItemElements=function(t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }, c.getItemElements=function() {
    return this.items.map(function(t) {
      return t.element;
    });
  }, c.layout=function() {
    this._resetLayout(), this._manageStamps(); const t=this._getOption('layoutInstant'); const e=void 0!==t?t:!this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited=!0;
  }, c._init=c.layout, c._resetLayout=function() {
    this.getSize();
  }, c.getSize=function() {
    this.size=i(this.element);
  }, c._getMeasurement=function(t, e) {
    let n; const o=this.options[t]; o?('string'==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o), this[t]=n?i(n)[e]:o):this[t]=0;
  }, c.layoutItems=function(t, e) {
    t=this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, c._getItemsForLayout=function(t) {
    return t.filter(function(t) {
      return !t.isIgnored;
    });
  }, c._layoutItems=function(t, e) {
    if (this._emitCompleteOnItems('layout', t), t&&t.length) {
      const i=[]; t.forEach(function(t) {
        const n=this._getItemLayoutPosition(t); n.item=t, n.isInstant=e||t.isLayoutInstant, i.push(n);
      }, this), this._processLayoutQueue(i);
    }
  }, c._getItemLayoutPosition=function() {
    return {x: 0, y: 0};
  }, c._processLayoutQueue=function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, c.updateStagger=function() {
    const t=this.options.stagger; return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t), this.stagger);
  }, c._positionItem=function(t, e, i, n, o) {
n?t.goTo(e, i):(t.stagger(o*this.stagger), t.moveTo(e, i));
  }, c._postLayout=function() {
    this.resizeContainer();
  }, c.resizeContainer=function() {
    const t=this._getOption('resizeContainer'); if (t) {
      const e=this._getContainerSize(); e&&(this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, c._getContainerSize=d, c._setContainerMeasure=function(t, e) {
    if (void 0!==t) {
      const i=this.size; i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth), t=Math.max(t, 0), this.element.style[e?'width':'height']=t+'px';
    }
  }, c._emitCompleteOnItems=function(t, e) {
    function i() {
      o.dispatchEvent(t+'Complete', null, [e]);
    } function n() {
      r++, r==s&&i();
    } var o=this; var s=e.length; if (!e||!s) return void i(); var r=0; e.forEach(function(e) {
      e.once(t, n);
    });
  }, c.dispatchEvent=function(t, e, i) {
    const n=e?[e].concat(i):i; if (this.emitEvent(t, n), h) {
      if (this.$element=this.$element||h(this.element), e) {
        const o=h.Event(e); o.type=t, this.$element.trigger(o, i);
      } else this.$element.trigger(t, i);
    }
  }, c.ignore=function(t) {
    const e=this.getItem(t); e&&(e.isIgnored=!0);
  }, c.unignore=function(t) {
    const e=this.getItem(t); e&&delete e.isIgnored;
  }, c.stamp=function(t) {
    t=this._find(t), t&&(this.stamps=this.stamps.concat(t), t.forEach(this.ignore, this));
  }, c.unstamp=function(t) {
    t=this._find(t), t&&t.forEach(function(t) {
      n.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, c._find=function(t) {
    if (t) return 'string'==typeof t&&(t=this.element.querySelectorAll(t)), t=n.makeArray(t);
  }, c._manageStamps=function() {
    this.stamps&&this.stamps.length&&(this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect=function() {
    const t=this.element.getBoundingClientRect(); const e=this.size; this._boundingRect={left: t.left+e.paddingLeft+e.borderLeftWidth, top: t.top+e.paddingTop+e.borderTopWidth, right: t.right-(e.paddingRight+e.borderRightWidth), bottom: t.bottom-(e.paddingBottom+e.borderBottomWidth)};
  }, c._manageStamp=d, c._getElementOffset=function(t) {
    const e=t.getBoundingClientRect(); const n=this._boundingRect; const o=i(t); const s={left: e.left-n.left-o.marginLeft, top: e.top-n.top-o.marginTop, right: n.right-e.right-o.marginRight, bottom: n.bottom-e.bottom-o.marginBottom}; return s;
  }, c.handleEvent=n.handleEvent, c.bindResize=function() {
    t.addEventListener('resize', this), this.isResizeBound=!0;
  }, c.unbindResize=function() {
    t.removeEventListener('resize', this), this.isResizeBound=!1;
  }, c.onresize=function() {
    this.resize();
  }, n.debounceMethod(s, 'onresize', 100), c.resize=function() {
    this.isResizeBound&&this.needsResizeLayout()&&this.layout();
  }, c.needsResizeLayout=function() {
    const t=i(this.element); const e=this.size&&t; return e&&t.innerWidth!==this.size.innerWidth;
  }, c.addItems=function(t) {
    const e=this._itemize(t); return e.length&&(this.items=this.items.concat(e)), e;
  }, c.appended=function(t) {
    const e=this.addItems(t); e.length&&(this.layoutItems(e, !0), this.reveal(e));
  }, c.prepended=function(t) {
    const e=this._itemize(t); if (e.length) {
      const i=this.items.slice(0); this.items=e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, c.reveal=function(t) {
    if (this._emitCompleteOnItems('reveal', t), t&&t.length) {
      const e=this.updateStagger(); t.forEach(function(t, i) {
        t.stagger(i*e), t.reveal();
      });
    }
  }, c.hide=function(t) {
    if (this._emitCompleteOnItems('hide', t), t&&t.length) {
      const e=this.updateStagger(); t.forEach(function(t, i) {
        t.stagger(i*e), t.hide();
      });
    }
  }, c.revealItemElements=function(t) {
    const e=this.getItems(t); this.reveal(e);
  }, c.hideItemElements=function(t) {
    const e=this.getItems(t); this.hide(e);
  }, c.getItem=function(t) {
    for (let e=0; e<this.items.length; e++) {
      const i=this.items[e]; if (i.element==t) return i;
    }
  }, c.getItems=function(t) {
    t=n.makeArray(t); const e=[]; return t.forEach(function(t) {
      const i=this.getItem(t); i&&e.push(i);
    }, this), e;
  }, c.remove=function(t) {
    const e=this.getItems(t); this._emitCompleteOnItems('remove', e), e&&e.length&&e.forEach(function(t) {
      t.remove(), n.removeFrom(this.items, t);
    }, this);
  }, c.destroy=function() {
    const t=this.element.style; t.height='', t.position='', t.width='', this.items.forEach(function(t) {
      t.destroy();
    }), this.unbindResize(); const e=this.element.outlayerGUID; delete f[e], delete this.element.outlayerGUID, h&&h.removeData(this.element, this.constructor.namespace);
  }, s.data=function(t) {
    t=n.getQueryElement(t); const e=t&&t.outlayerGUID; return e&&f[e];
  }, s.create=function(t, e) {
    const i=r(s); return i.defaults=n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions=n.extend({}, s.compatOptions), i.namespace=t, i.data=s.data, i.Item=r(o), n.htmlInit(i, t), h&&h.bridget&&h.bridget(t, i), i;
  }; var m={ms: 1, s: 1e3}; return s.Item=o, s;
}), function(t, e) {
'function'==typeof define&&define.amd?define('isotope/js/item', ['outlayer/outlayer'], e):'object'==typeof module&&module.exports?module.exports=e(require('outlayer')):(t.Isotope=t.Isotope||{}, t.Isotope.Item=e(t.Outlayer));
}(window, function(t) {
  'use strict'; function e() {
    t.Item.apply(this, arguments);
  } const i=e.prototype=Object.create(t.Item.prototype); const n=i._create; i._create=function() {
    this.id=this.layout.itemGUID++, n.call(this), this.sortData={};
  }, i.updateSortData=function() {
    if (!this.isIgnored) {
      this.sortData.id=this.id, this.sortData['original-order']=this.id, this.sortData.random=Math.random(); const t=this.layout.options.getSortData; const e=this.layout._sorters; for (const i in t) {
        const n=e[i]; this.sortData[i]=n(this.element, this);
      }
    }
  }; const o=i.destroy; return i.destroy=function() {
    o.apply(this, arguments), this.css({display: ''});
  }, e;
}), function(t, e) {
'function'==typeof define&&define.amd?define('isotope/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], e):'object'==typeof module&&module.exports?module.exports=e(require('get-size'), require('outlayer')):(t.Isotope=t.Isotope||{}, t.Isotope.LayoutMode=e(t.getSize, t.Outlayer));
}(window, function(t, e) {
  'use strict'; function i(t) {
    this.isotope=t, t&&(this.options=t.options[this.namespace], this.element=t.element, this.items=t.filteredItems, this.size=t.size);
  } const n=i.prototype; const o=['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption']; return o.forEach(function(t) {
    n[t]=function() {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), n.needsVerticalResizeLayout=function() {
    const e=t(this.isotope.element); const i=this.isotope.size&&e; return i&&e.innerHeight!=this.isotope.size.innerHeight;
  }, n._getMeasurement=function() {
    this.isotope._getMeasurement.apply(this, arguments);
  }, n.getColumnWidth=function() {
    this.getSegmentSize('column', 'Width');
  }, n.getRowHeight=function() {
    this.getSegmentSize('row', 'Height');
  }, n.getSegmentSize=function(t, e) {
    const i=t+e; const n='outer'+e; if (this._getMeasurement(i, n), !this[i]) {
      const o=this.getFirstItemSize(); this[i]=o&&o[n]||this.isotope.size['inner'+e];
    }
  }, n.getFirstItemSize=function() {
    const e=this.isotope.filteredItems[0]; return e&&e.element&&t(e.element);
  }, n.layout=function() {
    this.isotope.layout.apply(this.isotope, arguments);
  }, n.getSize=function() {
    this.isotope.getSize(), this.size=this.isotope.size;
  }, i.modes={}, i.create=function(t, e) {
    function o() {
      i.apply(this, arguments);
    } return o.prototype=Object.create(n), o.prototype.constructor=o, e&&(o.options=e), o.prototype.namespace=t, i.modes[t]=o, o;
  }, i;
}), function(t, e) {
'function'==typeof define&&define.amd?define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size'], e):'object'==typeof module&&module.exports?module.exports=e(require('outlayer'), require('get-size')):t.Masonry=e(t.Outlayer, t.getSize);
}(window, function(t, e) {
  const i=t.create('masonry'); return i.compatOptions.fitWidth='isFitWidth', i.prototype._resetLayout=function() {
    this.getSize(), this._getMeasurement('columnWidth', 'outerWidth'), this._getMeasurement('gutter', 'outerWidth'), this.measureColumns(), this.colYs=[]; for (let t=0; t<this.cols; t++) this.colYs.push(0); this.maxY=0;
  }, i.prototype.measureColumns=function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      const t=this.items[0]; const i=t&&t.element; this.columnWidth=i&&e(i).outerWidth||this.containerWidth;
    } const n=this.columnWidth+=this.gutter; const o=this.containerWidth+this.gutter; let s=o/n; const r=n-o%n; const a=r&&r<1?'round':'floor'; s=Math[a](s), this.cols=Math.max(s, 1);
  }, i.prototype.getContainerWidth=function() {
    const t=this._getOption('fitWidth'); const i=t?this.element.parentNode:this.element; const n=e(i); this.containerWidth=n&&n.innerWidth;
  }, i.prototype._getItemLayoutPosition=function(t) {
    t.getSize(); const e=t.size.outerWidth%this.columnWidth; const i=e&&e<1?'round':'ceil'; let n=Math[i](t.size.outerWidth/this.columnWidth); n=Math.min(n, this.cols); for (var o=this._getColGroup(n), s=Math.min.apply(Math, o), r=o.indexOf(s), a={x: this.columnWidth*r, y: s}, u=s+t.size.outerHeight, h=this.cols+1-o.length, d=0; d<h; d++) this.colYs[r+d]=u; return a;
  }, i.prototype._getColGroup=function(t) {
    if (t<2) return this.colYs; for (var e=[], i=this.cols+1-t, n=0; n<i; n++) {
      const o=this.colYs.slice(n, n+t); e[n]=Math.max.apply(Math, o);
    } return e;
  }, i.prototype._manageStamp=function(t) {
    const i=e(t); const n=this._getElementOffset(t); const o=this._getOption('originLeft'); const s=o?n.left:n.right; const r=s+i.outerWidth; let a=Math.floor(s/this.columnWidth); a=Math.max(0, a); let u=Math.floor(r/this.columnWidth); u-=r%this.columnWidth?0:1, u=Math.min(this.cols-1, u); for (let h=this._getOption('originTop'), d=(h?n.top:n.bottom)+i.outerHeight, l=a; l<=u; l++) this.colYs[l]=Math.max(d, this.colYs[l]);
  }, i.prototype._getContainerSize=function() {
    this.maxY=Math.max.apply(Math, this.colYs); const t={height: this.maxY}; return this._getOption('fitWidth')&&(t.width=this._getContainerFitWidth()), t;
  }, i.prototype._getContainerFitWidth=function() {
    for (var t=0, e=this.cols; --e&&0===this.colYs[e];)t++; return (this.cols-t)*this.columnWidth-this.gutter;
  }, i.prototype.needsResizeLayout=function() {
    const t=this.containerWidth; return this.getContainerWidth(), t!=this.containerWidth;
  }, i;
}), function(t, e) {
'function'==typeof define&&define.amd?define('isotope/js/layout-modes/masonry', ['../layout-mode', 'masonry/masonry'], e):'object'==typeof module&&module.exports?module.exports=e(require('../layout-mode'), require('masonry-layout')):e(t.Isotope.LayoutMode, t.Masonry);
}(window, function(t, e) {
  'use strict'; const i=t.create('masonry'); const n=i.prototype; const o={_getElementOffset: !0, layout: !0, _getMeasurement: !0}; for (const s in e.prototype)o[s]||(n[s]=e.prototype[s]); const r=n.measureColumns; n.measureColumns=function() {
    this.items=this.isotope.filteredItems, r.call(this);
  }; const a=n._getOption; return n._getOption=function(t) {
    return 'fitWidth'==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope, arguments);
  }, i;
}), function(t, e) {
'function'==typeof define&&define.amd?define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], e):'object'==typeof exports?module.exports=e(require('../layout-mode')):e(t.Isotope.LayoutMode);
}(window, function(t) {
  'use strict'; const e=t.create('fitRows'); const i=e.prototype; return i._resetLayout=function() {
    this.x=0, this.y=0, this.maxY=0, this._getMeasurement('gutter', 'outerWidth');
  }, i._getItemLayoutPosition=function(t) {
    t.getSize(); const e=t.size.outerWidth+this.gutter; const i=this.isotope.size.innerWidth+this.gutter; 0!==this.x&&e+this.x>i&&(this.x=0, this.y=this.maxY); const n={x: this.x, y: this.y}; return this.maxY=Math.max(this.maxY, this.y+t.size.outerHeight), this.x+=e, n;
  }, i._getContainerSize=function() {
    return {height: this.maxY};
  }, e;
}), function(t, e) {
'function'==typeof define&&define.amd?define('isotope/js/layout-modes/vertical', ['../layout-mode'], e):'object'==typeof module&&module.exports?module.exports=e(require('../layout-mode')):e(t.Isotope.LayoutMode);
}(window, function(t) {
  'use strict'; const e=t.create('vertical', {horizontalAlignment: 0}); const i=e.prototype; return i._resetLayout=function() {
    this.y=0;
  }, i._getItemLayoutPosition=function(t) {
    t.getSize(); const e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment; const i=this.y; return this.y+=t.size.outerHeight, {x: e, y: i};
  }, i._getContainerSize=function() {
    return {height: this.y};
  }, e;
}), function(t, e) {
'function'==typeof define&&define.amd?define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope/js/item', 'isotope/js/layout-mode', 'isotope/js/layout-modes/masonry', 'isotope/js/layout-modes/fit-rows', 'isotope/js/layout-modes/vertical'], function(i, n, o, s, r, a) {
  return e(t, i, n, o, s, r, a);
}):'object'==typeof module&&module.exports?module.exports=e(t, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope/js/item'), require('isotope/js/layout-mode'), require('isotope/js/layout-modes/masonry'), require('isotope/js/layout-modes/fit-rows'), require('isotope/js/layout-modes/vertical')):t.Isotope=e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function(t, e, i, n, o, s, r) {
  function a(t, e) {
    return function(i, n) {
      for (let o=0; o<t.length; o++) {
        const s=t[o]; const r=i.sortData[s]; const a=n.sortData[s]; if (r>a||r<a) {
          const u=void 0!==e[s]?e[s]:e; const h=u?1:-1; return (r>a?1:-1)*h;
        }
      } return 0;
    };
  } const u=t.jQuery; const h=String.prototype.trim?function(t) {
    return t.trim();
  }:function(t) {
    return t.replace(/^\s+|\s+$/g, '');
  }; const d=e.create('isotope', {layoutMode: 'masonry', isJQueryFiltering: !0, sortAscending: !0}); d.Item=s, d.LayoutMode=r; const l=d.prototype; l._create=function() {
    this.itemGUID=0, this._sorters={}, this._getSorters(), e.prototype._create.call(this), this.modes={}, this.filteredItems=this.items, this.sortHistory=['original-order']; for (const t in r.modes) this._initLayoutMode(t);
  }, l.reloadItems=function() {
    this.itemGUID=0, e.prototype.reloadItems.call(this);
  }, l._itemize=function() {
    for (var t=e.prototype._itemize.apply(this, arguments), i=0; i<t.length; i++) {
      const n=t[i]; n.id=this.itemGUID++;
    } return this._updateItemsSortData(t), t;
  }, l._initLayoutMode=function(t) {
    const e=r.modes[t]; const i=this.options[t]||{}; this.options[t]=e.options?o.extend(e.options, i):i, this.modes[t]=new e(this);
  }, l.layout=function() {
    return !this._isLayoutInited&&this._getOption('initLayout')?void this.arrange():void this._layout();
  }, l._layout=function() {
    const t=this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited=!0;
  }, l.arrange=function(t) {
    this.option(t), this._getIsInstant(); const e=this._filter(this.items); this.filteredItems=e.matches, this._bindArrangeComplete(), this._isInstant?this._noTransition(this._hideReveal, [e]):this._hideReveal(e), this._sort(), this._layout();
  }, l._init=l.arrange, l._hideReveal=function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant=function() {
    const t=this._getOption('layoutInstant'); const e=void 0!==t?t:!this._isLayoutInited; return this._isInstant=e, e;
  }, l._bindArrangeComplete=function() {
    function t() {
      e&&i&&n&&o.dispatchEvent('arrangeComplete', null, [o.filteredItems]);
    } let e; let i; let n; var o=this; this.once('layoutComplete', function() {
      e=!0, t();
    }), this.once('hideComplete', function() {
      i=!0, t();
    }), this.once('revealComplete', function() {
      n=!0, t();
    });
  }, l._filter=function(t) {
    let e=this.options.filter; e=e||'*'; for (var i=[], n=[], o=[], s=this._getFilterTest(e), r=0; r<t.length; r++) {
      const a=t[r]; if (!a.isIgnored) {
        const u=s(a); u&&i.push(a), u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a);
      }
    } return {matches: i, needReveal: n, needHide: o};
  }, l._getFilterTest=function(t) {
    return u&&this.options.isJQueryFiltering?function(e) {
      return u(e.element).is(t);
    }:'function'==typeof t?function(e) {
      return t(e.element);
    }:function(e) {
      return n(e.element, t);
    };
  }, l.updateSortData=function(t) {
    let e; t?(t=o.makeArray(t), e=this.getItems(t)):e=this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters=function() {
    const t=this.options.getSortData; for (const e in t) {
      const i=t[e]; this._sorters[e]=f(i);
    }
  }, l._updateItemsSortData=function(t) {
    for (let e=t&&t.length, i=0; e&&i<e; i++) {
      const n=t[i]; n.updateSortData();
    }
  }; var f=function() {
    function t(t) {
      if ('string'!=typeof t) return t; const i=h(t).split(' '); const n=i[0]; const o=n.match(/^\[(.+)\]$/); const s=o&&o[1]; const r=e(s, n); const a=d.sortDataParsers[i[1]];
      return t=a?function(t) {
        return t&&a(r(t));
      }:function(t) {
        return t&&r(t);
      };
    } function e(t, e) {
      return t?function(e) {
        return e.getAttribute(t);
      }:function(t) {
        const i=t.querySelector(e); return i&&i.textContent;
      };
    } return t;
  }(); d.sortDataParsers={parseInt: function(t) {
    return parseInt(t, 10);
  }, parseFloat: function(t) {
    return parseFloat(t);
  }}, l._sort=function() {
    const t=this.options.sortBy; if (t) {
      const e=[].concat.apply(t, this.sortHistory); const i=a(e, this.options.sortAscending); this.filteredItems.sort(i), t!=this.sortHistory[0]&&this.sortHistory.unshift(t);
    }
  }, l._mode=function() {
    const t=this.options.layoutMode; const e=this.modes[t]; if (!e) throw new Error('No layout mode: '+t); return e.options=this.options[t], e;
  }, l._resetLayout=function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition=function(t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp=function(t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize=function() {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout=function() {
    return this._mode().needsResizeLayout();
  }, l.appended=function(t) {
    const e=this.addItems(t); if (e.length) {
      const i=this._filterRevealAdded(e); this.filteredItems=this.filteredItems.concat(i);
    }
  }, l.prepended=function(t) {
    const e=this._itemize(t); if (e.length) {
      this._resetLayout(), this._manageStamps(); const i=this._filterRevealAdded(e); this.layoutItems(this.filteredItems), this.filteredItems=i.concat(this.filteredItems), this.items=e.concat(this.items);
    }
  }, l._filterRevealAdded=function(t) {
    const e=this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert=function(t) {
    const e=this.addItems(t); if (e.length) {
      let i; let n; const o=e.length; for (i=0; i<o; i++)n=e[i], this.element.appendChild(n.element); const s=this._filter(e).matches; for (i=0; i<o; i++)e[i].isLayoutInstant=!0; for (this.arrange(), i=0; i<o; i++) delete e[i].isLayoutInstant; this.reveal(s);
    }
  }; const c=l.remove; return l.remove=function(t) {
    t=o.makeArray(t); const e=this.getItems(t); c.call(this, t); for (let i=e&&e.length, n=0; i&&n<i; n++) {
      const s=e[n]; o.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle=function() {
    for (let t=0; t<this.items.length; t++) {
      const e=this.items[t]; e.sortData.random=Math.random();
    } this.options.sortBy='random', this._sort(), this._layout();
  }, l._noTransition=function(t, e) {
    const i=this.options.transitionDuration; this.options.transitionDuration=0; const n=t.apply(this, e); return this.options.transitionDuration=i, n;
  }, l.getFilteredItemElements=function() {
    return this.filteredItems.map(function(t) {
      return t.element;
    });
  }, d;
});

// Classy Nav
!function(e) {
  e.fn.classyNav=function(n) {
    const s=e('.classy-nav-container'); const a=e('.classynav ul'); const o=e('.classynav > ul > li'); const l=e('.classy-navbar-toggler'); const i=e('.classycloseIcon'); const t=e('.navbarToggler'); const d=e('.classy-menu'); const r=e(window); const c=e.extend({theme: 'light', breakpoint: 991, openCloseSpeed: 350, megaopenCloseSpeed: 700, alwaysHidden: !1, openMobileMenu: 'left', dropdownRtl: !1, stickyNav: !1, stickyFooterNav: !1}, n); return this.each(function() {
      function n() {
window.innerWidth<=c.breakpoint?s.removeClass('breakpoint-off').addClass('breakpoint-on'):s.removeClass('breakpoint-on').addClass('breakpoint-off');
      }'light'!==c.theme&&'dark'!==c.theme||s.addClass(c.theme), 'left'!==c.openMobileMenu&&'right'!==c.openMobileMenu||s.addClass(c.openMobileMenu), !0===c.dropdownRtl&&s.addClass('dropdown-rtl'), l.on('click', function() {
        t.toggleClass('active'), d.toggleClass('menu-on');
      }), i.on('click', function() {
        d.removeClass('menu-on'), t.removeClass('active');
      }), o.has('.dropdown').addClass('cn-dropdown-item'), o.has('.megamenu').addClass('megamenu-item'), a.find('li a').each(function() {
        e(this).next().length>0&&e(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
      }), a.find('li .dd-trigger').on('click', function(n) {
        n.preventDefault(), e(this).parent('li').children('ul').stop(!0, !0).slideToggle(c.openCloseSpeed), e(this).parent('li').toggleClass('active');
      }), e('.megamenu-item').removeClass('has-down'), a.find('li .dd-trigger').on('click', function(n) {
        n.preventDefault(), e(this).parent('li').children('.megamenu').slideToggle(c.megaopenCloseSpeed);
      }), n(), r.on('resize', function() {
        n();
      }), !0===c.alwaysHidden&&s.addClass('breakpoint-on').removeClass('breakpoint-off'), !0===c.stickyNav&&r.on('scroll', function() {
r.scrollTop()>0?s.addClass('classy-sticky'):s.removeClass('classy-sticky');
      }), !0===c.stickyFooterNav&&s.addClass('classy-sticky-footer');
    });
  };
}(jQuery);

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

!function(t) {
'function'==typeof define&&define.amd?define(['jquery'], t):'object'==typeof module&&module.exports?module.exports=t(require('jquery')):t(jQuery);
}(function(t) {
  const e=Array.prototype.slice; const i=Array.prototype.splice; const n={topSpacing: 0, bottomSpacing: 0, className: 'is-sticky', wrapperClassName: 'sticky-wrapper', center: !1, getWidthFrom: '', widthFromWrapper: !0, responsiveWidth: !1, zIndex: 'inherit'}; const r=t(window); const s=t(document); const o=[]; let c=r.height(); const p=function() {
    for (let e=r.scrollTop(), i=s.height(), n=i-c, p=e>n?n-e:0, a=0, d=o.length; a<d; a++) {
      const l=o[a]; const h=l.stickyWrapper.offset().top-l.topSpacing-p; if (l.stickyWrapper.css('height', l.stickyElement.outerHeight()), e<=h)null!==l.currentTop&&(l.stickyElement.css({'width': '', 'position': '', 'top': '', 'z-index': ''}), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger('sticky-end', [l]), l.currentTop=null); else {
        var u; let g=i-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-p; if (g<0?g+=l.topSpacing:g=l.topSpacing, l.currentTop!==g)l.getWidthFrom?(padding=l.stickyElement.innerWidth()-l.stickyElement.width(), u=t(l.getWidthFrom).width()-padding||null):l.widthFromWrapper&&(u=l.stickyWrapper.width()), null==u&&(u=l.stickyElement.width()), l.stickyElement.css('width', u).css('position', 'fixed').css('top', g).css('z-index', l.zIndex), l.stickyElement.parent().addClass(l.className), null===l.currentTop?l.stickyElement.trigger('sticky-start', [l]):l.stickyElement.trigger('sticky-update', [l]), l.currentTop===l.topSpacing&&l.currentTop>g||null===l.currentTop&&g<l.topSpacing?l.stickyElement.trigger('sticky-bottom-reached', [l]):null!==l.currentTop&&g===l.topSpacing&&l.currentTop<g&&l.stickyElement.trigger('sticky-bottom-unreached', [l]), l.currentTop=g; const m=l.stickyWrapper.parent(); l.stickyElement.offset().top+l.stickyElement.outerHeight()>=m.offset().top+m.outerHeight()&&l.stickyElement.offset().top<=l.topSpacing?l.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', ''):l.stickyElement.css('position', 'fixed').css('top', g).css('bottom', '').css('z-index', l.zIndex);
      }
    }
  }; const a=function() {
    c=r.height(); for (let e=0, i=o.length; e<i; e++) {
      const n=o[e]; let s=null; n.getWidthFrom?n.responsiveWidth&&(s=t(n.getWidthFrom).width()):n.widthFromWrapper&&(s=n.stickyWrapper.width()), null!=s&&n.stickyElement.css('width', s);
    }
  }; var d={init: function(e) {
    return this.each(function() {
      const i=t.extend({}, n, e); const r=t(this); const s=r.attr('id'); const c=s?s+'-'+n.wrapperClassName:n.wrapperClassName; const p=t('<div></div>').attr('id', c).addClass(i.wrapperClassName); r.wrapAll(function() {
        if (0==t(this).parent('#'+c).length) return p;
      }); const a=r.parent(); i.center&&a.css({width: r.outerWidth(), marginLeft: 'auto', marginRight: 'auto'}), 'right'===r.css('float')&&r.css({float: 'none'}).parent().css({float: 'right'}), i.stickyElement=r, i.stickyWrapper=a, i.currentTop=null, o.push(i), d.setWrapperHeight(this), d.setupChangeListeners(this);
    });
  }, setWrapperHeight: function(e) {
    const i=t(e); const n=i.parent(); n&&n.css('height', i.outerHeight());
  }, setupChangeListeners: function(t) {
window.MutationObserver?new window.MutationObserver(function(e) {
  (e[0].addedNodes.length||e[0].removedNodes.length)&&d.setWrapperHeight(t);
}).observe(t, {subtree: !0, childList: !0}):window.addEventListener?(t.addEventListener('DOMNodeInserted', function() {
  d.setWrapperHeight(t);
}, !1), t.addEventListener('DOMNodeRemoved', function() {
  d.setWrapperHeight(t);
}, !1)):window.attachEvent&&(t.attachEvent('onDOMNodeInserted', function() {
  d.setWrapperHeight(t);
}), t.attachEvent('onDOMNodeRemoved', function() {
  d.setWrapperHeight(t);
}));
  }, update: p, unstick: function(e) {
    return this.each(function() {
      for (var e=t(this), n=-1, r=o.length; r-- >0;)o[r].stickyElement.get(0)===this&&(i.call(o, r, 1), n=r); -1!==n&&(e.unwrap(), e.css({'width': '', 'position': '', 'top': '', 'float': '', 'z-index': ''}));
    });
  }}; window.addEventListener?(window.addEventListener('scroll', p, !1), window.addEventListener('resize', a, !1)):window.attachEvent&&(window.attachEvent('onscroll', p), window.attachEvent('onresize', a)), t.fn.sticky=function(i) {
    return d[i]?d[i].apply(this, e.call(arguments, 1)):'object'!=typeof i&&i?void t.error('Method '+i+' does not exist on jQuery.sticky'):d.init.apply(this, arguments);
  }, t.fn.unstick=function(i) {
    return d[i]?d[i].apply(this, e.call(arguments, 1)):'object'!=typeof i&&i?void t.error('Method '+i+' does not exist on jQuery.sticky'):d.unstick.apply(this, arguments);
  }, t(function() {
    setTimeout(p, 0);
  });
});

/* !
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a) {
  'use strict'; 'function'==typeof define&&define.amd?define(['jquery'], a):a(jQuery);
}(function(a) {
  'use strict'; function b(a) {
    if (a instanceof Date) return a; if (String(a).match(g)) return String(a).match(/^[0-9]*$/)&&(a=Number(a)), String(a).match(/\-/)&&(a=String(a).replace(/\-/g, '/')), new Date(a); throw new Error('Couldn\'t cast `'+a+'` to a date object.');
  } function c(a) {
    const b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'); return new RegExp(b);
  } function d(a) {
    return function(b) {
      const d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi); if (d) {
        for (let f=0, g=d.length; f<g; ++f) {
          let h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/); const j=c(h[0]); const k=h[1]||''; const l=h[3]||''; let m=null; h=h[2], i.hasOwnProperty(h)&&(m=i[h], m=Number(a[m])), null!==m&&('!'===k&&(m=e(l, m)), ''===k&&m<10&&(m='0'+m.toString()), b=b.replace(j, m.toString()));
        }
      } return b=b.replace(/%%/, '%');
    };
  } function e(a, b) {
    let c='s'; let d=''; return a&&(a=a.replace(/(:|;|\s)/gi, '').split(/\,/), 1===a.length?c=a[0]:(d=a[0], c=a[1])), Math.abs(b)>1?c:d;
  } const f=[]; var g=[]; const h={precision: 100, elapse: !1, defer: !1}; g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g=new RegExp(g.join('|')); var i={Y: 'years', m: 'months', n: 'daysToMonth', d: 'daysToWeek', w: 'weeks', W: 'weeksToMonth', H: 'hours', M: 'minutes', S: 'seconds', D: 'totalDays', I: 'totalHours', N: 'totalMinutes', T: 'totalSeconds'}; const j=function(b, c, d) {
    this.el=b, this.$el=a(b), this.interval=null, this.offset={}, this.options=a.extend({}, h), this.instanceNumber=f.length, f.push(this), this.$el.data('countdown-instance', this.instanceNumber), d&&('function'==typeof d?(this.$el.on('update.countdown', d), this.$el.on('stoped.countdown', d), this.$el.on('finish.countdown', d)):this.options=a.extend({}, h, d)), this.setFinalDate(c), this.options.defer===!1&&this.start();
  }; a.extend(j.prototype, {start: function() {
    null!==this.interval&&clearInterval(this.interval); const a=this; this.update(), this.interval=setInterval(function() {
      a.update.call(a);
    }, this.options.precision);
  }, stop: function() {
    clearInterval(this.interval), this.interval=null, this.dispatchEvent('stoped');
  }, toggle: function() {
this.interval?this.stop():this.start();
  }, pause: function() {
    this.stop();
  }, resume: function() {
    this.start();
  }, remove: function() {
    this.stop.call(this), f[this.instanceNumber]=null, delete this.$el.data().countdownInstance;
  }, setFinalDate: function(a) {
    this.finalDate=b(a);
  }, update: function() {
    if (0===this.$el.closest('html').length) return void this.remove(); let b; const c=void 0!==a._data(this.el, 'events'); const d=new Date; b=this.finalDate.getTime()-d.getTime(), b=Math.ceil(b/1e3), b=!this.options.elapse&&b<0?0:Math.abs(b), this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b, this.elapsed=d>=this.finalDate, this.offset={seconds: this.totalSecsLeft%60, minutes: Math.floor(this.totalSecsLeft/60)%60, hours: Math.floor(this.totalSecsLeft/60/60)%24, days: Math.floor(this.totalSecsLeft/60/60/24)%7, daysToWeek: Math.floor(this.totalSecsLeft/60/60/24)%7, daysToMonth: Math.floor(this.totalSecsLeft/60/60/24%30.4368), weeks: Math.floor(this.totalSecsLeft/60/60/24/7), weeksToMonth: Math.floor(this.totalSecsLeft/60/60/24/7)%4, months: Math.floor(this.totalSecsLeft/60/60/24/30.4368), years: Math.abs(this.finalDate.getFullYear()-d.getFullYear()), totalDays: Math.floor(this.totalSecsLeft/60/60/24), totalHours: Math.floor(this.totalSecsLeft/60/60), totalMinutes: Math.floor(this.totalSecsLeft/60), totalSeconds: this.totalSecsLeft}, this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent('update'):(this.stop(), this.dispatchEvent('finish')));
  }, dispatchEvent: function(b) {
    const c=a.Event(b+'.countdown'); c.finalDate=this.finalDate, c.elapsed=this.elapsed, c.offset=a.extend({}, this.offset), c.strftime=d(this.offset), this.$el.trigger(c);
  }}), a.fn.countdown=function() {
    const b=Array.prototype.slice.call(arguments, 0); return this.each(function() {
      const c=a(this).data('countdown-instance'); if (void 0!==c) {
        const d=f[c]; const e=b[0]; j.prototype.hasOwnProperty(e)?d[e].apply(d, b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d, e), d.start()):a.error('Method %s does not exist on jQuery.countdown'.replace(/\%s/gi, e));
      } else new j(this, b[0], b[1]);
    });
  };
});

// [End Include All Plugins]
