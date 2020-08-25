Module.register("MMM-DailyBuddhismWisdom", {
	defaults: {
		show_page: true,
		font_size: "small",
		font_weight: "bold",
		text_align: "left",
		line_height: "1",
	},
	today: 0,
	start: function () {
	},
	getDom: function() {
		let element = document.createElement("div")
		element.className = "myContent"
		element.style.fontSize = this.config.font_size
		element.style.fontWeight = this.config.font_weight
		element.style.textAlign = this.config.text_align
		element.style.lineHeight = this.config.line_height
		
		if (this.today > 0)
			if (this.config.show_page)
				element.innerHTML = "Day: " + this.today + " - " + this.saveinfo[0] + "<br>" + this.saveinfo[1]
		return element
	},
	notificationReceived: function(notification, payload, sender) {
		switch(notification){
			case "DOM_OBJECTS_CREATED":
				let timer = setInterval(()=>{
					newday = moment().format('DDDD').toString()
					//only ask for info once a day
					if (newday != this.today){
						this.today = newday
						Log.log("asking for info for day: " + this.today)
						this.sendSocketNotification("DO_YOUR_JOB", this.today)
					}
				}, 1000)
				break
		}
	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification){
			case "I_DID":
				// save the address of the payload
				this.saveinfo = payload
				// tell MM we have new content to display
				this.updateDom(200)
				break
		}
	},
});

