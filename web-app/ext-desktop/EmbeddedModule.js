Ext.ns("Ext.app");

Ext.app.EmbeddedModule = Ext.extend(Ext.app.Module, {
    init : function(){
        this.launcher = {
            text: this.name,
            iconCls: this.iconCls,
            handler : this.createWindow,
            scope: this,
            windowId: this.id
        }
    },

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow(this.id);
        if(!win){
            win = desktop.createWindow({
                id: this.id,
                title: this.title,
                iconCls: this.iconCls,
                width:this.width,
                height:this.height,
                layout: this.layout || 'fit',
                autoLoad: { url: this.url, scripts: true, params: { parentId: this.id } },
                shim:false,
                animCollapse:true,
                constrainHeader:true
            });
        }
        win.show();
    }
});
