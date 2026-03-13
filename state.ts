namespace drawing {
    class State {
        spriteRenderers: SpriteRenderer[];

        constructor() {
            this.spriteRenderers = [];

            // take over the sorting of sprites
            game.currentScene().eventContext.registerFrameHandler(scene.RENDER_SPRITES_PRIORITY - 1, () => {
                const current = game.currentScene();
                let needsCleanup = false;

                if (current.flags & scene.Flag.NeedsSorting) {
                    current.allSprites.sort(function (a, b) { return a.z - b.z || a.id - b.id; });

                    // put the renderers back in the right order after sorting
                    for (const renderer of this.spriteRenderers) {
                        const targetIndex = current.allSprites.indexOf(renderer.sprite);
                        current.allSprites.removeElement(renderer);

                        if (targetIndex !== -1 && !(renderer.sprite.flags & sprites.Flag.Destroyed)) {
                            if (renderer.renderOrder === RenderOrder.Below) {
                                current.allSprites.insertAt(targetIndex, renderer);
                            }
                            else {
                                current.allSprites.insertAt(targetIndex + 1, renderer);
                            }
                        }
                        else {
                            needsCleanup = true;
                        }
                    }

                    // prevent the normal sorting from running
                    current.flags &= ~scene.Flag.NeedsSorting;
                }
                else {
                    for (const renderer of this.spriteRenderers) {
                        if (renderer.sprite.flags & sprites.Flag.Destroyed) {
                            needsCleanup = true;
                            break;
                        }
                    }
                }

                if (needsCleanup) {
                    const old = this.spriteRenderers;
                    this.spriteRenderers = [];
                    for (const renderer of old) {
                        if (!(renderer.sprite.flags & sprites.Flag.Destroyed)) {
                            this.spriteRenderers.push(renderer);
                        }
                        else {
                            game.currentScene().allSprites.removeElement(renderer);
                        }
                    }
                }
            })
        }

        removeRenderables(sprite: Sprite) {
            const current = game.currentScene();
            const toRemove = this.spriteRenderers.filter(r => r.sprite === sprite);
            this.spriteRenderers = this.spriteRenderers.filter(r => r.sprite !== sprite);
            for (const renderer of toRemove) {
                current.allSprites.removeElement(renderer);
            }
        }
    }

    function _stateFactory() {
        return new State();
    }

    export function _state() {
        return __util.getState(_stateFactory);
    }
}