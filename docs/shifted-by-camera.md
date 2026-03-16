# shifted by camera

Returns a new point with the camera's left and top offsets subtracted from the given point's coordinates. Use this if you are trying to draw something that is affected by the camera's position.

```sig
drawing.shiftedByCamera(drawing.createPoint(0, 0))
```

## Parameters

* **point**: The point, sprite, or tile location to shift by the camera's position

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
