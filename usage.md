## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from "can-util";
```

### CommonJS use

Use `require` to load `can-util` and everything else
needed to create a template that uses `can-util`:

```js
import plugin from "can-util";
```

## AMD use

Configure the `can` and `jquery` paths and the `can-util` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'can-util',
		    	location: 'node_modules/can-util/dist/amd',
		    	main: 'lib/can-util'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-util/dist/global/can-util.js'></script>
```

