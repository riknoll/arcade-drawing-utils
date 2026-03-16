# set sprite renderer ignore invisible flag

Sets whether registered renderables on a sprite should ignore the sprite's invisible flag. By default, registered renderables will not run if the sprite is invisible, but this block can be used to change that behavior. This only affects renderables already registered on the sprite, any renderables registered after this block is called will use the default behavior unless this block is called again.

```sig
drawing.setSpriteRendererIgnoreInvisibleFlag(sprites.create(img`.`, SpriteKind.Player), false)
```

## Parameters

* **sprite**: The sprite to set the behavior on
* **ignoreInvisibleFlag**: Whether to ignore the sprite's invisible flag

```package
arcade-drawing-utils=github:riknoll/arcade-drawing-utils
```
