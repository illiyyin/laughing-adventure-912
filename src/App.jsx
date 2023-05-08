import { useState } from "react"
import "./App.css"
import terserah from './Style.module.css'
import Card from "./component/Card"

function App() {
	const [namaTask, setNamaTask] = useState("")
	const [tasksObj, setTaskObj] = useState([
		{ name: "task 1", completed: true },
		{ name: "task 2" },
	])

	function tambahTask() {
		const tmpObj = [...tasksObj, { name: namaTask }]
		setTaskObj(tmpObj)
		setNamaTask("")
	}

	function hapustask(index) {
		console.log(index)
		const tmpObj = tasksObj.filter((data, i) => {
			if (i !== index) {
				return true
			} else {
				return false
			}
		})
		setTaskObj(tmpObj)
	}

	function editTask(index) {
		const tmpObj = tasksObj.map((data, i) => {
			if (i !== index) {
				return data
			} else {
				return {name:i+data.name}
			}
			
		})
		setTaskObj(tmpObj)
	}

	return (
		<>
			<Card/>
			<input
				className={terserah.input}
				value={namaTask}
				onChange={(e) => setNamaTask(e.target.value)}
			/>
			<button onClick={tambahTask}>Tambah task</button>
			{/* {tasks.map((data) => (
				<p>{data}</p>
			))} */}
			{tasksObj.map((data, index) => (
				// data.completed == true ? (
				// 	<p key={index} >
				// 		{data.name}
				// 	</p>
				// ) : (
				// 	<p key={index} onClick={() => hapustask(index)}>
				// 		{data.name} belum complete
				// 	</p>
				// 	)
				<div key={index} style={{ display: "flex" }}>
					<p
						style={{
							color: data.completed == true ? "green" : "white",
						}}
					>
						{data.name} belum complete
					</p>
					<button onClick={() => editTask(index)}>edit</button>
				</div>
			))}
		</>
	)
}

export default App
