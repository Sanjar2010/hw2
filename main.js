const body = document.body
const btn = document.createElement('button')
btn.innerHTML ='отправить'
body.prepend(btn)

const bodyy = document.body
const input = document.createElement('input')
input.setAttribute("placeholder","Ваше имя" )
btn.before(input)



const bady = document.body
const imput = document.createElement('input')
imput.setAttribute("placeholder","ваша фамалия" )
input.before(imput)

const bodyyy = document.body
const text = document.createElement('h4')
text.innerHTML ='о себе:'
btn.before(text)



const radio = document.createElement('input')
radio.setAttribute('type','radio')


const label = document.createElement('label')
label.innerHTML = "Мужчина"

btn.after(label,radio)




const radio2 = document.createElement('input')
radio2.setAttribute('type','radio')


const label2 = document.createElement('label')
label2.innerHTML = "Женщина"

radio.after(label2,radio2)



const checkbox = document.createElement('input')
checkbox.setAttribute('type','checkbox')

const label3 = document.createElement('label')
label3.innerHTML = "меньше 18"

text.after(checkbox,label3)



const checkbox2 = document.createElement('input')
checkbox2.setAttribute('type','checkbox')

const label4 = document.createElement('label')
label4.innerHTML = "от 18 до 35"
label3.after(checkbox2,label4)







const checkbox3 = document.createElement('input')
checkbox3.setAttribute('type','checkbox')

const label5 = document.createElement('label')
label5.innerHTML = "больше 35"
label4.after(checkbox3,label5)



const checkbox4 = document.createElement('input')
checkbox4.setAttribute('type','checkbox')

const label6 = document.createElement('label')
label6.innerHTML = "Женат/а"
label5.after(checkbox4,label6)



