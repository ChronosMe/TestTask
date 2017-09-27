$(document).ready(function () {
	//$("input[name='phone']").inputmask("+7(999)9999999");

	//new WOW().init();

	//objectFitImages();


	/* LocalStorage */

	//localStorage.clear();

	var countries = {
		AX: 'AALAND ISLANDS',
		AF: 'AFGHANISTAN',
		AL: 'ALBANIA',
		DZ: 'ALGERIA',
		AS: 'AMERICAN SAMOA',
		AD: 'ANDORRA',
		AO: 'ANGOLA',
		AI: 'ANGUILLA',
		AQ: 'ANTARCTICA',
		AG: 'ANTIGUA AND BARBUDA',
		AR: 'ARGENTINA',
		AM: 'ARMENIA',
		AW: 'ARUBA',
		AU: 'AUSTRALIA',
		AT: 'AUSTRIA',
		AZ: 'AZERBAIJAN',
		BS: 'BAHAMAS',
		BH: 'BAHRAIN',
		BD: 'BANGLADESH',
		BB: 'BARBADOS',
		BY: 'BELARUS',
		BE: 'BELGIUM',
		BZ: 'BELIZE',
		BJ: 'BENIN',
		BM: 'BERMUDA',
		BT: 'BHUTAN',
		BO: 'BOLIVIA',
		BA: 'BOSNIA AND HERZEGOWINA',
		BW: 'BOTSWANA',
		BV: 'BOUVET ISLAND',
		BR: 'BRAZIL',
		IO: 'BRITISH INDIAN OCEAN TERRITORY',
		BN: 'BRUNEI DARUSSALAM',
		BG: 'BULGARIA',
		BF: 'BURKINA FASO',
		BI: 'BURUNDI',
		KH: 'CAMBODIA',
		CM: 'CAMEROON',
		CA: 'CANADA',
		CV: 'CAPE VERDE',
		KY: 'CAYMAN ISLANDS',
		CF: 'CENTRAL AFRICAN REPUBLIC',
		TD: 'CHAD',
		CL: 'CHILE',
		CN: 'CHINA',
		CX: 'CHRISTMAS ISLAND',
		CO: 'COLOMBIA',
		KM: 'COMOROS',
		CK: 'COOK ISLANDS',
		CR: 'COSTA RICA',
		CU: 'CUBA',
		CY: 'CYPRUS',
		CZ: 'CZECH REPUBLIC',
		DK: 'DENMARK',
		DJ: 'DJIBOUTI',
		DM: 'DOMINICA',
		DO: 'DOMINICAN REPUBLIC',
		EC: 'ECUADOR',
		EG: 'EGYPT',
		SV: 'EL SALVADOR',
		GQ: 'EQUATORIAL GUINEA',
		ER: 'ERITREA',
		EE: 'ESTONIA',
		ET: 'ETHIOPIA',
		FO: 'FAROE ISLANDS',
		FJ: 'FIJI',
		FI: 'FINLAND',
		FR: 'FRANCE',
		GF: 'FRENCH GUIANA',
		PF: 'FRENCH POLYNESIA',
		TF: 'FRENCH SOUTHERN TERRITORIES',
		GA: 'GABON',
		GM: 'GAMBIA',
		GE: 'GEORGIA',
		DE: 'GERMANY',
		GH: 'GHANA',
		GI: 'GIBRALTAR',
		GR: 'GREECE',
		GL: 'GREENLAND',
		GD: 'GRENADA',
		GP: 'GUADELOUPE',
		GU: 'GUAM',
		GT: 'GUATEMALA',
		GN: 'GUINEA',
		GW: 'GUINEA-BISSAU',
		GY: 'GUYANA',
		HT: 'HAITI',
		HM: 'HEARD AND MC DONALD ISLANDS',
		HN: 'HONDURAS',
		HK: 'HONG KONG',
		HU: 'HUNGARY',
		IS: 'ICELAND',
		IN: 'INDIA',
		ID: 'INDONESIA',
		IQ: 'IRAQ',
		IE: 'IRELAND',
		IL: 'ISRAEL',
		IT: 'ITALY',
		JM: 'JAMAICA',
		JP: 'JAPAN',
		JO: 'JORDAN',
		KZ: 'KAZAKHSTAN',
		KE: 'KENYA',
		KI: 'KIRIBATI',
		KW: 'KUWAIT',
		LV: 'LATVIA',
		LB: 'LEBANON',
		LS: 'LESOTHO',
		LR: 'LIBERIA',
		LY: 'LIBYAN ARAB JAMAHIRIYA',
		LI: 'LIECHTENSTEIN',
		LT: 'LITHUANIA',
		LU: 'LUXEMBOURG',
		MO: 'MACAU',
		MG: 'MADAGASCAR',
		MW: 'MALAWI',
		MY: 'MALAYSIA',
		MV: 'MALDIVES',
		ML: 'MALI',
		MT: 'MALTA',
		MH: 'MARSHALL ISLANDS',
		MQ: 'MARTINIQUE',
		MR: 'MAURITANIA',
		MU: 'MAURITIUS',
		YT: 'MAYOTTE',
		MX: 'MEXICO',
		MC: 'MONACO',
		MN: 'MONGOLIA',
		MS: 'MONTSERRAT',
		MA: 'MOROCCO',
		MZ: 'MOZAMBIQUE',
		MM: 'MYANMAR',
		NA: 'NAMIBIA',
		NR: 'NAURU',
		NP: 'NEPAL',
		NL: 'NETHERLANDS',
		AN: 'NETHERLANDS ANTILLES',
		NC: 'NEW CALEDONIA',
		NZ: 'NEW ZEALAND',
		NI: 'NICARAGUA',
		NE: 'NIGER',
		NG: 'NIGERIA',
		NU: 'NIUE',
		NF: 'NORFOLK ISLAND',
		MP: 'NORTHERN MARIANA ISLANDS',
		NO: 'NORWAY',
		OM: 'OMAN',
		PK: 'PAKISTAN',
		PW: 'PALAU',
		PA: 'PANAMA',
		PG: 'PAPUA NEW GUINEA',
		PY: 'PARAGUAY',
		PE: 'PERU',
		PH: 'PHILIPPINES',
		PN: 'PITCAIRN',
		PL: 'POLAND',
		PT: 'PORTUGAL',
		PR: 'PUERTO RICO',
		QA: 'QATAR',
		RE: 'REUNION',
		RO: 'ROMANIA',
		RU: 'RUSSIAN FEDERATION',
		RW: 'RWANDA',
		SH: 'SAINT HELENA',
		KN: 'SAINT KITTS AND NEVIS',
		LC: 'SAINT LUCIA',
		PM: 'SAINT PIERRE AND MIQUELON',
		VC: 'SAINT VINCENT AND THE GRENADINES',
		WS: 'SAMOA',
		SM: 'SAN MARINO',
		ST: 'SAO TOME AND PRINCIPE',
		SA: 'SAUDI ARABIA',
		SN: 'SENEGAL',
		CS: 'SERBIA AND MONTENEGRO',
		SC: 'SEYCHELLES',
		SL: 'SIERRA LEONE',
		SG: 'SINGAPORE',
		SK: 'SLOVAKIA',
		SI: 'SLOVENIA',
		SB: 'SOLOMON ISLANDS',
		SO: 'SOMALIA',
		ZA: 'SOUTH AFRICA',
		ES: 'SPAIN',
		LK: 'SRI LANKA',
		SD: 'SUDAN',
		SR: 'SURINAME',
		SJ: 'SVALBARD AND JAN MAYEN ISLANDS',
		SZ: 'SWAZILAND',
		SE: 'SWEDEN',
		CH: 'SWITZERLAND',
		SY: 'SYRIAN ARAB REPUBLIC',
		TW: 'TAIWAN',
		TJ: 'TAJIKISTAN',
		TH: 'THAILAND',
		TL: 'TIMOR-LESTE',
		TG: 'TOGO',
		TK: 'TOKELAU',
		TO: 'TONGA',
		TT: 'TRINIDAD AND TOBAGO',
		TN: 'TUNISIA',
		TR: 'TURKEY',
		TM: 'TURKMENISTAN',
		TC: 'TURKS AND CAICOS ISLANDS',
		TV: 'TUVALU',
		UG: 'UGANDA',
		UA: 'UKRAINE',
		AE: 'UNITED ARAB EMIRATES',
		GB: 'UNITED KINGDOM',
		US: 'UNITED STATES',
		UM: 'UNITED STATES MINOR OUTLYING ISLANDS',
		UY: 'URUGUAY',
		UZ: 'UZBEKISTAN',
		VU: 'VANUATU',
		VE: 'VENEZUELA',
		VN: 'VIET NAM',
		WF: 'WALLIS AND FUTUNA ISLANDS',
		EH: 'WESTERN SAHARA',
		YE: 'YEMEN',
		ZM: 'ZAMBIA'
	};

	Vue.use(window.vuelidate.default);
	var _window$validators = window.validators,
		required = _window$validators.required,
		minLength = _window$validators.minLength,
		email = _window$validators.email;

	/* Vue */
	var cart = new Vue({
		el: '#cart',
		data: {
			currentView: 'shipping',
			//currentView: 'shipping',
			countries: countries,
			formErrors: false,
			shippingData: {
				name: '',
				phone: '',
				address: {
					address: '',
					opts: '',
					city: '',
					country: '',
					zip: ''
				}
			},
			billingData: {
				name: '',
				email: '',
				address: {
					address: '',
					opts: '',
					city: '',
					country: '',
					zip: ''
				}
			},
			paymentData: {
				name: '',
				card: '',
				expdate: '',
				code: ''
			},
			cardType: '',
			order: false
		},
		validations: {
			shippingData: {
				name: {
					required: required,
					minLength: minLength(4)
				}
			}
		},
		methods: {
			nextStep: function (step) {
				if (this.$v.$error || this.$v.$invalid) {
					this.formErrors = true;

					// Здесь я торопился и не сделал функционал, просто по тупому сделал фокус на name, показать что это есть.
					$('input[name="name"]').focus();

				} else {
					this.currentView = step;
				}
			},
			asShipping: function () {
				this.billingData.name = this.shippingData.name;
				this.billingData.address = this.shippingData.address;
				$('input[name="billingEmail"]').focus();
			},
			getGeo: function () {
				//var latLong;
				var th = this;
				$.getJSON("http://ipinfo.io", function (ipinfo) {
					console.log(ipinfo);
					th.shippingData.address.zip = ipinfo.postal;
					th.shippingData.address.city = ipinfo.city;
					th.shippingData.address.country = ipinfo.country;
				});
			},
			detectCard: function () {
				this.setCard();
			},
			setCard: function () {
				var th = this;
				$("input#cardNumber").detectCard().on("cardChange", function (e, card) {
					//console.log(card.type);  // => "visa"
					th.cardType = card.type;
				});
			},
			submitForm: function () {
				this.order = true;
			}
		},
		mounted: function () {
			this.setCard();
		}
	});


	/* Buttons */

	$('.js-modal').on('click', function (e) {
		e.preventDefault();
		//var txt2 = $(this).find('p').text();
		var mod = $(this).attr('href');
		var prod = $(this).data('prod');
		;
		var price = $(this).data('price');
		;
		if ($(this).data('txt')) {
			var txt = $(this).data('txt');
		} else {
			var txt = $(this).text();
		}

		var act = $(this).data('act');

		if (prod) {
			$(mod).find('input[name="prod"]').val(prod);
		}
		if (price) {
			$(mod).find('input[name="price"]').val(price);
		}

		$(mod).find('h3').html(txt);
		//$(mod).find('h4').html("");
		$(mod).find('input[name="fransh"]').val(txt);
		$(mod).find('input[name="act"]').val(act);
		//$('#ordermodal input[name="price"]').val("");
		//console.log(txt2);
	});


	$('.js_form').submit(function () {

		var frm = $(this);
		var form = $(this);
		var parent = $(this).attr('id');
		var parent2 = '#' + parent;

		form.validate();

		if (form.valid() == false) {

		} else {

			var msg = $(this).serialize();

			if (typeof yaCounter42368844 !== "undefined") {
				yaCounter42368844.reachGoal('ORDER');
			}

			$.ajax({
				type: 'POST',
				url: 'mail2.php',
				data: msg,
				success: function (data) { //сообщение об удачной отправке
					var obj = jQuery.parseJSON(data);
					console.log(obj);
					$("#modal3 p").html(obj.message);

					if (obj.action == 'bron') {
						var ost = obj.ost - 1;
						if (ost > 0) stor(ost);
					}

					UIkit.modal("#modal3").show();
					$(frm)[0].reset();
				},
				error: function (xhr, str) {
					alert('Возникла ошибка: ' + xhr.responseCode);
				}
			});
		}

	});

});
