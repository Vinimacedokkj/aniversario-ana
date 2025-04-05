let canvas = document.getElementById("paintCanvas");
        let ctx = canvas.getContext("2d");
        let painting = false;

        canvas.width = 300;
        canvas.height = 300;

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
            ctx.lineWidth = 5;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#ff69b4";
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        canvas.addEventListener("mousedown", startPosition);
        canvas.addEventListener("mouseup", endPosition);
        canvas.addEventListener("mousemove", draw);

        function showHearts() {
            for (let i = 0; i < 20; i++) {
                let heart = document.createElement("div");
                heart.classList.add("heart");
                heart.innerHTML = "💖";
                document.body.appendChild(heart);
                
                let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                
                setTimeout(() => {
                    heart.remove();
                }, 2000);
            }
        }