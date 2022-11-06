import { FC, useEffect, useMemo, useState } from 'react'

import Cart from '@/components/screens/request/cart/Cart'
import { IRequest } from '@/components/screens/request/request.interface'
import RequestItem from '@/components/screens/request/requestItem/RequestItem'

import LoadingGif from '@/ui/loadingGif/LoadingGif'

import { useDebounce } from '@/hooks/useDebounce'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { useSearchRequestQuery } from '@/store/request/request.api'

import styles from './request.module.scss'

const Request: FC<{ id: string }> = ({ id }) => {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search, 300)
	const { isLoading, isError, data } = useSearchRequestQuery(id, {
		skip: id === undefined,
	})

	const datas = [
		{
			id: 0,
			location: 'г. Москва, ул. Ватутина, д. 11',
			rooms: 2,
			segment: 'Современное жилье',
			floors: 22,
			material: 'Кирпич',
			floor: 10,
			area: 85.0,
			kitchen: 15,
			balcony: 'Да',
			metro_remoteness: 11,
			renovation: 'Муниципальный ремонт',
		},
		{
			id: 1,
			location: 'г. Москва, ул. Ватутина, д. 22',
			rooms: 3,
			segment: 'Новостройка',
			floors: 10,
			material: 'Панель',
			floor: 7,
			area: 105.0,
			kitchen: 15,
			balcony: 'Нет',
			metro_remoteness: 12,
			renovation: 'Без отделки',
		},
		{
			id: 2,
			location: 'г. Москва, ул. Ватутина, д. 33',
			rooms: 4,
			segment: 'Старый жилой фонд',
			floors: 15,
			material: 'Монолит',
			floor: 6,
			area: 85.5,
			kitchen: 15,
			balcony: 'Да',
			metro_remoteness: 13,
			renovation: 'Современная отделка',
		},
	]

	const { request } = useTypedSelector((state) => state)

	useEffect(() => {
		console.log(debounced)
	}, [debounced])

	const dataMemo = useMemo(() => {
		if (search === '') {
			return data
		}
		return data.filter((el: IRequest) => {
			return el.location.toLowerCase().includes(search.toLowerCase())
		})
	}, [debounced, data])

	return (
		<div className={styles.wrapper}>
			<h3>Запрос № {id}</h3>
			<h3 className={styles.hMobile}>Запрос</h3>
			<input
				type="text"
				className={styles.searchInput}
				placeholder="Поиск квартир..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{isError && (
				<p className="mb-5 text-red-500 text-xl text-center font-extrabold">
					Ошибка со стороны сервера!
				</p>
			)}
			<ul>
				{isLoading && <LoadingGif />}
				{dataMemo?.map((el: IRequest) => (
					<RequestItem key={el.id} {...el} />
				))}
			</ul>
			<Cart id={id} />
		</div>
	)
}

export default Request
