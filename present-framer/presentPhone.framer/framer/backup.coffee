# This imports all the layers for "Present_phone" into present_phoneLayers
phoneLayers = Framer.Importer.load "imported/Present_phone"

# Welcome to Framer

# Learn how to prototype: http://framerjs.com/learn
# Drop an image on the device, or import a design from Sketch or Photoshop

# phoneLayers["Signin"].opacity = 0
phoneLayers["Intro"].opacity = 1
phoneLayers["Presentations"].x = 1080
phoneLayers["Select1"].x = 1997
phoneLayers["Select2"].opacity = 0
phoneLayers["Arrow"].opacity = 0
phoneLayers["Synced"].x = 1080

# phoneLayers["Presentations"].draggable.enabled = true
# phoneLayers["Signin"].draggable.enabled = true
phoneLayers["Intro"].placeBefore(phoneLayers["Signin"])
phoneLayers["Intro"].placeBefore(phoneLayers["Presentations"])
phoneLayers["Intro"].placeBefore(phoneLayers["Synced"])
phoneLayers["Intro"].placeBefore(phoneLayers["Clicked"])
phoneLayers["Signin"].placeBefore(phoneLayers["Presentations"])
phoneLayers["Signin"].placeBefore(phoneLayers["Click"])
phoneLayers["Intro"].animate
	properties:
		opacity: 0
	delay: 2
	
phoneLayers["Signin"].on Events.Click, ->
	phoneLayers["Signin"].animate
		properties:
			x: -1080
	phoneLayers["Presentations"].animate
		properties:
			x: 0
	phoneLayers["Select1"].animate
		properties:
			x: 917
			
phoneLayers["Click"].on Events.Click, ->
	phoneLayers["Select1"].opacity = 0
	phoneLayers["Select2"].opacity = 1
	phoneLayers["Arrow"].opacity = 1
	phoneLayers["Presentations"].placeBefore(phoneLayers["Click"])
	
phoneLayers["Presentations"].on Events.Click, ->
	phoneLayers["Presentations"].animate
		properties:
			x: -1080
	phoneLayers["Synced"].animate
		properties:
			x: 0
	
