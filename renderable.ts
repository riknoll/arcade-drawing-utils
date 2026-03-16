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

    /**
     * Runs the given code when the screen is being rendered at the specified z index. This is
     * useful for drawing things like HUD elements or other custom UI.
     *
     *
     * @param z The z to run this code at
     * @param renderFn The function that draws to the screen
     */
    //% blockId=drawing_utils_renderAtZIndex
    //% block="render at z $z with $screen"
    //% draggableParameters="reporter"
    //% weight=110
    //% group=Renderable
    export function renderAtZIndex(z: number, renderFn: (screen: Image) => void) {
        scene.createRenderable(z, renderFn);
    }

    /**
     * Creates a renderable that will be drawn at the specified z index. By default, renderables don't
     * anything until they have their render function set
     *
     *
     * @param z The z to run this renderable's render function at
     * @returns The created renderable
     */
    //% blockId=drawing_utils_createRenderable
    //% block="create renderable at z $z"
    //% blockSetVariable=myRenderable
    //% weight=100
    //% group=Renderable
    export function createRenderable(z: number): Renderable {
        return new Renderable(z);
    }

    /**
     * Sets the render function of a renderable. Calling this more than once will overwrite the previous render function.
     *
     *
     * @param renderable The renderable to set the function of
     * @param renderFn The function that draws to the screen
     */
    //% blockId=drawing_utils_setRenderableFunction
    //% block="set render function of $renderable with $screen"
    //% renderable.shadow=drawing_utils_createRenderable
    //% draggableParameters="reporter"
    //% handlerStatement
    //% weight=90
    export function setRenderableFunction(renderable: Renderable, renderFn: (screen: Image) => void) {
        renderable.renderFn = renderFn;
    }

    /**
     * Destroys a renderable. After calling this, the renderable will no longer draw to the screen.
     *
     *
     * @param renderable The renderable to destroy
     */
    //% blockId=drawing_utils_destroyRenderable
    //% block="destroy $renderable"
    //% renderable.shadow=variables_get
    //% renderable.defl=myRenderable
    //% weight=80
    export function destroyRenderable(renderable: Renderable) {
        renderable.destroy();
    }
}