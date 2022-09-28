

const q1atest = document.getElementById('q1toq2a');
const q1btest = document.getElementById('q1toq2b');
const q1ctest = document.getElementById('q1toq2c');
const q1dtest = document.getElementById('q1toq2d');

const q2atest = document.getElementById('q2toq3a');
const q2btest = document.getElementById('q2toq3b');
const q2ctest = document.getElementById('q2toq3c');
const q2dtest = document.getElementById('q2toq3d');

const q3atest = document.getElementById('q3toq4a');
const q3btest = document.getElementById('q3toq4b');
const q3ctest = document.getElementById('q3toq4c');
const q3dtest = document.getElementById('q3toq4d');

const q4atest = document.getElementById('q4toq5a');
const q4btest = document.getElementById('q4toq5b');
const q4ctest = document.getElementById('q4toq5c');
const q4dtest = document.getElementById('q4toq5d');

const q5atest = document.getElementById('q5toq6a');
const q5btest = document.getElementById('q5toq6b');
const q5ctest = document.getElementById('q5toq6c');
const q5dtest = document.getElementById('q5toq6d');

const q6atest = document.getElementById('q6toq7a');
const q6btest = document.getElementById('q6toq7b');
const q6ctest = document.getElementById('q6toq7c');
const q6dtest = document.getElementById('q6toq7d');

const q7atest = document.getElementById('q7toq8a');
const q7btest = document.getElementById('q7toq8b');
const q7ctest = document.getElementById('q7toq8c');
const q7dtest = document.getElementById('q7toq8d');

const q8atest = document.getElementById('q8toq9a');
const q8btest = document.getElementById('q8toq9b');
const q8ctest = document.getElementById('q8toq9c');
const q8dtest = document.getElementById('q8toq9d');

const q9atest = document.getElementById('q9toq10a');
const q9btest = document.getElementById('q9toq10b');

const q10atest = document.getElementById('q10toq11a');
const q10btest = document.getElementById('q10toq11b');
const q10ctest = document.getElementById('q10toq11c');
const q10dtest = document.getElementById('q10toq11d');

const q11atest = document.getElementById('q11toq12a');
const q11btest = document.getElementById('q11toq12b');
const q11ctest = document.getElementById('q11toq12c');
const q11dtest = document.getElementById('q11toq12d');

const q12atest = document.getElementById('q12toq13a');
const q12btest = document.getElementById('q12toq13b');
const q12ctest = document.getElementById('q12toq13c');
const q12dtest = document.getElementById('q12toq13d');

const q13atest = document.getElementById('q13toq14a');
const q13btest = document.getElementById('q13toq14b');
const q13ctest = document.getElementById('q13toq14c');
const q13dtest = document.getElementById('q13toq14d');

const q14atest = document.getElementById('q14toq15a');
const q14btest = document.getElementById('q14toq15b');
const q14ctest = document.getElementById('q14toq15c');
const q14dtest = document.getElementById('q14toq15d');

const q15atest = document.getElementById('q15toq16a');
const q15btest = document.getElementById('q15toq16b');
const q15ctest = document.getElementById('q15toq16c');
const q15dtest = document.getElementById('q15toq16d');

const q16atest = document.getElementById('q16toq17a');
const q16btest = document.getElementById('q16toq17b');
const q16ctest = document.getElementById('q16toq17c');
const q16dtest = document.getElementById('q16toq17d');

const q17atest = document.getElementById('q17toenda');
const q17btest = document.getElementById('q17toendb');
const q17ctest = document.getElementById('q17toendc');
const q17dtest = document.getElementById('q17toendd');


const start=document.querySelector(".hytest-SA-std_btn");
const q1page = document.querySelector("#hytest-SA-Q0");
const q2page = document.querySelector("#hytest-SA-Q1");
const q3page = document.querySelector("#hytest-SA-Q2");
const q4page = document.querySelector("#hytest-SA-Q3");
const q5page = document.querySelector("#hytest-SA-Q4");
const q6page = document.querySelector("#hytest-SA-Q5");
const q7page = document.querySelector("#hytest-SA-Q6");
const q8page = document.querySelector("#hytest-SA-Q7");
const q9page = document.querySelector("#hytest-SA-Q8");
const q10page = document.querySelector("#hytest-SA-Q9");
const q11page = document.querySelector("#hytest-SA-Q10");
const q12page = document.querySelector("#hytest-SA-Q11");
const q13page = document.querySelector("#hytest-SA-Q12");
const q14page = document.querySelector("#hytest-SA-Q13");
const q15page = document.querySelector("#hytest-SA-Q14");
const q16page = document.querySelector("#hytest-SA-Q15");
const q17page = document.querySelector("#hytest-SA-Q16");

const a1page = document.querySelector(".hytest-SA-qpane");
const startpage = document.querySelector("#hytest-SA-splash");
const nav = document.querySelector("#hytest-SA-nav");

const finish = document.getElementById("hytest-SA-nav_l");
const finishbtn = document.getElementById('hytest-SA-nav_finish');
const ending = document.querySelector('.hytest-SA-preloader');
const result = document.getElementById('hytest-SA-results');


start.addEventListener("click",function(){
    startpage.style.display = "none";
    q1page.style.display = "block";
    a1page.style.display = "block";
});

let anscore=0;
let depscore=0;



/*q1 list*/ 
q1atest.addEventListener('click',function(){
    q1page.style.display="none";
    q2page.style.display="block";
});

q1btest.addEventListener('click',function(){
    q1page.style.display="none";
    q2page.style.display="block";
    depscore+=1;
});

q1ctest.addEventListener('click',function(){
    q1page.style.display="none";
    q2page.style.display="block";
    depscore+=2;
});

q1dtest.addEventListener('click',function(){
    q1page.style.display="none";
    q2page.style.display="block";
    depscore+=3;
});

/*q2 list*/
q2atest.addEventListener('click',function(){
    q2page.style.display="none";
    q3page.style.display="block";
});
q2btest.addEventListener('click',function(){
    q2page.style.display="none";
    q3page.style.display="block";
    depscore+=1;
});
q2ctest.addEventListener('click',function(){
    q2page.style.display="none";
    q3page.style.display="block";
    depscore+=2;
});
q2dtest.addEventListener('click',function(){
    q2page.style.display="none";
    q3page.style.display="block";
    depscore+=3;
});

/*q3 list */

q3atest.addEventListener('click',function(){
    q3page.style.display="none";
    q4page.style.display="block";
});
q3btest.addEventListener('click',function(){
    q3page.style.display="none";
    q4page.style.display="block";
    depscore+=1;
});
q3ctest.addEventListener('click',function(){
    q3page.style.display="none";
    q4page.style.display="block";
    depscore+=2;
});
q3dtest.addEventListener('click',function(){
    q3page.style.display="none";
    q4page.style.display="block";
    depscore+=3;
});

/*q4 list */

q4atest.addEventListener('click',function(){
    q4page.style.display="none";
    q5page.style.display="block";
});

q4btest.addEventListener('click',function(){
    q4page.style.display="none";
    q5page.style.display="block";
    depscore+=1;
});
q4ctest.addEventListener('click',function(){
    q4page.style.display="none";
    q5page.style.display="block";
    depscore+=2;
});
q4dtest.addEventListener('click',function(){
    q4page.style.display="none";
    q5page.style.display="block";
    depscore+=3;
});

/*q5 list */

q5atest.addEventListener('click',function(){
    q5page.style.display="none";
    q6page.style.display="block";
    
});
q5btest.addEventListener('click',function(){
    q5page.style.display="none";
    q6page.style.display="block";
    depscore+=1;
});
q5ctest.addEventListener('click',function(){
    q5page.style.display="none";
    q6page.style.display="block";
    depscore+=2;
});
q5dtest.addEventListener('click',function(){
    q5page.style.display="none";
    q6page.style.display="block";
    depscore+=3;
});

/*q6 list */

q6atest.addEventListener('click',function(){
    q6page.style.display="none";
    q7page.style.display="block";
});
q6btest.addEventListener('click',function(){
    q6page.style.display="none";
    q7page.style.display="block";
    depscore+=1;
});
q6ctest.addEventListener('click',function(){
    q6page.style.display="none";
    q7page.style.display="block";
    depscore+=2;
});
q6dtest.addEventListener('click',function(){
    q6page.style.display="none";
    q7page.style.display="block";
    depscore+=3;
});

/*q7 list */

q7atest.addEventListener('click',function(){
    q7page.style.display="none";
    q8page.style.display="block";
});
q7btest.addEventListener('click',function(){
    q7page.style.display="none";
    q8page.style.display="block";
    depscore+=1;
});
q7ctest.addEventListener('click',function(){
    q7page.style.display="none";
    q8page.style.display="block";
    depscore+=2;
});
q7dtest.addEventListener('click',function(){
    q7page.style.display="none";
    q8page.style.display="block";
    depscore+=3;
});

/*q8 list */
q8atest.addEventListener('click',function(){
    q8page.style.display="none";
    q9page.style.display="block";
    
});
q8btest.addEventListener('click',function(){
    q8page.style.display="none";
    q9page.style.display="block";
});

q8ctest.addEventListener('click',function(){
    q8page.style.display="none";
    q9page.style.display="block";

});

q8dtest.addEventListener('click',function(){
    q8page.style.display="none";
    q9page.style.display="block";
});


/*q9 list */
q9atest.addEventListener('click',function(){
    q9page.style.display="none";
    q10page.style.display="block";
});
q9btest.addEventListener('click',function(){
    q9page.style.display="none";
    q10page.style.display="block";
    
});

/*q10 list */

q10atest.addEventListener('click',function(){
    q10page.style.display="none";
    q11page.style.display="block";
    
});
q10btest.addEventListener('click',function(){
    q10page.style.display="none";
    q11page.style.display="block";
    anscore+=1;
});
q10ctest.addEventListener('click',function(){
    q10page.style.display="none";
    q11page.style.display="block";
    anscore+=2;
});
q10dtest.addEventListener('click',function(){
    q10page.style.display="none";
    q11page.style.display="block";
    anscore+=3;
});

/*q11 list */
q11atest.addEventListener('click',function(){
    q11page.style.display="none";
    q12page.style.display="block";
});
q11btest.addEventListener('click',function(){
    q11page.style.display="none";
    q12page.style.display="block";
    anscore+=1;
});
q11ctest.addEventListener('click',function(){
    q11page.style.display="none";
    q12page.style.display="block";
    anscore+=2;
});
q11dtest.addEventListener('click',function(){
    q11page.style.display="none";
    q12page.style.display="block";
    anscore+=3;
});

/*q12 list */
q12atest.addEventListener('click',function(){
    q12page.style.display="none";
    q13page.style.display="block";
});
q12btest.addEventListener('click',function(){
    q12page.style.display="none";
    q13page.style.display="block";
    anscore+=1;
});
q12ctest.addEventListener('click',function(){
    q12page.style.display="none";
    q13page.style.display="block";
    anscore+=2;
});
q12dtest.addEventListener('click',function(){
    q12page.style.display="none";
    q13page.style.display="block";
    anscore+=3;
});

/*q13 list */
q13atest.addEventListener('click',function(){
    q13page.style.display="none";
    q14page.style.display="block";
});
q13btest.addEventListener('click',function(){
    q13page.style.display="none";
    q14page.style.display="block";
    anscore+=1;
});
q13ctest.addEventListener('click',function(){
    q13page.style.display="none";
    q14page.style.display="block";
    anscore+=2;
});
q13dtest.addEventListener('click',function(){
    q13page.style.display="none";
    q14page.style.display="block";
    anscore+=3;
});
/*q14 list */
q14atest.addEventListener('click',function(){
    q14page.style.display="none";
    q15page.style.display="block";
});
q14btest.addEventListener('click',function(){
    q14page.style.display="none";
    q15page.style.display="block";
    anscore+=1;
});
q14ctest.addEventListener('click',function(){
    q14page.style.display="none";
    q15page.style.display="block";
    anscore+=2;
});
q14dtest.addEventListener('click',function(){
    q14page.style.display="none";
    q15page.style.display="block";
    anscore+=3;
});

/*q15 list */

q15atest.addEventListener('click',function(){
    q15page.style.display="none";
    q16page.style.display="block";
});
q15btest.addEventListener('click',function(){
    q15page.style.display="none";
    q16page.style.display="block";
    anscore+=1;
});
q15ctest.addEventListener('click',function(){
    q15page.style.display="none";
    q16page.style.display="block";
    anscore+=2;
});
q15dtest.addEventListener('click',function(){
    q15page.style.display="none";
    q16page.style.display="block";
    anscore+=3;
});

/*q16 list */
q16atest.addEventListener('click',function(){
    q16page.style.display="none";
    q17page.style.display="block";
});
q16btest.addEventListener('click',function(){
    q16page.style.display="none";
    q17page.style.display="block";
    anscore+=1;
});
q16ctest.addEventListener('click',function(){
    q16page.style.display="none";
    q17page.style.display="block";
    anscore+=2;
});
q16dtest.addEventListener('click',function(){
    q16page.style.display="none";
    q17page.style.display="block";
    anscore+=3;
});

q17atest.addEventListener('click',function(){
    nav.style.display="block";
    finish.style.display="block";
    q17btest.style.display="none";
    q17ctest.style.display="none";
    q17dtest.style.display="none";

});
q17btest.addEventListener('click',function(){
    nav.style.display="block";
    finish.style.display="block";
    q17atest.style.display="none";
    q17ctest.style.display="none";
    q17dtest.style.display="none";

});
q17ctest.addEventListener('click',function(){
    nav.style.display="block";
    finish.style.display="block";
    q17atest.style.display="none";
    q17btest.style.display="none";
    q17dtest.style.display="none";

});
q17dtest.addEventListener('click',function(){
    nav.style.display="block";
    finish.style.display="block";
    q17atest.style.display="none";
    q17btest.style.display="none";
    q17ctest.style.display="none";
});

finishbtn.addEventListener('click',function(){
    ending.style.display="block";
    q17page.style.display="none";
    finish.style.display="none";
    loadfade();
    document.getElementById('tool_self-assessments_44').style.height='1110.8px';
    document.getElementById('hytest-SA-container').style.height='1110.8px';
    document.getElementById('depscore').innerHTML=depscore/2;
    document.getElementById('anscore').innerHTML=anscore/2;
    document.getElementById('depgraph').style.width=((depscore/42)*100)+"%";
    document.getElementById('angraph').style.width=((anscore/42)*100)+"%";
    document.getElementById('Hy-SA-criterion').innerHTML='*Scores are based on the responses given and indicate depressive symptom severity and anxiety symptom severity. Scoring is as follows: Not at all = 0,&nbsp;Several&nbsp;days = 1, More than half the days = 2, Nearly every day = 3.'
    
    if(((depscore/2)>16)&&(depscore/2<=21)){
        document.getElementById('depinfer').innerHTML="Based on your responses&nbsp;to questions 1-8, you are experiencing many symptoms seen in depression but only an experienced health professional can tell for sure.";
        document.getElementById('depcon').innerHTML="You should make an appointment to see your GP over the next few days to a week.";
        
    }
    else if(((depscore/2)>7)&&(depscore/2<=16)){
        document.getElementById('depinfer').innerHTML="Based on your responses to questions 1-8, you are experiencing some symptoms seen in depression but only an experienced health professional can tell for sure.";
        document.getElementById('depcon').innerHTML="You should make an appointment to see your GP over the next few days to a week.";
        
    }

    else if(((depscore/2)>0)&&(depscore/2<=7)){
        document.getElementById('depinfer').innerHTML="Based on your responses to questions 1-8, you're not experiencing many of the symptoms seen in depression..";
        document.getElementById('depcon').innerHTML="However, if you have any concerns about your health or mood, please arrange to speak to your GP.";
        
    }
    if(((anscore/2)>16)&&(anscore/2<=21)){
        document.getElementById('aninfer').innerHTML="Based on your responses to questions 10-16, you are experiencing many symptoms seen in anxiety.&nbsp;This is probably having a big impact on your daily life and you may also be experiencing physical symptoms. Make an appointment with your GP to discuss how you’re feeling. There are talking therapies that can help.";
        
    }
    if(((anscore/2)>12)&&(anscore/2<=21)){
        document.getElementById('aninfer').innerHTML="Based on your responses to questions 10-16, you are experiencing many symptoms seen in anxiety.&nbsp;This is probably having a big impact on your daily life and you may also be experiencing physical symptoms. Make an appointment with your GP to discuss how you’re feeling. There are talking therapies that can help.";
        
    }
    if(((anscore/2)>5)&&(anscore/2<=12)){
        document.getElementById('aninfer').innerHTML="Based on your responses to questions 10-16, you are experiencing some symptoms seen in anxiety. Feeling anxious or worried from time to time is perfectly normal but if it’s starting to affect your daily life, it’s time to take action. Consider seeing your GP if you feel this is affecting your life.";
        
    }
    if(((anscore/2)>0)&&(anscore/2<=5)){
        document.getElementById('aninfer').innerHTML="Based on your responses to questions 10-16, you are experiencing few symptoms seen in anxiety. However if you have any concerns, try out some relaxation methods.";
        
    }
    
    result.style.display="block";
    
 
    
});
















