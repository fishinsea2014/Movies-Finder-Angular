import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import  {HttpModule, JsonpModule } from '@angular/http';
// import { MoviesService} from './movies.service';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        // MoviesService,
        RouterModule.forRoot([]),
        JsonpModule
        //Coremo
      ],
      providers:[
        {
          // MoviesService,
          provide:APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Jason-MovieFinder'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Jason-MovieFinder');
  }));
  it('should have the name of author in a  tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Jason Qu');
  }));
});
