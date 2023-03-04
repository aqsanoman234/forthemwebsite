

// "use strict";

// const NUM = 15, balls = Array(NUM).fill();
// let bg;

// function setup() {
//   createCanvas(1200, 400).mousePressed(restart);
//   noStroke();
//   bg = color(random(0xd0, 0x200) );
//   for (let i = 0; i < NUM; balls[i++] = new Ball);
// }

// function draw() {
//   background(bg);
//   for (const b of balls)  b.display().update();
// }

// function restart() {
//   bg = color(random(0xd0, 0o400), random(0xd0, 0o400), random(0xd0, 0o400));
//   for (const b of balls)  b.initBall();
// }

// class Ball {
//   static get VEL() { delete this.VEL; return this.VEL = 2; }
//   static get MIN_RAD() { delete this.MIN_RAD; return this.MIN_RAD = 4; }
//   static get MAX_RAD() { delete this.MAX_RAD; return this.MAX_RAD = 5; }

//   constructor() {
//     this.pos = createVector(), this.vel = createVector();
//     this.initBall();
//   }

//   initBall() {
//     const r = this.rad = random(Ball.MIN_RAD, Ball.MAX_RAD), v = Ball.VEL;
//     this.pos.set(random(r, width - r), random(r, height - r));
//     this.vel.set(random(-v, v), random(-v, v));
//     this.c = color('#' + hex(~~random(0x100), 3));
//     return this;
//   }

//   update() {
//     const { pos, rad } = this;
//     pos.add(this.vel);
//     pos.x > width  - rad | pos.x < rad && (this.vel.x *= -1);
//     pos.y > height - rad | pos.y < rad && (this.vel.y *= -1);
//     return this;
//   }

//   display() {
//     fill(this.c).ellipse(this.pos.x, this.pos.y, this.rad<<1);
//     return this;
//   }
// }