const createAPIErrorFactory = name => {
    return class APIError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    };
};

const createSearchErrorFactory = name => {
    return class SearchError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    };
};

const FetchError = createAPIErrorFactory('FetchError');
const DataError = createAPIErrorFactory('DataError');
const ImageNotFoundError = createAPIErrorFactory('ImageNotFoundError');

const EmptyFormError = createSearchErrorFactory('EmptyFormError');
const NotFoundError = createSearchErrorFactory('NotFoundError');

export { FetchError, ImageNotFoundError, DataError, EmptyFormError, NotFoundError };
