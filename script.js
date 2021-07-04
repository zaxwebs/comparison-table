const table = () => {
	return {
		currentPlan: "Plan A",
		plans: {
			"Plan A": {
				price: {
					Monthly: 19.99,
					Annual: 199.99,
				},
				description: "For small businesses.",
			},
			"Plan B": {
				price: {
					Monthly: 29.99,
					Annual: 299.99,
				},
				description: "For medium businesses.",
			},
			"Plan C": {
				price: {
					Monthly: 49.99,
					Annual: 499.99,
				},
				description: "For large businesses.",
			},
		},
		currentTerm: "Monthly",
		terms: {
			Monthly: {
				label: "User / Month",
			},
			Annual: {
				label: "User / Year",
			},
		},
		features: {
			"Feature A": [true, true, true],
			"Feature B": [true, true, true],
			"Feature C": [false, true, true],
			"Feature D": [false, false, true],
			"Feature X": ["Bronze", "Silver", "Gold"],
			"Feature Y": [false, false, true],
		},
		planClass(plan) {
			return this.currentPlan == plan ? "active-plan" : "inactive-plan"
		},
		termClass(term) {
			return this.currentTerm == term ? "active-term" : "inactive-term"
		},
		switchPlan(plan) {
			this.currentPlan = plan
		},
		switchTerm(term) {
			this.currentTerm = term
		},
		parseValue(value) {
			if (value === true) {
				return '<i class="fas fa-check"></i>'
			} else if (value === false) {
				return '<i class="fas fa-times"></i>'
			} else {
				return value
			}
		},
		calculatePrice(plan) {
			return this.plans[plan].price[this.currentTerm].toFixed(2)
		},
	}
}
