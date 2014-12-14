// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["present/layers.json.js"] = [
	{
		"id": 56,
		"name": "Background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Background.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 323,
				"height": 369
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "800962171"
	},
	{
		"id": 6,
		"name": "Present",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Present.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 323,
				"height": 369
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "217669732"
	},
	{
		"id": 17,
		"name": "Presentations",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Presentations.png",
			"frame": {
				"x": 18,
				"y": 60,
				"width": 287,
				"height": 282
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 9,
				"name": "<Clip Group>",
				"layerFrame": {
					"x": 15,
					"y": 28,
					"width": 80,
					"height": 80
				},
				"maskFrame": {
					"x": 16,
					"y": 29,
					"width": 77,
					"height": 78
				},
				"image": {
					"path": "images/<Clip Group>.png",
					"frame": {
						"x": 16,
						"y": 29,
						"width": 78,
						"height": 78
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "801826083"
			}
		],
		"modification": "1535433622"
	},
	{
		"id": 24,
		"name": "Menu",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Menu.png",
			"frame": {
				"x": 18,
				"y": 38,
				"width": 287,
				"height": 293
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1247091912"
	},
	{
		"id": 54,
		"name": "Footer",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Footer.png",
			"frame": {
				"x": 0,
				"y": 305,
				"width": 323,
				"height": 64
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "802839006"
	},
	{
		"id": 52,
		"name": "Bubbles",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Bubbles.png",
			"frame": {
				"x": 55,
				"y": 271,
				"width": 213,
				"height": 16
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "802839008"
	},
	{
		"id": 30,
		"name": "Hello World",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Hello World.png",
			"frame": {
				"x": 43,
				"y": 132,
				"width": 236,
				"height": 61
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "1991052435"
	},
	{
		"id": 33,
		"name": "Time1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Time1.png",
			"frame": {
				"x": 17,
				"y": 326,
				"width": 148,
				"height": 24
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "803702913"
	},
	{
		"id": 37,
		"name": "No Pressure",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/No Pressure.png",
			"frame": {
				"x": 52,
				"y": 132,
				"width": 218,
				"height": 66
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "982770508"
	},
	{
		"id": 40,
		"name": "Time2",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Time2.png",
			"frame": {
				"x": 16,
				"y": 327,
				"width": 148,
				"height": 23
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "804566857"
	},
	{
		"id": 50,
		"name": "Dot",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Dot.png",
			"frame": {
				"x": 88,
				"y": 271,
				"width": 16,
				"height": 16
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "804566881"
	},
	{
		"id": 48,
		"name": "Paused",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Paused.png",
			"frame": {
				"x": 0,
				"y": 305,
				"width": 323,
				"height": 64
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "804566883"
	},
	{
		"id": 46,
		"name": "Done",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 323,
			"height": 369
		},
		"maskFrame": null,
		"image": {
			"path": "images/Done.png",
			"frame": {
				"x": 32,
				"y": 94,
				"width": 257,
				"height": 193
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "414022093"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "apple-watch"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/Users\/Ashley\/Downloads\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();