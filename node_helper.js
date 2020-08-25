var NodeHelper = require("node_helper")
var fs = require('fs')

module.exports = NodeHelper.create({
	start: function() {
		this.rawText = fs.readFileSync(__dirname + '/YourTrueHome.txt').toString()
		this.isWindows = (this.rawText.indexOf('\r') == -1) ? false:true	//see if we find a carriage return, if yes, is windows file
		
		//split the complete text into an array of info by day
		this.days = this.rawText.split(this.isWindows ? '\r\n\r\n' : '\n\n')
		console.log("there are " + this.days.length + " entries in file")

		this.bookMap = new Map() //book as a map: {day, [title, wisdom]}
		this.day = ''            //key
		this.title = ''          //value[0]
		this.content = []        //raw wisdom
		this.wisdom = ''         //content as single string, value[1]
		this.value = ''          //[title, wisdom]
		
		//processes day numbers, titles, and content and puts it into a the bookMap map
		//each 'day' of info starts with number, and then title and rest is the text
		for (let dayInfo of this.days){
			this.readIn = dayInfo.split(this.isWindows ? '\r\n' : '\n')
			this.day = this.readIn[0]
			this.title = this.readIn[1]

			//get the text
			for (let i = 2; i < this.readIn.length; i++){
				this.content.push(this.readIn[i])
			}
			this.wisdom = this.content.join(' ')	//merges each line in array to a single string
			this.value = [this.title, this.wisdom]	//array of title and wisdom
			this.bookMap.set(this.day, this.value) 	//pairs a day number to array of title and wisdom and adds them to map
		    	
			//reset the content array for the next day
			this.content = []
		}
	},
socketNotificationReceived: function(notification, payload) {
	switch(notification) {
		case "DO_YOUR_JOB":
			this.sendSocketNotification("I_DID", this.bookMap.get(payload))
			break
		}
	},
})