import { getAllBookAction } from "../store/reducer";

export const fetchGetAllBooks= () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/books/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => { dispatch(getAllBookAction(json)) });
	}
}