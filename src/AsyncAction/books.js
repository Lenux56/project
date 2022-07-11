import { getAllBookAction } from "../store/reducer";

export const fetchGetAllBooks= () => {
	return (dispatch) => {
		fetch('http://localhost:5001/api/books/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => { dispatch(getAllBookAction(json)) });
	}
}