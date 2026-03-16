# remap colors in rect

Remaps the colors in an image within a specified rectangle. All colors in the from array will be change to the corresponding color in the to array. The from and to arrays MUST have the same length.

```sig
drawing.remapColorsInRect(image.screenImage(), drawing.createPoint(0, 0), 0, 0, drawing.colorArray(0), drawing.colorArray(0))
```

## Parameters

* **image**: The image to remap colors in
* **topLeft**: The top-left point of the rectangle to remap colors in, specified as a Point, Location, or Sprite (the x and y of the location or sprite will be used)
* **width**: The width of the rectangle to remap colors in
* **height**: The height of the rectangle to remap colors in
* **from**: The colors to remap from
* **to**: The colors to remap to

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
