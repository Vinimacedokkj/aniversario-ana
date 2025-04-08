const canvas = document.getElementById("paintCanvas");
        const ctx = canvas.getContext("2d");
        const colorPicker = document.getElementById("colorPicker");
        const brushSize = document.getElementById("brushSize");
        const clearCanvas = document.getElementById("clearCanvas");
        const eraser = document.getElementById("eraser");
        let painting = false;
        let erasing = false;
        function startPosition(e) {
            painting = true;
            draw(e);
        }
        function endPosition() {
            painting = false;
            ctx.beginPath();
        }
        function draw(e) {
            if (!painting) return;
            ctx.lineWidth = brushSize.value;
            ctx.lineCap = "round";
            ctx.strokeStyle = erasing ? "white" : colorPicker.value;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", endPosition);
        canvas.addEventListener("mousemove", draw);
        clearCanvas.addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Reaplica a imagem de fundo após limpar
            const background = new Image();
            background.src = 'img/hello_kitty_png.jpg';
            background.onload = () => {
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            };
        });
        eraser.addEventListener("click", () => {
            erasing = !erasing;
            eraser.textContent = erasing ? "Pincel" : "Borracha";
        });
        // Carrega a imagem de fundo inicialmente
        const background = new Image();
        background.src = 'hello_kitty_para_coloring.jpg';
        background.onload = () => {
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        };