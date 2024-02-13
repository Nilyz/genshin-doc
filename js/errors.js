const createAPIErrorFactory = (name) => {
    return class APIError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    }    
};

const FetchError = createAPIErrorFactory('FetchError');
const DataError = createAPIErrorFactory('DataError');
const ImageNotFoundError = createAPIErrorFactory('ImageNotFoundError');

export { FetchError, ImageNotFoundError, DataError };
