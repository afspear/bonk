import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { MainScene } from './MainScene';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {



  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scale: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      },
      backgroundColor: '#FFFFFF',
    };
  }
  ngOnInit() {

    this.phaserGame = new Phaser.Game(this.config);
  }

}
