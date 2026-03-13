namespace drawing {
    export class Renderable extends sprites.BaseSprite {
        renderFn: (screen: Image) => void;
        protected destroyed = false;

        constructor(z: number) {
            super(z);
        }

        __drawCore(camera: scene.Camera) {
            if (this.renderFn) {
                this.renderFn(screen);
            }
        }

        destroy() {
            if (this.destroyed) return;

            this.destroyed = true;
            game.currentScene().allSprites.removeElement(this);
        }
    }

    //% blockId=drawing_utils_renderAtZIndex
    //% block="render at z $z with $screen"
    //% draggableParameters="reporter"
    //% weight=110
    //% group=Renderable
    export function renderAtZIndex(z: number, renderFn: (screen: Image) => void) {
        scene.createRenderable(z, renderFn);
    }

    //% blockId=drawing_utils_createRenderable
    //% block="create renderable at z $z"
    //% blockSetVariable=myRenderable
    //% weight=100
    //% group=Renderable
    export function createRenderable(z: number): Renderable {
        return new Renderable(z);
    }

    //% blockId=drawing_utils_setRenderableFunction
    //% block="set render function of $renderable with $screen"
    //% renderable.shadow=drawing_utils_createRenderable
    //% draggableParameters="reporter"
    //% handlerStatement
    //% weight=90
    export function setRenderableFunction(renderable: Renderable, renderFn: (screen: Image) => void) {
        renderable.renderFn = renderFn;
    }

    //% blockId=drawing_utils_destroyRenderable
    //% block="destroy $renderable"
    //% renderable.shadow=variables_get
    //% renderable.defl=myRenderable
    //% weight=80
    export function destroyRenderable(renderable: Renderable) {
        renderable.destroy();
    }
}