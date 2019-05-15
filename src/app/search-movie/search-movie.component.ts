import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator, rangeDateValidator } from '../validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  List = ["Série", "Films", "Episodes"]
  FicheList = ["complète", "courte"]
  minDate = new Date(1990,1,1)
  maxDate= new Date()
  submitted = false


  signInForm = this.fb.group({
    etat: this.fb.group({
      Identifiant: ['', Validators.required],
      Titre: ['', Validators.required],
    },
      {
        validator: isRequiredValidator('Identifiant', 'Titre')

      }),

    Type: [this.List[0]],
    Fiche: [''],
    AnneeSortie:['', [Validators.required, rangeDateValidator(this.minDate, this.maxDate)]],

  })
    ;

  constructor(private fb: FormBuilder) { }

  initFiche() {
    this.signInForm.patchValue({
      Fiche: "courte"
    })
  }

  onSubmit(){
    this.submitted = true
  }

  ngOnInit() {
    console.log('flip submitted', this.signInForm.value)
  }



}
