import {getMapping} from '.';

describe('getMapping', () => {
  it('expect to mapping corectly', () => {
    expect(getMapping('test')).toEqual('');
    expect(getMapping('testData')).toEqual('MappedData');
  });
});
