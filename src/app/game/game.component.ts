import { Component, Input, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { MainScene } from './MainScene';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  plops: string = '';

  @Input() 
  playerImage!: string;

  @Input() 
  backgroundImage!: string


  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
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
    this.phaserGame.events.addListener('test', (arg: string) => {
      this.plops = arg;
    });
    
    this.phaserGame.scene.start('main', {playerImage: this.playerImage, backgroundImage: this.backgroundImage });
  }

}
