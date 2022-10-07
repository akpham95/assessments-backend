const postedGoal = []


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => { 
        const fortunes = [  "All will go well with your new project.",
                            "All your hard work will soon pay off." ,
                            "Believe in yourself and others will too.",
                            "Bide your time, for success is near",
                            "The harder you work, the luckier you get." ]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    postGoal: (req, res) => {
        console.log(req.body)
        const { goal } = req.body

        let tomorowsGoal = { goal }
        postedGoal.push(tomorowsGoal)

        let goalToReturn = {...tomorowsGoal}
        res.status(200).send(goalToReturn)
        console.log(postedGoal)
    }

    

}