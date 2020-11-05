import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../interfaces/pokemon';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  pokemonDes: Pokemon;
  public image: string;

  constructor(private route: Router, private cam: Camera) {
    this.pokemonDes = (this.route.getCurrentNavigation().extras.state as {info: Pokemon}).info;
    this.getPicture();
  }

  ngOnInit() {}
  getPicture(){
    const cameraOptions = {
      sourceType: this.cam.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.cam.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.cam.EncodingType.JPEG,
      correctOrientation: true
    };

    this.cam.getPicture(cameraOptions)
        .then(fileUri => this.image = fileUri,
            err => console.log(err));
  }

}
