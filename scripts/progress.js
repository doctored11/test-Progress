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

    startRotation() {
       
    }

    setHidden(isHidden) {
        const parent = this.circle.closest('.progress-wrapper');
        parent.style.display = isHidden ? 'none' : 'block';
    }
}
