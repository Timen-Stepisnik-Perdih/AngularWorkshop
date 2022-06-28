import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TextRetrieveAndProcessService } from './text-retrieve-and-process.service';

describe('TextRetrieveAndProcessService', () => {
  let service: TextRetrieveAndProcessService;

  let textInput = "lepo sonce sije lepo se sonce smeji lepo mi v dusi brni";
  let expectedOutput = {
    "brni" : 1,
    "dusi": 1,
    "lepo": 3,
    "mi": 1,
    "se": 1,
    "sije": 1,
    "smeji": 1,
    "sonce": 2,
    "v": 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TextRetrieveAndProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a dictionary of word occurences', () => {
    expect(service.process(textInput)).toEqual(expectedOutput);
  });
});
