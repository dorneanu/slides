chalkboard: {
	penWidth: 3,
    chalkWidth: 4,
    chalkEffect: 0.1,
    erasorDiameter: 20,
	readOnly: false, // Configuation option allowing to prevent changes to existing drawings.
	transition: 800, // Gives the duration (in milliseconds) of the transition for a slide change, so that the notes canvas is drawn after the transition is completed.
	theme: "chalkboard", // Can be set to either "chalkboard" or "whiteboard".
	color: [ 'rgba(150,150,150,1)', 'rgba(255,255,255,0.5)' ], // The first value gives the pen color, the second value gives the color of the chalk.
	background: [ 'rgba(141,191,68,.1)', 'revealjs-plugins/chalkboard/img/blackboard.png' ], // The first value expects a (semi-)transparent color which is used to provide visual feedback that the notes canvas is enabled, the second value expects a filename to a background image for the chalkboard.
	grid: false, // This pattern can be modified by setting the color, the distance between lines, and the line width, e.g. { color: 'rgb(127,127,255,0.1)', distance: 40, width: 2}
},
//
// NOTES POINTER PLUGIN https://github.com/dougalsutherland/reveal.js-notes-pointer
//
notes_pointer: {
	pointer: {
		size: 15,  // in pixels (scaled like the rest of reveal.js)
		color: 'rgba(239,82,91,0.8)',  // something valid for css background-color
		key: 'O' // '.' does not work
	},
	notes: {
		key: 'S'
	}
},
//
// SPOTLIGHT PLUGIN https://github.com/denniskniep/reveal.js-plugin-spotlight
//
// spotlight: {
// 	size: 120, // size of the spotlight
// 	lockPointerInsideCanvas: false, // true: Locks the mouse pointer inside the presentation
// 	toggleSpotlightOnMouseDown: true, // toggle spotlight by holding down the mouse key
// 	spotlightCursor: 'none', // choose the cursor when spotlight is on
// 	presentingCursor: 'crosshair', // choose the cursor when presentation mode / spotlight is on
// 	initialPresentationMode: false, // true : initially in presentation mode
// 	disablingUserSelect: true, // true : disable selecting in presentation mode
// 	fadeInAndOut: 100, // set to a number as transition duration in ms to enable fade in and out
// 	useAsPointer: false, // enable pointer mode
// },
//
// MENU PLUGIN https://github.com/denehyg/reveal.js-menu
//
menu: {
	numbers: true, // Add slide numbers to the titles in the slide list.
	titleSelector: 'h1, h2, h3, div.title, caption.title, #toctitle', // Specifies which slide elements will be used for generating the slide titles in the menu.
	transitions: true, // Specifies if the transitions menu panel will be shown.
	openButton: true, // Adds a menu button to the slides to open the menu panel.
	openSlideNumber: false, // If 'true' allows the slide number in the presentation to open the menu panel
	loadIcons: true, // By default the menu will load it's own font-awesome library icons
	sticky: true, // If 'true', the sticky option will leave the menu open until it is explicitly closed
	custom: [ { title: 'Keys', icon: '<i class="fa fa-keyboard">', content: `
		<ul class="slide-menu-items">
		<li class="slide-menu-item">
			<h3>Core</h3>
			<p>? : Show core keys</p>
		</li>
		<li class="slide-menu-item">
			<h3>Zoom</h3>
			<p>ALT+CLICK : Zoom-in</p>
		</li>
		<li class="slide-menu-item">
			<h3>Notes Pointer / Spotlight</h3>
			<p>O : Toggle pointer on/off</p>
			<p>L or (X then LEFT CLICK) : Toggle spotlight on/off</p>
		</li>
		<li class="slide-menu-item">
			<h3>Skip fragments</h3>
			<p>PageDown : Show all fragments</p>
			<p>PageUp : Show no fragment</p>
		</li>
		<li class="slide-menu-item">
			<h3>Chalkboard</h3>
			<p>N : Notes canvas on/off</p>
			<p>C : Chalkboard on/off</p>
			<p>Z : Cycle pen colors forward</p>
			<p>A : Cycle pen colors backward</p>
			<p>DEL : Clear canvas/chalkboard</p>
			<p>BASCKSPACE : Reset chalkboard data on current slide</p>
			<p>D : Download drawing as JSON</p>
		</li>
		<li class="slide-menu-item">
			<h3>Menu</h3>
			<p>M : Open menu</p>
			<p>H or LEFT : Next left panel</p>
			<p>L or RIGHT : Next right panel</p>
			<p>K or UP : Up</p>
			<p>J or DOWN : Down</p>
			<p>U or PAGE UP : Page up</p>
			<p>D or PAGE DOWN : Page down</p>
			<p>HOME : Top</p>
			<p>END : Bottom</p>
			<p>SPACE or RETURN : Selection</p>
			<p>ESC : Close menu</p>
		</li>
		<li class="slide-menu-item">
			<h3>Custom</h3>
			<p>I : ../index.html</p>
		</li></ul>` }
	],
  	themes: [// Specifies the themes that will be available in the themes menu panel. Set to 'true' to show the themes menu panel with the default themes list. 
		{ name: '########## light ##########', theme: 'themes/css/reveal-zenika-light.css' },
		{ name: 'white'},
		{ name: 'code-layers-multicolor', theme: 'themes/css/reveal-code-layers-multicolor.css' },
		{ name: 'containers', theme: 'themes/css/reveal-containers.css' },
		{ name: 'code-relax', theme: 'themes/css/reveal-code-relax.css' },
        { name: '########## dark ##########', theme: 'themes/css/reveal-zenika-dark.css' },
		{ name: 'security-dark', theme: 'themes/css/reveal-security-dark.css' },
		{ name: 'containers-dark', theme: 'themes/css/reveal-containers-dark.css' }]
}
