<html>

<head>
  <title><g:layoutTitle default="Ext JS"/></title>
  <link rel="stylesheet" href="http://extjs.cachefly.net/ext-3.3.1/resources/css/ext-all.css" />
  <link rel="stylesheet" href="${resource(dir:'ext/desktop/css',file:'desktop.css')}" />
  <script type="text/javascript" src="http://extjs.cachefly.net/ext-3.3.1/adapter/ext/ext-base.js"></script>
  <script type="text/javascript" src="http://extjs.cachefly.net/ext-3.3.1/ext-all.js"></script>
  <script type="text/javascript">
    Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.3.1/resources/images/default/s.gif';
  </script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'StartMenu.js')}"></script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'TaskBar.js')}"></script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'Desktop.js')}"></script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'App.js')}"></script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'Module.js')}"></script>
  <script type="text/javascript" src="${resource(dir:'ext/desktop',file: 'EmbeddedModule.js')}"></script>
  <g:layoutHead/>
</head>

<body>
  <div id="x-desktop">
    <dl id="x-shortcuts">
    </dl>
  </div>

  <div id="ux-taskbar">
    <div id="ux-taskbar-start"></div>
    <div id="ux-taskbuttons-panel"></div>
    <div class="x-clear"></div>
  </div>
</body>

</html>
