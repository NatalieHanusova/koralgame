export class Cursor {
    constructor() {
        this.img = new Image();
        this.path = "./res/img/cursor.png";
        this.img.src = this.path;
        this.size = {
            width: 18,
            height: 26
        };
    }

    draw(ctx, x, y) {
        this.x = x - 2;
        this.y = y;
        ctx.drawImage(this.img, this.x, this.y, this.size.width, this.size.height);
    }
}