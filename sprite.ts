namespace drawing {
    export enum RenderOrder {
        //% block="above"
        Above,
        //% block="below"
        Below
    }

    //% blockId=drawing_utils_renderOnSprite
    //% block="render $renderOrder $target with $sprite"
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

    //% blockId=drawing_utils_setSpriteRendererIgnoreInvisibleFlag
    //% block="set registered renderables on $sprite to ignore invisible flag $ignoreInvisibleFlag"
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

    //% blockId=drawing_utils_removeRenderables
    //% block="remove renderables on $sprite"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% group=Sprites
    //% weight=90
    export function removeRenderables(sprite: Sprite) {
        _state().removeRenderables(sprite);
    }

    //% shim=TD_ID
    //% blockId=drawing_utils__renderOrder
    //% block="$order"
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