function t280_showMenu(recid){var el=$("#rec"+recid);el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered"):not(".t280__menu__item_submenu")').click(function(){if($(this).is(".t280__menu__item.tooltipstered, .t794__tm-link")){return}
$('body').toggleClass('t280_opened');var isChrome=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);if(window.location.hash&&isChrome){setTimeout(function(){var hash=window.location.hash;window.location.hash="";window.location.hash=hash},50)}
t280_changeSize(recid)});$('.t280').bind('clickedAnchorInTooltipMenu',function(){$('body').removeClass('t280_opened')});if(el.find('.t-menusub__link-item')){el.find('.t-menusub__link-item').on('click',function(){$('body').removeClass('t280_opened')})}}
function t280_changeSize(recid){var el=$("#rec"+recid);var div=el.find(".t280__menu").height();var bottomheight=el.find(".t280__bottom").height();var headerheight=el.find(".t280__container").height();var wrapper=el.find(".t280__menu__wrapper");var win=$(window).height()-bottomheight-headerheight-40;if(div>win){wrapper.addClass('t280__menu_static')}
else{wrapper.removeClass('t280__menu_static')}}
function t280_changeBgOpacityMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t280__container__bg").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacity=el.attr("data-bgopacity");var bgopacity_afterscroll=el.attr("data-bgopacity2");var menu_shadow=el.attr("data-menu-shadow");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacity_afterscroll!="0"&&bgopacity_afterscroll!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}else{el.css("background-color",bgcolor);if(bgopacity!="0"&&bgopacity!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}})}
function t280_appearMenu(){$('.t280').each(function(){var el=$(this);var appearoffset=el.attr('data-appearoffset');if(appearoffset!=''){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor(window.innerHeight*(parseInt(appearoffset)/100))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css('top','-50px');el.css('opacity','1');el.css('visibility','visible')}}else{el.stop();el.css('opacity','0');el.css('visibility','hidden')}}})}
function t280_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="index.html"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="index.html"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="index.html"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t280__menu a[href='"+url+"']").addClass("t-active");$(".t280__menu a[href='"+url+"/']").addClass("t-active");$(".t280__menu a[href='"+pathname+"']").addClass("t-active");$(".t280__menu a[href='/"+pathname+"']").addClass("t-active");$(".t280__menu a[href='"+pathname+"/']").addClass("t-active");$(".t280__menu a[href='/"+pathname+"/']").addClass("t-active")}
function t396_init(recid){var data='';var res=t396_detectResolution();t396_initTNobj();t396_switchResolution(res);t396_updateTNobj();t396_artboard_build(data,recid);window.tn_window_width=$(window).width();$(window).resize(function(){tn_console('>>>> t396: Window on Resize event >>>>');t396_waitForFinalEvent(function(){if($isMobile){var ww=$(window).width();if(ww!=window.tn_window_width){t396_doResize(recid)}}else{t396_doResize(recid)}},500,'resizeruniqueid'+recid)});$(window).on("orientationchange",function(){tn_console('>>>> t396: Orient change event >>>>');t396_waitForFinalEvent(function(){t396_doResize(recid)},600,'orientationuniqueid'+recid)});$(window).load(function(){var ab=$('#rec'+recid).find('.t396__artboard');t396_allelems__renderView(ab)});var rec=$('#rec'+recid);if(rec.attr('data-connect-with-tab')=='yes'){rec.find('.t396').bind('displayChanged',function(){var ab=rec.find('.t396__artboard');t396_allelems__renderView(ab)})}}function t396_doResize(recid){var ww=$(window).width();window.tn_window_width=ww;var res=t396_detectResolution();var ab=$('#rec'+recid).find('.t396__artboard');t396_switchResolution(res);t396_updateTNobj();t396_ab__renderView(ab);t396_allelems__renderView(ab)}function t396_detectResolution(){var ww=$(window).width();var res;res=1200;if(ww<1200){res=960}if(ww<960){res=640}if(ww<640){res=480}if(ww<480){res=320}return(res)}function t396_initTNobj(){tn_console('func: initTNobj');window.tn={};window.tn.canvas_min_sizes=["320","480","640","960","1200"];window.tn.canvas_max_sizes=["480","640","960","1200",""];window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"]}function t396_updateTNobj(){tn_console('func: updateTNobj');if(typeof window.zero_window_width_hook!='undefined'&&window.zero_window_width_hook=='allrecords'&&$('#allrecords').length){window.tn.window_width=parseInt($('#allrecords').width())}else{window.tn.window_width=parseInt($(window).width())}window.tn.window_height=parseInt($(window).height());if(window.tn.curResolution==1200){window.tn.canvas_min_width=1200;window.tn.canvas_max_width=window.tn.window_width}if(window.tn.curResolution==960){window.tn.canvas_min_width=960;window.tn.canvas_max_width=1200}if(window.tn.curResolution==640){window.tn.canvas_min_width=640;window.tn.canvas_max_width=960}if(window.tn.curResolution==480){window.tn.canvas_min_width=480;window.tn.canvas_max_width=640}if(window.tn.curResolution==320){window.tn.canvas_min_width=320;window.tn.canvas_max_width=480}window.tn.grid_width=window.tn.canvas_min_width;window.tn.grid_offset_left=parseFloat((window.tn.window_width-window.tn.grid_width)/2)}var t396_waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId"}if(timers[uniqueId]){clearTimeout(timers[uniqueId])}timers[uniqueId]=setTimeout(callback,ms)}})();function t396_switchResolution(res,resmax){tn_console('func: switchResolution');if(typeof resmax=='undefined'){if(res==1200)resmax='';if(res==960)resmax=1200;if(res==640)resmax=960;if(res==480)resmax=640;if(res==320)resmax=480}window.tn.curResolution=res;window.tn.curResolution_max=resmax}function t396_artboard_build(data,recid){tn_console('func: t396_artboard_build. Recid:'+recid);tn_console(data);var ab=$('#rec'+recid).find('.t396__artboard');t396_ab__renderView(ab);ab.find('.tn-elem').each(function(){var item=$(this);if(item.attr('data-elem-type')=='text'){t396_addText(ab,item)}if(item.attr('data-elem-type')=='image'){t396_addImage(ab,item)}if(item.attr('data-elem-type')=='shape'){t396_addShape(ab,item)}if(item.attr('data-elem-type')=='button'){t396_addButton(ab,item)}if(item.attr('data-elem-type')=='video'){t396_addVideo(ab,item)}if(item.attr('data-elem-type')=='html'){t396_addHtml(ab,item)}if(item.attr('data-elem-type')=='tooltip'){t396_addTooltip(ab,item)}if(item.attr('data-elem-type')=='form'){t396_addForm(ab,item)}if(item.attr('data-elem-type')=='gallery'){t396_addGallery(ab,item)}});$('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');if(ab.attr('data-artboard-ovrflw')=='visible'){$('#allrecords').css('overflow','hidden')}if($isMobile){$('#rec'+recid).append('<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>')}}function t396_ab__renderView(ab){var fields=window.tn.ab_fields;for(var i=0;i<fields.length;i++){t396_ab__renderViewOneField(ab,fields[i])}var ab_min_height=t396_ab__getFieldValue(ab,'height');var ab_max_height=t396_ab__getHeight(ab);var offset_top=0;if(ab_min_height==ab_max_height){offset_top=0}else{var ab_valign=t396_ab__getFieldValue(ab,'valign');if(ab_valign=='top'){offset_top=0}else if(ab_valign=='center'){offset_top=parseFloat((ab_max_height-ab_min_height)/2).toFixed(1)}else if(ab_valign=='bottom'){offset_top=parseFloat((ab_max_height-ab_min_height)).toFixed(1)}else if(ab_valign=='stretch'){offset_top=0;ab_min_height=ab_max_height}else{offset_top=0}}ab.attr('data-artboard-proxy-min-offset-top',offset_top);ab.attr('data-artboard-proxy-min-height',ab_min_height);ab.attr('data-artboard-proxy-max-height',ab_max_height)}function t396_addText(ab,el){tn_console('func: addText');var fields_str='top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addImage(ab,el){tn_console('func: addImage');var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);el.find('img').on("load",function(){t396_elem__renderViewOneField(el,'top');if(typeof $(this).attr('src')!='undefined'&&$(this).attr('src')!=''){setTimeout(function(){t396_elem__renderViewOneField(el,'top')},2000)}}).each(function(){if(this.complete)$(this).load()});el.find('img').on('tuwidget_done',function(e,file){t396_elem__renderViewOneField(el,'top')})}function t396_addShape(ab,el){tn_console('func: addShape');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addButton(ab,el){tn_console('func: addButton');var fields_str='top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);return(el)}function t396_addVideo(ab,el){tn_console('func: addVideo');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);var viel=el.find('.tn-atom__videoiframe');var viatel=el.find('.tn-atom');viatel.css('background-color','#000');var vihascover=viatel.attr('data-atom-video-has-cover');if(typeof vihascover=='undefined'){vihascover=''}if(vihascover=='y'){viatel.click(function(){var viifel=viel.find('iframe');if(viifel.length){var foo=viifel.attr('data-original');viifel.attr('src',foo)}viatel.css('background-image','none');viatel.find('.tn-atom__video-play-link').css('display','none')})}var autoplay=t396_elem__getFieldValue(el,'autoplay');var showinfo=t396_elem__getFieldValue(el,'showinfo');var loop=t396_elem__getFieldValue(el,'loop');var mute=t396_elem__getFieldValue(el,'mute');var startsec=t396_elem__getFieldValue(el,'startsec');var endsec=t396_elem__getFieldValue(el,'endsec');var tmode=$('#allrecords').attr('data-tilda-mode');var url='';var viyid=viel.attr('data-youtubeid');if(typeof viyid!='undefined'&&viyid!=''){url='http://www.youtube.com/embed/';url+=viyid+'?rel=0&fmt=18&html5=1';url+='&showinfo='+(showinfo=='y'?'1':'0');if(loop=='y'){url+='&loop=1&playlist='+viyid}if(startsec>0){url+='&start='+startsec}if(endsec>0){url+='&end='+endsec}if(mute=='y'){url+='&mute=1'}if(vihascover=='y'){url+='&autoplay=1';viel.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')}else{if(typeof tmode!='undefined'&&tmode=='edit'){}else{if(autoplay=='y'){url+='&autoplay=1'}}if(window.lazy=='y'){viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>')}else{viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')}}}var vivid=viel.attr('data-vimeoid');if(typeof vivid!='undefined'&&vivid>0){url='http://player.vimeo.com/video/';url+=vivid+'?color=ffffff&badge=0';if(showinfo=='y'){url+='&title=1&byline=1&portrait=1'}else{url+='&title=0&byline=0&portrait=0'}if(loop=='y'){url+='&loop=1'}if(mute=='y'){url+='&muted=1'}if(vihascover=='y'){url+='&autoplay=1';viel.html('<iframe data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}else{if(typeof tmode!='undefined'&&tmode=='edit'){}else{if(autoplay=='y'){url+='&autoplay=1'}}if(window.lazy=='y'){viel.html('<iframe class="t-iframe" data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>')}else{viel.html('<iframe src="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}}}}function t396_addHtml(ab,el){tn_console('func: addHtml');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addTooltip(ab,el){tn_console('func: addTooltip');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);var pinEl=el.find('.tn-atom__pin');var tipEl=el.find('.tn-atom__tip');var tipopen=el.attr('data-field-tipopen-value');if(isMobile||(typeof tipopen!='undefined'&&tipopen=='click')){t396_setUpTooltip_mobile(el,pinEl,tipEl)}else{t396_setUpTooltip_desktop(el,pinEl,tipEl)}setTimeout(function(){$('.tn-atom__tip-img').each(function(){var foo=$(this).attr('data-tipimg-original');if(typeof foo!='undefined'&&foo!=''){$(this).attr('src',foo)}})},3000)}function t396_addForm(ab,el){tn_console('func: addForm');var fields_str='width,top,left,';fields_str+='inputs,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addGallery(ab,el){tn_console('func: addForm');var fields_str='width,height,top,left,';fields_str+='imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){if(res=='')res=window.tn.curResolution;if(res<1200&&prop!='zindex'){el.attr('data-field-'+prop+'-res-'+res+'-value',val)}else{el.attr('data-field-'+prop+'-value',val)}if(flag_render=='render')elem__renderViewOneField(el,prop);if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val)}function t396_elem__getFieldValue(el,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}if(res==640){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}if(res==480){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}if(res==320){r=el.attr('data-field-'+prop+'-res-320-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}}}else{r=el.attr('data-field-'+prop+'-value')}return(r)}function t396_elem__renderView(el){tn_console('func: elem__renderView');var fields=el.attr('data-fields');if(!fields){return!1}fields=fields.split(',');for(var i=0;i<fields.length;i++){t396_elem__renderViewOneField(el,fields[i])}}function t396_elem__renderViewOneField(el,field){var value=t396_elem__getFieldValue(el,field);if(field=='left'){value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('left',parseFloat(value).toFixed(1)+'px')}if(field=='top'){value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('top',parseFloat(value).toFixed(1)+'px')}if(field=='width'){value=t396_elem__getWidth(el,value);el.css('width',parseFloat(value).toFixed(1)+'px');var eltype=el.attr('data-elem-type');if(eltype=='tooltip'){var pinSvgIcon=el.find('.tn-atom__pin-icon');if(pinSvgIcon.length>0){var pinSize=parseFloat(value).toFixed(1)+'px';pinSvgIcon.css({'width':pinSize,'height':pinSize})}el.css('height',parseInt(value).toFixed(1)+'px')}if(eltype=='gallery'){var borderWidth=t396_elem__getFieldValue(el,'borderwidth');var borderStyle=t396_elem__getFieldValue(el,'borderstyle');if(borderStyle=='none'||typeof borderStyle=='undefined'||typeof borderWidth=='undefined'||borderWidth=='')borderWidth=0;value=value*1-borderWidth*2;el.css('width',parseFloat(value).toFixed(1)+'px');el.find('.t-slds__main').css('width',parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('width',parseFloat(value).toFixed(1)+'px')}}if(field=='height'){var eltype=el.attr('data-elem-type');if(eltype=='tooltip'){return}value=t396_elem__getHeight(el,value);el.css('height',parseFloat(value).toFixed(1)+'px');if(eltype==='gallery'){var borderWidth=t396_elem__getFieldValue(el,'borderwidth');var borderStyle=t396_elem__getFieldValue(el,'borderstyle');if(borderStyle=='none'||typeof borderStyle=='undefined'||typeof borderWidth=='undefined'||borderWidth=='')borderWidth=0;value=value*1-borderWidth*2;el.css('height',parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('height',parseFloat(value).toFixed(1)+'px');el.find('.t-slds__main').css('height',parseFloat(value).toFixed(1)+'px')}}if(field=='container'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}if(field=='width'||field=='height'||field=='fontsize'||field=='fontfamily'||field=='letterspacing'||field=='fontweight'||field=='img'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}if(field=='inputs'){value=el.find('.tn-atom__inputs-textarea').val();try{t_zeroForms__renderForm(el,value)}catch(err){}}}function t396_elem__convertPosition__Local__toAbsolute(el,field,value){value=parseInt(value);if(field=='left'){var el_container,offset_left,el_container_width,el_width;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container='grid';offset_left=window.tn.grid_offset_left;el_container_width=window.tn.grid_width}else{el_container='window';offset_left=0;el_container_width=window.tn.window_width}var el_leftunits=t396_elem__getFieldValue(el,'leftunits');if(el_leftunits=='%'){value=t396_roundFloat(el_container_width*value/100)}value=offset_left+value;var el_axisx=t396_elem__getFieldValue(el,'axisx');if(el_axisx=='center'){el_width=t396_elem__getWidth(el);value=el_container_width/2-el_width/2+value}if(el_axisx=='right'){el_width=t396_elem__getWidth(el);value=el_container_width-el_width+value}}if(field=='top'){var ab=el.parent();var el_container,offset_top,el_container_height,el_height;var container=t396_elem__getFieldValue(el,'container');if(container=='grid'){el_container='grid';offset_top=parseFloat(ab.attr('data-artboard-proxy-min-offset-top'));el_container_height=parseFloat(ab.attr('data-artboard-proxy-min-height'))}else{el_container='window';offset_top=0;el_container_height=parseFloat(ab.attr('data-artboard-proxy-max-height'))}var el_topunits=t396_elem__getFieldValue(el,'topunits');if(el_topunits=='%'){value=(el_container_height*(value/100))}value=offset_top+value;var el_axisy=t396_elem__getFieldValue(el,'axisy');if(el_axisy=='center'){el_height=t396_elem__getHeight(el);value=el_container_height/2-el_height/2+value}if(el_axisy=='bottom'){el_height=t396_elem__getHeight(el);value=el_container_height-el_height+value}}return(value)}function t396_ab__setFieldValue(ab,prop,val,res){if(res=='')res=window.tn.curResolution;if(res<1200){ab.attr('data-artboard-'+prop+'-res-'+res,val)}else{ab.attr('data-artboard-'+prop,val)}}function t396_ab__getFieldValue(ab,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}if(res==640){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}if(res==480){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}if(res==320){r=ab.attr('data-artboard-'+prop+'-res-320');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}}}else{r=ab.attr('data-artboard-'+prop)}return(r)}function t396_ab__renderViewOneField(ab,field){var value=t396_ab__getFieldValue(ab,field)}function t396_allelems__renderView(ab){tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));ab.find(".tn-elem").each(function(){t396_elem__renderView($(this))})}function t396_ab__filterUpdate(ab){var filter=ab.find('.t396__filter');var c1=filter.attr('data-filtercolor-rgb');var c2=filter.attr('data-filtercolor2-rgb');var o1=filter.attr('data-filteropacity');var o2=filter.attr('data-filteropacity2');if((typeof c2=='undefined'||c2=='')&&(typeof c1!='undefined'&&c1!='')){filter.css("background-color","rgba("+c1+","+o1+")")}else if((typeof c1=='undefined'||c1=='')&&(typeof c2!='undefined'&&c2!='')){filter.css("background-color","rgba("+c2+","+o2+")")}else if(typeof c1!='undefined'&&typeof c2!='undefined'&&c1!=''&&c2!=''){filter.css({background:"-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )"})}else{filter.css("background-color",'transparent')}}function t396_ab__getHeight(ab,ab_height){if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');ab_height=parseFloat(ab_height);var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');if(ab_height_vh!=''){ab_height_vh=parseFloat(ab_height_vh);if(isNaN(ab_height_vh)===!1){var ab_height_vh_px=parseFloat(window.tn.window_height*parseFloat(ab_height_vh/100));if(ab_height<ab_height_vh_px){ab_height=ab_height_vh_px}}}return(ab_height)}function t396_hex2rgb(hexStr){var hex=parseInt(hexStr.substring(1),16);var r=(hex&0xff0000)>>16;var g=(hex&0x00ff00)>>8;var b=hex&0x0000ff;return[r,g,b]}String.prototype.t396_replaceAll=function(search,replacement){var target=this;return target.replace(new RegExp(search,'g'),replacement)};function t396_elem__getWidth(el,value){if(typeof value=='undefined')value=parseFloat(t396_elem__getFieldValue(el,'width'));var el_widthunits=t396_elem__getFieldValue(el,'widthunits');if(el_widthunits=='%'){var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(window.tn.window_width*parseFloat(parseInt(value)/100))}else{value=parseFloat(window.tn.grid_width*parseFloat(parseInt(value)/100))}}return(value)}function t396_elem__getHeight(el,value){if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');value=parseFloat(value);if(el.attr('data-elem-type')=='shape'||el.attr('data-elem-type')=='video'||el.attr('data-elem-type')=='html'||el.attr('data-elem-type')=='gallery'){var el_heightunits=t396_elem__getFieldValue(el,'heightunits');if(el_heightunits=='%'){var ab=el.parent();var ab_min_height=parseFloat(ab.attr('data-artboard-proxy-min-height'));var ab_max_height=parseFloat(ab.attr('data-artboard-proxy-max-height'));var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(ab_max_height*parseFloat(value/100))}else{value=parseFloat(ab_min_height*parseFloat(value/100))}}}else if(el.attr('data-elem-type')=='button'){value=value}else{value=parseFloat(el.innerHeight())}return(value)}function t396_roundFloat(n){n=Math.round(n*100)/100;return(n)}function tn_console(str){if(window.tn_comments==1)console.log(str)}function t396_setUpTooltip_desktop(el,pinEl,tipEl){var timer;pinEl.mouseover(function(){$('.tn-atom__tip_visible').each(function(){var thisTipEl=$(this).parents('.t396__elem');if(thisTipEl.attr('data-elem-id')!=el.attr('data-elem-id')){t396_hideTooltip(thisTipEl,$(this))}});clearTimeout(timer);if(tipEl.css('display')=='block'){return}t396_showTooltip(el,tipEl)});pinEl.mouseout(function(){timer=setTimeout(function(){t396_hideTooltip(el,tipEl)},300)})}function t396_setUpTooltip_mobile(el,pinEl,tipEl){pinEl.on('click',function(e){if(tipEl.css('display')=='block'&&$(e.target).hasClass("tn-atom__pin")){t396_hideTooltip(el,tipEl)}else{t396_showTooltip(el,tipEl)}});var id=el.attr("data-elem-id");$(document).click(function(e){var isInsideTooltip=($(e.target).hasClass("tn-atom__pin")||$(e.target).parents(".tn-atom__pin").length>0);if(isInsideTooltip){var clickedPinId=$(e.target).parents(".t396__elem").attr("data-elem-id");if(clickedPinId==id){return}}t396_hideTooltip(el,tipEl)})}function t396_hideTooltip(el,tipEl){tipEl.css('display','');tipEl.css({"left":"","transform":"","right":""});tipEl.removeClass('tn-atom__tip_visible');el.css('z-index','')}function t396_showTooltip(el,tipEl){var pos=el.attr("data-field-tipposition-value");if(typeof pos=='undefined'||pos==''){pos='top'};var elSize=el.height();var elTop=el.offset().top;var elBottom=elTop+elSize;var elLeft=el.offset().left;var elRight=el.offset().left+elSize;var winTop=$(window).scrollTop();var winWidth=$(window).width();var winBottom=winTop+$(window).height();var tipElHeight=tipEl.outerHeight();var tipElWidth=tipEl.outerWidth();var padd=15;if(pos=='right'||pos=='left'){var tipElRight=elRight+padd+tipElWidth;var tipElLeft=elLeft-padd-tipElWidth;if((pos=='right'&&tipElRight>winWidth)||(pos=='left'&&tipElLeft<0)){pos='top'}}if(pos=='top'||pos=='bottom'){var tipElRight=elRight+(tipElWidth/2-elSize/2);var tipElLeft=elLeft-(tipElWidth/2-elSize/2);if(tipElRight>winWidth){var rightOffset=-(winWidth-elRight-padd);tipEl.css({"left":"auto","transform":"none","right":rightOffset+"px"})}if(tipElLeft<0){var leftOffset=-(elLeft-padd);tipEl.css({"left":leftOffset+"px","transform":"none"})}}if(pos=='top'){var tipElTop=elTop-padd-tipElHeight;if(winTop>tipElTop){pos='bottom'}}if(pos=='bottom'){var tipElBottom=elBottom+padd+tipElHeight;if(winBottom<tipElBottom){pos='top'}}tipEl.attr('data-tip-pos',pos);tipEl.css('display','block');tipEl.addClass('tn-atom__tip_visible');el.css('z-index','1000')}function t396_hex2rgba(hexStr,opacity){var hex=parseInt(hexStr.substring(1),16);var r=(hex&0xff0000)>>16;var g=(hex&0x00ff00)>>8;var b=hex&0x0000ff;return[r,g,b,parseFloat(opacity)]}
function t456_setListMagin(recid,imglogo){if($(window).width()>980){var t456__menu=$('#rec'+recid+' .t456');var t456__leftpart=t456__menu.find('.t456__leftwrapper');var t456__listpart=t456__menu.find('.t456__list');if(imglogo){t456__listpart.css("margin-right",t456__leftpart.width())}else{t456__listpart.css("margin-right",t456__leftpart.width()+30)}}}
function t456_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="index.html"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="index.html"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="index.html"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t456__list_item a[href='"+url+"']").addClass("t-active");$(".t456__list_item a[href='"+url+"/']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t456_checkAnchorLinks(recid){if($(window).width()>=960){var t456_navLinks=$("#rec"+recid+" .t456__list_item a:not(.tooltipstered)[href*='#']");if(t456_navLinks.length>0){t456_catchScroll(t456_navLinks)}}}
function t456_catchScroll(t456_navLinks){var t456_clickedSectionId=null,t456_sections=new Array(),t456_sectionIdTonavigationLink=[],t456_interval=100,t456_lastCall,t456_timeoutId;t456_navLinks=$(t456_navLinks.get().reverse());t456_navLinks.each(function(){var t456_cursection=t456_getSectionByHref($(this));if(typeof t456_cursection.attr("id")!="undefined"){t456_sections.push(t456_cursection)}
t456_sectionIdTonavigationLink[t456_cursection.attr("id")]=$(this)});$(window).bind('resize',t_throttle(function(){t456_updateSectionsOffsets(t456_sections)},200));$('.t456').bind('displayChanged',function(){t456_updateSectionsOffsets(t456_sections)});setInterval(function(){t456_updateSectionsOffsets(t456_sections)},5000);setTimeout(function(){t456_updateSectionsOffsets(t456_sections);t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)},1000);t456_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t456_navLinks.removeClass('t-active');t456_sectionIdTonavigationLink[t456_getSectionByHref($(this)).attr("id")].addClass('t-active');t456_clickedSectionId=t456_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t456_now=new Date().getTime();if(t456_lastCall&&t456_now<(t456_lastCall+t456_interval)){clearTimeout(t456_timeoutId);t456_timeoutId=setTimeout(function(){t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)},t456_interval-(t456_now-t456_lastCall))}else{t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)}})}
function t456_updateSectionsOffsets(sections){$(sections).each(function(){var t456_curSection=$(this);t456_curSection.attr("data-offset-top",t456_curSection.offset().top)})}
function t456_getSectionByHref(curlink){var t456_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t456_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t456_curLinkValue.substring(1)+"']")}}
function t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId){var t456_scrollPosition=$(window).scrollTop(),t456_valueToReturn=t456_clickedSectionId;if(t456_sections.length!=0&&t456_clickedSectionId==null&&t456_sections[t456_sections.length-1].attr("data-offset-top")>(t456_scrollPosition+300)){t456_navLinks.removeClass('t-active');return null}
$(t456_sections).each(function(e){var t456_curSection=$(this),t456_sectionTop=t456_curSection.attr("data-offset-top"),t456_id=t456_curSection.attr('id'),t456_navLink=t456_sectionIdTonavigationLink[t456_id];if(((t456_scrollPosition+300)>=t456_sectionTop)||(t456_sections[0].attr("id")==t456_id&&t456_scrollPosition>=$(document).height()-$(window).height())){if(t456_clickedSectionId==null&&!t456_navLink.hasClass('t-active')){t456_navLinks.removeClass('t-active');t456_navLink.addClass('t-active');t456_valueToReturn=null}else{if(t456_clickedSectionId!=null&&t456_id==t456_clickedSectionId){t456_valueToReturn=null}}
return!1}});return t456_valueToReturn}
function t456_setPath(){}
function t456_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t456_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t456_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t456_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t456"),burger=el.find(".t456__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t456_opened")});$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}