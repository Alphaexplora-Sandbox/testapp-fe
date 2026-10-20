import { SERVICE_NAME } from '../../src/index';

describe('testapp-frontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('testapp-frontend');
  });
});