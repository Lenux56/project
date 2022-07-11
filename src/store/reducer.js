
const GET_ALL_BOOK = 'GET_ALL_BOOK';

const initState = { books: [] };

export const reducer = (state = initState, action) => {

	if (action.type === GET_ALL_BOOK) {
		return { ...state, books: action.payload };
	} else {
		return state;
	}
}
export const getAllBookAction = (books) => ({ type: GET_ALL_BOOK, payload: books });
