var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
	start: function() {
		var fs = require("fs")
		var text = fs.readFileSync("./YourTrueHome.txt")
		
	},
socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "DO_YOUR_JOB":
        this.sendSocketNotification("I_DID", (this.countDown - payload))
        break
    }
  },
})