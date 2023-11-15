import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element!: {type: string, name: string, content: string};
  @Input() name!: string;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  constructor() {
    console.log('hey constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('hey ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('hey ngOnInit');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('hey ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('hey ngAfterContentInit');
      console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('hey ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('hey ngAfterViewInit');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('hey ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('hey ngOnDestroy');
  }
}
