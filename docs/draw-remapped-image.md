# draw remapped image

Draws an image onto another image with specified colors remapped.

```sig
drawing.drawRemappedImage(image.screenImage(), img`.`, drawing.createPoint(0, 0), drawing.colorArray(0), drawing.colorArray(0))
```

## Parameters

* **dest**: the image to draw onto
* **source**: the image to draw
* **position**: the position to draw the image at, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
* **from**: the colors to remap from
* **to**: the colors to remap to

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
