Module.register("MMM-DailyBuddhismWisdom", {
	defaults: {
		foo: "I'm alive!"
	},
	start: function () {
		this.count = 0
		var timer = setInterval(()=>{
			this.updateDom()
			this.count++
		}, 1000)
	},
	getDom: function() {
		var element = document.createElement("div")
		element.className = "myContent"

		var today = new Date()
		today = Math.ceil((today - new Date(today.getFullYear(),0,1)) / 86400000)
		var title = "title"
		var quote = "quote"
		switch(today){
		 case 1:
		  title = "Your True Home"
		  quote = "YOUR TRUE HOME is in the here and the now. It is not limited by time, space, nationality, or race. Your true home is not an abstract idea; it is something you can touch and live in every moment. With mindfulness and concentration, the energies of the Buddha, you can find your true home in the full relaxation of your mind and body in the present moment."
		  break
		 case 232:
		  title = "Touch the Earth"
		  quote = "WALKING IS A FORM of touching the earth. We touch the earth with our feet, and we heal the earth, we heal ourselves, and we heal humankind. Whenever you have an extra five, ten, or fifteen minutes, enjoy walking. With every step it’s possible to bring healing and nourishment to our body and to our mind. Every step taken in mindfulness and freedom can help us heal and transform, and the world will be healed and transformed together with us."
		  break
		 case 233:
		  title = "The Sun Always Shines"
		  quote = "WHEN IT IS raining, we think that there is no sunshine. But if we fly high in an airplane and go through the clouds, we rediscover the sunshine again. We see that the sunshine is always there. In a time of anger or despair, our love is also still there. Our capacity to communicate, to forgive, to be compassionate is still there. You have to believe this. We are more than our anger; we are more than our suffering. We must recognize that we do have within us the capacity to love, to understand, to be compassionate. If you know this, then when it rains you won’t be desperate. You know that the rain is there, but the sunshine is still there somewhere. Soon the rain will stop, and the sun will shine again. Have hope. If you can remind yourself that the positive elements are still present within you and the other person, you will know that it is possible to break through, so that the best things in both of you can come up and manifest again."
		  break
		 case 234:
		  title = "The Foundation of Change"
		  quote = "THE PRACTICE OF the Dharma cannot be individual anymore. It should be a collective practice. Teachers should practice with other teachers and students; psychotherapists should practice with their clients and other therapists. Filmmakers should make films that inspire awakening. Journalists should write articles that help people to wake up. Everyone has to do the work of promoting awakening. Awakening is the foundation of every kind of change."
		  break
		 case 235:
		  title = "Nothing Is Created or Lost"
		  quote = "IF WE LOOK deeply into the nature of reality, we will see that nothing is created or lost. As the Buddhist text called the Prajnaparamita says, there is neither birth nor death. Birth is a concept, death is too, and neither of these concepts is applicable to reality. We must make the effort to look into this truth deeply to confirm it for ourselves."
		  break
		}
		element.innerHTML = "Day: " + today + " - " + title + "<br />" + quote
		element.style.fontSize = "medium"
		element.style.textAlign = "left"
		element.style.lineHeight = "1"

		//element.innerHTML = "Hello, World! " + this.config.foo
		/*
		var subElement = document.createElement("p")
		subElement.innerHTML = "Count: " + this.count
		subElement.id = "COUNT"
		element.appendChild(subElement)
		*/
		return element
	},
	notificationReceived: function() {},
	socketNotificationReceived: function() {},
});

