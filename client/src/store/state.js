const state = {
	navOpen: false,

	drugs: [
		{
			id: '1',
			name: 'Paracetamol',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 300,
			expirationDate: '24/12/2021'
		},
		{
			id: '2',
			name: 'Efpack',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 0,
			expirationDate: '24/12/2021'
		},
		{
			id: '3',
			name: 'Paracetamol',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 300,
			expirationDate: '24/12/2020'
		},
		{
			id: '4',
			name: 'Chloroquin',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 0,
			expirationDate: '24/12/2021'
		},
		{
			id: '5',
			name: 'Dichlophynol',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 200,
			expirationDate: '24/12/2021'
		},
		{
			id: '6',
			name: 'Paracetamol',
			FDANumber: '12342342879',
			manufacturer: 'Lucky Herbal',
			adminMethod: 'Oral',
			quantity: 300,
			expirationDate: '24/12/2020'
		}	
	],

	manufacturers: [
		{
			name: 'Lucky Herbal',
			phone: '0240000000',
			drug: 'Lucky Herbal capsules',
			email: 'domain@gmail.com'
		},
		{
			name: 'Perfect Skin',
			phone: '0240000000',
			drug: 'Perfect skin and body lotion',
			email: 'domain@gmail.com'
		},
		{
			name: 'Lucky Herbal',
			phone: '0240000000',
			drug: 'Lucky Herbal capsules',
			email: 'domain@gmail.com'
		},
		{
			name: 'Perfect Skin',
			phone: '0240000000',
			drug: 'Perfect skin and body lotion',
			email: 'domain@gmail.com'
		},
		{
			name: 'Perfect Skin',
			phone: '0240000000',
			drug: 'Perfect skin and body lotion',
			email: 'domain@gmail.com'
		},
		{
			name: 'Lucky Herbal',
			phone: '0240000000',
			drug: 'Lucky Herbal capsules',
			email: 'domain@gmail.com'
		}
	]
};

export default state;