import {GlobalRefService} from './global-ref.service';

describe('GlobalRefService', () => {
  let service: GlobalRefService;
  beforeEach(() => {
    service = new GlobalRefService();
  });
  it('#scrollbarWidth should return scrollbar width', () => {
    expect(service.scrollbarWidth).toBe(null);
  });
})
