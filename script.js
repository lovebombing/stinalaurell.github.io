let items = ['You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.', 'The most important person in your life is YOU, so be kind.', 'Cheer up, tomorrow is another chance.', 'Hardships often prepare ordinary people for an extraordinary destiny.', 'Hands on your hips, a smile on your lips, spirit in your heart, we’re ready to start!', 'Embrace the glorious mess that you are.', 'When it rains, look for rainbows. When it’s dark, look for stars.', 'There are so many beautiful reasons to be happy.', 'You are special. Never stop being proud of who you are.', 'No matter how dark this day is, it will undoubtedly give way to a sunnier tomorrow.', 'Life will throw many trials your way, never let them distract you from your goal, you are destined for greatness.', 'With a strong belief in yourself, no obstacle can prevent you from becoming what you truly want to be in this life.', 'I look at you and all I see is an absolutely beautiful person bound for a great and blissful future.', 'Think positive and the sun will forever shine in your skies.', 'Never let your mistakes dull your shine. Everyone makes mistakes. Learn from them and shine even brighter.', 'You are capable of anything.', 'Do not let what you cannot do interfere with what you can do.', 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', 'Don’t be discouraged. It’s often the last key in the bunch that opens the lock.', 'Our greatest glory is not in never falling, but in rising every time we fall.', 'The best is yet to come.', 'For every minute you are angry you lose sixty seconds of happiness.', 'The pain you feel today is the strength you feel tomorrow. For every challenge there is opportunity for growth.', 'Don’t waste a minute not being happy. If one window closes, run to the next window or break down the door.', 'One of the greatest regrets in life is being what others would want you to be, so embrace your true self <3', 'No other love no matter how genuine it is, can fulfill one’s heart better than unconditional self-love.', 'Lighten up on yourself. No one is perfect. Gently accept your humanness.', 'You have been criticising yourself for years, and it has not worked. Try approving of yourself and see what happens.', 'Love is the great miracle cure. Loving ourselves works miracles in our lives.', 'Trust yourself. You know more than you think you do.', 'You can have anything you want if you are willing to give up the belief that you can’t have it.', 'Beauty begins the moment you decided to be yourself.', 'Every single day is a an opportunity to start a positive beginning in your life.', 'Love is universal, no one can be left out.', 'The real you is the most beautiful you.', 'Being alive is one of the most beautiful things of all.', 'We are as beautiful as our thoughts. Make those thoughts count!', 'See yourself the way other people see you and you will be amazed by how beautiful you are.', 'Go be your beautiful, amazing self today!', 'Set peace of mind as your highest goal, and organize your life around it.', 'Give your stress wings and let it fly away.', 'The greatest weapon against stress is our ability to choose one thought over another.', 'You don’t have to control your thoughts. You just have to stop letting them control you.', 'Nothing is permanent in this crazy world — not even our troubles.', 'Once you have accepted your flaws, no one can use them against you.', 'Once you choose hope, anything is possible.', 'In the middle of a difficulty lies opportunity.', 'Let your dreams be bigger than your fears.', 'Find love and company within yourself and you will never spend a day alone.'];


function generateQuote() {
  var txtThought = document.getElementById("txtThought");

  var thought = txtThought.value;

  if ((txtThought.value = thought.includes("stress"))) {
    txtThought.value = "Remember that everything is temporary. You can do this.";
  } else if ((txtThought.value = thought.includes("hate"))) {
    txtThought.value = "Love yourself, you are worth it.";
  } else if ((txtThought.value = thought.includes("body"))) {
    txtThought.value =
      "Your body takes you through all the challenges life throws your way - What a heck of a thing!";
  } else if ((txtThought.value = thought.includes("sad"))) {
    txtThought.value = "Cheer up, buttercup. Storms don’t last forever.";
  } else if ((txtThought.value = thought.includes("school"))) {
    txtThought.value =
      "You’re worth has nothing to do with your grades, you are worthy no matter what.";
  } else if ((txtThought.value = thought.includes("depressed"))) {
    txtThought.value =
      "You are allowed to feel messed up. It doesn’t mean you’re defective — it just means you’re human";
  } else if ((txtThought.value = thought.includes("ugly"))) {
    txtThought.value =
      "Beauty is being the best possible version of yourself on the inside and out. You are beautiful.";
  } else if ((txtThought.value = thought.includes("lonely"))) {
    txtThought.value = "You are not alone <3";
  } else if ((txtThought.value = thought.includes("alone"))) {
    txtThought.value =
      "It’s easy to stand with the crowd it takes courage to stand alone";
  } else if ((txtThought.value = thought.includes("unhappy"))) {
    txtThought.value = "Happiness comes in waves. It will find you again.";
  } else if ((txtThought.value = thought.includes("negative"))) {
    txtThought.value =
      "Every day may not be good. But there is something good in every day.";
  } else if ((txtThought.value = thought.includes("bad"))) {
    txtThought.value =
      "Laugh at the confusion, smile through the tears, and keep reminding yourself that everything happens for a reason.";
  } else if ((txtThought.value = thought.includes("cry"))) {
    txtThought.value =
      "The tears you are currently shedding will not last forever. Better days are coming your way. Just hang on a little.";
  } else if ((txtThought.value = thought.includes("shit"))) {
    txtThought.value = "You are amazing, just the way you are.";
  } else if ((txtThought.value = thought.includes("hateful"))) {
    txtThought.value =
      "You carry so much love in your heart. Give some to yourself.";
  } else if ((txtThought.value = thought.includes("boring"))) {
    txtThought.value = "When one door of happiness closes, another opens.";
  }  else if ((txtThought.value = thought.includes("fat"))) {
    txtThought.value = "Don’t value your body over your being.";
  } else if ((txtThought.value = thought.includes("hard"))) {
    txtThought.value =
      "Although life may not be easy now, in the end it’s all worth it. Everything will get better in time. So smile!";
  } else if ((txtThought.value = thought.includes("nothing"))) {
    txtThought.value = "You are worth everything. Never forget that";
  } else if ((txtThought.value = thought.includes("nowhere"))) {
    txtThought.value = "You can fall, but you can rise also.";
  } else if ((txtThought.value = thought.includes("never"))) {
    txtThought.value = "When you make a mistake, learn from it, pick yourself up and move on.";
  } else if ((txtThought.value = thought.includes("weight"))) {
    txtThought.value = "I don’t think you understand how beautiful you are.";
  } else if ((txtThought.value = thought.includes("hate"))) {
    txtThought.value = "Hate is a thing, a feeling, that can only exist where there is no understanding.";
  } else if ((txtThought.value = thought.includes("afraid"))) {
    txtThought.value = "Believe you can and you’re halfway there.";
  } else if ((txtThought.value = thought.includes("regret"))) {
    txtThought.value = "Never regret. If it's good, it's wonderful. If it's bad, it's experience.";
  } else if ((txtThought.value = thought.includes("panic"))) {
    txtThought.value = "Take a deep breath. It will all get better.";
  } else if ((txtThought.value = thought.includes("health"))) {
    txtThought.value = "Take care of yourself. You are important <3";
  } else if ((txtThought.value = thought.includes("loser"))) {
    txtThought.value = "When you hit a wall – of your own imagined limitations – just kick it in.";
  } else if ((txtThought.value = thought.includes("frustrated"))) {
    txtThought.value = "The pain passes, but the beauty remains.";
  } else if ((txtThought.value = thought.includes("lost"))) {
    txtThought.value = ".";
  } else if ((txtThought.value = thought.includes("failure"))) {
    txtThought.value = "You can’t make a life without making mistakes. Relax and learn something.";
  } else if ((txtThought.value = thought.includes("helpless"))) {
    txtThought.value = "If you can’t change it.. change the way you think about it.";
  } else if ((txtThought.value = thought.includes("confused"))) {
    txtThought.value = "";
  } else if ((txtThought.value = thought.includes("insecure"))) {
    txtThought.value = "Always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think.";
  } else if ((txtThought.value = thought.includes("suck"))) {
    txtThought.value = "You are incredible. Never forget that.";
  } else if ((txtThought.value = thought.includes("scared"))) {
    txtThought.value = "Life’s a Struggle but You Can Win.";
  } else if ((txtThought.value = thought.includes("angry"))) {
    txtThought.value = "Don’t let yesterday use up too much of today.";
  } else if ((txtThought.value = thought.includes("anxious"))) {
    txtThought.value = "Learn to relax. Your body is precious, as it houses your mind and spirit. Inner peace begins with a relaxed body.";
  } else if ((txtThought.value = thought.includes("bitter"))) {
    txtThought.value = "Don’t dwell on what went wrong. Focus on what to do next and moving forward towards finding the answer.";
  } else if ((txtThought.value = thought.includes("busy"))) {
    txtThought.value = "";
  } else if ((txtThought.value = thought.includes("crazy"))) {
    txtThought.value = "Learning to ignore things is one of the great paths to inner peace.";
  } else if ((txtThought.value = thought.includes("embarrassed"))) {
    txtThought.value = "Do not be embarrassed by your failures, learn from them and start again.";
  } else if ((txtThought.value = thought.includes("lazy"))) {
    txtThought.value = "Don’t underestimate the value of Doing Nothing";
  } else if ((txtThought.value = thought.includes("mind"))) {
    txtThought.value = "Whenever in doubt, turn off your mind, relax, and float downstream.";
  } else if ((txtThought.value = thought.includes("mistake"))) {
    txtThought.value = "Forgive yourself for your faults and move on. Be thankful for the experience.";
  } else if ((txtThought.value = thought.includes("question"))) {
    txtThought.value = "Your mind will answer most questions if you learn to relax and wait for the answer.";
  } else if ((txtThought.value = thought.includes("skinny"))) {
    txtThought.value = "Speak to your body in a loving way. It's the only one you've got, it's your home, and it deserves your respect.";
  }
  
  else {
    txtThought.value = items[Math.floor(Math.random() * items.length)];
;
  }
}



const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", onInput, false);
}

function onInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

function playAnimation() {
  document.getElementById("bm").innerHTML = "";

  let animation = lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
    
  });
  
  
}

function clickMe(e){
                e.clicked = (e.clicked || 0) + 1;

                if (e.clicked === 5) { document.getElementById('info').style.display = 'block';}
            }



  function showDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

