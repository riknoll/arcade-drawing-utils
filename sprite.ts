namespace drawing {
    export enum RenderOrder {
        //% block="above"
        Above,
        //% block="below"
        Below
    }

    /**
     * Registers code that runs either immediately before or immediately after a sprite is drawn.
     * This is useful for adding effects to sprites, or drawing UI on top of them like status bars
     * or text. By default, the registered code will not run if the sprite is invisible, but this can be changed
     * with the "set registered renderables on sprite to ignore invisible flag" block. This function will be
     * unregistered when the sprite is destoryed.
     *
     *
     * @param target The sprite to register the render function on
     * @param renderOrder Whether to render above or below the sprite
     * @param renderFn The function that draws to the screen
     */
    //% blockId=drawing_utils_renderOnSprite
    //% block="render $renderOrder $target with $sprite"
    //% help=github:arcade-drawing-utils/docs/render-on-sprite
    //% renderOrder.shadow=drawing_utils__renderOrder
    //% target.shadow=variables_get
    //% target.defl=mySprite
    //% handlerStatement
    //% draggableParameters="reporter"
    //% group=Sprites
    //% weight=100
    export function renderOnSprite(
        target: Sprite,
        renderOrder: number,
        renderFn: (sprite: Sprite) => void
    ) {
        const renderer = new SpriteRenderer(target, renderOrder, false, renderFn);
        _state().spriteRenderers.push(renderer);
    }

    /**
     * Sets whether registered renderables on a sprite should ignore the sprite's invisible flag. By default,
     * registered renderables will not run if the sprite is invisible, but this block can be used to change
     * that behavior. This only affects renderables already registered on the sprite, any renderables registered
     * after this block is called will use the default behavior unless this block is called again.
     *
     *
     * @param sprite The sprite to set the behavior on
     * @param ignoreInvisibleFlag Whether to ignore the sprite's invisible flag
     */
    //% blockId=drawing_utils_setSpriteRendererIgnoreInvisibleFlag
    //% block="set registered renderables on $sprite to ignore invisible flag $ignoreInvisibleFlag"
    //% help=github:arcade-drawing-utils/docs/set-sprite-renderer-ignore-invisible-flag
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% group=Sprites
    //% weight=95
    export function setSpriteRendererIgnoreInvisibleFlag(
        sprite: Sprite,
        ignoreInvisibleFlag: boolean
    ) {
        const renderables = _state().spriteRenderers.filter(r => r.sprite === sprite);
        for (const renderable of renderables) {
            renderable.ignoreInvisibleFlag = ignoreInvisibleFlag;
        }
    }

    /**
     * Removes any renderables registered on a sprite.
     *
     *
     * @param sprite The sprite to remove registered renderables from
     */
    //% blockId=drawing_utils_removeRenderables
    //% block="remove renderables on $sprite"
    //% help=github:arcade-drawing-utils/docs/remove-renderables
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% group=Sprites
    //% weight=90
    export function removeRenderables(sprite: Sprite) {
        _state().removeRenderables(sprite);
    }

    /**
     * A value used to indicate if a renderable should render above or below a sprite when using the "render on sprite" block.
     */
    //% shim=TD_ID
    //% blockId=drawing_utils__renderOrder
    //% block="$order"
    //% help=github:arcade-drawing-utils/docs/_render-order
    //% group=Sprites
    //% weight=0
    export function _renderOrder(
        order: RenderOrder
    ): number {
        return order;
    }

    export class SpriteRenderer extends sprites.BaseSprite {
        constructor(public sprite: Sprite, public renderOrder: RenderOrder, public ignoreInvisibleFlag: boolean, public renderFn: (sprite: Sprite) => void) {
            super(sprite.z);
        }

        __drawCore(camera: scene.Camera): void {
            if (this.sprite.flags & sprites.Flag.Destroyed) {
                return;
            }

            this.renderFn(this.sprite);
        }

        __visible(): boolean {
            if (this.ignoreInvisibleFlag) {
                return true;
            }
            return !(this.sprite.flags & sprites.Flag.Invisible);
        }
    }
}