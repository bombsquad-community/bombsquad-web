"use strict";(self.webpackChunkballistica_web=self.webpackChunkballistica_web||[]).push([[496],{4496:(p,r,a)=>{a.r(r),a.d(r,{PluginManager:()=>s,PluginManagerModule:()=>m});var l=a(6696),u=a(7423),e=a(5e3),c=a(520),d=a(6627);let s=(()=>{class t{constructor(n,i,g){this.http=n,this._seoService=i,this.activatedRoute=g,this.downloadLink="https://raw.githubusercontent.com/bombsquad-community/plugin-manager/main/plugin_manager.py"}ngOnInit(){this.getChild(this.activatedRoute).data.subscribe(i=>{this._seoService.updateTitle(i.title),this._seoService.updateOgUrl(i.ogUrl),this._seoService.updateDescription(i.description)})}getChild(n){return n.firstChild?this.getChild(n.firstChild):n}onDownload(){this.http.get(this.downloadLink,{responseType:"blob"}).subscribe(n=>{var i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="plugin_manager.py",i.click()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.eN),e.Y36(d.S),e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pluginmanager"]],decls:65,vars:0,consts:[[1,"main"],[1,"content"],["href","https://www.froemling.net/apps/bombsquad"],["mat-raised-button","","color","primary",3,"click"],["href","https://github.com/bombsquad-community/plugin-manager"],["controls","","width","750"],["src","assets/img/plugin-manager.webm","alt",""]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"BombSquad Plugin Manager"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Plugin-manager A plugin manager for the game - "),e.TgZ(6,"a",2),e._uU(7,"Bombsquad"),e.qZA(),e._uU(8," . Plugin manager is a plugin in itself, which makes further modding of your game more convenient by providing easier access to community created content. "),e.qZA(),e.TgZ(9,"h2"),e._uU(10,"Features"),e.qZA(),e.TgZ(11,"ul")(12,"li"),e._uU(13," Completely open-source - both the plugin-manager and all the plugins in this repository. "),e.qZA(),e.TgZ(14,"li"),e._uU(15,"Works on all platforms."),e.qZA(),e.TgZ(16,"li"),e._uU(17,"Only deal with plugins and updates targetting your game's current API version."),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Search for plugins."),e.qZA(),e.TgZ(20,"li"),e._uU(21," Add 3rd party plugin sources (use them at your own risk, since they may not be audited!)."),e.qZA(),e.TgZ(22,"li"),e._uU(23,"Enable or disable auto-updates for plugin manager and plugins."),e.qZA(),e.TgZ(24,"li"),e._uU(25," Immediately enable installed plugins/minigames without having to restart game."),e.qZA(),e.TgZ(26,"li"),e._uU(27," Launch a plugin's settings directly from the plugin manager window."),e.qZA(),e.TgZ(28,"li"),e._uU(29,"Check out a plugin's source code before installing it."),e.qZA(),e.TgZ(30,"li"),e._uU(31,"Sync installed plugins with workspaces."),e.qZA(),e.TgZ(32,"li"),e._uU(33,"Sort plugins by popularity, downloads, rating or some other metric."),e.qZA()(),e.TgZ(34,"h2"),e._uU(35,"Download"),e.qZA(),e._uU(36," Direct download for all platforms "),e._UZ(37,"br"),e.TgZ(38,"button",3),e.NdJ("click",function(){return i.onDownload()}),e._uU(39,"Download Now"),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"a",4),e._uU(42,"View it on github "),e.qZA(),e._UZ(43,"br"),e.TgZ(44,"h2"),e._uU(45,"Installation"),e.qZA(),e._uU(46," There are two different ways the plugin manager can be installed: "),e._UZ(47,"br"),e._uU(48," 1. Download plugin_manager.py to your mods directory (check it out by going into your game's Settings -> Advanced -> Show Mods Folder). This is the recommended way (see below). "),e._UZ(49,"br"),e._uU(50," 2. Another way is to add plugin_manager.py to your workspace. However, plugin manager self-updates will fail when installed using this way since the game will overrwrite the updated plugin manager, with the older version from workspace on the next sync. However, you can manually apply updates by copying the latest plugin manager's source code again to your workspace when using this method. "),e.TgZ(51,"h2"),e._uU(52,"Usage"),e.qZA(),e._uU(53," If installed correctly, you'll see the plugin manager button in your game's settings. "),e._UZ(54,"br"),e.TgZ(55,"video",5),e._UZ(56,"source",6),e.qZA(),e._UZ(57,"br"),e._uU(58," That's it, you now have access to a variety of community created content waiting for you to install! "),e.TgZ(59,"h2"),e._uU(60,"Contributing"),e.qZA(),e._uU(61," Submitting a Plugin In order for a plugin to get accepted to this "),e.TgZ(62,"a",4),e._uU(63,"official repository"),e.qZA(),e._uU(64," , it must target the general game audience and be completely open and readable, not be encoded or encrypted in any form. If your plugin doesn't target the general game audience, you can put your plugin(s) in a GitHub repository and then your plugin(s) can be installed through the custom source option in-game. See 3rd party plugin sources for more information. New plugins are accepted through a pull request. Add your plugin in the minigames, utilities, or the category directory you feel is the most relevant to the type of plugin you're submitting, here. Then add an entry to the category's JSON metadata file. Plugin manager will also show and execute the settings icon if your ba.Plugin export class has a method named on_plugin_manager_prompt; check out the colorscheme plugin as an example and its behaviour when the settings icon is tapped via the plugin manager in-game. License Plugin manager's source code is licensed under the MIT license. See LICENSE for more information. Any plugins you submit here are automatically assumed to be licensed under the MIT license, i.e. unless you explicitly specify a different license while submitting a plugin. "),e.qZA()())},dependencies:[u.lW],styles:[".main[_ngcontent-%COMP%]{background-color:#000;color:#fff;line-height:1.9}h1[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{margin:20px 0}.content[_ngcontent-%COMP%]{width:80%;margin:auto;padding:20px}img[_ngcontent-%COMP%]{width:100%}"]}),t})();const h=[{path:"",component:s}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(h),u.ot]}),t})()}}]);