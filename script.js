
let days = document.querySelector('.timer-day__count')
let hours = document.querySelector('.timer-hours__count')
let minutes = document.querySelector('.timer-minutes__count')
let seconds = document.querySelector('.timer-seconds__count')

const countDown = () => {
    const now = new Date() //текущая дата
    const futureYear = now.getFullYear() + 1 // Год следующего года
    const futureDate = `1 Jan ${futureYear}` // Обновленная дата с будущим годом

    const date = new Date(futureDate)
    let diff = date - now

    days.innerHTML = timeCorrection(`${Math.round(diff / (1000 * 60 * 60 * 24))}`)
    hours.innerHTML = timeCorrection(`${Math.round(diff / (1000 * 60 * 60)) % 24}`)
    minutes.innerHTML = timeCorrection(`${Math.round(diff / (1000 * 60)) % 60}`)
    seconds.innerHTML = timeCorrection(`${Math.round(diff / 1000) % 60}`)
}

function timeCorrection(time) {
    return time < 10 ? `0${time}` : time
}

countDown()
setInterval(countDown, 1000)






