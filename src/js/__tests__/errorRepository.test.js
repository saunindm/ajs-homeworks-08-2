import ErrorRepository from '../ErrorRepository';

let errorRepository;

beforeEach(() => {
    errorRepository = new ErrorRepository();
});

it('return known code description', () => {
    expect(errorRepository.translate(400)).toBe('Bad Request');
});

it('throw an error for an unknown error code', () => {
    expect(() => errorRepository.translate(500)).toThrow('Unknown error');
});
