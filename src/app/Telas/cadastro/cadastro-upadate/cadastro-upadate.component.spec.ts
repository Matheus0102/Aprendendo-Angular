import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUpadateComponent } from './cadastro-upadate.component';

describe('CadastroUpadateComponent', () => {
  let component: CadastroUpadateComponent;
  let fixture: ComponentFixture<CadastroUpadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUpadateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
