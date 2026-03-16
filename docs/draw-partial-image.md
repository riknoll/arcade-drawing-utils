# draw partial image

Draws a portion of an image onto another image.

```sig
drawing.drawPartialImage(image.screenImage(), drawing.createPoint(0, 0), img`.`, drawing.createPoint(0, 0), 0, 0)
```

## Parameters

* **target**: The image to draw on
* **destPosition**: The position to draw the image at, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
* **source**: The image to draw
* **sourcePosition**: The position in the source image to start drawing from, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
* **width**: The width of the area to draw from the source image
* **height**: The height of the area to draw from the source image

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
