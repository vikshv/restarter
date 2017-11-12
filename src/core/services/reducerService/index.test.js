import reducerService from './index';

describe('core.services.reducerService', () => {
    it('reducerService is object', () => {
        expect(reducerService).to.be.a('object');
    });
    it('newSwitchReducer is function', () => {
        expect(reducerService.newSwitchReducer).to.be.a('function');
    });
});
