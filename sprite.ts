namespace drawing {
    export enum RenderOrder {
        //% block="above"
        Above,
        //% block="below"
        Below
    }

    //% blockId=drawing_utils_renderOnSprite
    //% block="render $renderOrder $target ignoring invisible flag $ignoreInvisibleFlag with $sprite"
    //% renderOrder.shadow=drawing_utils__renderOrder
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% handlerStatement
    //% draggableParameters="reporter"
    //% group=Sprites
    //% weight=100
    export function renderOnSprite(
        target: Sprite,
        renderOrder: number,
        ignoreInvisibleFlag: boolean,
        renderFn: (sprite: Sprite) => void
    ) {
        const renderer = new SpriteRenderer(target, renderOrder, ignoreInvisibleFlag, renderFn);
        _state().spriteRenderers.push(renderer);
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