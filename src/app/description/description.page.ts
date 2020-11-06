import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../interfaces/pokemon';

import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {TranslateAlvaroPipe} from '../pipes/translate-alvaro.pipe';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  pokemonDes: Pokemon;
  public userImg: any;
  public pipe = new TranslateAlvaroPipe();

  galleryOptions: CameraOptions = {
    sourceType: this.cam.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.cam.DestinationType.DATA_URL,
    quality: 20,
    targetWidth: 1000,
    targetHeight: 1000,
    encodingType: this.cam.EncodingType.JPEG,
    correctOrientation: true
  };

  constructor(private route: Router, private cam: Camera) {
    this.pokemonDes = (this.route.getCurrentNavigation().extras.state as {info: Pokemon}).info;
    this.pokemonDes.name = this.pipe.transform(this.pokemonDes.name);
  }

  ngOnInit() {}
  getPicture(){
    this.cam.getPicture(this.galleryOptions)
        .then((base64Img) => {
          this.userImg = 'data:image/jpeg;base64,' + base64Img;
        }, (error) => {
          console.log(error);
        });
  }

}
