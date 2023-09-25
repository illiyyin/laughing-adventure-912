import { useState, useCallback, useMemo } from "react"
import terserah from "./Style.module.css"



export default function Card() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	// const [fullName, setFullName] = useState("")

	// const fullName=`${firstName} ${lastName}`

	// useEffect(() => {
	// 	setFullName(`${firstName} ${lastName}`)
	// }, [firstName, lastName])

	const showFirstName = useCallback(() => {
		console.log(`${firstName} ${lastName}`)
	}, [firstName])

	const fullName = useMemo(() => `${firstName} ${lastName}`, [firstName])

	return (
		<div className={terserah.input}>
			<p>{fullName}</p>
			<input
				value={firstName}
				onChange={(e) => {
					// console.log(e)
					setFirstName(e.target.value)
				}}
			/>
			<input
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<button onClick={showFirstName}>show</button>
		</div>
	)
}
