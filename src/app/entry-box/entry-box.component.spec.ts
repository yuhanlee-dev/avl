import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBoxComponent } from './entry-box.component';

describe('EntryBoxComponent', () => {
  let component: EntryBoxComponent;
  let fixture: ComponentFixture<EntryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
