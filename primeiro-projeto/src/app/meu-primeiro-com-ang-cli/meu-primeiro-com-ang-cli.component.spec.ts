import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComAngCliComponent } from './meu-primeiro-com-ang-cli.component';

describe('MeuPrimeiroComAngCliComponent', () => {
  let component: MeuPrimeiroComAngCliComponent;
  let fixture: ComponentFixture<MeuPrimeiroComAngCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComAngCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComAngCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
