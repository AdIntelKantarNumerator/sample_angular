import { Component } from '@angular/core';
import { sampleSearchData } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared-sample';
  public advSearchDetails = sampleSearchData;
  public selectedSearchQuery = '';
  public clearSearchData = false;
  public isLoading = false;
  public showEmptyOption = true;

  fetchColumnDetails() {

  }

  handleOnSearch(event) {

  }

  setSearchString(searchStr) {

  }


}
