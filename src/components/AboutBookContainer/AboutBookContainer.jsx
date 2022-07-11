import React, {useEffect} from 'react'
import s from './AboutBookContainer.module.sass'
import AboutBook from '../AboutBook/AboutBook'
import { useSelector } from 'react-redux'
import { fetchGetAllBooks } from '../../asyncAction/books'
import { useDispatch } from 'react-redux'

export default function AboutBookContainer() {
    const dispatch = useDispatch();
	const books = useSelector((state) => state.books);

	useEffect(() => {
		if (!books.id) {
			dispatch(fetchGetAllBooks())
		}
	}, []);

	return (
		<div className={s.grid} >
			{books.map(t => <AboutBook key={t.id} {...t} />)}
		</div>
	);
}
