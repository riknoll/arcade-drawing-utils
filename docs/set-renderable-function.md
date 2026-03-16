# set renderable function

Sets the render function of a renderable. Calling this more than once will overwrite the previous render function.

```sig
drawing.setRenderableFunction(drawing.createRenderable(0), function(screen: Image) {

})
```

## Parameters

* **renderable**: The renderable to set the function of
* **renderFn**: The function that draws to the screen

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
