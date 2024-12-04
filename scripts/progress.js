export default class ProgressBlock {
    constructor(element) {
        this.radius = 45;
        this.circle = element.querySelector('.progress-circle');
        this.circumference = 2 * Math.PI * this.radius;
        this.isAnimating = false;
        this.rotation = 0;
        this.animationFrame = null;
        this.maxValue = 100;

    }


    setValue(value) {
        const offset = this.circumference - (value /  this.maxValue) * this.circumference;
        this.circle.style.strokeDashoffset = offset;
    }


    setAnimate(isAnimating) {
        this.isAnimating = isAnimating;

        if (isAnimating) {
            this.startRotation();
        } else {
            cancelAnimationFrame(this.animationFrame);
            this.rotation = 0;
            this.circle.setAttribute('transform', `rotate(-90 50 50)`);

           
        }
    }


    startRotation() {
        const rotateStep = () => {
            this.rotation = (this.rotation + 2) % 360;
            this.circle.setAttribute('transform', `rotate(${this.rotation - 90} 50 50)`);

            if (this.isAnimating) {
                this.animationFrame = requestAnimationFrame(rotateStep);
            }
        };

        rotateStep();
    }

    setHidden(isHidden) {
        const parent = this.circle.closest('.progress');
        parent.style.display = isHidden ? 'none' : 'block';
    }
}
