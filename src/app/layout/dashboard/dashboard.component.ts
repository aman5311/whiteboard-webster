import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.onload();
  }

  save() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    let dataURL = canvas.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  }
  undo() {

  }
  redo() {

  }
  rectangle() {
    var c = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    
  }
  circle() {
    var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

  }

  onload() {
    var myCanvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");

    // Fill Window Width and Height
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // Set Background Color
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    // Mouse Event Handlers
    if (myCanvas) {
      var isDown = false;
      var canvasX, canvasY;
      ctx.lineWidth = 5;

      $(myCanvas)
        .mousedown(function (e) {
          isDown = true;
          ctx.beginPath();
          canvasX = e.pageX - myCanvas.offsetLeft;
          canvasY = e.pageY - myCanvas.offsetTop;
          ctx.moveTo(canvasX, canvasY);
        })
        .mousemove(function (e) {
          if (isDown !== false) {
            canvasX = e.pageX - myCanvas.offsetLeft;
            canvasY = e.pageY - myCanvas.offsetTop;
            ctx.lineTo(canvasX, canvasY);
            ctx.strokeStyle = "#000";
            ctx.stroke();
          }
        })
        .mouseup(function (e) {
          isDown = false;
          ctx.closePath();
        });
    }

    // Touch Events Handlers
    let draw = {
      started: false,
      start: function (evt) {

        ctx.beginPath();
        ctx.moveTo(
          evt.touches[0].pageX,
          evt.touches[0].pageY
        );

        this.started = true;

      },
      move: function (evt) {

        if (this.started) {
          ctx.lineTo(
            evt.touches[0].pageX,
            evt.touches[0].pageY
          );

          ctx.strokeStyle = "#000";
          ctx.lineWidth = 5;
          ctx.stroke();
        }

      },
      end: function (evt) {
        this.started = false;
      }
    };

    // Touch Events
    myCanvas.addEventListener('touchstart', draw.start, false);
    myCanvas.addEventListener('touchend', draw.end, false);
    myCanvas.addEventListener('touchmove', draw.move, false);

    // Disable Page Move
    document.body.addEventListener('touchmove', function (evt) {
      evt.preventDefault();
    }, false);
  };
}
