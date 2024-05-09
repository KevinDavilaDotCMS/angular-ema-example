import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComponentComponent } from './no-component.component';

describe('NoComponentComponent', () => {
  let component: NoComponentComponent;
  let fixture: ComponentFixture<NoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
