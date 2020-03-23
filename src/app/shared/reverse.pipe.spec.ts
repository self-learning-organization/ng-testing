/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe"; // This is an isolated test. 
describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
