Ext.ScriptLoader = function() {
    this.timeout = 30;
    this.scripts = [];
    this.disableCaching = false;
    this.loadMask = null;
};

Ext.ScriptLoader.prototype = {
    showMask: function() {
      if (!this.loadMask) {
        this.loadMask = new Ext.LoadMask(Ext.getBody());
        this.loadMask.show();
      }
    },

    hideMask: function() {
      if (this.loadMask) {
        this.loadMask.hide();
      }
    },

    processSuccess: function(response) {
      this.scripts[response.argument.url] = true;
      window.execScript ? window.execScript(response.responseText) : window.eval(response.responseText);
      if (response.argument.options.scripts.length == 0) {
        this.hideMask();
      }
      if (typeof response.argument.callback == 'function') {
        response.argument.callback.call(response.argument.scope);
      }
    },

    processFailure: function(response) {
      this.hideMask();
      Ext.MessageBox.show({title: 'Application Error', msg: 'Script library could not be loaded.', closable: false, icon: Ext.MessageBox.ERROR, minWidth: 200});
      setTimeout(function() { Ext.MessageBox.hide(); }, 3000);
    },

    load: function(url, callback) {
      var cfg, callerScope;
      if (typeof url == 'object') { // must be config object
          cfg = url;
          url = cfg.url;
          callback = callback || cfg.callback;
          callerScope = cfg.scope;
          if (typeof cfg.timeout != 'undefined') {
            this.timeout = cfg.timeout;
          }
          if (typeof cfg.disableCaching != 'undefined') {
            this.disableCaching = cfg.disableCaching;
          }
      }

      if (this.scripts[url]) {
        if (typeof callback == 'function') {
          callback.call(callerScope || window);
        }
        return null;
      }

      this.showMask();

      Ext.Ajax.request({
          url: url,
          success: this.processSuccess,
          failure: this.processFailure,
          scope: this,
          timeout: (this.timeout*1000),
          disableCaching: this.disableCaching,
          argument: {
            'url': url,
            'scope': callerScope || window,
            'callback': callback,
            'options': cfg
          }
      });
    }
};

Ext.ScriptLoaderMgr = function() {
    this.loader = new Ext.ScriptLoader();

    this.load = function(o) {
      if (!Ext.isArray(o.scripts)) {
        o.scripts = [o.scripts];
      }

      o.url = o.scripts.shift();

      if (o.scripts.length == 0) {
        this.loader.load(o);
      } else {
        o.scope = this;
        this.loader.load(o, function() {
          this.load(o);
        });
      }
    };
};

Ext.ScriptMgr = new Ext.ScriptLoaderMgr();  
