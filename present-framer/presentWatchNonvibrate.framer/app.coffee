# This imports all the layers for "presentWatch" into presentwatchLayers
watchLayers = Framer.Importer.load "imported/presentWatch"

# Welcome to Framer

# Learn how to prototype: http://framerjs.com/learn
# Drop an image on the device, or import a design from Sketch or Photoshop

watchLayers["Footer"].x = 370
watchLayers["Retain"].x = 370
watchLayers["Slide"].x = 370
watchLayers["Paused"].x = 370
watchLayers["Two"].x = 406
watchLayers["Fifteen"].opacity = 0

watchLayers["Start"].placeBefore(watchLayers["Retain"])
watchLayers["Start"].placeBefore(watchLayers["Footer"])
watchLayers["Start"].placeBefore(watchLayers["Slide"])
watchLayers["Start"].placeBefore(watchLayers["Paused"])
watchLayers["Start"].placeBefore(watchLayers["Background"])

watchLayers["Retain"].draggable.enabled = true
watchLayers["Retain"].draggable.speedX = 0.3
watchLayers["Retain"].draggable.speedY = 0

# watchLayers["Slide"].draggable.enabled = true
# watchLayers["Slide"].draggable.speedX = 0.3
# watchLayers["Slide"].draggable.speedY = 0

watchLayers["Start"].on Events.Click, ->
# 	watchLayers["Start"].opacity = 0
	watchLayers["Start"].animate
		properties:
			x: -380
	watchLayers["Retain"].animate
		properties:
			x: 0
	watchLayers["Footer"].animate
		properties:
			x: 2
	watchLayers["Two"].animate
		properties:
			x: 40

watchLayers["Retain"].on Events.DragEnd, ->
	watchLayers["Retain"].animate
		properties:
			x: -370
	watchLayers["Slide"].animate
		properties:
			x: 0
	watchLayers["Two"].opacity = 0
	watchLayers["Fifteen"].animate
		properties:
			opacity: 1

watchLayers["Footer"].on Events.Click, ->
	watchLayers["Paused"].animate
		properties:
			x: 2
