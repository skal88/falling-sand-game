import { Box } from "./Box";

window.onload = () => {
    const canvas = document.getElementById('miCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
        // Tu lógica de dibujo aquí
        const box = new Box('blue', 20, 10, 100, 100);

        box.render(ctx);
    }
};
