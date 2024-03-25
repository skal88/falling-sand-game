
export class Box {
    constructor(private color: string, private x: number, private y: number, width: number, height: number ){}

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(20, 10, 100, 100);
    }
}
