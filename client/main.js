const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")


const goalContainer = document.querySelector("#goal-info")
const goalForm = document.querySelector("#goal-form")

const postGoal = body => axios.post("http://localhost:4000/api/goal", body).then( res => {
    createGoalCard(res.data)
})

function submitGoalHandler(e) {
    e.preventDefault()

    let goal = document.querySelector("#goal-input")

    let bodyObj = {
        goal: goal.value
    }

    postGoal(bodyObj)

    goal.value = ''
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

function createGoalCard(data) {
    goalContainer.innerHTML = ''
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class="goal">Tomorrow's Goal: ${data.goal}</p>`
    goalContainer.appendChild(goalCard)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

goalForm.addEventListener('submit', submitGoalHandler)