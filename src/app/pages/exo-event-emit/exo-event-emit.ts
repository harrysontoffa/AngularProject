import { Component } from '@angular/core';
import { Panier } from '../../layout/panier/panier';
import { ConponentCommmunication } from '../../layout/conponent-commmunication/conponent-commmunication';
import { AffichageApi } from '../../layout/affichage-api/affichage-api';
import { UserApi } from '../../layout/user-api/user-api';


@Component({
  imports: [ Panier, ConponentCommmunication, AffichageApi, UserApi],
  selector: 'app-exo-event-emit',
  styleUrl: './exo-event-emit.css',
  templateUrl: './exo-event-emit.html',
})
export class ExoEventEmit {

}
