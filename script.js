const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "The harder I work, the luckier I get. - Gary Player",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "What seems to us as bitter trials are often blessings in disguise. - Oscar Wilde",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I failed my way to success. - Thomas Edison",
    "The best revenge is massive success. - Frank Sinatra",
    "I never dreamed about success, I worked for it. - Estee Lauder",
    "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James",
    "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
    "Do not be embarrassed by your failures, learn from them and start again. - Richard Branson",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "If you're offered a seat on a rocket ship, don't ask what seat! Just get on. - Sheryl Sandberg",
    "The question isn't who is going to let me; it's who is going to stop me. - Ayn Rand",
    "You can't build a reputation on what you are going to do. - Henry Ford",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Don't wish it were easier, wish you were better. - Jim Rohn",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Dream big and dare to fail. - Norman Vaughan",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
    "There are no limits to what you can accomplish, except the limits you place on your own thinking. - Brian Tracy",
    "You can't go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis",
    "Success is getting what you want, happiness is wanting what you get. - W. P. Kinsella",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "Great things never come from comfort zones. - Unknown",
    "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. - Orison Swett Marden",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Don't limit your challenges. Challenge your limits. - Unknown",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "You don't need to be perfect to inspire others. Let people get inspired by how you deal with your imperfections. - Unknown"
];

var arr=[];

var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var screen = document.querySelector("#screen")
var screentext = document.querySelector("#text")
var lastquote = null;

var randomQuote = null;
 btn1.addEventListener('click',function(){
   
    
    var randomQuote = Math.floor(Math.random()*quotes.length)
       
        lastquote = quotes[randomQuote]
        screentext.innerHTML = quotes[randomQuote]
        arr.push(randomQuote)
       
        
      
 })


         
 btn2.addEventListener('click',function(){
  screentext.innerHTML = quotes[arr[arr.length-2]]
 
})

var nInput = document.createElement('input')
nInput.type = 'text';
nInput.style.width = '800px';
nInput.style.height = '50px';
nInput.style.fontSize = '18px';
nInput.placeholder = 'Type here...';
nInput.style.display = 'none';  

var btn4 = document.createElement("button")
 btn4.style.backgroundColor ="rgb(36, 160, 236)"
 btn4.style.padding = "10px 40px"
 btn4.style.color = "white"
 btn4.innerHTML = "SAVE"
 btn4.style.display = 'none';

 screen.appendChild(nInput);
screen.appendChild(btn4); 

btn3.addEventListener('click',function(){
    screentext.style.display = "none"; 
    nInput.style.display = "block";
    btn4.style.display = "block";
    btn4.innerHTML = "SAVE";
    nInput.placeholder = "Write Your Quote Here"
    nInput.value = ' '

    btn1.addEventListener('click', function() {
        if (nInput.value.trim() === '') {
            alert('Please enter a value before proceeding.');
        } else {
            
        }
    });

    btn2.addEventListener('click', function() {
        if (nInput.value.trim() === '') {
            alert('Please enter a value before proceeding.');
        } else {
           
        }
    });
    
    
    
})


btn4.addEventListener("click",function(){
    var enteredValue = nInput.value
    console.log(enteredValue)
    btn4.innerHTML = "REQUEST SENT"

    setTimeout(() => {
        screentext.innerHTML= enteredValue
        screentext.style.display = "block"; 
        nInput.style.display ='none'
        btn4.style.display = 'none'
    }, 1000);
  
})
