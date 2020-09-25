import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Autocomplete from './components/Autocomplete';

function App() {
	const [dark, setDark] = useState(false);
	function onChange(e) {
		setDark(!dark);
		if (dark) {
			document.getElementById('overlay').style.display = 'none';
		} else {
			document.getElementById('overlay').style.display = 'block';
		}
	}
	return (
		<div className="App">
			<div id="overlay"></div>
			<Header onChange={onChange} />
			<Autocomplete options={[
				"Hồ Chí Minh",
				"Hà Nội",
				"Cần Thơ",
				"Đà Nẵng",
				"Hải Phòng",
				"Nghệ An",
				"Đắk Lắk",
				"Quảng Ngãi",
				"Bến Tre",
				"Cà Mau",
				"Kon Tum",
				"Phú Yên"
			]}
				isDark={dark}
			/>
		</div>
	);
}

export default App;
