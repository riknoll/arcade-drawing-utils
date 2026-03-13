namespace drawing {
    export function colorArray(
        color1: number,
        color2?: number,
        color3?: number,
        color4?: number,
        color5?: number,
        color6?: number,
        color7?: number,
        color8?: number,
        color9?: number,
        color10?: number,
        color11?: number,
        color12?: number,
        color13?: number,
        color14?: number,
        color15?: number,
        color16?: number,
    ) {
        const result = [
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            color7,
            color8,
            color9,
            color10,
            color11,
            color12,
            color13,
            color14,
            color15,
            color16
        ].filter(c => c !== undefined);

        return result;
    }

    export function remapColorsInRect(image: Image, topLeft: Point | tiles.Location | Sprite, width: number, height: number, from: number[], to: number[]) {
        if (from.length !== to.length) {
            throw "color arrays passed to remap colors must have the same length"
        }

        const buf = control.createBuffer(16);
        for (let i = 0; i < buf.length; i++) {
            const index = from.indexOf(i);
            if (index === -1) {
                buf[i] = i;
            }
            else {
                buf[i] = to[index]
            }
        }

        helpers.imageMapRect(image, topLeft.x, topLeft.y, width, height, buf);
    }

    export function remapColors(image: Image, from: number[], to: number[]) {
        remapColorsInRect(image, new Point(0, 0), image.width, image.height, from, to);
    }

    export function drawRemappedImage(dest: Image, source: Image, x: number, y: number, from: number[], to: number[]) {
        const mapped = source.clone();
        remapColors(mapped, from, to);
        dest.drawTransparentImage(mapped, x, y);
    }

    export function rotatedImage(image: Image, rotations: number) {
        rotations = (((rotations | 0) % 4) + 4) % 4;

        if (rotations === 0) {
            return image.clone();
        }
        else if (rotations === 1) {
            return image.rotated(90);
        }
        else if (rotations === 2) {
            return image.rotated(180);
        }
        else {
            return image.rotated(270);
        }
    }

    export function scrollImage(image: Image, x: number, y: number) {
        image.scroll(x, y);
    }
}