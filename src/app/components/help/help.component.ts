import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
