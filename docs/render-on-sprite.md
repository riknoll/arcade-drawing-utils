# render on sprite

Registers code that runs either immediately before or immediately after a sprite is drawn. This is useful for adding effects to sprites, or drawing UI on top of them like status bars or text. By default, the registered code will not run if the sprite is invisible, but this can be changed with the "set registered renderables on sprite to ignore invisible flag" block. This function will be unregistered when the sprite is destoryed.

```sig
drawing.renderOnSprite(sprites.create(img`.`, SpriteKind.Player), drawing.RenderOrder, function(sprite: Sprite) {

})
```

## Parameters

* **target**: The sprite to register the render function on
* **renderOrder**: Whether to render above or below the sprite
* **renderFn**: The function that draws to the screen

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
