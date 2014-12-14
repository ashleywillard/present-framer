# This imports all the layers for "present" into presentLayers
presentLayers = Framer.Importer.load "imported/present"

presentLayers["Menu"].x = 370
presentLayers["Hello World"].x = 370
# presentLayers["Bubbles"].x = 370
presentLayers["No Pressure"].x = 370
presentLayers["Paused"].x = 370
presentLayers["Done"].x = 370

presentLayers["Bubbles"].y = 400
presentLayers["Footer"].y = 410
presentLayers["Time1"].y = 450

presentLayers["Dot"].opacity = 0
presentLayers["Time2"].opacity = 0

presentLayers["Present"].placeBefore(presentLayers["Presentations"])

presentLayers["Present"].animate
	properties:
		opacity: 0
	delay: 2
	
presentLayers["Presentations"].draggable.enabled = true
presentLayers["Presentations"].draggable.speedX = 0.3
presentLayers["Presentations"].draggable.speedY = 0

presentLayers["Menu"].draggable.enabled = true
presentLayers["Menu"].draggable.speedX = 0.3
presentLayers["Menu"].draggable.speedY = 0

presentLayers["Hello World"].draggable.enabled = true
presentLayers["Hello World"].draggable.speedX = 0.3
presentLayers["Hello World"].draggable.speedY = 0

presentLayers["No Pressure"].draggable.enabled = true
presentLayers["No Pressure"].draggable.speedX = 0.3
presentLayers["No Pressure"].draggable.speedY = 0

presentLayers["Paused"].draggable.enabled = true
presentLayers["Paused"].draggable.speedX = 0.3
presentLayers["Paused"].draggable.speedY = 0

presentLayers["Presentations"].on Events.DragEnd, ->
	presentLayers["Presentations"].animate
		properties:
			x: -370
	presentLayers["Menu"].animate
		properties:
			x: 16
	
presentLayers["Menu"].on Events.DragEnd, ->
	presentLayers["Menu"].animate
		properties:
			x: -370
	presentLayers["Hello World"].animate
		properties:
			x: 41
	presentLayers["Bubbles"].animate
		properties:
			y: 270
	presentLayers["Footer"].animate
		properties:
			y: 305
	presentLayers["Time1"].animate
		properties:
			y: 329
	
presentLayers["Hello World"].on Events.DragEnd, ->
	presentLayers["Hello World"].animate
		properties:
			x: -370
	presentLayers["No Pressure"].animate
		properties:
			x: 49
	presentLayers["Time1"].animate
		properties:
			opacity: 0
	presentLayers["Time2"].animate
		properties:
			opacity: 1
# 	presentLayers["Time1"].opacity = 0
# 	presentLayers["Time2"].opacity = 1
	presentLayers["Dot"].opacity = 1
	
# presentLayers["Footer"].placeBefore(presentLayers["Done"])

presentLayers["Footer"].on Events.Click, ->
	presentLayers["Paused"].animate
		properties:
			x: 0
	presentLayers["Footer"].animate
		properties:
			opacity: 0
		delay: 1.5
	presentLayers["Time2"].animate
		properties:
			opacity: 0
		delay: 1.5
	
presentLayers["No Pressure"].on Events.DragEnd, ->
	presentLayers["No Pressure"].animate
		properties:
			x: -370
	presentLayers["Bubbles"].animate
		properties:
			x: -370
	presentLayers["Dot"].animate
		properties:
			x: -370
	presentLayers["Paused"].animate
		properties:
			x: -370
	presentLayers["Done"].animate
		properties:
			x: 30

# Welcome to Framer

# Learn how to prototype: http://framerjs.com/learn
# Drop an image on the device, or import a design from Sketch or Photoshop

# iconLayer = new Layer width:256, height:256, image:"images/framer-icon.png"
# iconLayer.center()
# 
# # Define a set of states with names (the original state is 'default')
# iconLayer.states.add
# 	second: {y:100, scale:0.6, rotationZ:100}
# 	third:  {y:300, scale:1.3, blur:4}
# 	fourth: {y:200, scale:0.9, blur:2, rotationZ:200}
# 
# # Set the default animation options
# iconLayer.states.animationOptions =
# 	curve: "spring(500,12,0)"
# 
# # On a click, go to the next state
# iconLayer.on Events.Click, ->
# 	iconLayer.states.next()