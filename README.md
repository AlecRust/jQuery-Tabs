# jQuery Tabs
No frills tab switcher thingy. Focus on small file size and touchevent support

## Usage
Two ways:

__AMD Style__ (better!)

```js
require(['path/to/Tabs'], function(Tabs) {
	new Tabs('.some-container', {
		// options
	})
});
```
Ensure you have set a path to `jquery` in `require.config` (but you knew that already!)

__Standard Style__ (less awesome)

```js
$.tabs('.some-container', {
   // options
});
```
Doesn't really follow the traditional jQuery plugin style, but I prefer AMD so this was just a quick addition for non-AMD users :)

## Methods
`setTab` - Pass it an index (zero based) to set that tab to visible

```js
var tabs = $.tabs('.container');

tabs.setTabs(2);
```

## Options

```js
{
	// Current visible tab (applied to nav and tab item
	currentClass: 'tab-current',
	
    // Is the script active? Useful for applying display: none in 
    // an accessible manner
	activeClass: 'js-tabs-active',
	
    // Which tab to start open
	activeTab: 0,
	
    // Elements to use (navTabs assumes there will be an <a/> element present)
	selectors: {
		navTabs: '.tab-nav li',
		contentItems: '.tab-item'
	}
}
```

## Markup Example
The script pretty much only cares about selectors, so extra divs here and there won't break things. The following markup would be ideal:

```html
<div class="tabs">
    <nav>
        <ul class="tab-nav" role="tablist">
            <li><a href="#item1" role="tab" aria-controls="item1" role="presentation" id="tab1">Item 1</a></li>
            <li><a href="#item2" role="tab" aria-controls="item2" role="presentation" id="tab2">Item 2</a></li>
            <li><a href="#item2" role="tab" aria-controls="item3" role="presentation" id="tab3">Item 3</a></li>
        </ul>
    </nav>
    <ul>
        <li class="tab-item" id="item1" role="tabpanel" aria-labelledby="tab1">
            <img src="http://placekitten.com/200/300" alt="">
            I'm tab one
        </li>
        <li class="tab-item" id="item2" role="tabpanel" aria-labelledby="tab2">
            <img src="http://placekitten.com/400/300" alt="">
            I'm tab two
        </li>
        <li class="tab-item" id="item3" role="tabpanel" aria-labelledby="tab3">
            <img src="http://placekitten.com/100/400" alt="">
            I'm tab three
        </li>
    </ul>
</div>
```

## Demo

http://jsfiddle.net/Blink/kRTX3/
